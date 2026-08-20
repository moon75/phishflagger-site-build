import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import contactIcon from "../../telecom Webpage/assets/images/products/OIP-915219841.png";
import communityImg from "../assets/images/commnity image.avif";

const logoMarkImg = "/assets/images/logo-mark.png";
const howDoesItWorkImg = "/assets/images/How%20does%20phishflagger%20work-v3-transparent.png";

const DOMAIN_PROVIDERS = [
  { domain: "gmail.com", provider: "Gmail" },
  { domain: "yahoo.com", provider: "Yahoo" },
  { domain: "hotmail.com", provider: "Hotmail" },
  { domain: "outlook.com", provider: "Outlook" },
];

const LINKS = [
  { to: "/contact", label: "Contact", src: contactIcon, imageClassName: "rounded-full object-cover" },
  { to: "/help/support-desk", label: "Support Desk", icon: <SupportDeskIcon /> },
  { to: "/about/faq", label: "FAQ", icon: <FaqIcon /> },
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
      <CloseButton force />

      {/* ===== Pane 2 — Help links (icon squares) ===== */}
      <section className="w-full px-4 pt-14 pb-4 sm:px-6 sm:pt-20 sm:pb-6">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {LINKS.map((item) => (
              <HelpCard key={item.to} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pane 1 — Org / Kickstarter ===== */}
      <section className="w-full px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-14">
        <div className="mx-auto w-full">
          <div className="mx-auto flex w-full max-w-content flex-col items-stretch justify-center gap-6 sm:gap-8 lg:flex-row lg:flex-nowrap lg:items-stretch lg:justify-center">
            {/* Left — PhishFlagger.org, full production card */}
            <div className="flex flex-[1.3] flex-col items-center">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-6 py-4 sm:px-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoMarkImg}
                      alt="PhishFlagger envelope and flag mark"
                      className="h-[30px] w-auto object-contain sm:h-[36px]"
                    />
                    <span className="text-[15px] font-bold tracking-tight text-ink sm:text-[17px]">
                      Phish<span className="font-normal text-brand">Flagger</span>.org
                    </span>
                  </div>
                  <Link
                    to="/phishflagger-org"
                    className="inline-flex h-[36px] items-center justify-center gap-1.5 rounded-[7px] bg-[#585858] px-5 text-[13px] font-semibold text-white transition duration-200 hover:scale-[1.05] hover:bg-[#3f3f3f]"
                  >
                    Visit PhishFlagger.org →
                  </Link>
                </div>

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[26px]">
                    Our Community of participants who want to help
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-muted sm:text-[14.5px]">
                    <BrandInline /> prevents Phishing cybercrime. Our mission
                    is to make emails safer. To solve this crisis, we bring
                    together developers, email forwarders and consumers.
                    Implementation of the <BrandInline /> Protocol can
                    empower everyone to identify malicious Phishing attempts.
                    Whether you can contribute as a developer, need
                    resources, want to share your knowledge, or have been
                    victimized — our Community is open to anyone who cares.
                  </p>
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div className="grid grid-cols-1 items-center gap-6 px-6 py-6 sm:grid-cols-[160px_1fr] sm:px-8 sm:py-8">
                  <Link to="/community" className="mx-auto flex flex-col items-center sm:mx-0">
                    <img
                      src={communityImg}
                      alt="People holding hands in community"
                      className="h-auto w-full max-w-[160px] object-contain"
                    />
                    <span className="mt-3 inline-block rounded-md bg-[#2b2b2b] px-3 py-1 text-[11px] font-semibold text-white">
                      Community
                    </span>
                  </Link>

                  <div className="text-center sm:text-left">
                    <h4 className="text-[17px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[19px]">
                      Participate and Help Improve{" "}
                      <BrandInline />
                    </h4>
                    <p className="mt-2 text-[13px] leading-[1.65] text-ink-muted sm:text-[13.5px]">
                      There are a number of ways to get involved with{" "}
                      <BrandInline />: general discussions, questions, and
                      comments. Join the email discussion list to ask
                      questions about deploying <BrandInline /> or share your
                      operational experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Kickstarter, full production card */}
            <div className="flex flex-[1.3] flex-col items-center">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-white">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 px-6 py-4 sm:px-8">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoMarkImg}
                      alt="PhishFlagger envelope and flag mark"
                      className="h-[30px] w-auto object-contain sm:h-[36px]"
                    />
                    <span className="text-[15px] font-bold tracking-tight text-ink sm:text-[17px]">
                      <BrandInline /> Kickstarter
                    </span>
                  </div>
                  <Link
                    to="/kick"
                    className="inline-flex h-[36px] items-center justify-center gap-1.5 rounded-[7px] bg-[#585858] px-5 text-[13px] font-semibold text-white transition duration-200 hover:scale-[1.05] hover:bg-[#3f3f3f]"
                  >
                    Visit Kickstarter →
                  </Link>
                </div>

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h3 className="text-[22px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[26px]">
                    How Does <BrandInline /> Work?
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-muted sm:text-[14.5px]">
                    Every email gets a human-readable{" "}
                    <span className="font-semibold text-ink">PhishCounter</span>{" "}
                    in the subject line and a domain-level check.
                  </p>
                  <div className="mt-5 flex justify-center rounded-xl bg-[#f4f5f8] p-4">
                    <img
                      src={howDoesItWorkImg}
                      alt="How Does PhishFlagger Work? Human validation via PhishCounter subject line, digital validation via sending domain checks"
                      className="h-auto w-full max-w-[280px] object-contain"
                    />
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div className="px-6 py-6 sm:px-8 sm:py-8">
                  <h4 className="text-[17px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[19px]">
                    Available now for these domains
                  </h4>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {DOMAIN_PROVIDERS.map(({ domain, provider }) => (
                      <div
                        key={domain}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg bg-[#f4f5f8] px-3 py-4 text-center"
                      >
                        <DomainIcon provider={provider} />
                        <span className="text-[11.5px] font-semibold text-ink">
                          {domain}
                        </span>
                      </div>
                    ))}
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
      className="group flex w-[110px] flex-col items-center transition-transform duration-200 hover:scale-105"
    >
      <span className="mb-3 whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-[0.14em] text-ink-muted sm:text-[14px]">
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
    <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
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

function DomainIcon({ provider }) {
  if (provider === "Gmail") {
    return (
      <svg viewBox="0 0 64 48" className="h-6 w-9" aria-label="Gmail">
        <path d="M5 10v31h10V20l17 13 17-13v21h10V10l-7-5-20 16L12 5Z" fill="#ea4335" />
        <path d="M5 10v31h10V20L5 13Z" fill="#4285f4" />
        <path d="M49 20v21h10V13Z" fill="#34a853" />
      </svg>
    );
  }

  if (provider === "Yahoo") {
    return (
      <span className="text-[15px] font-black italic tracking-[-0.08em] text-[#6001d2]">
        YAHOO!
      </span>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6" aria-hidden="true">
      <rect x="2" y="2" width="17" height="17" fill="#f25022" />
      <rect x="21" y="2" width="17" height="17" fill="#7fba00" />
      <rect x="2" y="21" width="17" height="17" fill="#00a4ef" />
      <rect x="21" y="21" width="17" height="17" fill="#ffb900" />
    </svg>
  );
}
