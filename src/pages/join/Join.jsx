import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageCycleArrows from "../../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../../components/ui/topNavLoopPages.js";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import cloudServerImg from "../../assets/images/domain-server-only animated.gif";
import cloudServerStill from "../../assets/images/domain-server-only.png";
import oneOrManyImg from "../../assets/images/six plugin one or more animated.gif";
import oneOrManyStill from "../../assets/images/six plugin one or more.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";
import emailSolutionsCardImg from "../../assets/images/email-first-pane-solutions-card.png";
import { publicPath } from "../../lib/publicPath.js";

// The three /email plan illustrations are animated GIFs. Show a still
// frame (the *-preview.png) by default and only swap in the GIF while the
// pointer is over the card, then revert to the still on leave. Re-setting
// src to the GIF on each hover also makes it play from its first frame.
function HoverGif({ stillSrc, gifSrc, alt, className, playing: playingProp }) {
  const [playingState, setPlayingState] = useState(false);
  const controlled = playingProp !== undefined;
  const playing = controlled ? playingProp : playingState;
  return (
    <img
      src={playing ? gifSrc : stillSrc}
      alt={alt}
      className={className}
      draggable={false}
      onMouseEnter={controlled ? undefined : () => setPlayingState(true)}
      onMouseLeave={controlled ? undefined : () => setPlayingState(false)}
    />
  );
}

export default function Join() {
  const containerRef = useRef(null);
  // Remounting MarketingEmailTextCard on every mouse-enter (via this key)
  // forces its CSS animation to restart from 0% each time hover begins,
  // instead of relying on the group-hover duration toggle alone.
  const [marketingCardHoverKey, setMarketingCardHoverKey] = useState(0);
  // Which plan card the pointer is currently over — lets the title share
  // the same hover target as the picture, so hovering either one plays the
  // card's GIF and runs the box's hover styling (mirrors the ActionCard
  // buttons lower on the page, where the whole card is one hover group).
  const [hoveredPlanCard, setHoveredPlanCard] = useState(null);

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
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={2} center topClass="top-0 sm:top-2" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[500px_1fr] lg:gap-4">
          <div className="flex justify-center lg:block lg:w-[500px]">
            <img
              src={emailSolutionsCardImg}
              alt="Email Solutions. PhishFlagger protects individuals and organizations who want greater confidence in the authenticity of their emails. Whether you host a domain or use an email client, PhishFlagger adds extra layers of protection against phishing and email impersonation."
              className="block h-auto w-[380px] max-w-full object-contain pic-with-no-link-mouse-over-increase"
            />
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-5 gap-y-8 sm:gap-8 lg:flex-nowrap lg:justify-center lg:pl-8">
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/email-free-plug-in"
                aria-label="Join Free — Plug-In Free"
                onMouseEnter={() => setHoveredPlanCard("free")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
              >
                <div className="mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[25px]">
                    Plug-In Free
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverGif
                    stillSrc={publicPath("/assets/images/individual.png")}
                    gifSrc={publicPath("/assets/images/individual-animated.gif")}
                    alt="Individual protection illustration"
                    className="h-full w-full object-contain"
                    playing={hoveredPlanCard === "free"}
                  />
                </div>
              </Link>
              <Link
                to="/join/email-free-plug-in"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Free
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/pro"
                state={{ from: "/email" }}
                aria-label="Join PRO — One or Many"
                onMouseEnter={() => setHoveredPlanCard("pro")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
              >
                <div className="relative mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[25px]">
                    Plug-In Pro
                  </span>
                  <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[17px]">
                    One or Many
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverGif
                    stillSrc={oneOrManyStill}
                    gifSrc={oneOrManyImg}
                    alt="Domain protection illustration"
                    className="h-full w-full rounded-lg object-contain"
                    playing={hoveredPlanCard === "pro"}
                  />
                </div>
              </Link>
              <Link
                to="/join/pro"
                state={{ from: "/email" }}
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Pro
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/domain"
                aria-label="Join Domain — Domain Appliance"
                onMouseEnter={() => setHoveredPlanCard("domain")}
                onMouseLeave={() => setHoveredPlanCard(null)}
                className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
              >
                <div className="relative mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[25px]">
                    Domain
                  </span>
                  <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[17px]">
                    Appliance
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <HoverGif
                    stillSrc={cloudServerStill}
                    gifSrc={cloudServerImg}
                    alt="Cloud and server appliance illustration"
                    className="h-full w-full rounded-lg object-contain"
                    playing={hoveredPlanCard === "domain"}
                  />
                </div>
              </Link>
              <Link
                to="/join/domain"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Domain
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <Link
                to="/join/email-marketing"
                aria-label="Marketing"
                onMouseEnter={() => setMarketingCardHoverKey((k) => k + 1)}
                className="group flex flex-col items-center transition-transform duration-200 hover:scale-110"
              >
                <div className="mb-8 flex h-[60px] items-end justify-center sm:mb-[34px] sm:h-[86px]">
                  <span className="-translate-x-1.5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand sm:text-[25px]">
                    Marketing
                  </span>
                </div>
                <div className="flex h-[150px] w-[150px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[180px] sm:w-[180px]">
                  <MarketingEmailTextCard key={marketingCardHoverKey} />
                </div>
              </Link>
              <Link
                to="/join/email-marketing"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Marketing
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Contact / Endorse Us / White Paper / FAQ (no background) =====
            Kept inside the Pane 1 <section> (not its own <section>) so the
            global page-down tab's "next <section>" lookup skips straight to
            #join-human-digital, the first pane with its own page-down
            button pair, instead of stopping here. ===== */}
        <div className="mx-auto max-w-content px-2 pb-4 pt-8 sm:pb-6 sm:pt-12">
          <svg width="0" height="0" aria-hidden="true" className="absolute">
            <defs>
              <filter id="email-person-blue" colorInterpolationFilters="sRGB">
                {/* Isolate purple people, preserving neutral envelopes and green checks. */}
                <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 -100 100 0 -1" />
                <feComposite in2="SourceGraphic" operator="in" result="personMask" />
                <feFlood floodColor="#2563EB" />
                <feComposite in2="personMask" operator="in" result="bluePerson" />
                <feComposite in="SourceGraphic" in2="personMask" operator="out" />
                <feComposite in="bluePerson" operator="over" />
              </filter>
            </defs>
          </svg>
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 pb-2 sm:gap-x-3 lg:flex-nowrap">
            <ActionCard
              to="/contact"
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
              label="Subscribe"
              src={subscribeIcon}
              bluePerson
              alt="Subscribe"
            />
            <ActionCard
              to="/help/endorse-us"
              label="Endorse Us"
              src={endorseIcon}
              bluePerson
              alt="Endorse Us"
            />
            <ActionCard
              to="/human-compatible"
              state={{ from: "/email" }}
              label="Human"
              alt="Human"
              src={publicPath("/assets/icons/Human%20icon.png")}
              imageSize="h-[81.6px] w-[81.6px] sm:h-[99.6px] sm:w-[99.6px]"
              bluePerson
            />
            <ActionCard
              to="/digital-verification"
              label="Digital"
              alt="Digital"
              svgIcon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-[64px] w-[64px] sm:h-[78px] sm:w-[78px]"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Binary "10" — a slashed zero for the digital look */}
                  <path d="M5.5 8.5 L8 7 V17" />
                  <ellipse cx="15.5" cy="12" rx="3.3" ry="5" />
                  <line x1="12.7" y1="16.5" x2="18.3" y2="7.5" />
                </svg>
              }
            />
            <ActionCard
              to="/about/faq?category=General"
              label="FAQ - Email"
              alt="FAQ - Email"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[64px] w-[64px] sm:h-[78px] sm:w-[78px]">
                  <path
                    d="M9.3 8.3a2.7 2.7 0 1 1 4 2.35c-.75.43-1.3.83-1.3 1.75"
                    stroke="#f97316"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="12" cy="15.7" r="1.3" fill="#f97316" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ===== Pane 2 placeholder — Human/Digital text moved to /kick ===== */}
      <section id="join-human-digital" className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-14">
        <PageDownButton containerRef={containerRef} />
        <div className="mx-auto max-w-content">
          <div className="flex min-h-[220px] items-center justify-center rounded-2xl border-2 border-black bg-[#FFFF00]">
            <span className="text-[16px] font-semibold text-ink sm:text-[18px]">
              Placeholder
            </span>
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
}) {
  return (
    <Link
      to={to}
      state={state}
      className="group flex w-[128px] scale-[0.75] flex-col items-center transition-transform duration-200 ease-out hover:scale-[0.9] sm:w-[172px]"
    >
      <div className="flex min-h-[48px] w-full flex-col items-center justify-end sm:min-h-[58px]">
        <span
          className={`text-center text-[18px] font-bold uppercase leading-tight tracking-[0.18em] text-ink-muted transition-colors group-hover:text-brand sm:text-[22px] ${
            hideLabel ? "invisible" : ""
          }`}
        >
          {label}
        </span>
      </div>
      <div className="mt-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[120px] sm:w-[120px]">
        {svgIcon ?? (
          <img
            src={src}
            alt={alt}
            style={bluePerson ? { filter: "url(#email-person-blue)" } : undefined}
            className={`object-contain ${imageSize} ${imageClassName}`}
          />
        )}
      </div>
    </Link>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}
