import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../../data/nav.js";
import { cn } from "../../lib/utils.js";
import NavDropdown from "./NavDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import HeaderTopPageDownTab from "./HeaderTopPageDownTab.jsx";
import { getVisitCount, formatVisitCount } from "../../lib/visitCounter.js";
import logoImg from "../../../telecom Webpage/assets/images/logo/pf-logo-v2.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // "^0001"-style badge — a real cookie-backed visit count instead of a
  // hardcoded number. Starts at "^0001" during server render / before the
  // cookie is read, then updates once on mount.
  const [visitBadge, setVisitBadge] = useState("^0001");
  useEffect(() => {
    setVisitBadge(formatVisitCount(getVisitCount()));
  }, []);

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
  const HOVER_NAV_LABELS = new Set(["Home", "Email", "Telecom", "Video", "Help"]);

  // Desktop nav split into two blocks of 3 (see JSX below) — first half /
  // second half of the 6-item nav array.
  const navLeft = nav.slice(0, 3);
  const navRight = nav.slice(3);

  function renderNavItem(item) {
    if (item.children) {
      return (
        <NavDropdown item={item} hoverNavigate={HOVER_NAV_LABELS.has(item.label)} />
      );
    }
    return (
      <NavLink
        to={item.href}
        onMouseEnter={
          HOVER_NAV_LABELS.has(item.label) ? () => navigate(item.href) : undefined
        }
        className={({ isActive }) =>
          `rounded-md px-3 py-1.5 text-[15px] font-medium transition-colors hover:text-brand ${
            isActive ? "bg-gray-100 text-brand" : "text-ink"
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
          <span className="flex shrink-0 items-center gap-1.5 font-semibold text-ink transition-[font-weight] duration-200 hover:font-extrabold" style={{ fontSize: "19px", letterSpacing: "0.04em" }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="4" fill="#16a34a" />
              <path d="M7 12.5l3 3 7-7.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            {visitBadge}
          </span>
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
          <Link
            to="/login"
            aria-label="Sign in"
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
              <circle cx="12" cy="8" r="3.6" />
              <path d="M5 20c1.4-3.6 4.2-5.4 7-5.4S18.6 16.4 20 20" />
            </svg>
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
              <div className="flex items-center gap-x-[120px] sm:gap-x-[132px]">
                <ul className="-ml-4 flex items-center gap-4">
                  {navLeft.map((item) => (
                    <li key={item.label}>{renderNavItem(item)}</li>
                  ))}
                </ul>
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
