import { useRef, useState } from "react";

// Vertical (9:16) single-video viewer for the "Shorts" category — swipe or
// arrow left/right to move between clips, matching the portrait,
// one-at-a-time layout every Shorts/Reels feed uses.
export default function ShortsViewer({ videos }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const realVideos = videos.filter((v) => v.type !== "placeholder");

  if (realVideos.length === 0) {
    return (
      <div className="mx-auto flex aspect-[9/16] w-full max-w-[280px] items-center justify-center rounded-2xl bg-black/5">
        <span className="text-[13px] font-medium text-ink/40">Coming Soon</span>
      </div>
    );
  }

  const clampedIndex = Math.min(index, realVideos.length - 1);
  const current = realVideos[clampedIndex];

  const goTo = (next) => {
    setIndex(((next % realVideos.length) + realVideos.length) % realVideos.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(clampedIndex + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div className="mx-auto flex max-w-[420px] flex-col items-center gap-3">
      <div className="flex w-full items-center justify-center gap-3">
        {realVideos.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(clampedIndex - 1)}
            aria-label="Previous short"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black text-ink transition-transform duration-200 hover:scale-110 hover:text-brand sm:h-10 sm:w-10"
          >
            ‹
          </button>
        )}
        <div
          className="relative aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl bg-black ring-1 ring-black/10"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            preload="metadata"
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
        {realVideos.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(clampedIndex + 1)}
            aria-label="Next short"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black text-ink transition-transform duration-200 hover:scale-110 hover:text-brand sm:h-10 sm:w-10"
          >
            ›
          </button>
        )}
      </div>

      <div className="text-center">
        <p className="text-[13px] font-semibold text-ink">
          {current.number ? `${current.number}: ` : ""}
          {current.title}
        </p>
        {current.description && (
          <p className="mt-1 text-[12px] leading-snug text-ink/70">{current.description}</p>
        )}
      </div>

      {realVideos.length > 1 && (
        <div className="flex gap-1.5">
          {realVideos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to short ${i + 1}`}
              aria-current={i === clampedIndex ? "true" : undefined}
              className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                i === clampedIndex ? "bg-brand" : "bg-black/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
