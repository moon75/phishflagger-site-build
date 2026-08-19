import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import contactIcon from "../../telecom Webpage/assets/images/products/OIP-915219841.png";

const PLACEHOLDER_PANE = [
  { title: "PhishFlagger.org", caption: "Placeholder image for org." },
  { title: "Kickstarter", caption: "Placeholder image for kick." },
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

      {/* ===== Pane 1 — Org / Kickstarter placeholder images ===== */}
      <section className="w-full px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-14">
        <div className="mx-auto w-full">
          <div className="mx-auto flex w-full flex-col items-stretch justify-center gap-6 sm:gap-8 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-center">
            {/* Edge placeholder */}
            <div className="hidden h-full items-center justify-center lg:flex lg:flex-[0.4]">
              <div className="flex h-[220px] w-full items-center justify-center rounded-2xl border-2 border-black bg-white">
                <ImagePlaceholderIcon />
              </div>
            </div>

            {PLACEHOLDER_PANE.map((item) =>
              item.title === "PhishFlagger.org" ? (
                <Link
                  key={item.title}
                  to="/phishflagger-org"
                  className="flex flex-col items-center transition-transform duration-200 hover:scale-[1.02] lg:flex-[1.6]"
                >
                  <h2 className="mb-4 text-center text-[20px] font-bold tracking-tight text-ink sm:text-[24px]">
                    {item.title}
                  </h2>
                  <div className="flex h-[220px] w-full flex-col justify-center gap-2 rounded-2xl border-2 border-black bg-white px-6 py-5 text-left sm:px-8">
                    <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-ink sm:text-[17px]">
                      Our Community of participants who want to help
                    </h3>
                    <p className="line-clamp-4 text-[12px] leading-[1.6] text-ink-muted sm:text-[13px]">
                      <BrandInline /> prevents Phishing cybercrime. Our
                      mission is to make emails safer. We bring together
                      developers, email forwarders and consumers so everyone
                      can identify malicious phishing attempts.
                    </p>
                    <span className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-brand">
                      Visit PhishFlagger.org →
                    </span>
                  </div>
                </Link>
              ) : (
                <div key={item.title} className="flex flex-col items-center lg:flex-[1.6]">
                  <h2 className="mb-4 text-center text-[20px] font-bold tracking-tight text-ink sm:text-[24px]">
                    {item.title}
                  </h2>
                  <div className="flex h-[220px] w-full items-center justify-center rounded-2xl border-2 border-black bg-white">
                    <ImagePlaceholderIcon />
                  </div>
                  <p className="mt-3 text-center text-[13px] text-ink-muted sm:text-[14px]">
                    {item.caption}
                  </p>
                </div>
              )
            )}

            {/* Edge placeholder */}
            <div className="hidden h-full items-center justify-center lg:flex lg:flex-[0.4]">
              <div className="flex h-[220px] w-full items-center justify-center rounded-2xl border-2 border-black bg-white">
                <ImagePlaceholderIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pane 2 — Help links (icon squares) ===== */}
      <section className="w-full px-4 pb-16 pt-4 sm:px-6 sm:pb-24 sm:pt-6">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10 sm:gap-x-10">
            {LINKS.map((item) => (
              <HelpCard key={item.to} {...item} />
            ))}
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
