import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../../data/nav.js";
import { cn } from "../../lib/utils.js";
import NavDropdown from "./NavDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import HeaderTopPageDownTab from "./HeaderTopPageDownTab.jsx";
import { formatVisitCount } from "../../lib/visitCounter.js";
import { readCookie, writeCookie } from "../../lib/cookies.js";
import logoImg from "../../../telecom Webpage/assets/images/logo/pf-logo-v2.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // "^0001"-style badge — no longer a real visit count, just a fun
  // gimmick: it ticks up by one each time you hover over it. The count is
  // saved to a cookie so it carries over across reloads/visits too.
  const [visitCount, setVisitCount] = useState(1);
  useEffect(() => {
    const saved = Number(readCookie("pf_hover_count"));
    if (Number.isFinite(saved) && saved > 0) setVisitCount(saved);
  }, []);
  function bumpVisitCount() {
    setVisitCount((n) => {
      const next = n + 1;
      writeCookie("pf_hover_count", String(next));
      return next;
    });
  }
  const visitBadge = formatVisitCount(visitCount);

  // Country badge — shows the country picked on /country, read from a
  // cookie (set in CountrySelect.jsx) so it's remembered across visits.
  const [countryName, setCountryName] = useState(null);
  const [countryHover, setCountryHover] = useState(false);
  useEffect(() => {
    setCountryName(readCookie("pf_country"));
  }, [location.pathname]);

  // Publish the header's real rendered height as a CSS variable so pages can
  // set scroll-margin-top to exactly this value (via scroll-mt-[var(--header-h)]).
  // Measuring live — rather than hardcoding a px guess — keeps "page down"
  // landing pane tops flush under the header even if the header's height
  // changes (breakpoint, copy change, logo swap, etc.).
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    };
    setVar();
    const observer = new ResizeObserver(setVar);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "Home", "Email", and "Telecom" navigate on mouse-over, like the dropdown
  // menus that already open on hover — no click required.
  const HOVER_NAV_LABELS = new Set(["Home", "Email", "Telecom", "Video", "Help", "About"]);

  // Email's plan sub-pages live under /join/* (Plug-In Free, Plug-In Pro,
  // Domain, Marketing + their quote/thanks flows) rather than under /email,
  // so react-router's default NavLink isActive (prefix match on item.href)
  // doesn't catch them — the "Email" tab would fall back to its plain
  // (unhighlighted) grey-ink state instead of staying on its active
  // grey-pill/red-text look while you're on one of those sub-pages.
  const EMAIL_ACTIVE_PREFIXES = ["/join/pro", "/join/domain", "/join/email-"];
  function isNavItemActive(item, isDefaultActive) {
    if (isDefaultActive) return true;
    if (item.label === "Email") {
      return EMAIL_ACTIVE_PREFIXES.some((p) => location.pathname.startsWith(p));
    }
    return false;
  }

  // Desktop nav split into two blocks of 3 (see JSX below) — first half /
  // second half of the 6-item nav array.
  const navLeft = nav.slice(0, 3);
  const navRight = nav.slice(3);

  function renderNavItem(item) {
    // About now navigates straight to /about on hover (which lists all of
    // Press/Team/Intellectual Property/Blog/etc. on the page itself), so
    // the old hover dropdown listing those same children is redundant —
    // render it as a plain nav link instead of a NavDropdown.
    if (item.children && item.label !== "About") {
      return (
        <NavDropdown item={item} hoverNavigate={HOVER_NAV_LABELS.has(item.label)} />
      );
    }
    return (
      <NavLink
        to={item.href}
        onMouseEnter={
          HOVER_NAV_LABELS.has(item.label)
            ? () => {
                // Guard against re-navigating on every re-entry (see
                // NavDropdown's handleEnter for why this matters).
                // replace: true — a hover shouldn't count as a real
                // navigation step. Without it, every mouse-enter across the
                // nav bar pushes a new history entry, so CloseButton's "go
                // back to where this was opened from" (used by the 4 Email
                // plan pages) can land on a junk hover-entry instead of the
                // actual originating page/scroll position.
                if (location.pathname !== item.href) navigate(item.href, { replace: true });
              }
            : undefined
        }
        className={({ isActive }) =>
          `rounded-md px-3 py-1.5 text-[15px] font-medium transition-colors hover:text-brand ${
            isNavItemActive(item, isActive) ? "bg-gray-100 text-brand" : "text-ink"
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll while overlay is open
  useEffect(() => {
    document.body.classList.toggle("is-menu-open", mobileOpen);
    return () => document.body.classList.remove("is-menu-open");
  }, [mobileOpen]);

  return (
    <>
      <header ref={headerRef} className="relative z-40 bg-white">
        {/* Logo — pinned to the far left edge of the page on desktop */}
        <NavLink
          to="/"
          className="hidden lg:absolute lg:left-10 lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:items-center"
          aria-label="PhishFlagger home"
        >
          <img
            src={logoImg}
            alt="PhishFlagger"
            className="h-auto w-[190px] transition-transform duration-200 hover:scale-[1.2] sm:w-[220px]"
          />
        </NavLink>

        {/* ^0001 badge + Globe (country/region) + Login — pinned to the far right edge on desktop */}
        <div className="hidden lg:absolute lg:right-10 lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:items-center lg:gap-4">
          <span
            className="group relative flex shrink-0 cursor-default items-center gap-1.5 font-normal text-ink transition-colors duration-200 hover:text-brand"
            style={{ fontSize: "19px", letterSpacing: "0.04em" }}
            onMouseEnter={bumpVisitCount}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#16a34a" />
              <path d="M7 12.5l3 3 7-7.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            {visitBadge}
            <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-[#2b2b2b] px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100">
              PhishCounter
            </span>
          </span>
          <div
            className="relative flex"
            onMouseEnter={() => setCountryHover(true)}
            onMouseLeave={() => setCountryHover(false)}
          >
            <Link
              to="/country"
              aria-label="Choose your country"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-gray-100 hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
              </svg>
            </Link>
            {countryHover && (
              <span className="absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-[#2b2b2b] px-3 py-1.5 text-[12px] font-semibold text-white shadow-md">
                {countryName || "Select your country"}
              </span>
            )}
          </div>
          <Link
            to="/login"
            aria-label="Sign in"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-gray-100 hover:text-brand"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <circle cx="12" cy="8" r="3.6" />
              <path d="M5 20c1.4-3.6 4.2-5.4 7-5.4S18.6 16.4 20 20" />
            </svg>
            <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md bg-[#2b2b2b] px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100">
              Sign-In
            </span>
          </Link>
        </div>

        <div className="mx-auto flex min-h-[88px] w-[80%] items-center justify-between gap-7 py-5 lg:justify-center lg:gap-9">
          {/* Logo (mobile/tablet) */}
          <NavLink
            to="/"
            className="flex shrink-0 items-center lg:hidden"
            aria-label="PhishFlagger home"
          >
            <img
              src={logoImg}
              alt="PhishFlagger"
              className="h-auto w-[190px] sm:w-[220px]"
            />
          </NavLink>

          {/* Desktop nav + badge — kept tight together */}
          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label="Primary">
              {/* Split into two blocks of 3 with a gap between them the
                  width of the header-top page-down tab, left block nudged
                  left and right block nudged right. */}
              <div className="flex items-center">
                <ul className="-ml-4 flex items-center gap-4">
                  {navLeft.map((item) => (
                    <li key={item.label}>{renderNavItem(item)}</li>
                  ))}
                </ul>
                {/* Exact anchor for the header-top page-down tab below —
                    its own center is always equidistant from both nav
                    blocks (A=B), regardless of how wide "About ⌄" etc.
                    make each side. */}
                <div id="nav-gap-anchor" className="w-[120px] shrink-0 sm:w-[132px]" aria-hidden />
                <ul className="-mr-4 flex items-center gap-4">
                  {navRight.map((item) => (
                    <li key={item.label}>{renderNavItem(item)}</li>
                  ))}
                </ul>
              </div>
            </nav>

          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded bg-ink transition-transform duration-200",
                mobileOpen && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded bg-ink transition-opacity duration-200",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded bg-ink transition-transform duration-200",
                mobileOpen && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>

        <HeaderTopPageDownTab />
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
