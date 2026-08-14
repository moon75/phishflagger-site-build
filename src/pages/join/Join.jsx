import { Link } from "react-router-dom";
import whoCanUseImg from "../../assets/images/email-marketing-verified-v9.png";

const logoMarkImg = "/assets/images/logo-mark.png";

export default function Join() {
  return (
    <div
      className="relative w-full bg-[#eef0f4] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ===== Pane 1 — Email Solutions ===== */}
      <section className="relative w-full px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <SectionCounter value="^0001" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[500px_1fr] lg:gap-4">
          <div className="lg:w-[500px]">
            <div className="mb-6 flex items-center justify-start gap-5">
              <img
                src={logoMarkImg}
                alt="PhishFlagger envelope and flag mark"
                className="h-[52px] w-auto shrink-0 object-contain sm:h-[64px]"
              />
              <h2 className="whitespace-nowrap text-left text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
                Email Solutions
              </h2>
            </div>
            <p className="text-[15px] leading-[1.65] text-ink sm:text-[16px] sm:leading-[1.6]">
              <BrandInline /> protects individuals and organizations who
              want greater confidence in the authenticity of their emails.
              Whether you host a domain or use an email client,{" "}
              <BrandInline /> adds extra layers of protection against
              phishing and email impersonation.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-center lg:pl-8">
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Plug-In Free
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-transform duration-200 hover:scale-110">
                <img
                  src="/assets/images/individual.png"
                  alt="Individual protection illustration"
                  className="h-full w-full object-contain"
                />
              </div>
              <Link
                to="/join/email-free-plug-in"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] duration-200 hover:scale-[1.2]"
              >
                Join Free
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="relative mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap rounded-[4px] bg-[#FFE600] px-2 py-0.5 text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  PRO
                </span>
                <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink sm:text-[17px]">
                  Plug-in Or Appliance
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black p-1 transition-transform duration-200 hover:scale-110">
                <img
                  src="/assets/images/corporate-image-homepage-v5.png"
                  alt="Domain protection illustration"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <Link
                to="/join/pro"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] duration-200 hover:scale-[1.2]"
              >
                Join
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Marketing
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-transform duration-200 hover:scale-110">
                <img
                  src={whoCanUseImg}
                  alt="Join PhishFlagger illustration"
                  className="h-[174px] w-[174px] object-contain"
                />
              </div>
              <Link
                to="/join/email-marketing"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition hover:bg-[#3f3f3f] duration-200 hover:scale-[1.2]"
              >
                Marketing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pane 2 — Contact / Endorse Us / More Info / White Paper / Messages (no background) ===== */}
      <section className="relative w-full px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <SectionCounter value="^0002" />
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
            <ActionCard
              to="/contact"
              label="Contact"
              alt="Contact"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]">
                  <circle cx="12" cy="12" r="11" fill="#2a6df4" />
                  <circle cx="12" cy="9.6" r="3.4" fill="white" />
                  <path
                    d="M5 19c0-3.7 3.13-6.5 7-6.5s7 2.8 7 6.5"
                    fill="white"
                  />
                </svg>
              }
            />
            <ActionCard
              to="/help/endorse-us"
              label="Endorse Us"
              alt="Endorse Us"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]">
                  <circle cx="12" cy="12" r="11" fill="#7c3aed" />
                  <circle cx="9.3" cy="9" r="2.7" fill="white" />
                  <path d="M4.5 18.5c0-2.9 2.15-5.2 4.8-5.2 1.1 0 2.1.4 2.9 1.05a5.3 5.3 0 0 0-1.5 3.7v.45H4.5z" fill="white" />
                  <circle cx="17" cy="15.5" r="4.7" fill="#22c55e" />
                  <path
                    d="M14.8 15.6l1.5 1.5 3-3.2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              }
            />
            <ActionCard
              to="/digital-ino"
              label="More Info"
              alt="More Info"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]">
                  <circle cx="12" cy="12" r="11" fill="#2a6df4" />
                  <rect x="10.9" y="10.4" width="2.2" height="7" rx="1.1" fill="white" />
                  <circle cx="12" cy="7.1" r="1.4" fill="white" />
                </svg>
              }
            />
            <ActionCard
              to="/white-paper"
              label="White Paper"
              alt="White Paper"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]">
                  <circle cx="12" cy="12" r="11" fill="#e63950" />
                  <rect x="7" y="4.5" width="10" height="15" rx="1.6" fill="white" />
                  <rect x="9" y="7.5" width="6" height="1.4" rx="0.7" fill="#e63950" />
                  <rect x="9" y="10.3" width="6" height="1.4" rx="0.7" fill="#c9c9c9" />
                  <rect x="9" y="13.1" width="4" height="1.4" rx="0.7" fill="#c9c9c9" />
                </svg>
              }
            />
            <ActionCard
              to="/join/messaging"
              label="Messages"
              alt="Messages"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px]">
                  <circle cx="12" cy="12" r="11" fill="#14b8a6" />
                  <path
                    d="M6 8.5h12v7.5H10l-3.3 2.6V16H6V8.5z"
                    fill="white"
                  />
                  <circle cx="9" cy="12.2" r="0.9" fill="#14b8a6" />
                  <circle cx="12" cy="12.2" r="0.9" fill="#14b8a6" />
                  <circle cx="15" cy="12.2" r="0.9" fill="#14b8a6" />
                </svg>
              }
            />
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
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center transition-transform duration-200 ease-out hover:scale-[1.2]"
    >
      <span className="text-[18px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:text-[22px]">
        {label}
      </span>
      <div className="mt-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-2 border-black bg-white sm:h-[120px] sm:w-[120px]">
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

function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-bold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}
