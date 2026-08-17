import { useRef } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import whoCanUseImg from "../../assets/images/email-marketing-verified-v9.png";
import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";

const logoMarkImg = "/assets/images/logo-mark.png";

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
      <CloseButton force />
      <PageDownButton containerRef={containerRef} />
      {/* ===== Pane 1 — Email Solutions (no counter; icon row below carries ^0001) ===== */}
      <section className="relative w-full px-4 pb-6 pt-28 sm:px-6 sm:pb-8 sm:pt-28">
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
              <Link
                to="/join/email-free-plug-in"
                aria-label="Join Free — Plug-In Free"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/individual.png"
                  alt="Individual protection illustration"
                  className="h-full w-full object-contain"
                />
              </Link>
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
              <Link
                to="/join/pro"
                aria-label="Join PRO — Plug-in Or Appliance"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black p-1 transition-transform duration-200 hover:scale-110"
              >
                <img
                  src="/assets/images/corporate-image-homepage-v5.png"
                  alt="Domain protection illustration"
                  className="h-full w-full rounded-lg object-contain"
                />
              </Link>
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
              <Link
                to="/join/email-marketing"
                aria-label="Marketing"
                className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={whoCanUseImg}
                  alt="Join PhishFlagger illustration"
                  className="h-[174px] w-[174px] object-contain"
                />
              </Link>
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

      {/* ===== Pane 1.5 — What is PhishFlagger? (Human + Digital text) ===== */}
      <section className="relative w-full px-4 pt-6 pb-6 sm:px-6 sm:pt-8 sm:pb-8">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-[20px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[24px] lg:text-[28px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                / Human
              </h2>
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                <BrandInline trail="Flagger" /> adds a unique, sequential
                identifier to the subject line called the{" "}
                <BrandInline trail="Counter" /> on every outgoing
                communication. Recipients can quickly verify if the sequence
                matches the previous email they received from the same
                sender. If the number is missing or out of sequence, it
                provides an immediate warning that the message may not be
                authentic, giving users a simple way to spot phishing
                attempts.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[20px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[24px] lg:text-[28px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                {" "}/ Digital
              </h2>
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                <BrandInline trail="Flagger" /> strengthens email
                authentication by verifying sender identity at the domain
                level. Working alongside existing email security standards
                and authentication technologies, our domain validation
                screens messages that originate from authorized senders,
                adding an extra layer of protection against impersonation
                and phishing and other attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pane 2 — Contact / Endorse Us / White Paper / FAQ (no background) ===== */}
      <section className="relative w-full px-4 pb-14 pt-2 sm:px-6 sm:pb-20 sm:pt-3">
        <div className="mx-auto max-w-content">
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
            />
            <ActionCard
              to="/white-paper"
              label="White Paper"
              alt="White Paper"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[66px] sm:w-[66px]">
                  <circle cx="12" cy="12" r="11" fill="#e63950" />
                  <rect x="7" y="4.5" width="10" height="15" rx="1.6" fill="white" />
                  <rect x="9" y="7.5" width="6" height="1.4" rx="0.7" fill="#e63950" />
                  <rect x="9" y="10.3" width="6" height="1.4" rx="0.7" fill="#c9c9c9" />
                  <rect x="9" y="13.1" width="4" height="1.4" rx="0.7" fill="#c9c9c9" />
                </svg>
              }
            />
            <ActionCard
              to="/about/faq?category=General"
              label="FAQ"
              alt="FAQ"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[66px] sm:w-[66px]">
                  <circle cx="12" cy="12" r="11" fill="#f59e0b" />
                  <path
                    d="M9.3 9.3a2.7 2.7 0 1 1 4 2.35c-.75.43-1.3.83-1.3 1.75"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="12" cy="16.7" r="1.05" fill="white" />
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
