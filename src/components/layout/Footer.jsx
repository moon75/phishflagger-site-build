import { Link, useLocation } from "react-router-dom";
import { nav } from "../../data/nav.js";
import FaqTabs from "../faq/FaqTabs.jsx";
import desktopPhoneImg from "../../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import callerIdPhoneImg from "../../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import emailPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Email v6.png";
import messagesPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import textPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";
import inboxImg from "../../assets/images/email-inbox-v3-balanced.png";
import logoImg from "../../../telecom Webpage/assets/images/logo/pf-logo-v2.png";

const PRODUCT_IMAGES = [
  { src: inboxImg, alt: "PhishFlagger Inbox", frame: true },
  { src: desktopPhoneImg, alt: "Desktop phone", verified: true, imageClass: "translate-y-3" },
  { src: callerIdPhoneImg, alt: "PhishFlagger Caller ID", offsetClass: "" },
  { src: emailPhoneImg, alt: "PhishFlagger Email" },
  { src: messagesPhoneImg, alt: "PhishFlagger Messages" },
  { src: textPhoneImg, alt: "PhishFlagger Text" },
];

export default function Footer({ logoSrc = logoImg }) {
  const { pathname } = useLocation();
  const hideFaq = pathname === "/about/faq";
  const tags = [
    "#phishflagger", "#phishcounter", "#sendmailsafe", "#numbering",
    "#numberingemail", "#cybersecurity", "#emailsecurity",
    "#phishing", "#cyberthreats", "#digitalsecurity",
    "#identityprotection", "#databreach", "#emailphishing", "#ransomware",
    "#callerid",
  ];

  return (
    <>
      {!hideFaq && (
        <>
          <div className="h-1.5 w-full bg-gray-300" aria-hidden />
          <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-[1000px]">
              <h2 className="text-center text-[32px] font-normal leading-[1.5] text-ink sm:text-[40px] sm:leading-[1.45]">
                FAQ
              </h2>

              <div className="mt-8 sm:mt-12">
                <FaqTabs
                  categoryOrder={[0, 2, 1, 3, 4]}
                  showAskAiComingSoon
                />
              </div>
            </div>
          </section>
        </>
      )}

      {!hideFaq && (
        <>
          <div className="h-1.5 w-full bg-gray-300" aria-hidden />
          <section
            className="w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
            }}
          >
            <div className="mx-auto max-w-[1200px]">
              <h2 className="text-center text-[32px] font-normal leading-[1.5] text-ink sm:text-[40px] sm:leading-[1.45]">
                Protecting Communications
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                {PRODUCT_IMAGES.map((item) => (
                  <div
                    key={item.alt}
                    className={`relative flex h-[150px] w-auto items-center sm:h-[190px] ${item.offsetClass || ""}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={`${
                        item.frame
                          ? "h-full w-auto rounded-lg border-2 border-black object-contain"
                          : "h-full w-auto object-contain"
                      } ${item.imageClass || ""}`}
                    />
                    {item.verified && (
                      <span className="absolute top-1 left-[62%] flex translate-x-[calc(-50%+10px)] items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-[#16a34a] sm:text-[15px]">
                        <span className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#22c55e] text-[11px] font-bold leading-none text-white">
                          ✓
                        </span>
                        Verified
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="bg-white font-['Mulish',sans-serif]">
        {/* Top strip — full red, matches header */}
        <div className="h-1.5 w-full bg-brand" aria-hidden />

        <div className="mx-auto max-w-[980px] px-6 pt-9 text-center text-[#3a3a3a] max-sm:px-4 max-sm:pt-7">
          {/* Description paragraph */}
          <div className="mx-auto max-w-[1280px]">
            <p className="text-[24px] leading-[1.55] text-[#4a4a4a] [text-wrap:balance] max-sm:text-[23px]">
              <em className="text-black">
                Phish<strong className="text-[#FF0033]">Flagger</strong>
              </em>{" "}
              prevents impersonation.
              We sequentially number outgoing digital communications and validate sending domain or email.
            </p>
          </div>
        </div>

        {/* Four-column site index — full-width child of <footer>, no vw-based hacks needed */}
        <div className="mt-8 w-full bg-white px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-[860px] text-left">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {/* Column 1 — Company */}
              <div>
                <p className="mb-4 text-[15px] font-bold uppercase tracking-widest text-black">Company</p>
                <ul className="space-y-2.5 list-none p-0">
                  {[
                    { label: "Home", to: "/" },
                    { label: "Demo", to: "/demo" },
                    { label: "Video", to: "/video" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[13px] text-black transition-colors hover:text-[#FF0033]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 — Join */}
              <div>
                <p className="mb-4 text-[15px] font-bold uppercase tracking-widest text-black">Join</p>
                <ul className="space-y-2.5 list-none p-0">
                  {nav
                    .find((item) => item.label === "Join")
                    .children.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-[13px] text-black transition-colors hover:text-[#FF0033]"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Column 3 — Help */}
              <div>
                <p className="mb-4 text-[15px] font-bold uppercase tracking-widest text-black">Help</p>
                <ul className="space-y-2.5 list-none p-0">
                  {[
                    { label: "PhishFlagger.org", to: "/phishflagger-org" },
                    { label: "Kickstarter", to: "/help/kickstarter" },
                    { label: "Hall of Fame", to: "/help/hall-of-fame" },
                    { label: "Email - Endorse Us", to: "/help/endorse-us" },
                    { label: "Email - Supporters", to: "/help/supporters" },
                    { label: "Telecom - Endorse Us", to: "/help/telecom-endorse-us" },
                    { label: "Telecom - Sign Petition", to: "/petition" },
                    { label: "FAQ", to: "/about/faq" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[13px] text-black transition-colors hover:text-[#FF0033]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4 — About */}
              <div>
                <p className="mb-4 text-[15px] font-bold uppercase tracking-widest text-black">About</p>
                <ul className="space-y-2.5 list-none p-0">
                  {[
                    { label: "Video", to: "/about/video" },
                    { label: "Press", to: "/about/press" },
                    { label: "Phishing News", to: "/News" },
                    { label: "Team", to: "/about/team" },
                    { label: "IP", to: "/about/ip" },
                    { label: "Blog", to: "/about/blog" },
                    { label: "Numbering History", to: "/about/numbering-history" },
                    { label: "Fiction", to: "/about/fiction" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[13px] text-black transition-colors hover:text-[#FF0033]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[980px] px-6 pb-[18px] text-center text-[#3a3a3a] max-sm:px-4">
        <div
          className="mx-auto inline-block rounded-2xl bg-[#eef0f4] bg-cover bg-center px-6 py-6 sm:px-8"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          }}
        >
          <ul
            aria-label="Social media"
            className="flex flex-wrap justify-center gap-[18px] list-none p-0"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/phishflagger"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0A66C2] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.66h2.67v8.66zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.84h-2.67v-4.21c0-1 0-2.31-1.41-2.31s-1.62 1.1-1.62 2.24v4.28h-2.67V9.68h2.56v1.18h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.77z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/phishflagger"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M18.244 2H21.5l-7.5 8.575L23 22h-6.844l-5.36-7-6.131 7H1.41l8.02-9.17L1 2h7.02l4.846 6.405L18.244 2zm-1.2 18h1.86L7.05 4H5.06l11.984 16z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCuqevohQftyPjFz35uwY5mg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/PhishFlagger/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1877F2] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

          <div className="mx-auto mt-8">
            <img
              src={logoSrc}
              alt="PhishFlagger"
              className="mx-auto h-auto w-[220px] sm:w-[260px]"
            />
            <p className="mt-2 text-[13px] text-[#4a4a4a]">
              Protecting Communications.
            </p>
          </div>

          <p className="mx-auto mb-2.5 mt-3 whitespace-nowrap text-[10px] leading-[1.4] text-[#4a4a4a] max-sm:whitespace-normal max-sm:text-[9px]">
            US Granted Patents: US20200351275A1, US12238052B2, US12238083B2,
            US12309317B2, US20240305986A1. Pending in 62 Countries.
          </p>

          <p className="mx-auto mt-0.5 text-[10px] text-[#4a4a4a]">
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Flagger</strong>
            </em>{" "}
            and{" "}
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Counter</strong>
            </em>{" "}
            are Trademarks of{" "}
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Flagger</strong>
            </em>{" "}
            Inc.
          </p>
        </div>
      </footer>

      <section
        aria-label="Related tags"
        className="flex w-full flex-wrap justify-center gap-x-2.5 gap-y-1.5 bg-white px-[max(48px,calc((100%-940px)/2+48px))] pb-5 text-center text-[7px] font-semibold leading-[1.35] text-[#8a8f98] font-['Mulish',sans-serif] max-sm:gap-x-2 max-sm:gap-y-1 max-sm:px-[18px] max-sm:pt-4 max-sm:pb-[18px] max-sm:text-[6px]"
      >
        {tags.map((t) => (
          <span key={t} className="inline-block whitespace-nowrap">
            {t}
          </span>
        ))}
      </section>
    </>
  );
}
