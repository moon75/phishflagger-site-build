// "TOP" button. Clicking it smooth-scrolls all the way to the very top of
// the document.
//
// `inline` renders it flush against the footer's top divider strip —
// wireframe style (outline only, fills with color on hover) matching
// HeaderTopPageDownTab, double-wide — instead of the default floating
// variant (absolute-positioned, solid fill, meant to sit in the FAQ/
// Endorse Us button row).
export default function PageUpButton({ inline = false }) {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to the top of the page"
      className={
        inline
          ? "relative z-10 mx-auto flex h-4 w-[88px] cursor-pointer items-center justify-center rounded-b-2xl border border-t-0 border-[#4a4a4a] bg-transparent text-[9px] font-semibold uppercase tracking-wide text-[#4a4a4a] transition hover:border-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-[96px] sm:text-[10px]"
          : "absolute left-1/2 -top-28 z-10 flex h-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#4a4a4a] px-8 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d9d9d9] hover:text-[#2b2b2b] active:bg-[#2b2b2b] active:text-white sm:-top-32 sm:h-10 sm:px-9 sm:text-[12px]"
      }
    >
      Top
    </button>
  );
}
