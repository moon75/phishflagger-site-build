import { useRef } from "react";
import { Link } from "react-router-dom";
import PageCycleArrows from "../../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../../components/ui/topNavLoopPages.js";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import cloudServerImg from "../../assets/images/domain-server-only.png";
import oneOrManyImg from "../../assets/images/six plugin one or more.png";
import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";
import emailSolutionsCardImg from "../../assets/images/email-first-pane-solutions-card.png";

export default function Join() {
  const containerRef = useRef(null);

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
      <section className="relative flex w-full min-h-[480px] flex-col justify-center px-4 pb-6 pt-6 sm:min-h-[560px] sm:px-6 sm:pb-8 sm:pt-8">
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={2} center />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[500px_1fr] lg:gap-4">
          <div className="lg:w-[500px]">
            <img
              src={emailSolutionsCardImg}
              alt="Email Solutions. PhishFlagger protects individuals and organizations who want greater confidence in the authenticity of their emails. Whether you host a domain or use an email client, PhishFlagger adds extra layers of protection against phishing and email impersonation."
              className="block h-auto w-[380px] max-w-full object-contain"
            />
          </div>
          <div className="flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-center lg:pl-8">
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[86px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Plug-In Free
                </span>
              </div>
              <Link
                to="/join/email-free-plug-in"
                aria-label="Join Free — Plug-In Free"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-all duration-200 hover:scale-110 hover:border-4 hover:border-blue-600 hover:bg-blue-100"
              >
                <img
                  src="/assets/images/individual.png"
                  alt="Individual protection illustration"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link
                to="/join/email-free-plug-in"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Free
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="relative mb-[34px] flex h-[86px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Plug-In Pro
                </span>
                <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink sm:text-[17px]">
                  One or Many
                </span>
              </div>
              <Link
                to="/join/pro"
                aria-label="Join PRO — One or Many"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 hover:scale-110 hover:border-4 hover:border-blue-600 hover:bg-blue-100"
              >
                <img
                  src={oneOrManyImg}
                  alt="Domain protection illustration"
                  className="h-full w-full rounded-lg object-contain"
                />
              </Link>
              <Link
                to="/join/pro"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Pro
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="relative mb-[34px] flex h-[86px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Domain
                </span>
                <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink sm:text-[17px]">
                  Appliance
                </span>
              </div>
              <Link
                to="/join/domain"
                aria-label="Join Domain — Domain Appliance"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-1 transition-all duration-200 hover:scale-110 hover:border-4 hover:border-blue-600 hover:bg-blue-100"
              >
                <img
                  src={cloudServerImg}
                  alt="Cloud and server appliance illustration"
                  className="h-full w-full rounded-lg object-contain"
                />
              </Link>
              <Link
                to="/join/domain"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join Domain
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[86px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Marketing
                </span>
              </div>
              <Link
                to="/join/email-marketing"
                aria-label="Marketing"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-all duration-200 hover:scale-110 hover:border-4 hover:border-blue-600 hover:bg-blue-100"
              >
                <img
                  src="/assets/images/Marketing%20Email.png"
                  alt="Join PhishFlagger illustration"
                  className="h-full w-full object-contain"
                />
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
        <div className="mx-auto max-w-content pb-4 pt-2 sm:pb-6 sm:pt-3">
          <div className="flex flex-nowrap justify-center gap-x-3 overflow-x-auto pb-2 sm:gap-x-4">
            <ActionCard
              to="/contact"
              label="Contact"
              src={contactIcon}
              alt="Contact"
              imageClassName="rounded-full object-cover"
            />
            <ActionCard
              to="/join/email-subscribe"
              label="Subscribe"
              src={subscribeIcon}
              alt="Subscribe"
              imageSize="h-[80px] w-[80px] sm:h-[98px] sm:w-[98px]"
            />
            <ActionCard
              to="/help/endorse-us"
              label="Endorse Us"
              src={endorseIcon}
              alt="Endorse Us"
              imageSize="h-[78px] w-[78px] sm:h-[95px] sm:w-[95px]"
            />
            <ActionCard
              to="/human-compatible"
              label="Human"
              alt="Human"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[66px] sm:w-[66px]">
                  <circle cx="12" cy="12" r="11" fill="#6d28d9" />
                  <circle cx="12" cy="9" r="3.2" fill="white" />
                  <path
                    d="M6 18c1.3-3.1 3.6-4.6 6-4.6s4.7 1.5 6 4.6"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              }
            />
            <ActionCard
              to="/digital-verification"
              label="Digital"
              alt="Digital"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[66px] sm:w-[66px]">
                  <circle cx="12" cy="12" r="11" fill="#0ea5e9" />
                  <path
                    d="M12 5.5l6 2.2v4.3c0 3.6-2.4 6.4-6 7.5-3.6-1.1-6-3.9-6-7.5V7.7l6-2.2Z"
                    fill="white"
                  />
                  <path
                    d="M9.3 12.2l1.9 1.9 3.5-3.9"
                    stroke="#0ea5e9"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              }
            />
            <ActionCard
              to="/about/faq?category=General"
              label="FAQ - Email"
              alt="FAQ - Email"
              svgIcon={
                <svg viewBox="6 5 12 15" className="h-[54px] w-[54px] sm:h-[66px] sm:w-[66px]">
                  <path
                    d="M9.3 9.3a2.7 2.7 0 1 1 4 2.35c-.75.43-1.3.83-1.3 1.75"
                    stroke="#4a4a4a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="12" cy="16.7" r="1.05" fill="#4a4a4a" />
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

function ActionCard({
  to,
  label,
  src,
  alt,
  imageClassName = "",
  svgIcon,
  imageSize = "h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]",
  hideLabel = false,
}) {
  return (
    <Link
      to={to}
      className="group flex w-[170px] scale-[0.75] flex-col items-center transition-transform duration-200 ease-out hover:scale-[0.9] sm:w-[200px]"
    >
      <span
        className={`whitespace-nowrap text-center text-[18px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:text-[22px] ${
          hideLabel ? "invisible" : ""
        }`}
      >
        {label}
      </span>
      <div className="mt-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[120px] sm:w-[120px]">
        {svgIcon ?? (
          <img
            src={src}
            alt={alt}
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
