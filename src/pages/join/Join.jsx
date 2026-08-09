import { Link } from "react-router-dom";
import whoCanUseImg from "../../assets/images/email-marketing-verified-v9.png";

const logoMarkImg = "/assets/images/logo-mark.png";

export default function Join() {
  return (
    <>
      {/* ===== Pane 1 — Email Solutions (white) ===== */}
      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0001" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[0.9fr_1.6fr]">
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
              Whether you are using a custom domain or a supported email
              service, <BrandInline /> adds extra layers of protection
              against phishing and email impersonation.
            </p>
            <p className="mt-4 text-[15px] text-ink sm:text-[16px]">
              Like what you see.{" "}
              <Link
                to="/help/endorse-us"
                className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                Endorse Us
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap lg:justify-end">
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Plug-In Free
                </span>
              </div>
              <div className="flex h-[225px] w-[225px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white">
                <img
                  src="/assets/images/individual.png"
                  alt="Individual protection illustration"
                  className="h-full w-full object-contain"
                />
              </div>
              <Link
                to="/join/email-free-plug-in"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Join Free
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="relative mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Domain
                </span>
                <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink sm:text-[17px]">
                  Plug- or Appliance
                </span>
              </div>
              <div className="flex h-[225px] w-[225px] items-center justify-center overflow-hidden rounded-xl border-2 border-black p-1">
                <img
                  src="/assets/images/corporate-image-homepage-v5.png"
                  alt="Domain protection illustration"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
              <Link
                to="/join/email-domain"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Join Domain
              </Link>
            </div>
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Marketing
                </span>
              </div>
              <div className="flex h-[225px] w-[225px] items-center justify-center rounded-xl border-2 border-black bg-white">
                <img
                  src={whoCanUseImg}
                  alt="Join PhishFlagger illustration"
                  className="h-[218px] w-[218px] object-contain"
                />
              </div>
              <Link
                to="/join/email-marketing"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Marketing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pane 2 — Telecom / Messaging (gray/tower) ===== */}
      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0002" />
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <h2 className="mb-4 text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              Telecom
            </h2>
            <div className="flex min-h-[280px] w-full flex-1 flex-col rounded-2xl border-2 border-black bg-white p-7 sm:p-10">
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                Placeholder Telecom Join text from join screen
              </p>
            </div>
            <a
              href="https://phishflagger.netlify.app/join/telecom"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[42px] w-fit items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Telecom
            </a>
          </div>

          <div className="flex flex-col items-start">
            <h2 className="mb-4 text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              Messaging
            </h2>
            <div className="flex min-h-[280px] w-full flex-1 flex-col rounded-2xl border-2 border-black bg-white p-7 sm:p-10">
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                Placeholder Messaging Join text from join screen
              </p>
            </div>
            <a
              href="https://phishflagger.netlify.app/join/messaging"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-[42px] w-fit items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Messaging
            </a>
          </div>
        </div>
      </section>
    </>
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
