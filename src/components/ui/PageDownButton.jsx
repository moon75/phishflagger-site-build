// Small floating pair of "Page Down" / "Page Up" tabs, styled to match
// CloseButton. Left half scrolls down; pass `targetSelector` to pin an
// exact element (recommended) — otherwise it advances to the next
// <section> in DOM order after the one this button lives in (or the first
// <section> in `containerRef`/document if the button sits outside any
// section). Right half is the symmetric opposite: scrolls up to the
// previous <section>, or does nothing if there isn't one (e.g. the very
// first pane on a page). Pass `forceTopOnUp` to make the up-arrow always
// jump straight to the very top of the page (header top) instead of just
// the previous section — useful for a pane that should always return you
// to the top regardless of what happens to sit above it.
export default function PageDownButton({ containerRef, targetSelector, block = "start", forceTopOnUp = false }) {
  // window.scrollTo(behavior:"smooth") to an absolute Y, rather than
  // element.scrollIntoView(behavior:"smooth") — scrollIntoView's smooth
  // animation was observed to silently no-op on some sections on this
  // page (likely a competing scroll/animation on the same frame), while
  // an absolute scrollTo is reliable.
  function scrollToElement(el, blockPos) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const targetY =
      blockPos === "center"
        ? window.scrollY + rect.top - (window.innerHeight - rect.height) / 2
        : window.scrollY + rect.top;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }

  function currentIndexFor(event, sections) {
    // A button rendered above the first <section> (e.g. an intro/hero
    // button) treats that first section as "current" so it still advances
    // relative to it, rather than just landing on the one it's already
    // sitting on top of.
    const currentSection = event.currentTarget.closest("section") ?? sections[0];
    return currentSection ? sections.indexOf(currentSection) : -1;
  }

  function handleDown(event) {
    const root = containerRef?.current ?? document;

    if (targetSelector) {
      const target = root.querySelector(targetSelector);
      if (target) {
        scrollToElement(target, block);
        return;
      }
    }

    // #footer-products (the footer's own page-down/up pair) counts as a
    // valid "next" stop too — it's a <div>, not a <section>, so the last
    // real pane on a page would otherwise have nowhere to go and fall
    // through to the "land at the document bottom" branch below, overshooting
    // past the footer pane entirely.
    const sections = Array.from(root.querySelectorAll("section, #footer-products"));
    const currentIndex = currentIndexFor(event, sections);

    // Position-based lookup (DOM order), not scroll-position guessing — a
    // button's own section may legitimately sit below the current scroll
    // offset (e.g. below a sticky header), which broke the old heuristic.
    const next = currentIndex >= 0 ? sections[currentIndex + 1] : sections[0];

    if (next) {
      scrollToElement(next, "start");
    } else {
      // No next <section> — this is the last pane. Land deterministically
      // at the true bottom of the document instead of an arbitrary
      // scrollBy(90vh), which lands wherever it lands depending on the
      // current scroll offset (the "lands in the wrong place" bug).
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({ top: maxScroll, behavior: "smooth" });
    }
  }

  function handleUp(event) {
    if (forceTopOnUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const root = containerRef?.current ?? document;
    // #footer-products (the footer's own page-down/up pair) counts as a
    // valid "next" stop too — it's a <div>, not a <section>, so the last
    // real pane on a page would otherwise have nowhere to go and fall
    // through to the "land at the document bottom" branch below, overshooting
    // past the footer pane entirely.
    const sections = Array.from(root.querySelectorAll("section, #footer-products"));
    const currentIndex = currentIndexFor(event, sections);
    const prev = currentIndex > 0 ? sections[currentIndex - 1] : null;

    if (prev) {
      scrollToElement(prev, "start");
    } else {
      // Exception: the up-arrow on the very first pane has nowhere to go
      // "up" to, so it scrolls all the way to the top of the page instead
      // of doing nothing.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 overflow-hidden rounded-b-2xl border border-t-0 border-[#4a4a4a] bg-white">
      <button
        type="button"
        onClick={handleDown}
        aria-label="Page down to the next section"
        className="group flex h-4 w-11 cursor-pointer items-end justify-center bg-transparent pb-0.5 text-[#4a4a4a] transition hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-12"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 stroke-[2.6] transition-colors group-hover:stroke-[3.2] group-hover:text-btn-hover-red sm:h-3.5 sm:w-3.5"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleUp}
        aria-label="Page up to the previous section"
        className="group flex h-4 w-11 cursor-pointer items-end justify-center border-l border-[#4a4a4a] bg-transparent pb-0.5 text-[#4a4a4a] transition hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-12"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 rotate-180 stroke-[2.6] transition-colors group-hover:stroke-[3.2] group-hover:text-btn-hover-red sm:h-3.5 sm:w-3.5"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
