import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../../data/nav.js";
import NavDropdown from "./NavDropdown.jsx";
import { formatVisitCount } from "../../lib/visitCounter.js";
import { readCookie, writeCookie } from "../../lib/cookies.js";
import logoImg from "../../assets/images/pf-logo-v2.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  // "^0001"-style badge — no longer a real visit count, just a fun
  // gimmick: it ticks up by one on every page load/refresh. The count is
  // saved to a cookie so it carries over across reloads/visits too.
  const [visitCount, setVisitCount] = useState(1);
  useEffect(() => {
    const saved = Number(readCookie("pf_hover_count"));
    const next = Number.isFinite(saved) && saved > 0 ? saved + 1 : 1;
    setVisitCount(next);
    writeCookie("pf_hover_count", String(next));
  }, []);
  const visitBadge = formatVisitCount(visitCount);

  // 6-menu interaction mode — dropdowns open on click only, and
  // Home/Video/Email/Telecom/Help/About do NOT navigate on hover.
  // The PhishCounter badge used to toggle this to a mouse-over mode; that
  // switch is disabled for now, so this always stays click-required.
  const navHoverMode = false;

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

  // The 6 primary tabs that would hover-navigate / hover-open if
  // navHoverMode were ever true — disabled for now (see above).
  const HOVER_NAV_LABELS = new Set(["Home", "Email", "Telecom", "Video", "Help", "About"]);
  const hoverNavActive = (label) => navHoverMode && HOVER_NAV_LABELS.has(label);

  // Email's plan sub-pages live under /join/* (Plug-In Free, Plug-In Pro,
  // Domain, Marketing + their quote/thanks flows) rather than under /email,
  // so react-router's default NavLink isActive (prefix match on item.href)
  // doesn't catch them — the "Email" tab would fall back to its plain
  // (unhighlighted) grey-ink state instead of staying on its active
  // grey-pill/red-text look while you're on one of those sub-pages.
  const EMAIL_ACTIVE_PREFIXES = ["/join/pro", "/join/domain", "/join/email-"];
  function isNavItemActive(item, isDefaultActive) {
    // FAQ lives at /about/faq but isn't really "About" content — it's
    // reached from FAQ buttons all over the site (Help, Email, Telecom,
    // footer, …), so the About tab shouldn't light up while there.
    if (item.label === "About" && location.pathname.startsWith("/about/faq")) {
      return false;
    }
    if (isDefaultActive) return true;
    if (item.label === "Email") {
      return EMAIL_ACTIVE_PREFIXES.some((p) => location.pathname.startsWith(p));
    }
    return false;
  }

  function renderNavItem(item) {
    // About now navigates straight to /about on hover (which lists all of
    // Press/Team/Intellectual Property/Blog/etc. on the page itself), so
    // the old hover dropdown listing those same children is redundant —
    // render it as a plain nav link instead of a NavDropdown.
    if (item.children && item.label !== "About") {
      return (
        <NavDropdown
          item={item}
          hoverOpen={navHoverMode}
          hoverNavigate={hoverNavActive(item.label)}
        />
      );
    }
    return (
      <NavLink
        to={item.href}
        onMouseEnter={
          hoverNavActive(item.label)
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

  return (
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
          className="h-auto w-[190px] max-w-full transition-transform duration-200 hover:scale-[1.2] sm:w-[220px]"
        />
      </NavLink>

      {/* ^0001 badge + Globe (country/region) + Login — pinned to the far right edge on desktop */}
      <div className="hidden lg:absolute lg:right-10 lg:top-1/2 lg:flex lg:-translate-y-1/2 lg:items-center lg:gap-4">
        <HeaderActions
          visitBadge={visitBadge}
          countryName={countryName}
          countryHover={countryHover}
          setCountryHover={setCountryHover}
        />
      </div>

      {/* ---------- Mobile / tablet: 2-row header ---------- */}
      <div className="lg:hidden">
        {/* Row 1 — logo (left) + PhishCounter / globe / login (right) */}
        <div className="mx-auto flex w-[90%] items-center justify-between gap-4 pt-4 pb-2">
          <NavLink
            to="/"
            className="flex shrink-0 items-center"
            aria-label="PhishFlagger home"
          >
            <img
              src={logoImg}
              alt="PhishFlagger"
              className="h-auto w-[170px] max-w-full sm:w-[200px]"
            />
          </NavLink>
          <div className="flex items-center gap-3">
            <HeaderActions
              visitBadge={visitBadge}
              countryName={countryName}
              countryHover={countryHover}
              setCountryHover={setCountryHover}
            />
          </div>
        </div>

        {/* Row 2 — the 6 primary links; wrap to a second line when too narrow */}
        <nav aria-label="Primary" className="border-t border-gray-100">
          <ul className="mx-auto flex w-[90%] flex-wrap items-center justify-center gap-x-3 gap-y-0.5 py-2">
            {nav.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `rounded-md px-2 py-1 text-[14px] font-medium transition-colors hover:text-brand ${
                      isNavItemActive(item, isActive) ? "text-brand" : "text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ---------- Desktop: centered single row of the 6 tabs ---------- */}
      <div className="mx-auto hidden min-h-[88px] w-[80%] items-center justify-center gap-9 py-5 lg:flex">
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4">
            {nav.map((item) => (
              <li key={item.label}>{renderNavItem(item)}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// The right-side cluster (PhishCounter badge, country globe, sign-in) —
// shared by the desktop absolute-positioned bar and the mobile row-1 bar.
function HeaderActions({
  visitBadge,
  countryName,
  countryHover,
  setCountryHover,
}) {
  return (
    <>
      <div
        className="flex shrink-0 items-center gap-1.5 font-normal text-ink"
        style={{ fontSize: "19px", letterSpacing: "0.04em" }}
        aria-label="PhishCounter"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#16a34a" />
          <path d="M7 12.5l3 3 7-7.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        {visitBadge}
      </div>
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
    </>
  );
}
