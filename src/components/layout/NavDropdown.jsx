import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils.js";

function ChevronDown({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function NavDropdown({ item, hoverNavigate = false }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
    // Guard against re-navigating on every re-entry — without this, a
    // layout shift under the cursor (the dropdown opening/closing) can
    // flicker mouseenter on/off and spam navigate() into a render loop
    // that freezes the tab.
    if (hoverNavigate && item.href && location.pathname !== item.href) {
      navigate(item.href);
    }
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {item.href ? (
        <NavLink
          to={item.href}
          className={({ isActive }) =>
            cn(
              "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-[15px] font-medium transition-colors hover:text-brand",
              isActive ? "bg-gray-100 text-brand" : "text-ink",
            )
          }
          aria-expanded={open}
          aria-haspopup="true"
          onClick={(e) => {
            // Let the chevron toggle the menu without navigating away.
            if (e.target.closest("svg")) {
              e.preventDefault();
              setOpen((o) => !o);
            }
          }}
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </NavLink>
      ) : (
        <button
          type="button"
          className="inline-flex items-center gap-1 text-[15px] font-medium text-ink transition-colors hover:text-brand"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((o) => !o)}
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
      )}

      <div
        role="menu"
        className={cn(
          "absolute left-1/2 top-full z-50 mt-3 w-max -translate-x-1/2 border-t-2 border-brand bg-white py-2 shadow-2xl ring-1 ring-black/5 transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1.5 opacity-0",
        )}
      >
        <ul className="flex flex-col">
          {item.children.map((child) => (
            <li key={child.href}>
              {child.external ? (
                <a
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  className="block whitespace-nowrap px-5 py-2 text-[15px] text-ink transition-colors hover:text-brand"
                >
                  {child.label}
                </a>
              ) : (
                <NavLink
                  to={child.href}
                  role="menuitem"
                  className={({ isActive }) =>
                    cn(
                      "block whitespace-nowrap px-5 py-2 text-[15px] text-ink transition-colors hover:text-brand",
                      isActive && "bg-gray-100 text-brand",
                    )
                  }
                >
                  {child.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
