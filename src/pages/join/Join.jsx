import { Link } from "react-router-dom";
import whoCanUseImg from "../../assets/images/email-marketing-verified-v9.png";

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
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap items-start justify-center gap-8 lg:flex-nowrap">
            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Plug-In Free
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white">
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
              <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-xl border-2 border-black p-1">
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
              <div className="flex h-[180px] w-[180px] items-center justify-center rounded-xl border-2 border-black bg-white">
                <img
                  src={whoCanUseImg}
                  alt="Join PhishFlagger illustration"
                  className="h-[174px] w-[174px] object-contain"
                />
              </div>
              <Link
                to="/join/email-marketing"
                className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Marketing
              </Link>
            </div>

            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Telecom
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] flex-col justify-center rounded-2xl border-2 border-black bg-white p-4 sm:p-5">
                <p className="text-[12px] leading-[1.6] text-ink sm:text-[13px]">
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

            <div className="flex w-auto flex-col items-center">
              <div className="mb-[34px] flex h-[62px] items-end justify-center">
                <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                  Messaging
                </span>
              </div>
              <div className="flex h-[180px] w-[180px] flex-col justify-center rounded-2xl border-2 border-black bg-white p-4 sm:p-5">
                <p className="text-[12px] leading-[1.6] text-ink sm:text-[13px]">
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
        </div>
      </section>
    </div>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}
