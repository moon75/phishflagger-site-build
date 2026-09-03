import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import JoinPagesNav from "../../components/ui/JoinPagesNav.jsx";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import LogoMark from "../../components/ui/LogoMark.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import outlookThunderbirdImg from "../../assets/images/outlook and thunderbird.png";
import emailInboxImg from "../../assets/images/email-inbox-v4-gray-header.png";

const logoMarkImg = "/assets/images/logo-mark.png";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />
      <JoinPagesNav current={1} />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img
                src={logoMarkImg}
                alt="PhishFlagger envelope and flag mark"
                className="h-[38px] w-auto shrink-0 object-contain pic-with-no-link-mouse-over-increase sm:h-[48px]"
              />
              <h2 className="inline-block text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                PRO
              </h2>
            </div>
            <ul className="space-y-4 text-[15px] leading-[1.6] text-ink sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
              <li className="list-none">
                <strong className="font-bold text-ink">
                  Advanced Email Authentication
                </strong>{" "}
                Strengthen the verification of emails sent and helps
                recipients distinguish legitimate communications from
                impersonated messages. Use the PhishCounter&trade; to provide
                a simple, recognizable method of verifying the sequence and
                authenticity of communications.
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-8 lg:pl-16">
            <div className="flex flex-col items-center">
              <span className="mb-3 text-[22px] font-semibold text-ink sm:text-[25px]">
                One
              </span>
              <div className="img-hover-zoom h-[217px] w-[217px] overflow-hidden rounded-xl border-2 border-black bg-white p-1">
                <img
                  src="/assets/images/corporate-image-homepage-center-person.png"
                  alt="Corporate email protection design"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="mb-3 text-[22px] font-semibold text-ink sm:text-[25px]">
                Many
              </span>
              <div className="img-hover-zoom h-[217px] w-[217px] overflow-hidden rounded-xl border-2 border-black bg-white p-1">
                <img
                  src="/assets/images/corporate-image-homepage-v5.png"
                  alt="Six-person email protection design"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0001" />
        <PageDownButton />
        <div className="mx-auto max-w-content">
          <div className="mx-auto mt-10 flex justify-center sm:mt-14">
            <div className="mx-auto flex w-full max-w-[460px] flex-col">
              <h3 className="mb-3 text-center text-[20px] font-bold uppercase tracking-[0.14em] text-ink">
                Plug-In
              </h3>
              <div className="relative">
                <span className="absolute top-2 -left-2 z-10 -rotate-12 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[14px]">
                  Coming Soon
                </span>
                <div className="flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
                  <div className="flex h-[140px] items-center justify-center overflow-hidden bg-[#EEF0F4] px-5 sm:h-[200px]">
                    <img
                      src={outlookThunderbirdImg}
                      alt="Microsoft Outlook and Mozilla Thunderbird"
                      className="h-full w-full translate-y-1 scale-[1.5] object-contain pic-with-no-link-mouse-over-increase"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 bg-[#FFFF00] p-7 pb-10">
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-4 list-none pl-0 text-center text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                      <li>Windows</li>
                      <li>Linux / Window</li>
                      <li>
                        Placeholder text goes here. Replace this copy with the
                        final content.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0002" />
        <PageDownButton bg="white" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="section-title mb-6 flex items-center justify-center gap-3 text-center sm:justify-start sm:text-left">
              <LogoMark />
              Protect your Brand and Recipients
            </h2>

            <ul className="space-y-2 pl-0">
              <li className="list-none">
                <BrandInline />
                &trade; email numbering helps prevent others
                from impersonating you, your organization, and your brand.
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="mb-1 text-center text-[18px] text-ink sm:text-[21px]">
              <BrandInline trail="Counter" /> protect your Recipients.
            </h2>
            <img
              src={domainProtocolImg}
              alt="Email authentication protocol showing PhishFlagger with outgoing email validation"
              className="img-hover-zoom h-auto w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <PageDownButton />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:gap-6">
            <div className="img-hover-zoom h-[130px] w-[130px] shrink-0 overflow-hidden rounded-xl border-2 border-black sm:h-[180px] sm:w-[180px] lg:h-[240px] lg:w-[240px]">
              <img
                src="/assets/images/domain image for homepage.png"
                alt="City skyline representing corporate domain protection"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
            <div className="img-hover-zoom flex h-[130px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white sm:h-[180px] lg:h-[240px]">
              <img
                src={emailInboxImg}
                alt="PhishFlagger inbox showing numbered emails"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="section-title flex items-center justify-center gap-3 sm:justify-start">
              <LogoMark />
              Protect your Network
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px] lg:mx-0">
              Protect your communication within your network, including
              your customers and suppliers. Stop fraud.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0004" />
        <PageDownButton bg="white" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[420px] rounded-2xl border-2 border-black bg-white p-6 sm:p-8">
            <h3 className="text-[16px] font-bold text-ink sm:text-[18px]">
              What you will receive.
            </h3>
            <div className="mt-4 flex flex-col items-start">
              <span className="rounded-md border border-ink px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-ink sm:text-[13px]">
                Plug-In
              </span>
              <ul className="mt-3 list-disc space-y-2 self-start pl-5 text-[14px] leading-[1.65] text-ink sm:text-[15px]">
                <li>Terms of Service</li>
                <li>Access Key</li>
                <li>Install Plug-In</li>
                <li>Install Instructions</li>
              </ul>
            </div>
          </div>
          <div className="p-6 text-center sm:p-8">
            <p className="mx-auto max-w-[560px]">
              <span className="inline-block rounded-lg bg-[#FFFF00] px-5 py-2 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                As low as $10.00 per Year / per Email
              </span>
            </p>
            <div className="relative mt-6 inline-block">
              <span className="absolute -top-4 -left-6 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
                Coming Soon
              </span>
              <Link
                to="/join-corporate"
                className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] hover:text-btn-hover-red duration-200 hover:scale-[1.2]"
              >
                Join PRO
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-extrabold text-ink">Phish</span>
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
