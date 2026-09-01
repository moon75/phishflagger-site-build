import { Link } from "react-router-dom";
import PageCycleArrows from "../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../components/ui/topNavLoopPages.js";
import contactIcon from "../../telecom Webpage/assets/images/products/OIP-915219841.png";
const outlookThunderbirdImg = "/assets/images/thunderbird%20and%20outlook%20for%20kickstarterpage-yellow.png";

const logoMarkImg = "/assets/images/logo-mark.png";

const LINKS = [
  { to: "/about/faq", label: "FAQ", icon: <FaqIcon /> },
  { to: "/help/support-desk", label: "Support Desk", icon: <SupportDeskIcon /> },
  { to: "/phishflagger-org", label: "PhishFlagger.org", src: logoMarkImg, imageClassName: "p-2" },
  { to: "/contact", label: "Contact", src: contactIcon, imageClassName: "rounded-full object-cover" },
];

export default function Help() {
  return (
    <div
      className="relative w-full bg-[#eef0f4] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ===== Pane 2 — Help links (icon squares) ===== */}
      <section className="relative flex w-full flex-col justify-center px-4 pt-[50px] pb-4 sm:px-6 sm:pt-[72px] sm:pb-6">
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={4} center topClass="top-0 sm:top-2" />
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {LINKS.map((item) => (
              <HelpCard key={item.to} {...item} />
            ))}
            <div className="hidden self-stretch border-l-2 border-black sm:block" aria-hidden />
            <div className="flex flex-col items-start gap-3">
              <Link
                to="/demo"
                className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                Demo
              </Link>
              <Link
                to="/join/messaging"
                className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                Messaging
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pane 1 — Kickstarter (main box) ===== */}
      <section className="w-full px-4 pt-[calc(2.25rem*var(--pane-gap-scale))] pb-[calc(2.25rem*var(--pane-gap-scale))] sm:px-6 sm:pt-[calc(50px*var(--pane-gap-scale))] sm:pb-[calc(50px*var(--pane-gap-scale))]">
        <div className="mx-auto w-full">
          <div className="mx-auto flex w-full max-w-[950px] flex-col items-stretch justify-center">
            {/* Kickstarter, full production card */}
            <div className="flex flex-col items-center">
              <span className="mb-3 text-center text-[13px] font-bold uppercase leading-snug tracking-[0.1em] text-ink-muted sm:text-[14px]">
                Kickstarter
              </span>
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-[#FFFF00]">
                <div className="bg-[#FFFF00] pb-3 sm:pb-4">
                  <div className="flex aspect-[1916/575] w-full justify-center overflow-hidden">
                    <img
                      src={outlookThunderbirdImg}
                      alt="Microsoft Outlook and Mozilla Thunderbird"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function HelpCard({ to, label, icon, src, imageClassName = "" }) {
  return (
    <Link
      to={to}
      className="group flex w-[130px] flex-col items-center transition-transform duration-200 hover:scale-[var(--icon-link-hover-scale)]"
    >
      <span className="mb-3 flex h-[36px] items-end justify-center text-center text-[13px] font-bold uppercase leading-snug tracking-[0.1em] text-ink-muted sm:text-[14px]">
        {label}
      </span>
      <div className="flex h-[90px] w-[90px] items-center justify-center rounded-2xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[100px] sm:w-[100px]">
        {icon ?? (
          <img
            src={src}
            alt={label}
            className={`h-[68px] w-[68px] object-contain sm:h-[75px] sm:w-[75px] ${imageClassName}`}
          />
        )}
      </div>
    </Link>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14 text-gray-300"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.83 0L3 20" />
    </svg>
  );
}

function SupportDeskIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
      <circle cx="12" cy="12" r="11" fill="#16a34a" />
      <path
        d="M6 13a6 6 0 0 1 12 0v3.5a1.5 1.5 0 0 1-1.5 1.5H15v-5h3v-.5a6 6 0 0 0-12 0v.5h3v5H7.5A1.5 1.5 0 0 1 6 16.5z"
        fill="white"
      />
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg viewBox="6 5 12 15" className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
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
  );
}

function BrandInline() {
  return (
    <em className="italic">
      <span className="font-bold text-ink">Phish</span>
      <span className="font-normal text-brand">Flagger</span>
    </em>
  );
}
