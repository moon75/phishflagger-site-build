import { useState } from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../../data/nav.js";
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

function MobileGroup({ item, onClose }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between border-b border-line py-4 text-left text-2xl font-semibold text-ink"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-200",
            expanded && "rotate-180",
          )}
        />
      </button>
      {expanded && (
        <ul className="flex flex-col py-2 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              {child.external ? (
                <a
                  href={child.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="block py-3 text-lg text-ink-muted transition-colors hover:text-brand"
                >
                  {child.label}
                </a>
              ) : (
                <NavLink
                  to={child.href}
                  onClick={onClose}
                  className="block py-3 text-lg text-ink-muted transition-colors hover:text-brand"
                >
                  {child.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 z-30 overflow-y-auto bg-white px-6 pb-8 pt-24 lg:hidden",
        open ? "block" : "hidden",
      )}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile">
        <ul className="flex flex-col">
          {nav.map((item) =>
            item.children ? (
              <MobileGroup key={item.label} item={item} onClose={onClose} />
            ) : (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  end={item.href === "/"}
                  onClick={onClose}
                  className="block border-b border-line py-4 text-2xl font-semibold text-ink"
                >
                  {item.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </nav>
    </div>
  );
}
