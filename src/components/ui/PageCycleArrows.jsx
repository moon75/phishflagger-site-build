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

  // Fixed offset below the header, same on every page (not a % of each
  // hero's own height) so left/right arrows land at the identical spot
  // across Home/Video/Email/Telecom/Help/About regardless of that page's
  // hero content height.
  // Fixed offset below the header, same on every page (not a % of each
  // hero's own height) so left/right arrows land at the identical spot
  // across Home/Video/Email/Telecom/Help/About regardless of that page's
  // hero content height.
  const position = "absolute top-20 z-10 sm:top-24";

  // When centering within an ancestor `section`, this component must not
  // introduce its own positioning context (it has no height of its own),
  // so it renders bare and relies on that ancestor already being
  // `relative`. Otherwise it wraps itself in `relative` so it can anchor
  // its own absolute children at the document position it's rendered at.
  const wrapperClass = center ? "" : "relative";

  // Tabs attached to the left/right edge of the pane — same "attached tab"
  // chrome as PageDownButton's up/down pill (border, no near-edge border,
  // rounded corners on the far side, white bg, invert to dark on hover) —
  // just anchored to the side edges instead of the top edge.
  const tabClass =
    "group flex h-11 w-4 cursor-pointer flex-col items-center justify-center overflow-hidden border-[#4a4a4a] bg-white text-[#4a4a4a] transition hover:bg-[#2b2b2b] hover:text-white sm:h-12 sm:w-5";

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={`Previous: ${prevLabel}`}
        className={`${position} left-0 ${tabClass} rounded-r-2xl border border-l-0 pl-0.5`}
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
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label={`Next: ${nextLabel}`}
        className={`${position} right-0 ${tabClass} rounded-l-2xl border border-r-0 pr-0.5`}
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
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
