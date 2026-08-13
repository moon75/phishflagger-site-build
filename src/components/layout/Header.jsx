import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { nav } from "../../data/nav.js";
import { cn } from "../../lib/utils.js";
import NavDropdown from "./NavDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import logoImg from "../../../telecom Webpage/assets/images/logo/pf-logo-v2.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // "Home" and "Email" navigate on mouse-over, like the dropdown menus that
  // already open on hover — no click required.
  const HOVER_NAV_LABELS = new Set(["Home", "Email"]);

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
        <div className="mx-auto flex min-h-[88px] w-[80%] items-center justify-between gap-7 py-5 lg:justify-center lg:gap-9">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex shrink-0 items-center"
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
                        onMouseEnter={
                          HOVER_NAV_LABELS.has(item.label)
                            ? () => navigate(item.href)
                            : undefined
                        }
                        className={({ isActive }) =>
                          `text-[15px] font-medium transition-colors hover:text-brand ${
                            isActive ? "text-brand" : "text-ink"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* ^0001 badge — sits right next to Contact */}
            <span className="ml-4 shrink-0 font-normal text-brand sm:ml-6" style={{ fontSize: "19px", letterSpacing: "0.04em" }}>
              ^0001
            </span>
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

        {/* Bottom strip — full red */}
        <div className="h-1.5 w-full bg-brand" aria-hidden />
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
