import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import { brandify } from "../components/Brand.jsx";
import kickstarterVideo2Poster from "../assets/images/kickstarter-video-2-poster.png";

const YOUTUBE_VIDEO_ID = "kqtO0Mq3f-s";

const BASE_VIDEOS = [
  {
    type: "youtube",
    id: YOUTUBE_VIDEO_ID,
    title: "PhishFlagger Overview",
    description: "How PhishFlagger and human validation protects against phishing and fraud.",
    thumb: `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`,
  },
  {
    type: "local",
    src: "/assets/Videos/v1.mp4",
    title: "Thank You Video",
    description: "A closer look at how sequential numbering flags impersonation in real time.",
  },
  {
    type: "local",
    src: "/assets/Videos/v2.mp4",
    title: "Setup & Protection",
    description: "See how quickly your domain or inbox can be protected end to end.",
  },
  {
    type: "local",
    src: "/assets/Videos/PhishFlagger_Kickstarter_video_1.mp4",
    title: "PhishFlagger Kickstarter",
    description: "An introduction to the PhishFlagger Kickstarter campaign.",
  },
  {
    type: "local",
    src: "/assets/Videos/PhishFlagger_Kickstarter_video_2.mp4",
    title: "PhishFlagger Kickstarter",
    description: "More on the PhishFlagger Kickstarter campaign.",
    poster: kickstarterVideo2Poster,
  },
];

const PLACEHOLDER_COUNT = 1;

const VIDEOS = [
  ...BASE_VIDEOS,
  ...Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    type: "placeholder",
    title: "Coming Soon",
    description: "More PhishFlagger videos are on the way.",
  })),
];

const VIDEO_CATEGORIES = [
  "Feature",
  "Ads",
  "Shorts",
  "Manual",
  "Kickstarter",
  "In Progress",
  "Telecom Caller ID",
  "Oracle",
];
const CATEGORY_SLUGS = {
  Feature: "",
  Ads: "ads",
  Shorts: "shorts",
  Manual: "manual",
  Kickstarter: "kickstarter",
  "In Progress": "in-progress",
  "Telecom Caller ID": "telecom-caller-id",
  Oracle: "oracle",
};
const SLUG_CATEGORIES = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([category, slug]) => [slug, category]),
);

const KICKSTARTER_VIDEOS = BASE_VIDEOS.filter((v) => v.title === "PhishFlagger Kickstarter");

const VIDEOS_PER_PAGE = 6;

function categoryVideos(category) {
  if (category === "Feature") return VIDEOS;
  if (category === "Kickstarter") {
    return [
      ...KICKSTARTER_VIDEOS,
      ...Array.from({ length: 4 }, () => ({
        type: "placeholder",
        title: "Coming Soon",
        description: "",
      })),
    ];
  }
  if (category === "In Progress") {
    return [
      {
        type: "local",
        src: "/assets/Videos/monkey video.mp4",
        title: "Coming Soon",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Get the message part1.mp4",
        title: "Get the Message - Part 1",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/The Message Part 2 Final.mp4",
        title: "Get the Message - Part 2",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/PhishFlagger_8.04.26_Part3.mp4",
        title: "PhishFlagger 8.04.26 - Part 3",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Fake_message_reveal_offer_202608071511.mp4",
        title: "Fake Message Reveal Offer",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Taking_over_the_world_202608102121.mp4",
        title: "Taking Over the World",
        description: "",
      },
    ];
  }
  if (category === "Oracle") {
    return [
      {
        type: "local",
        src: "/assets/Videos/Oracle/Man_and_dog_pet_health_202608130007.mp4",
        title: "Man and Dog Pet Health",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Oracle/Man_testing_dog_ketone_strips_202608130020.mp4",
        title: "Man Testing Dog Ketone Strips",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Oracle/Pet_owner_with_dog_in_202608130010.mp4",
        title: "Pet Owner with Dog",
        description: "",
      },
      {
        type: "local",
        src: "/assets/Videos/Oracle/Pet_product_video_advertisement_202608130012.mp4",
        title: "Pet Product Video Advertisement",
        description: "",
      },
    ];
  }

  return Array.from({ length: 6 }, () => ({
    type: "placeholder",
    title: "Coming Soon",
    description: "",
  }));
}

export default function Video() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { category = "" } = useParams();
  const requestedVideo = searchParams.get("video");
  const activeCategory = SLUG_CATEGORIES[category] || "Feature";
  const [playing, setPlaying] = useState(
    requestedVideo === "thank-you"
      ? 1
      : requestedVideo === "kickstarter"
        ? 3
        : null,
  );
  const categoryAllVideos = categoryVideos(activeCategory);
  const realVideos = categoryAllVideos.filter((v) => v.type !== "placeholder");
  const hasMultiplePages = realVideos.length > VIDEOS_PER_PAGE;
  const totalPages = hasMultiplePages
    ? Math.ceil(realVideos.length / VIDEOS_PER_PAGE)
    : 1;
  const [page, setPage] = useState(1);

  // Reset to page 1 whenever the category changes.
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  const displayedVideos = hasMultiplePages
    ? realVideos.slice((page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE)
    : categoryAllVideos;

  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Intro */}
          <div className="text-center">
            <p className="mx-auto max-w-[900px] text-[31.5px] leading-[1.6] text-ink sm:text-[33.75px]">
              {brandify(
                "See how PhishFlagger and human validation protects against phishing and fraud.",
              )}
            </p>
            <h1 className="mt-4 text-[36px] font-extrabold uppercase tracking-tight text-brand sm:text-[48px]">
              Development Page
            </h1>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
            {VIDEO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  const slug = CATEGORY_SLUGS[category];
                  setPlaying(null);
                  navigate(slug ? `/about/video/${slug}` : "/about/video", {
                    replace: true,
                  });
                }}
                className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-colors sm:text-[14px] ${
                  category === activeCategory
                    ? "border-[#5a6066] bg-[#5a6066] text-white"
                    : "border-gray-300 text-ink-muted hover:bg-gray-100 hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {displayedVideos.map((v, i) => {
              const isPlaying = playing === i;
              return (
                <div
                  key={i}
                  className={`group overflow-hidden rounded-xl transition ${
                    isPlaying
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
                        src={v.src}
                        poster={v.poster}
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-contain"
                      />
                    ) : isPlaying ? (
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
                        onClick={() => setPlaying(i)}
                        className="absolute inset-0 h-full w-full text-left"
                      >
                        <img
                          src={v.thumb}
                          alt={v.title}
                          className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
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
                    <p className="text-[13px] font-semibold text-ink">{v.title}</p>
                    <p className="mt-1 text-[12px] leading-snug text-ink/70">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {hasMultiplePages && (
            <div className="mt-8 flex justify-center gap-2 sm:mt-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setPlaying(null);
                    setPage(n);
                  }}
                  aria-current={n === page ? "page" : undefined}
                  className={`h-8 w-8 rounded-full text-[13px] font-medium transition-colors ${
                    n === page
                      ? "bg-[#5a6066] text-white"
                      : "text-ink-muted hover:bg-gray-100 hover:text-ink"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
