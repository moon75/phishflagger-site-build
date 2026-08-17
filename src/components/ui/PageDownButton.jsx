// Small floating "scroll down" indicator. Clicking it scrolls to the top of
// the 2nd <section> in the given container (or the whole document if no
// container is supplied).
export default function PageDownButton({ containerRef, targetIndex = 1 }) {
  function handleClick() {
    const root = containerRef?.current ?? document;
    const sections = Array.from(root.querySelectorAll("section"));
    const target = sections[targetIndex] ?? sections[sections.length - 1];

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="group absolute left-1/2 top-4 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-0.5 text-ink transition hover:scale-110 sm:top-6"
    >
      <Chevron className="opacity-40 [animation-delay:-0.3s]" />
      <Chevron className="-mt-3 opacity-70 [animation-delay:-0.15s]" />
      <Chevron className="-mt-3" />
    </button>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 animate-bounce sm:h-6 sm:w-6 ${className}`}
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
