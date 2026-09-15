// "Top" / "Up" pill. Left half ("Top") smooth-scrolls all the way to the
// very top of the document. Right half ("Up" arrow) behaves like the
// up-arrow half of PageDownButton elsewhere on the site — it scrolls to the
// top of the frame sitting directly above this one (the #footer-products
// grey pane), landing at that frame's own zero scroll position, not the
// document top. Falls back to the last <section> on the page (then the
// document top) on pages where #footer-products isn't rendered (e.g.
// /about/faq).
//
// `inline` renders it flush against the footer's top divider strip —
// wireframe style (outline only, fills with color on hover) matching
// HeaderTopPageDownTab/PageDownButton — instead of the default floating
// variant (absolute-positioned, solid fill, meant to sit in the FAQ/
// Endorse Us button row).
export default function PageUpButton({ inline = false }) {
  // window.scrollTo(behavior:"smooth") to an absolute Y, rather than
  // element.scrollIntoView(behavior:"smooth") — mirrors PageDownButton,
  // where scrollIntoView's smooth animation was observed to silently no-op
  // on some sections.
  function scrollToElement(el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    window.scrollTo({ top: window.scrollY + rect.top, behavior: "smooth" });
  }

  function handleTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleUp() {
    // This button always renders inside #footer-products itself, so
    // targeting that element was a no-op click (already there). Find the
    // pane that actually sits directly above it instead.
    const footer = document.querySelector("#footer-products");
    const sections = Array.from(document.querySelectorAll("section"));
    const target = footer
      ? sections
          .filter((el) => el.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING)
          .pop()
      : sections[sections.length - 1];

    if (target) {
      scrollToElement(target);
    } else {
      handleTop();
    }
  }

  if (inline) {
    return (
      <div className="relative z-10 mx-auto flex overflow-hidden rounded-b-2xl border border-t-0 border-[#4a4a4a] bg-transparent">
        <button
          type="button"
          onClick={handleTop}
          aria-label="Scroll back to the top of the page"
          className="flex h-4 w-11 cursor-pointer items-center justify-center bg-transparent text-[9px] font-semibold uppercase tracking-wide text-[#4a4a4a] transition hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-12 sm:text-[10px]"
        >
          Top
        </button>
        <button
          type="button"
          onClick={handleUp}
          aria-label="Scroll up to the section above"
          className="group flex h-4 w-11 cursor-pointer items-center justify-center border-l border-[#4a4a4a] bg-transparent text-[#4a4a4a] transition hover:bg-[#2b2b2b] hover:text-white sm:h-5 sm:w-12"
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
            <path d="M6 15l6-6 6 6" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTop}
      aria-label="Scroll back to the top of the page"
      className="absolute left-1/2 -top-28 z-10 flex h-9 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-[#4a4a4a] px-8 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#d9d9d9] hover:text-[#2b2b2b] active:bg-[#2b2b2b] active:text-white sm:-top-32 sm:h-10 sm:px-9 sm:text-[12px]"
    >
      Top
    </button>
  );
}
