import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import { brandify } from "../components/Brand.jsx";

const YOUTUBE_VIDEO_ID = "kqtO0Mq3f-s";

const VIDEOS = [
  {
    type: "youtube",
    id: YOUTUBE_VIDEO_ID,
    title: "PhishFlagger Overview",
    description: "How PhishFlagger™ and human validation protects against phishing and fraud.",
    thumb: `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
  },
  {
    type: "local",
    src: "/assets/Videos/v1.mp4",
    title: "PhishFlagger in Action",
    description: "A closer look at how sequential numbering flags impersonation in real time.",
  },
  {
    type: "local",
    src: "/assets/Videos/v2.mp4",
    title: "Setup & Protection",
    description: "See how quickly your domain or inbox can be protected end to end.",
  },
];

export default function Video() {
  const [active, setActive] = useState(0);
  const current = VIDEOS[active];

  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Wordmark + tagline */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>

            <h1 className="mt-10 text-[32px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[44px] lg:text-[52px]">
              Watch the Video
            </h1>
            <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-[1.6] text-ink sm:text-[15px]">
              {brandify(
                "See how PhishFlagger™ and human validation protects against phishing and fraud.",
              )}
            </p>
          </div>

          {/* Active video player */}
          <div className="mx-auto mt-10 w-full max-w-[900px] overflow-hidden rounded-xl bg-black shadow-lg sm:mt-14">
            <div className="aspect-video w-full">
              {current.type === "youtube" ? (
                <iframe
                  key={active}
                  src={`https://www.youtube.com/embed/${current.id}?rel=0&autoplay=1`}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              ) : (
                <video
                  key={active}
                  src={current.src}
                  controls
                  autoPlay
                  className="h-full w-full"
                />
              )}
            </div>
          </div>

          {/* Choose a video */}
          <div className="mx-auto mt-10 grid w-full max-w-[900px] grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`group overflow-hidden rounded-xl text-left transition ${
                  i === active
                    ? "ring-2 ring-brand ring-offset-2"
                    : "ring-1 ring-black/10 hover:ring-black/25"
                }`}
              >
                <div className="relative aspect-video w-full bg-black">
                  {v.type === "youtube" ? (
                    <img
                      src={v.thumb}
                      alt={v.title}
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                  ) : (
                    <video
                      src={v.src}
                      preload="metadata"
                      muted
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-black shadow sm:h-10 sm:w-10">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
