import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrandInline } from "../components/Brand.jsx";
import LogoMark from "../components/ui/LogoMark.jsx";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
import VideoCard from "../components/video/VideoCard.jsx";
import { PUBLIC_VIDEO_CATEGORIES, showcaseVideosForCategory } from "../data/videos.js";
import { isVideo1Unlocked } from "../lib/videoAccess.js";

// The public, default /video page — same category-button + grid layout as
// the full /video1 library, but each category shows only its one curated
// "best of best" pick (padded with "Coming Soon" placeholders), and Oracle /
// Oracle2 are left out entirely (see PUBLIC_VIDEO_CATEGORIES). The full
// library with every video and its script doc lives at /video1, reached via
// the "007" access code on /login — once unlocked that stays saved, so
// landing here goes straight to /video1 until "off"/"OFF" is entered there.
export default function VideoShowcase() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(PUBLIC_VIDEO_CATEGORIES[0]);
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (isVideo1Unlocked()) navigate("/video1", { replace: true });
  }, [navigate]);

  const videos = showcaseVideosForCategory(activeCategory);

  useEffect(() => {
    setPlaying(null);
  }, [activeCategory]);

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
            {PUBLIC_VIDEO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-md border border-black px-2.5 py-1 text-[13px] font-medium transition-transform duration-200 hover:scale-[1.15] hover:text-brand ${
                  category === activeCategory
                    ? "bg-gray-200 text-brand"
                    : "bg-white text-ink"
                }`}
              >
                {category}
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
              {videos.map((v, i) => (
                <VideoCard
                  key={v.src || `${activeCategory}-${i}`}
                  video={v}
                  playing={playing === i}
                  onPlay={() => setPlaying(i)}
                  numbered={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
