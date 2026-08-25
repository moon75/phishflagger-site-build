import { Link } from "react-router-dom";
import contactIcon from "../../telecom Webpage/assets/images/products/OIP-915219841.png";
const outlookThunderbirdImg = "/assets/images/thunderbird%20and%20outlook%20for%20kickstarterpage.png";

const logoMarkImg = "/assets/images/logo-mark.png";

const DOMAIN_PROVIDERS = [
  { domains: ["gmail.com"], provider: "Gmail" },
  { domains: ["yahoo.com"], provider: "Yahoo" },
  // Hotmail and Outlook share the same Microsoft icon — one tile, two labels.
  { domains: ["hotmail.com", "outlook.com"], provider: "Outlook" },
];

const LINKS = [
  { to: "/contact", label: "Contact", src: contactIcon, imageClassName: "rounded-full object-cover" },
  { to: "/help/support-desk", label: "Support Desk", icon: <SupportDeskIcon /> },
  { to: "/about/faq", label: "FAQ", icon: <FaqIcon /> },
  { to: "/join/messaging", label: "Messaging", icon: <MessagingIcon /> },
  { to: "/phishflagger-org", label: "PhishFlagger.org", src: logoMarkImg, imageClassName: "p-2" },
  { to: "/demo", label: "Demo", icon: <DemoIcon /> },
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
      <section className="w-full px-4 pt-[50px] pb-4 sm:px-6 sm:pt-[72px] sm:pb-6">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {LINKS.map((item) => (
              <HelpCard key={item.to} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pane 1 — Kickstarter (main box) ===== */}
      <section className="w-full px-4 pt-9 pb-9 sm:px-6 sm:pt-[50px] sm:pb-[50px]">
        <div className="mx-auto w-full">
          <div className="mx-auto flex w-full max-w-[950px] flex-col items-stretch justify-center">
            {/* Kickstarter, full production card */}
            <div className="flex flex-col items-center">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-black bg-[#FFFF00]">
                <div className="bg-white pb-3 sm:pb-4">
                  <div className="flex aspect-[1916/575] w-full justify-center overflow-hidden">
                    <img
                      src={outlookThunderbirdImg}
                      alt="Microsoft Outlook and Mozilla Thunderbird"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div className="px-6 py-3 sm:px-8 sm:py-4">
                  <h4 className="text-[17px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[19px]">
                    Available soon for these domains
                  </h4>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {DOMAIN_PROVIDERS.map(({ domains, provider }) => (
                      <div
                        key={provider}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg bg-[#f4f5f8] px-3 py-4 text-center"
                      >
                        <DomainIcon provider={provider} />
                        <span className="flex flex-col gap-0.5 text-[11.5px] font-semibold text-ink">
                          {domains.map((domain) => (
                            <span key={domain}>{domain}</span>
                          ))}
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
      className="group flex w-[130px] flex-col items-center transition-transform duration-200 hover:scale-105"
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

function MessagingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
      <circle cx="12" cy="12" r="11" fill="#2a6df4" />
      <path
        d="M6 8.5A1.5 1.5 0 0 1 7.5 7h9A1.5 1.5 0 0 1 18 8.5v5A1.5 1.5 0 0 1 16.5 15H10l-3 2.5V15h-.5A1.5 1.5 0 0 1 5 13.5v-5Z"
        fill="white"
      />
    </svg>
  );
}

function DemoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
      <circle cx="12" cy="12" r="11" fill="#8b5cf6" />
      <path d="M10 8.3v7.4a.9.9 0 0 0 1.36.77l6.1-3.7a.9.9 0 0 0 0-1.54l-6.1-3.7A.9.9 0 0 0 10 8.3Z" fill="white" />
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
