import { useNavigate } from "react-router-dom";

// Plain left/right arrows (no button chrome) that cycle through a fixed
// list of related pages, wrapping around at either end. `pages` is an
// array of { label, to }; `current` is this page's index into it.
// By default positioned `absolute` in its own positioning context, landing
// just below CloseButton on pages that have one. Pass `center` on pages
// without a CloseButton (e.g. Home) to instead vertically center the
// arrows within the nearest positioned ancestor (e.g. the hero <section>)
// — still `absolute`, so it scrolls away with that section rather than
// staying pinned to the viewport.
export default function PageCycleArrows({ pages, current, center = false }) {
  const navigate = useNavigate();
  const total = pages.length;

  function go(offset) {
    const next = (current + offset + total) % total;
    navigate(pages[next].to);
  }

  const prevLabel = pages[(current - 1 + total) % total].label;
  const nextLabel = pages[(current + 1) % total].label;

  const position = center
    ? "absolute top-[35%] z-10 -translate-y-1/2"
    : "absolute top-20 z-10 sm:top-24";

  // When centering within an ancestor `section`, this component must not
  // introduce its own positioning context (it has no height of its own),
  // so it renders bare and relies on that ancestor already being
  // `relative`. Otherwise it wraps itself in `relative` so it can anchor
  // its own absolute children at the document position it's rendered at.
  const wrapperClass = center ? "" : "relative";

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={`Previous: ${prevLabel}`}
        className={`${position} left-4 flex h-10 w-10 items-center justify-center text-[#4a4a4a] transition hover:text-[#2b2b2b] sm:left-6 sm:h-11 sm:w-11`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden
        >
          <path d="M19 12H5M11 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label={`Next: ${nextLabel}`}
        className={`${position} right-4 flex h-10 w-10 items-center justify-center text-[#4a4a4a] transition hover:text-[#2b2b2b] sm:right-6 sm:h-11 sm:w-11`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
