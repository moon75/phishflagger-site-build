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

  const goToVideo = (video) => {
    const realIndex = realVideos.indexOf(video);
    if (realIndex !== -1) goTo(realIndex);
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

  // Peeks are drawn from the full (placeholder-included) list so a category
  // with just one real clip still shows the 3-wide layout — its neighbors
  // are "Coming Soon" slots rather than nothing.
  const currentFullIndex = videos.indexOf(current);
  const peekLeft = videos[(currentFullIndex - 1 + videos.length) % videos.length];
  const peekRight = videos[(currentFullIndex + 1) % videos.length];
  const showPeeks = videos.length > 1;
  const showArrows = realVideos.length > 1;

  return (
    <div className="mx-auto flex max-w-[820px] flex-col items-center gap-3">
      <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
        {showArrows && (
          <button
            type="button"
            onClick={() => goTo(clampedIndex - 1)}
            aria-label="Shift left"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black text-ink transition-transform duration-200 hover:scale-110 hover:text-brand sm:h-11 sm:w-11"
          >
            ‹
          </button>
        )}

        <div
          className="flex w-full items-center justify-center gap-2 sm:gap-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {showPeeks && <ShortPeek video={peekLeft} onClick={() => goToVideo(peekLeft)} side="left" />}

          <div className="relative aspect-[9/16] w-full max-w-[280px] shrink-0 overflow-hidden rounded-2xl bg-black ring-1 ring-black/10">
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

          {showPeeks && <ShortPeek video={peekRight} onClick={() => goToVideo(peekRight)} side="right" />}
        </div>

        {showArrows && (
          <button
            type="button"
            onClick={() => goTo(clampedIndex + 1)}
            aria-label="Shift right"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black text-ink transition-transform duration-200 hover:scale-110 hover:text-brand sm:h-11 sm:w-11"
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

// Dimmed thumbnail shown to either side of the active video. A real clip is
// clickable — it brings that clip into the center and plays it. A
// placeholder just reads "Coming Soon" and isn't interactive.
function ShortPeek({ video, onClick, side }) {
  const isPlaceholder = video.type === "placeholder";

  return (
    <button
      type="button"
      onClick={isPlaceholder ? undefined : onClick}
      disabled={isPlaceholder}
      aria-label={side === "left" ? "Previous short" : "Next short"}
      className={`relative hidden aspect-[9/16] w-full max-w-[140px] shrink-0 overflow-hidden rounded-2xl bg-black/5 ring-1 ring-black/10 transition-opacity duration-200 sm:flex sm:items-center sm:justify-center ${
        isPlaceholder ? "cursor-default opacity-60" : "cursor-pointer opacity-45 hover:opacity-70"
      }`}
    >
      {isPlaceholder ? (
        <span className="text-[11px] font-medium text-ink/40">Coming Soon</span>
      ) : (
        <>
          {video.poster ? (
            <img src={video.poster} alt="" className="h-full w-full object-cover" />
          ) : (
            <video
              src={video.src}
              preload="metadata"
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          )}
          <span className="absolute inset-0 bg-black/20" />
        </>
      )}
    </button>
  );
}
