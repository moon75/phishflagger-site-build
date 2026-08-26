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

  useEffect(() => {
    let ticking = false;

    const recompute = () => {
      ticking = false;
      const header = document.querySelector("header");
      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
      const sections = Array.from(document.querySelectorAll("section"));
      const hasNext = sections.some((section) => section.getBoundingClientRect().top > headerBottom + 1);
      setVisible(hasNext);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(recompute);
    };

    recompute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  function handleClick() {
    const header = document.querySelector("header");
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const sections = Array.from(document.querySelectorAll("section"));
    const next = sections.find((section) => section.getBoundingClientRect().top > headerBottom + 1);
    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Page down to the next section"
      className="group absolute left-1/2 top-0 z-10 flex h-4 w-11 -translate-x-1/2 cursor-pointer items-end justify-center rounded-b-2xl border border-t-0 border-[#4a4a4a] bg-transparent pb-0.5 text-[#4a4a4a] transition hover:border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-12"
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
