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
      className="absolute left-1/2 -top-28 z-10 flex h-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#4a4a4a] px-4 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d9d9d9] hover:text-[#2b2b2b] active:bg-[#2b2b2b] active:text-white sm:-top-32 sm:h-10 sm:text-[12px]"
    >
      Top
    </button>
  );
}
