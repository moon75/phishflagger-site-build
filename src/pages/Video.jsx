import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BrandInline } from "../components/Brand.jsx";
import LogoMark from "../components/ui/LogoMark.jsx";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
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

const VIDEOS_PER_PAGE = 8;

// Pads a category's video list with "Coming Soon" placeholders up to
// VIDEOS_PER_PAGE, so every category's first page fills a full grid.
// Categories that already have more than VIDEOS_PER_PAGE (e.g. Oracle)
// are left untouched.
function padToFullPage(videos) {
  const missing = VIDEOS_PER_PAGE - videos.length;
  if (missing <= 0) return videos;
  return [
    ...videos,
    ...Array.from({ length: missing }, () => ({
      type: "placeholder",
      title: "Coming Soon",
      description: "",
    })),
  ];
}

const VIDEOS = padToFullPage(BASE_VIDEOS);

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

function categoryVideos(category) {
  if (category === "Feature") return VIDEOS;
  if (category === "Kickstarter") {
    return padToFullPage(KICKSTARTER_VIDEOS);
  }
  if (category === "Learning") {
    return padToFullPage([
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
    ]);
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
      {
        type: "local",
        src: "/assets/video1/Oracle/Granny_monitoring_dog_health_202608212143.mp4",
        title: "Granny Monitoring Dog Health",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Woman_caring_for_pets_at_202608212137.mp4",
        title: "Woman Caring for Pets",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Oracle%20Video1.mp4",
        title: "Oracle Video 1",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Oracle%20Video1%20sameple%202.mp4",
        title: "Oracle Video 1 - Sample 2",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Oracle%20Video1%20sameple%203.mp4",
        title: "Oracle Video 1 - Sample 3",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Pet_health_commercial_storyboard_202608281110.mp4",
        title: "Pet Health Commercial Storyboard",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Oracle%C2%AEBlood%20Glucose%20Meter%20Video.mp4",
        title: "Oracle® Blood Glucose Meter Video",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/BloodSugar.mp4",
        title: "Blood Sugar",
        description: "",
      },
      {
        type: "local",
        src: "/assets/video1/Oracle/Video1%20v2.mp4",
        title: "Video 1 v2",
        description: "",
      },
    ];
  }

  if (category === "Telecom Caller ID") {
    return padToFullPage([
      {
        type: "local",
        src: "/assets/video1/Telecom/PhishFlagger_FINAL_bright_logo.mp4",
        title: "PhishFlagger Telecom / Caller ID",
        description: "",
      },
    ]);
  }

  if (category === "Ads") {
    return padToFullPage([
      {
        type: "local",
        src: "/assets/video1/PhishFlagger_protecting_communications.mp4",
        title: "PhishFlagger - Protecting Communications",
        description: "",
      },
    ]);
  }

  return padToFullPage([]);
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
    <div className="relative w-full bg-white">
      {/* Intro + category links — the only part that keeps the textured
          gray background, spanning the full page width; everything below
          is plain white. */}
      <div
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-6 sm:px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={1} center />
        <div className="mx-auto max-w-[1300px]">
          {/* Intro */}
          <div className="text-center">
            <p className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-2 text-[22px] leading-[1.6] text-ink sm:text-[24px]">
              <span>Watch how</span>
              <LogoMark />
              <BrandInline />
              <span>protects against phishing</span>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 sm:gap-3">
            {VIDEO_CATEGORIES.map((category) => (
              <div key={category} className="flex flex-col items-center gap-1.5">
                <a
                  href={CATEGORY_SCRIPTS[category]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-semibold text-[#e63950] underline transition-colors hover:text-brand-hover"
                >
                  Scripts
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const slug = CATEGORY_SLUGS[category];
                    setPlaying(null);
                    navigate(slug ? `/video1/${slug}` : "/video1", {
                      replace: true,
                    });
                  }}
                  className={`cursor-pointer rounded-md border border-black px-2.5 py-1 text-[13px] font-medium transition-transform duration-200 hover:scale-[1.15] hover:text-brand ${
                    category === activeCategory
                      ? "bg-gray-200 text-brand"
                      : "bg-white text-ink"
                  }`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          {/* Page number — shown above the grid so it's easy to spot */}
          <div className="mt-4 flex justify-center gap-2 sm:mt-5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setPlaying(null);
                  setPage(n);
                }}
                aria-current={n === page ? "page" : undefined}
                className={`h-8 min-w-8 px-2 text-[13px] font-semibold transition duration-200 ${
                  n === page
                    ? "rounded-[7px] bg-[#585858] text-btn-hover-red hover:scale-[1.2] hover:bg-[#3f3f3f]"
                    : "rounded-[7px] text-ink-muted hover:scale-[1.2] hover:bg-[#585858] hover:text-btn-hover-red"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* A <div>, not a <section> — this is the only content block on the
          page, and HeaderTopPageDownTab's "next <section>" lookup would
          otherwise stop here (a no-op scroll) instead of skipping straight
          to the footer's #footer-products page-down/up pair. */}
      <div className="w-full px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10">
        <div className="mx-auto max-w-[1300px]">
          {/* Video grid */}
          <div className="mx-auto mt-4 w-full max-w-[1300px] rounded-2xl bg-white p-4 sm:mt-5 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
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
        </div>
      </div>
    </div>
  );
}
