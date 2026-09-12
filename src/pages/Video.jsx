import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BrandInline } from "../components/Brand.jsx";
import LogoMark from "../components/ui/LogoMark.jsx";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
import VideoCard from "../components/video/VideoCard.jsx";
import {
  VIDEO_CATEGORIES,
  CATEGORY_SLUGS,
  SLUG_CATEGORIES,
  CATEGORY_SCRIPTS,
  VIDEOS_PER_PAGE,
  categoryVideos,
} from "../data/videos.js";

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
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-[var(--hero-pane-pt)] pb-[var(--hero-pane-pb)] sm:px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={1} center topClass="top-0 sm:top-2" />
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
                {CATEGORY_SCRIPTS[category] ? (
                  <a
                    href={CATEGORY_SCRIPTS[category]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-[#f28b96] underline transition-colors hover:text-brand-hover"
                  >
                    Scripts
                  </a>
                ) : (
                  <span className="text-[13px] font-semibold text-transparent" aria-hidden>
                    Scripts
                  </span>
                )}
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

          {/* Page number — shown above the grid so it's easy to spot. Hidden
              when there's only one page, since there's nothing to page
              between. */}
          {totalPages > 1 && (
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
                className={`cursor-pointer rounded-md border border-black px-2.5 py-1 text-[13px] font-medium text-ink transition-transform duration-200 hover:scale-[1.15] hover:text-brand ${
                  n === page ? "bg-gray-200" : "bg-white"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
          )}
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
            {displayedVideos.map((v, i) => (
              <VideoCard
                key={v.src || `${activeCategory}-${page}-${i}`}
                video={v}
                playing={playing === i}
                onPlay={() => setPlaying(i)}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
