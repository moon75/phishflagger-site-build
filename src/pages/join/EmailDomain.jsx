import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import LogoMark from "../../components/ui/LogoMark.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import emailInboxImg from "../../assets/images/email-inbox-v4-gray-header.png";
import outlookImg from "../../assets/images/outlook image 90.png";
import { publicPath } from "../../lib/publicPath.js";

const logoMarkImg = publicPath("/assets/images/logo-mark.png");

const PLUGIN_DOWNLOADS = [
  {
    name: "Microsoft Outlook",
    image: outlookImg,
    imageScale: "scale-150",
    alt: "Microsoft Outlook with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Outlook&download=Windows%20Download" },
    ],
  },
  {
    name: "Thunderbird",
    image: publicPath("/assets/images/thunderbird new pick.avif"),
    imageScale: "scale-125",
    alt: "Mozilla Thunderbird with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Thunderbird&download=Windows%20Download" },
      { label: "Linux Download", to: "/plugin-download?client=Thunderbird&download=Linux%20Download" },
    ],
  },
];

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

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
            <div className="group flex flex-col items-center gap-4 p-4 sm:p-5">
              <span className="text-[22px] font-semibold text-ink transition-transform duration-200 group-hover:scale-110 sm:text-[25px]">
                Individual
              </span>
              <div className="pic-with-no-link-mouse-over-increase h-[112px] w-[112px] sm:h-[150px] sm:w-[150px] lg:h-[180px] lg:w-[180px]">
                <img
                  src={publicPath("/assets/images/corporate-image-homepage-center-person.png")}
                  alt="Corporate email protection design"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="group flex flex-col items-center gap-4 p-4 sm:p-5">
              <span className="text-[22px] font-semibold text-ink transition-transform duration-200 group-hover:scale-110 sm:text-[25px]">
                Group
              </span>
              <div className="pic-with-no-link-mouse-over-increase h-[112px] w-[112px] sm:h-[150px] sm:w-[150px] lg:h-[180px] lg:w-[180px]">
                <img
                  src={publicPath("/assets/images/corporate-image-homepage-v5.png")}
                  alt="Six-person email protection design"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0001" />
        <PageDownButton />
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
              className="pic-with-no-link-mouse-over-increase h-auto w-full max-w-[500px] object-contain"
            />
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
          <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:gap-6">
            <div className="pic-with-no-link-mouse-over-increase h-[130px] w-[130px] shrink-0 overflow-hidden rounded-xl border-2 border-black sm:h-[180px] sm:w-[180px] lg:h-[240px] lg:w-[240px]">
              <img
                src={publicPath("/assets/images/domain image for homepage.png")}
                alt="City skyline representing corporate domain protection"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
            <div className="pic-with-no-link-mouse-over-increase flex h-[130px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white sm:h-[180px] lg:h-[240px]">
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

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <PageDownButton />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[300px] rounded-2xl border-2 border-black bg-white p-6 text-center sm:p-8">
            <h3 className="text-[16px] font-bold text-ink sm:text-[18px]">
              You will receive
            </h3>
            <div className="mt-4 flex flex-col items-center">
              <ul className="w-full max-w-[220px] list-outside list-disc space-y-1.5 pl-5 text-left text-[14px] leading-normal text-ink sm:text-[15px]">
                <li>Terms of Service</li>
                <li>Access Key</li>
                <li>Install Plug-In</li>
                <li>Install Instructions</li>
              </ul>
            </div>
          </div>
          <div className="p-6 text-center sm:p-8">
            <p className="mx-auto max-w-[560px]">
              <span className="inline-block rounded-lg px-5 py-2 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                $10.00 per Year / per Email
              </span>
            </p>
            <div className="mt-6 flex flex-col items-center gap-6">
              <div className="relative mt-6 inline-block">
                <span className="absolute -top-4 -left-6 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
                  Coming Soon
                </span>
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white opacity-50"
                >
                  Join PRO
                </button>
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
        <SectionCounter value="^0004" />
        <PageDownButton bg="white" targetSelector="#footer-products" />
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Install Plug-In
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3 md:gap-10">
            {PLUGIN_DOWNLOADS.map((item) => (
              <DownloadCard key={item.name} {...item} />
            ))}

            <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
              <div className="flex h-[176px] items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e8edf5] p-6">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src={logoMarkImg}
                    alt=""
                    className="h-9 w-9 object-contain pic-with-no-link-mouse-over-increase"
                  />
                  <span className="mt-3 text-[15px] font-semibold text-ink">
                    Download Page
                  </span>
                  <span className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[19px] font-bold leading-none text-white">
                    ↓
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-5 text-center">
                <h2 className="text-[15px] font-semibold text-ink">
                  Download Page
                </h2>
                <Link
                  to="/download"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition hover:bg-[#2f2f2f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
                >
                  Go to Download Page
                </Link>
              </div>
            </article>
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

function DownloadCard({ name, image, imageScale = "scale-125", alt, actions }) {
  return (
    <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
      <div className="flex h-[176px] items-center justify-center overflow-hidden bg-[#f7f8fb]">
        <img
          src={image}
          alt={alt}
          className={`h-full w-full -translate-y-3 object-contain pic-with-no-link-mouse-over-increase ${imageScale}`}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-5 text-center">
        <h2 className="text-[15px] font-semibold text-ink">{name}</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition hover:bg-[#2f2f2f] hover:text-btn-hover-red duration-200 hover:scale-[var(--btn-hover-scale)]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
