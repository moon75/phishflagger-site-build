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
    src: "/assets/video1/v1.mp4",
    title: "Thank You Video",
    description: "A closer look at how sequential numbering flags impersonation in real time.",
  },
  {
    type: "local",
    src: "/assets/video1/v2.mp4",
    title: "Setup & Protection",
    description: "See how quickly your domain or inbox can be protected end to end.",
  },
  {
    type: "local",
    src: "/assets/video1/PhishFlagger_Kickstarter_video_1.mp4",
    title: "PhishFlagger Kickstarter",
    description: "An introduction to the PhishFlagger Kickstarter campaign.",
  },
  {
    type: "local",
    src: "/assets/video1/PhishFlagger_Kickstarter_video_2.mp4",
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
  "Learning",
  "CISO",
  "Telecom Caller ID",
  "Oracle",
];
const CATEGORY_SLUGS = {
  Feature: "",
  Ads: "ads",
  Shorts: "shorts",
  Manual: "manual",
  Kickstarter: "kickstarter",
  Learning: "learning",
  "Telecom Caller ID": "telecom-caller-id",
  Oracle: "oracle",
  CISO: "ciso",
};
const SLUG_CATEGORIES = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([category, slug]) => [slug, category]),
);

// Each category has its own script doc. Feature keeps the original
// "all videos" doc; Oracle keeps its existing doc; the rest point at the
// new placeholder-outline docs created for them (still owner-only in
// Drive until sharing is switched to "Anyone with the link").
const CATEGORY_SCRIPTS = {
  Feature: "https://docs.google.com/document/d/1r39Taeyz0SfKI6bLWvA7xrASlVv1Lm0ESAdZGx7XxQE/edit?usp=sharing",
  Ads: "https://docs.google.com/document/d/1vvnN3lnYhQ0xROslrgKhOzFcVJBEPXJiztPKaVg5OFU/edit?usp=sharing",
  Shorts: "https://docs.google.com/document/d/1McbM3xzzbegxLIK2C20CkcwUvWqZ3G1LFqaf_Oloqss/edit?usp=sharing",
  Manual: "https://docs.google.com/document/d/1RxLhKRARbMXgNNCpyPTJp3XEN2sSfKtxKq9vtX2zBjI/edit?usp=sharing",
  Kickstarter: "https://docs.google.com/document/d/1fG9xmR13I6qq9CaGTstLV1UUjNKSKLRFAD_lS5HF_4g/edit?usp=sharing",
  Learning: "https://docs.google.com/document/d/1nh8GnkkCM9uDDPFNhSAr9Gfhu49pk_l4YpRbvTsSP4c/edit?usp=sharing",
  "Telecom Caller ID": "https://docs.google.com/document/d/1HsqXIfQIE4AkhKF8tk_Yq0AFoL0UH9xD3qduP0PzGFU/edit?usp=sharing",
  Oracle: "https://docs.google.com/document/d/1KTOVa0wRnynUHv4bfmfGftXJ9PTRsuJ7Tp9FIi5t6P0/edit?usp=sharing",
  CISO: "https://docs.google.com/document/d/1yEJY1sn-JPJcrRg2w34hihlrBzNlzBKAEidvqMaEW6M/edit?usp=sharing",
};

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
  if (category === "Learning") {
    return [
      {
        type: "local",
        src: "/assets/video1/monkey video.mp4",
        title: "Coming Soon",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Get the message part1.mp4",
        title: "Get the Message - Part 1",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/The Message Part 2 Final.mp4",
        title: "Get the Message - Part 2",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/PhishFlagger_8.04.26_Part3.mp4",
        title: "PhishFlagger 8.04.26 - Part 3",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Fake_message_reveal_offer_202608071511.mp4",
        title: "Fake Message Reveal Offer",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Taking_over_the_world_202608102121.mp4",
        title: "Taking Over the World",
        description: "",
      },
    ];
  }
  if (category === "Oracle") {
    return [
      {
        type: "local",
        src: "/assets/video1/Oracle/Man_and_dog_pet_health_202608130007.mp4",
        title: "Man and Dog Pet Health",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Man_testing_dog_ketone_strips_202608130020.mp4",
        title: "Man Testing Dog Ketone Strips",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Pet_owner_with_dog_in_202608130010.mp4",
        title: "Pet Owner with Dog",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Pet_product_video_advertisement_202608130012.mp4",
        title: "Pet Product Video Advertisement",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/save%20your%20dog%20too.mp4",
        title: "Save Your Dog Too",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Website_text_display_sequence_202608141319.mp4",
        title: "Website Text Display Sequence",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Pet%20owner%20with%20dog%20full.mp4",
        title: "Pet Owner with Dog - Full",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Granny_with_cat_save_your_cat_too.mp4",
        title: "Granny: Save Your Cat Too Use Code SAVE123",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/save%20your%20dog%20too_usecode-save123.mp4",
        title: "Save Your Dog Too Use Code SAVE123",
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
  const categoryAllVideosRaw = categoryVideos(activeCategory);
  // Number every real video sequentially within its category, starting at 1;
  // placeholders ("Coming Soon") stay unnumbered.
  let realCounter = 0;
  const categoryAllVideos = categoryAllVideosRaw.map((v) =>
    v.type === "placeholder" ? v : { ...v, number: ++realCounter },
  );
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
      <CloseButton force />

      <section className="w-full bg-white px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10">
        <div className="mx-auto max-w-[1000px]">
          {/* Intro */}
          <div className="text-center">
            <p className="mx-auto max-w-[900px] text-[22px] leading-[1.6] text-ink sm:text-[24px]">
              {brandify("See how PhishFlagger protects against phishing.")}
            </p>
            <h1 className="mt-4 text-[9px] font-extrabold uppercase tracking-tight text-brand sm:text-[11px]">
              Development Page
            </h1>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-3">
            {VIDEO_CATEGORIES.map((category) => (
              <div key={category} className="flex flex-col items-center gap-1.5">
                <a
                  href={CATEGORY_SCRIPTS[category]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-brand underline hover:text-[#c9002b]"
                >
                  Scripts
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const slug = CATEGORY_SLUGS[category];
                    setPlaying(null);
                    navigate(slug ? `/about/video1/${slug}` : "/about/video1", {
                      replace: true,
                    });
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 hover:scale-120 sm:text-[14px] ${
                    category === activeCategory
                      ? "border-[#5a6066] bg-[#5a6066] text-white"
                      : "border-gray-300 text-ink-muted hover:bg-gray-100 hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          {/* Page number — shown above the grid so it's easy to spot */}
          <div className="mt-3 flex justify-center gap-2 sm:mt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setPlaying(null);
                  setPage(n);
                }}
                aria-current={n === page ? "page" : undefined}
                className={`h-8 w-8 rounded-full text-[13px] font-medium transition-all duration-200 hover:scale-120 ${
                  n === page
                    ? "bg-[#5a6066] text-white"
                    : "text-ink-muted hover:bg-gray-100 hover:text-ink"
                }`}
              >
                {n}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="mx-auto mt-4 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedVideos.map((v, i) => {
              const isPlaying = playing === i;
              return (
                <div
                  key={v.src || `${activeCategory}-${page}-${i}`}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-200 hover:z-10 hover:scale-110 ${
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
                        key={v.src}
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
                    <p className="text-[13px] font-semibold text-ink">
                      {v.number ? `${v.number}: ` : ""}
                      {v.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-ink/70">{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
