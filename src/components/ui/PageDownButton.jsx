// Small floating "Page Down" button, styled to match CloseButton. Clicking
// it scrolls to the top of the next <section> below the current scroll
// position, within the given container (or the whole document if no
// container is supplied).
export default function PageDownButton({ containerRef }) {
  function handleClick() {
    const root = containerRef?.current ?? document;
    const sections = Array.from(root.querySelectorAll("section"));
    const scrollY = window.scrollY;

    const next = sections.find((section) => {
      const top = section.getBoundingClientRect().top + scrollY;
      return top > scrollY + 10;
    });

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
      className="absolute left-1/2 top-2 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#4a4a4a] text-white shadow-md transition hover:bg-[#2b2b2b] sm:h-10 sm:w-10"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 sm:h-5 sm:w-5"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
