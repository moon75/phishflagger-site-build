// Small floating "Page Up" button, styled to match PageDownButton. Clicking
// it smooth-scrolls the window back to the top of the page.
export default function PageUpButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to the top of the page"
      className="absolute left-1/2 top-2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4a4a4a] shadow-md transition hover:bg-[#2b2b2b] sm:h-10 sm:w-10">
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
          <path d="M6 15l6-6 6 6" />
        </svg>
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#4a4a4a] sm:text-[12px]">
        Top
      </span>
    </button>
  );
}
