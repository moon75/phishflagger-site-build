// Shared video-card renderer for both video pages — the poster/thumb +
// inline <video>/YouTube iframe + title/description block. `playing` is a
// bool: whether the YouTube thumb should already be swapped for its iframe.
export default function VideoCard({ video: v, playing, onPlay, numbered = true }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:z-10 hover:scale-110 ${
        playing
          ? "ring-2 ring-brand ring-offset-2"
          : "ring-1 ring-black/10 hover:ring-black/25"
      }`}
    >
      <div className="relative aspect-video w-full bg-black">
        {v.type === "placeholder" ? (
          <div className="flex h-full w-full items-center justify-center bg-black/5">
            <span className="text-[13px] font-medium text-ink/40">Coming Soon</span>
          </div>
        ) : v.type === "local" ? (
          <video
            key={v.src}
            src={v.src}
            poster={v.poster}
            controls
            controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            preload="metadata"
            playsInline
            className="h-full w-full object-contain"
          />
        ) : playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.id}?rel=0`}
            title={v.title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={onPlay}
            className="absolute inset-0 h-full w-full text-left"
          >
            <img
              src={v.thumb}
              alt={v.title}
              className="pic-with-no-link-mouse-over-increase h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow sm:h-10 sm:w-10">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="bg-white px-3 py-3">
        <p className="text-[13px] font-semibold text-ink">
          {numbered && v.number ? `${v.number}: ` : ""}
          {v.title}
        </p>
        {v.description && (
          <p className="mt-1 text-[12px] leading-snug text-ink/70">{v.description}</p>
        )}
      </div>
    </div>
  );
}
