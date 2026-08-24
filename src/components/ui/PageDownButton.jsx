// Small floating "Page Down" button, styled to match CloseButton. Clicking
// it scrolls to a target element. Pass `targetSelector` to pin an exact
// element (recommended); otherwise it scrolls to the next <section> in DOM
// order after the one this button lives in (or the first <section> in
// `containerRef`/document if the button sits outside any section).
export default function PageDownButton({ containerRef, targetSelector, block = "start" }) {
  function handleClick(event) {
    const root = containerRef?.current ?? document;

    if (targetSelector) {
      const target = root.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block });
        return;
      }
    }

    const sections = Array.from(root.querySelectorAll("section"));
    // A button rendered above the first <section> (e.g. an intro/hero
    // button) treats that first section as "current" so it still advances
    // to the section after it, rather than just landing on the one it's
    // already sitting on top of.
    const currentSection = event.currentTarget.closest("section") ?? sections[0];
    const currentIndex = currentSection ? sections.indexOf(currentSection) : -1;

    // Position-based lookup (DOM order), not scroll-position guessing — a
    // button's own section may legitimately sit below the current scroll
    // offset (e.g. below a sticky header), which broke the old heuristic.
    const next = currentIndex >= 0 ? sections[currentIndex + 1] : sections[0];

    if (next) {
      next.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Page down to the next section"
      className="group absolute left-1/2 top-2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#4a4a4a] text-white shadow-md transition hover:bg-[#2b2b2b] sm:h-10 sm:w-10"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 stroke-[2.4] transition-colors group-hover:stroke-[3.2] group-hover:text-[#FF0033] sm:h-5 sm:w-5"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
