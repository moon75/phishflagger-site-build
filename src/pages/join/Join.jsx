import BluePersonFilter from "../../components/ui/BluePersonFilter.jsx";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageCycleArrows from "../../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../../components/ui/topNavLoopPages.js";
import cloudServerImg from "../../assets/images/domain-server-only animated.gif";
import cloudServerStill from "../../assets/images/domain-server-only.png";
import oneOrManyStill from "../../assets/images/six plugin one or more.png";
import subscribeIcon from "../../assets/images/checkbox-icon.png";
import endorseIcon from "../../assets/images/endorse-us-removebg-preview.png";
import emailSolutionsCardImg from "../../assets/images/email-first-pane-solutions-card.png";
import { publicPath } from "../../lib/publicPath.js";

const MARKETING_HOVER_HOLD_MS = 2000;

// Same self-contained hover-to-play pattern as PhonePlaceholder on the
// homepage (Home.jsx) — mounting a brand-new <img src="...gif"> on every
// hover forces the browser to fetch and decode it fresh, so playback always
// restarts from frame one instead of showing whatever frame a reused image
// resource had already finished on.
function HoverGif({ stillSrc, gifSrc, alt, className, active }) {
  const [playKey, setPlayKey] = useState(0);
  const wasActiveRef = useRef(false);

  useEffect(() => {
    if (active && !wasActiveRef.current) {
      setPlayKey((key) => key + 1);
    }
    wasActiveRef.current = active;
  }, [active]);

  const separator = gifSrc.includes("?") ? "&" : "?";
  const playSrc = `${gifSrc}${separator}play=${playKey}`;

  return (
    <div className="relative h-full w-full">
      <img src={stillSrc} alt={alt} className={className} draggable={false} />
      {active && (
        <img
          key={playKey}
          src={playSrc}
          alt={alt}
          className={`absolute inset-0 ${className}`}
          draggable={false}
        />
      )}
    </div>
  );
}

// Some source GIFs refuse to animate in real-world browsers despite being
// valid multi-frame files (confirmed: the frame data itself is fine, but
// native <img> GIF playback silently freezes on frame one). Cycling plain
// PNG frames on a timer sidesteps GIF playback entirely and is universally
// reliable, since it's just swapping ordinary <img> sources.
function HoverFrames({ stillSrc, frames, alt, className, active }) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Warm the browser cache for every frame up front so the swap during
  // playback never has to wait on a fresh network fetch + decode (that
  // stall is what shows up as a flash/glitch on the first frame change).
  useEffect(() => {
    const preloaded = frames.map((frame) => {
      const img = new Image();
      img.src = frame.src;
      return img;
    });
    return () => {
      preloaded.length = 0;
    };
  }, [frames]);

  // Hold on the still image for a beat before starting playback, same as
  // the marketing card's hover hold below.
  useEffect(() => {
    if (!active) {
      setPlaying(false);
      return undefined;
    }
    const holdTimeoutId = window.setTimeout(() => setPlaying(true), MARKETING_HOVER_HOLD_MS);
    return () => window.clearTimeout(holdTimeoutId);
  }, [active]);

  useEffect(() => {
    if (!playing) {
      setFrameIndex(0);
      return undefined;
    }

    let cancelled = false;
    let timeoutId = null;

    function scheduleFrame(index) {
      if (index >= frames.length - 1) return;
      timeoutId = window.setTimeout(() => {
        if (cancelled) return;
        setFrameIndex(index + 1);
        scheduleFrame(index + 1);
      }, frames[index].duration);
    }

    setFrameIndex(0);
    scheduleFrame(0);

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [playing, frames]);

  return (
    <div className="relative h-full w-full">
      <img
        src={stillSrc}
        alt={alt}
        className={className}
        draggable={false}
        style={playing ? { visibility: "hidden" } : undefined}
      />
      {playing && (
        <img
          src={frames[frameIndex].src}
          alt={alt}
          className={`absolute inset-0 ${className}`}
          draggable={false}
        />
      )}
    </div>
  );
}

const INDIVIDUAL_FRAME_DURATIONS = [100, 1500, 1500, 1500, 1500, 100];
const INDIVIDUAL_FRAMES = INDIVIDUAL_FRAME_DURATIONS.map((duration, i) => ({
  src: publicPath(`/assets/images/individual-frames/frame-${i}.png`),
  duration,
}));

const PLUGIN_PRO_FRAME_DURATIONS = [100, 1500, 1500, 1500, 1500, 100];
const PLUGIN_PRO_FRAMES = PLUGIN_PRO_FRAME_DURATIONS.map((duration, i) => ({
  src: publicPath(`/assets/images/plugin-pro-frames/frame-${i}.png`),
  duration,
}));

export default function Join() {
  const containerRef = useRef(null);
  const [hoveredPlanCard, setHoveredPlanCard] = useState(null);
  // Marketing is not a GIF, so it keeps its separate existing hover hold.
  const [marketingCardHoverKey, setMarketingCardHoverKey] = useState(0);
  const [marketingPlaying, setMarketingPlaying] = useState(false);
  const marketingHoldTimeoutRef = useRef(null);
  function handleMarketingMouseEnter() {
    marketingHoldTimeoutRef.current = window.setTimeout(() => {
      setMarketingCardHoverKey((k) => k + 1);
      setMarketingPlaying(true);
    }, MARKETING_HOVER_HOLD_MS);
  }
  function handleMarketingMouseLeave() {
    if (marketingHoldTimeoutRef.current) {
      window.clearTimeout(marketingHoldTimeoutRef.current);
      marketingHoldTimeoutRef.current = null;
    }
    setMarketingPlaying(false);
  }
  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#eef0f4] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ===== Pane 1 — Email Solutions (no counter; icon row below carries ^0001) ===== */}
      <section className="relative flex w-full flex-col px-4 pt-[var(--hero-pane-pt)] pb-[var(--hero-pane-pb)] sm:px-6">
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={1} center topClass="top-0 sm:top-2" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-start gap-10 sm:gap-16 lg:grid-cols-[500px_1fr] lg:gap-4">
          <div className="flex justify-center lg:block lg:w-[500px]">
            <img
              src={emailSolutionsCardImg}
              alt="Email Solutions. PhishFlagger protects individuals and organizations who want greater confidence in the authenticity of their emails. Whether you host a domain or use an email client, PhishFlagger adds extra layers of protection against phishing and email impersonation."
              className="block h-auto w-[380px] max-w-full object-contain pic-with-no-link-mouse-over-increase"
            />
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-8 sm:gap-8 lg:justify-center lg:pl-8">
            <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-8 sm:gap-8 lg:-mt-[55px]">
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/email-free-plug-in"
                state={{ from: "/email" }}
                onMouseEnter={() => setHoveredPlanCard("free")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                aria-label="Join Free — Plug-In Free"
                className="group flex flex-col items-center transition-transform duration-200 will-change-transform hover:scale-110"
              >
                <div className="mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors sm:text-[25px]">
                    Plug-In Free
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverFrames
                    stillSrc={publicPath("/assets/images/individual.png")}
                    frames={INDIVIDUAL_FRAMES}
                    alt="Individual protection illustration"
                    className="h-full w-full object-contain"
                    active={hoveredPlanCard === "free"}
                  />
                </div>
              </Link>
              <Link
                to="/join/email-free-plug-in"
                state={{ from: "/email" }}
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                Join Free
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/pro"
                state={{ from: "/email" }}
                onMouseEnter={() => setHoveredPlanCard("pro")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                aria-label="Join PRO — Individual / Group"
                className="group flex flex-col items-center transition-transform duration-200 will-change-transform hover:scale-110"
              >
                <div className="relative mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors sm:text-[25px]">
                    Plug-In Pro
                  </span>
                  <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink transition-colors sm:text-[17px]">
                    Individual / Group
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverFrames
                    stillSrc={oneOrManyStill}
                    frames={PLUGIN_PRO_FRAMES}
                    alt="Domain protection illustration"
                    className="h-full w-full rounded-lg object-contain"
                    active={hoveredPlanCard === "pro"}
                  />
                </div>
              </Link>
              <Link
                to="/join/pro"
                state={{ from: "/email" }}
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                Join Pro
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/domain"
                state={{ from: "/email" }}
                onMouseEnter={() => setHoveredPlanCard("domain")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                aria-label="Join Domain — Domain Appliance"
                className="group flex flex-col items-center transition-transform duration-200 will-change-transform hover:scale-110"
              >
                <div className="relative mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors sm:text-[25px]">
                    Domain
                  </span>
                  <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink transition-colors sm:text-[17px]">
                    Appliance
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverGif
                    stillSrc={cloudServerStill}
                    gifSrc={cloudServerImg}
                    alt="Cloud and server appliance illustration"
                    className="h-full w-full rounded-lg object-contain"
                    active={hoveredPlanCard === "domain"}
                  />
                </div>
              </Link>
              <Link
                to="/join/domain"
                state={{ from: "/email" }}
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                Join Domain
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/email-marketing"
                state={{ from: "/email" }}
                aria-label="Marketing"
                onMouseEnter={handleMarketingMouseEnter}
                onMouseLeave={handleMarketingMouseLeave}
                className={`group flex flex-col items-center transition-transform duration-200 hover:scale-110 ${marketingPlaying ? "is-playing" : ""}`}
              >
                <div className="mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="-translate-x-1.5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors sm:text-[25px]">
                    Marketing
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <MarketingEmailTextCard key={marketingCardHoverKey} />
                </div>
              </Link>
              <Link
                to="/join/email-marketing"
                state={{ from: "/email" }}
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                Marketing
              </Link>
            </div>
            </div>
          </div>
        </div>

        {/* ===== Contact / Endorse Us / White Paper / FAQ (no background) =====
            Kept inside the Pane 1 <section> (not its own <section>) so the
            global page-down tab's "next <section>" lookup skips straight to
            #join-human-digital, the first pane with its own page-down
            button pair, instead of stopping here. ===== */}
        <div className="mx-auto max-w-content px-2 pb-0 pt-8 sm:pt-12">
          <BluePersonFilter id="email-person-blue" />
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 pb-2 sm:gap-x-3 lg:flex-nowrap">
            <ActionCard
              to="/contact"
              state={{ from: "/email" }}
              label="Contact"
              alt="Contact"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]">
                  <circle cx="12" cy="8.5" r="4" fill="#2563eb" />
                  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="#2563eb" />
                </svg>
              }
            />
            <ActionCard
              to="/join/email-subscribe"
              state={{ from: "/email" }}
              label="Subscribe"
              src={subscribeIcon}
              bluePerson
              alt="Subscribe"
            />
            <ActionCard
              to="/resources/endorse-us"
              state={{ from: "/email" }}
              label="Endorse"
              src={endorseIcon}
              bluePerson
              alt="Endorse Us"
            />
            <ActionCard
              to="/about/faq?category=Email%20-%20Plug-In%20(Free)"
              state={{ from: "/email" }}
              label={<span className="whitespace-nowrap">FAQ - Email</span>}
              alt="FAQ - Email"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[64px] w-[64px] sm:h-[78px] sm:w-[78px]">
                  <path
                    d="M9.3 8.3a2.7 2.7 0 1 1 4 2.35c-.75.43-1.3.83-1.3 1.75"
                    stroke="#eab308"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="12" cy="15.7" r="1.3" fill="#eab308" />
                </svg>
              }
            />
            <ActionCard
              to="/download"
              state={{ from: "/email" }}
              label="Download"
              alt="Download Page"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[64px] w-[64px] sm:h-[78px] sm:w-[78px]">
                  <path
                    d="M12 3v11m0 0l-4-4m4 4l4-4"
                    stroke="#2563eb"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"
                    stroke="#2563eb"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function MarketingEmailTextCard() {
  const rows = [
    { subject: "^5003 Your monthly statement" },
    { subject: "Low Rate Credit Card of", flagged: true },
    { subject: "^5002 Your Investing transaction" },
    { subject: "^5001 Alert: Your Account Balance" },
  ];

  return (
    <div
      role="img"
      aria-label="Four ABC Bank email subjects, with the low-rate credit-card message highlighted"
      className="m-1 flex h-[calc(100%-8px)] w-[calc(100%-8px)] flex-col overflow-hidden rounded-[10px] bg-transparent text-left"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      {rows.map((row, index) => (
        <div
          key={row.subject}
          className={`marketing-inbox-row flex min-h-0 flex-1 flex-col justify-center pl-1.5 pr-4 ${
            row.flagged ? "bg-[#fde8ec]" : "bg-transparent"
          } ${index < rows.length - 1 ? "border-b border-[#d8d8d8]" : ""}`}
          style={{
            // Bottom row (highest array index, lowest PhishCounter number)
            // appears first — each row above it follows in turn, like
            // messages arriving oldest-first, one at a time. Each row runs
            // its own named keyframes (row-msg-a..d, in index.css) sharing
            // one slow 8s cycle, instead of a per-row delay — that keeps
            // all four in sync forever across loops.
            animationName: ["row-msg-d", "row-msg-c", "row-msg-b", "row-msg-a"][index],
          }}
        >
          <span className="text-[12px] font-semibold leading-none text-[#075cff]">
            ABC Bank
          </span>
          <span className="mt-1 whitespace-nowrap text-[11px] font-normal leading-none text-black">
            {row.subject}
          </span>
        </div>
      ))}
    </div>
  );
}

function ActionCard({
  to,
  state,
  label,
  src,
  alt,
  imageClassName = "",
  svgIcon,
  bluePerson = false,
  imageSize = "h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]",
  hideLabel = false,
  disabled = false,
}) {
  const Wrapper = disabled ? "div" : Link;
  const wrapperProps = disabled ? {} : { to, state };

  return (
    <Wrapper
      {...wrapperProps}
      className={`group flex w-[128px] scale-[0.75] flex-col items-center transition-transform duration-200 ease-out sm:w-[172px] ${
        disabled ? "cursor-not-allowed" : "hover:scale-[0.8625]"
      }`}
    >
      <div className="flex min-h-[48px] w-full flex-col items-center justify-end sm:min-h-[58px]">
        <span
          className={`text-center text-[18px] font-bold uppercase leading-tight tracking-[0.18em] text-ink-muted transition-colors sm:text-[22px] ${
            hideLabel ? "invisible" : ""
          }`}
        >
          {label}
        </span>
      </div>
      <div className="relative">
        {disabled && (
          <span className="absolute top-1 -left-4 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
            Coming Soon
          </span>
        )}
        <div
          className={`mt-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-2 border-black bg-white transition-all duration-200 sm:h-[120px] sm:w-[120px] ${
            disabled ? "opacity-50" : "group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100"
          }`}
        >
          {svgIcon ?? (
            <img
              src={src}
              alt={alt}
              style={bluePerson ? { filter: "url(#email-person-blue)" } : undefined}
              className={`object-contain ${imageSize} ${imageClassName}`}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}
