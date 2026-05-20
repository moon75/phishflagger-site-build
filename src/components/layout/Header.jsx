import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav } from "../../data/nav.js";
import { cn } from "../../lib/utils.js";
import NavDropdown from "./NavDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex min-h-[88px] items-center justify-between gap-7 px-6 py-5 lg:justify-center lg:gap-9">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex shrink-0 items-center gap-2"
            aria-label="PhishFlagger home"
          >
            <img
              src="/assets/images/logo-mark.png"
              alt=""
              className="h-11 w-auto"
            />
            <img
              src="/assets/images/logo-wordmark.png"
              alt="PhishFlagger"
              className="h-7 w-auto"
            />
          </NavLink>

          {/* Desktop nav + badge — kept tight together */}
          <div className="hidden items-center gap-3 lg:flex">
            <nav aria-label="Primary">
              <ul className="flex items-center gap-4">
                {nav.map((item) =>
                  item.children ? (
                    <li key={item.label}>
                      <NavDropdown item={item} />
                    </li>
                  ) : (
                    <li key={item.label}>
                      <NavLink
                        to={item.href}
                        className="text-[15px] font-medium text-ink transition-colors hover:text-brand"
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* ^0001 badge — sits right next to Contact */}
            <img
              src="/assets/icons/member-id.svg"
              alt="Member ID 0001"
              className="h-3.5 w-auto shrink-0"
            />
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

        {/* Bottom strip — 80% red, 20% dark gray cap */}
        <div className="flex h-1.5 w-full" aria-hidden>
          <span className="h-full w-[80%] bg-brand" />
          <span className="h-full w-[20%] bg-strip-end" />
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
