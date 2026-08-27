import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Small tab poking up from the header's top edge (above the nav links, at
// the very top of the viewport). Separate from the per-pane
// <PageDownButton> instances below the header — this one is global, always
// in the same spot, and scrolls to whatever the next <section> is from the
// current scroll position.
export default function HeaderTopPageDownTab() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  // Horizontal center of #nav-gap-anchor (the empty spacer sitting between
  // the left/right nav blocks), in px from the header's left edge. Null
  // (→ falls back to page-center via CSS) below the lg breakpoint, where
  // that spacer isn't rendered.
  const [anchorCenter, setAnchorCenter] = useState(null);

  useEffect(() => {
    let ticking = false;

    const recompute = () => {
      ticking = false;
      const header = document.querySelector("header");
      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
      const sections = Array.from(document.querySelectorAll("section"));
      const hasNext = sections.some((section) => section.getBoundingClientRect().top > headerBottom + 1);
      setVisible(hasNext);

      const headerRect = header ? header.getBoundingClientRect() : null;
      const anchor = document.getElementById("nav-gap-anchor");
      if (headerRect && anchor) {
        const anchorRect = anchor.getBoundingClientRect();
        // Only trust it if actually laid out (display:none below lg gives a 0-width rect).
        if (anchorRect.width > 0) {
          setAnchorCenter(anchorRect.left + anchorRect.width / 2 - headerRect.left);
        } else {
          setAnchorCenter(null);
        }
      } else {
        setAnchorCenter(null);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(recompute);
    };

    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Also react to the nav itself changing width (active-link bold text,
    // font swap, etc.) without a window resize.
    const nav = document.querySelector("nav[aria-label='Primary']");
    const observer = nav ? new ResizeObserver(recompute) : null;
    observer?.observe(nav);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer?.disconnect();
    };
  }, [pathname]);

  function handleClick() {
    const header = document.querySelector("header");
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const sections = Array.from(document.querySelectorAll("section"));
    const next = sections.find((section) => section.getBoundingClientRect().top > headerBottom + 1);
    if (next) {
      // window.scrollTo to an absolute Y, not next.scrollIntoView — see
      // PageDownButton.jsx for why (scrollIntoView's smooth animation was
      // observed to silently no-op in some cases on this page).
      const rect = next.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top, behavior: "smooth" });
    }
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Page down to the next section"
      className={`group absolute top-0 z-10 flex h-4 w-[88px] -translate-x-1/2 cursor-pointer items-end justify-center rounded-b-2xl border border-t-0 border-[#4a4a4a] bg-transparent pb-0.5 text-[#4a4a4a] transition hover:border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-[96px] ${
        anchorCenter == null ? "left-1/2" : ""
      }`}
      style={anchorCenter == null ? undefined : { left: `${anchorCenter}px` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3 stroke-[2.6] transition-colors group-hover:stroke-[3.2] group-hover:text-[#e63950] sm:h-3.5 sm:w-3.5"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
