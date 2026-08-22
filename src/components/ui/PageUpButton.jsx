// Small floating "TOP" button. Clicking it smooth-scrolls the window back
// to the top of the page.
export default function PageUpButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to the top of the page"
      className="absolute left-1/2 top-2 z-10 flex h-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#4a4a4a] px-4 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#2b2b2b] sm:h-10 sm:text-[12px]"
    >
      Top
    </button>
  );
}
