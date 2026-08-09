import { Link } from "react-router-dom";
import messagesPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import infoBoxImg from "../assets/images/email-inbox-v4-gray-header.png";
import heroInfoBoxImg from "../assets/images/email-inbox-v4-gray-header.png";
import domainProtectionImg from "../assets/images/3rd section left image.avif";
import whoCanUseImg from "../assets/images/email-marketing-verified-v9.png";
import outlookThunderbirdImg from "../assets/images/outlook and thunderbird.png";
import callerIdDesktopImg from "../../telecom Webpage/assets/images/products/desktop-phone-v3-verified.png";
import callerIdHandsetImg from "../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import emailPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Email v6.png";
import threePhoneImg from "../../telecom Webpage/assets/images/products/3phone.png";
import logoImg from "../../telecom Webpage/assets/images/logo/pf-logo-v2.png";
import history1Img from "../assets/images/7 1st.avif";
import history2Img from "../assets/images/7  2nd.avif";
import history3Img from "../assets/images/7 3rd.avif";
import textPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";
import messagingIconsImg from "../assets/images/Icons-5.png";
import cloudServerImg from "../assets/images/digital-domain-diagram-v6-no-connector.png";

const SCREENS = [
  { label: "Email Inbox", src: heroInfoBoxImg },
  { label: "Email", src: emailPhoneImg },
  { label: "Messages", src: messagesPhoneImg },
  { label: "Text/SMS", src: textPhoneImg },
  { label: "Caller ID", src: callerIdHandsetImg },
];

const SMS_STEPS = [
  {
    date: "Tuesday, Mar 10 · 2:58 PM",
    message: "^5201 About your account renewal — all looks great.",
  },
  {
    date: "Wednesday, Mar 11 · 12:41 PM",
    message: "^5202 Everything looks good! Your subscription is active until April.",
  },
  {
    date: "Friday, Mar 13 · 9:38 AM",
    message: "^5204 We have a new renewal offer. Visit our site for details.",
  },
  {
    date: "Friday, Mar 13 · 8:20 AM",
    message: "Message is missing. Expected ^5203 above but received ^5204",
    warning: true,
  },
];

function SmsMessageSteps() {
  return (
    <div
      className="flex w-full max-w-[230px] flex-col gap-2"
      aria-label="Sequential SMS messages showing a missing message warning"
    >
      {SMS_STEPS.map(({ date, message, warning }) => (
        <div
          key={date}
          className={`flex flex-col gap-0.5 rounded-[10px] px-2.5 py-2 text-[11px] font-medium leading-[1.3] shadow-[0_2px_6px_rgba(0,0,0,0.1)] ${
            warning ? "bg-[#e11616] text-white" : "bg-white text-black"
          }`}
        >
          <p
            className={`text-[9px] font-medium leading-none ${
              warning ? "text-white/80" : "text-[#454545]"
            }`}
          >
            {date}
          </p>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}

function RetroTvIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* antenna */}
      <path
        d="M8 3.5 12 7M16 3.5 12 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* TV body */}
      <rect
        x="3"
        y="7"
        width="18"
        height="13.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      {/* screen */}
      <rect
        x="5.5"
        y="9.5"
        width="9.5"
        height="8.5"
        rx="1.4"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* knobs */}
      <circle cx="18" cy="12" r="1" fill="currentColor" />
      <circle cx="18" cy="16" r="1" fill="currentColor" />
      {/* feet */}
      <path
        d="M8 20.5 6.5 22.5M16 20.5 17.5 22.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
    {/* ===== Section 1 — Hero (gray) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-32"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0001" />
      <div className="mx-auto max-w-content">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img
          src={logoImg}
          alt="PhishFlagger"
          className="h-auto w-full max-w-[360px] sm:max-w-[520px]"
        />
      </div>

      {/* Headline */}
      <h1 className="mt-2 text-center text-[28px] font-medium tracking-tight text-ink leading-[1.15] sm:mt-3 sm:text-[36px] lg:text-[42px]">
        Protecting Communications
      </h1>

      <p className="mx-auto mt-5 max-w-[780px] text-center text-[16px] leading-[1.6] text-ink sm:text-[20px] sm:leading-[1.5]">
        <BrandInline /> protects consumers and companies from brand
        destruction by imposters. We secure Email, Text, SMS, Instant Messaging
        and CallerID through sequential numbering.
      </p>

      {/* Phones row — flex so phones sit tight together regardless of container width */}
      <div className="mt-12 flex flex-wrap items-stretch justify-center gap-x-12 gap-y-10 sm:mt-16 sm:gap-y-12 lg:flex-nowrap lg:gap-x-[30px]">
        {SCREENS.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="mb-3 text-[14px] font-semibold text-ink sm:mb-4 sm:text-base">
              {s.label}
            </span>
            {i === 0 ? (
              <div className="flex flex-1 items-center">
                <PhonePlaceholder src={s.src} alt={`${s.label} screen`} large />
              </div>
            ) : (
              <PhonePlaceholder
                src={s.src}
                alt={`${s.label} screen`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Video link */}
      <div className="mt-10 flex justify-center sm:mt-12">
        <Link
          to="/video"
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-lg border-2 border-ink bg-white px-9 py-3.5 text-base font-bold text-ink sm:px-12 sm:text-lg"
        >
          <RetroTvIcon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
          Watch Our Videos
        </Link>
      </div>

      </div>
    </section>

    {/* ===== Section 3 — What is PhishFlagger? (gray/tower) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0002" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-3">
        {/* Left — heading + subheading */}
        <div>
          <h2 className="mb-4 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            / Human
          </h2>
          <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
            <BrandInline trail="Flagger" /> adds a unique, sequential
            identifier to the subject line called the{" "}
            <BrandInline trail="Counter" /> on every outgoing communication.
            Recipients can quickly verify if the sequence matches the
            previous email they received from the same sender. If the
            number is missing or out of sequence, it provides an immediate
            warning that the message may not be authentic, giving users a
            simple way to spot phishing attempts.
          </p>
        </div>

        {/* Middle — bullets */}
        <div>
          <ul className="space-y-3 rounded-2xl border-2 border-black bg-white p-6 text-[15px] leading-[1.5] text-ink sm:space-y-4 sm:p-6 sm:text-[18px] sm:leading-[1.45]">
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>
                Human-compatible solution that validates legitimate
                communications and highlights fraud attempts.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>
                Bring back common sense by adding a unique sequential
                number, the{" "}
                <em className="italic font-semibold">
                  <span className="text-ink">Phish</span>
                  <span className="text-brand">Counter</span>
                </em>
                , visible to the user.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>
                Flags fraud attempts that do not have the expected sequential
                number.
              </span>
            </li>
          </ul>
        </div>

        {/* Right — info box image */}
        <div className="flex flex-col items-center">
          <p className="mb-4 text-center text-[16px] italic text-ink-muted sm:text-[18px]">
            Email client view from enabled Domain
          </p>
          <img
            src={infoBoxImg}
            alt="PhishFlagger inbox demonstration"
            className="h-auto w-full max-w-[358px] rounded-lg border-2 border-black object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 4 — Domain protection (gray/tower) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0003" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-3">
        {/* Left — heading + subheading */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            {" "}/ Digital
          </h2>
          <p className="mt-4 max-w-[560px] text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            <BrandInline trail="Flagger" /> strengthens email authentication
            by verifying sender identity at the domain level. Working
            alongside existing email security standards and authentication
            technologies, our domain validation screens messages that
            originate from authorized senders, adding an extra layer of
            protection against impersonation and phishing and other attacks.
          </p>
          <Link
            to="/digital-ino"
            className="mt-4 inline-block text-[15px] font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9] sm:text-[18px]"
          >
            More info Here.
          </Link>
        </div>

        {/* Middle — email authentication diagram */}
        <div className="flex flex-col items-center">
          <div className="w-full rounded-2xl border-2 border-black bg-white p-6 sm:p-8">
            <img
              src={domainProtectionImg}
              alt="Email authentication: PhishFlagger, DMARC, SPF, DKIM"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Right — PhishFlagger Digital Verification box */}
        <div className="hidden flex-col items-center lg:ml-[6px] lg:flex">
          <span className="mb-4 whitespace-nowrap text-center text-[18px] font-bold leading-tight text-ink sm:text-[20px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            Digital Verification
          </span>
          <div className="flex h-[225px] w-[358px] shrink-0 items-center justify-center rounded-lg border-2 border-black bg-white p-4">
            <img
              src="/assets/images/homepage%200003%20digital%20verification.png"
              alt="PhishFlagger digital verification: email server, check domain records, validate sending domain, verified"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 4b — Why PhishFlagger Mail? (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0004" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Why <BrandInline /> Mail?
          </h2>
          <p className="mt-4 max-w-[560px] text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Placeholder text of why PhishFlagger Mail - typical customer
            example.
          </p>
        </div>

        <div className="flex w-full max-w-[380px] justify-center rounded-2xl border-2 border-black bg-white p-5 lg:ml-auto">
          <img
            src="/assets/images/0005%20image.png"
            alt="Why PhishFlagger Mail"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 5 — Individual protection: Free Plug-In (gray/tower) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0005" />
      <div className="mx-auto max-w-content">
        <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          <em className="italic">
            <span className="font-extrabold text-ink">Phish</span>
            <span className="font-normal text-brand">Flagger</span>
          </em>{" "}
          Email
        </h2>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-10 px-4 sm:mt-16 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-[84px]">
          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Client Plug-In
            </span>
            <div className="flex h-[140px] w-full max-w-[300px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-[#EAECF3] p-3 sm:h-[190px] sm:max-w-[460px] sm:p-6">
              <img
                src={outlookThunderbirdImg}
                alt="Microsoft Outlook and Mozilla Thunderbird"
                className="h-full w-full translate-y-2 scale-[1.7] object-contain"
              />
            </div>
            <p className="flex h-[130px] w-full max-w-[300px] items-center justify-center p-6 text-center text-[22px] leading-[1.6] text-ink sm:h-[130px] sm:max-w-[460px] sm:p-8 sm:text-[22px]">
              Free for Individuals.
              <br />
              Perfect for small business.
            </p>
            <div className="-mt-3 flex flex-wrap items-start justify-center gap-4">
              <div className="flex w-[170px] flex-col items-center gap-3">
                <span className="flex h-[100px] items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Works with
                  <br />
                  Gmail, Outlook, Yahoo, Etc.
                </span>
                <Link
                  to="/join/email-free-plug-in"
                  className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Join Free
                </Link>
              </div>
              <div className="flex w-[170px] flex-col items-center gap-3">
                <span className="flex h-[100px] items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Enable multiple
                  <br />
                  Email Addresses
                  <br />
                  (works with all domains)
                </span>
                <Link
                  to="/join/email-domain"
                  className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Join Domain
                </Link>
              </div>
            </div>
          </div>

          <div className="flex h-12 items-center justify-center sm:h-16 lg:h-[220px] xl:h-[300px]">
            <span className="text-[23px] font-bold uppercase tracking-wide text-ink-muted sm:text-[26px]">
              Or
            </span>
          </div>

          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Domain Appliance
            </span>
            <div className="h-[140px] w-full max-w-[300px] overflow-hidden rounded-2xl border-2 border-black sm:h-[190px] sm:max-w-[460px]">
              <img
                src={cloudServerImg}
                alt="Cloud and server appliance"
                className="h-full w-full scale-[1.42] object-contain"
              />
            </div>
            <p className="flex h-[130px] w-full max-w-[300px] items-center justify-center p-6 text-center text-[22px] leading-[1.6] text-ink sm:h-[130px] sm:max-w-[460px] sm:p-8 sm:text-[22px]">
              Our Appliance will enable the protocol across your entire
              Domain. No Install or Downloads required by users.
            </p>
            <div className="-mt-3 flex flex-wrap items-start justify-center gap-6">
              <div className="flex w-[190px] flex-col items-center gap-3">
                <span className="flex h-[100px] items-center text-center text-[20px] italic leading-snug text-ink-muted">
                  Join your Domain
                </span>
                <Link
                  to="/join/email-domain"
                  className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Join Domain
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Caller ID (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0006" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <img
            src={whoCanUseImg}
            alt="PhishFlagger Email Marketing"
            className="h-auto w-full max-w-[324px] rounded-lg border-2 border-black bg-white object-contain"
          />
        </div>
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <BrandInline /> Email Marketing
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Place Holder text for Marketing home page
          </p>
          <a
            href="https://phishflagger.netlify.app/join/email-marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
          >
            Marketing
          </a>
        </div>
      </div>
    </section>

    {/* ===== Section 7c — Telecom / Caller ID (gray/tower) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0007" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — heading + text */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <BrandInline /> for Telecom / Caller ID
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Fake phone calls can be prevented now.
            <br />
            The Sequence Number known only by valid carrier and callee prevents
            impersonation. As the existing Caller ID rail is fully interoperable
            between carriers globally, a &lsquo;sequence number&rsquo; implemented
            by telecoms worldwide would end fake calls.
            <br />
            Help stop phone fraud in your country.{" "}
            <Link
              to="/petition"
              className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
            >
              Sign our Petition
            </Link>{" "}
            and{" "}
            <Link
              to="/help/telecom-endorse-us"
              className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
            >
              Endorse Us
            </Link>
            .
          </p>
          <Link
            to="/join/telecom"
            className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
          >
            Telecom
          </Link>
        </div>
        {/* Right — 3 phones in a row */}
        <div className="flex flex-wrap items-end justify-center gap-4 sm:flex-nowrap sm:gap-6 lg:justify-end">
          <div className="relative flex min-w-0 items-end pt-2">
            <img
              src={callerIdDesktopImg}
              alt="Desktop corded phone with PhishFlagger Caller ID"
              className="h-auto w-full max-w-[130px] object-contain sm:max-w-[200px]"
            />
          </div>
          <img
            src={threePhoneImg}
            alt="PhishFlagger Caller ID phones"
            className="h-auto w-1/3 min-w-0 max-w-[90px] object-contain sm:max-w-[135px]"
          />
          <img
            src={callerIdHandsetImg}
            alt="Cordless handset with PhishFlagger Caller ID"
            className="h-auto w-1/3 min-w-0 max-w-[105px] object-contain sm:max-w-[160px]"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 7b — Telecom / Text (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0008" />
      <div className="mx-auto max-w-content">
        <div className="flex flex-wrap items-stretch justify-center gap-12 lg:flex-nowrap">
          <div className="flex flex-col items-center">
            <span className="mb-4 whitespace-nowrap text-center text-[26px] font-semibold text-ink sm:text-[30px]">
              SMS
            </span>
            <div className="flex flex-1 items-start gap-10">
              <div className="flex h-full flex-col items-start justify-between">
                <img
                  src={textPhoneImg}
                  alt="Phone displaying PhishFlagger text messages"
                  className="h-auto w-[171px] shrink-0 object-contain"
                />
                <Link
                  to="/join/telecom"
                  className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Telecom
                </Link>
              </div>
              <SmsMessageSteps />
            </div>
          </div>

          <p className="mx-6 mt-2 max-w-[360px] shrink-0 self-center rounded-xl border-2 border-black px-10 py-5 text-[16px] leading-[1.65] text-ink sm:text-[17px] sm:leading-[1.6]">
            Phishing doesn't stop at email. <BrandInline /> for SMS and
            Messages adds an additional layer of verification to SMS and mobile
            messaging, helping protect customers from text-based scams and
            impersonation.
          </p>

          <div className="flex flex-col items-center">
            <span className="mb-4 whitespace-nowrap text-center text-[26px] font-semibold text-ink sm:text-[30px]">
              Message
            </span>
            <div className="flex flex-1 items-start gap-10">
              <div className="flex h-full w-full max-w-[380px] flex-col items-start justify-between">
                <img
                  src={messagingIconsImg}
                  alt="Popular messaging companies"
                  className="h-auto w-full object-contain"
                />
                <a
                  href="https://phishflagger.netlify.app/join/messaging"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Messaging
                </a>
              </div>
              <img
                src={messagesPhoneImg}
                alt="Phone displaying PhishFlagger messages"
                className="h-auto w-[143px] shrink-0 self-start object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 8 — Numbering history (white) — HIDDEN, superseded by Section 9 gallery below ===== */}
    {false && (
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0011" />
      <div className="mx-auto max-w-content">
        <p className="mx-auto max-w-[820px] text-center text-[24px] leading-[1.5] text-ink sm:text-[30px] sm:leading-[1.45]">
          Numbering has been revolutionary in creating identifiable order to
          records and documents, thereby reducing fraud.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 md:grid-cols-3">
          <HistoryCard
            year="1470"
            topic="Pagination"
            patent="Printing Press 1440"
            attribution="Johannes Gutenberg"
            heading="Numbering Book Pages"
            img={history1Img}
            imgAlt="Numbered book pages"
          />
          <HistoryCard
            year="1892"
            topic="Consecutive Stamp"
            patent="US Patent 484391A"
            attribution="Edwin G. Bates"
            heading="Numbering Machine"
            img={history2Img}
            imgAlt="Mechanical numbering stamp"
          />
          <HistoryCard
            year="2026"
            topic="Phishing Protection"
            patent="US Patent 11,601,449 B2"
            attribution="William Pearce"
            heading="Numbering Communications"
            img={history3Img}
            imgAlt="PhishFlagger email numbering"
          />
        </div>
      </div>
    </section>
    )}

    {/* ===== Section 9 — Numbering history gallery (gray/tower) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        backgroundSize: "140%",
      }}
    >
      <SectionCounter value="^0009" />
      <div className="mx-auto max-w-content">
        <p className="mx-auto max-w-[820px] text-center text-[24px] leading-[1.5] text-ink sm:text-[30px] sm:leading-[1.45]">
          Numbering has been revolutionary in creating identifiable order to
          records and documents, thereby reducing fraud.
        </p>

        <div className="mt-10 flex flex-nowrap items-start justify-between overflow-x-auto sm:mt-12">
          <div className="flex shrink-0 flex-col items-center">
            <span className="mb-3 text-[32px] font-semibold text-ink sm:text-[36px]">
              1470
            </span>
            <div className="flex h-[140px] items-end gap-2">
              <img
                src="/assets/images/History%20Pane%20Images/4%20papers%20first%20image.png"
                alt="Numbered papers"
                className="h-[120px] w-auto object-contain"
              />
              <img
                src="/assets/images/History%20Pane%20Images/bundle%20of%20books%20second%20image.png"
                alt="Bundle of numbered books"
                className="h-[120px] w-auto object-contain"
              />
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-center">
            <span className="mb-3 text-[32px] font-semibold text-ink sm:text-[36px]">
              1892
            </span>
            <div className="flex h-[150px] items-end">
              <img
                src="/assets/images/History%20Pane%20Images/stamp%20third%20image.png"
                alt="Numbering stamp"
                className="h-[130px] w-auto object-contain"
              />
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-center">
            <span className="mb-3 text-[32px] font-semibold text-ink sm:text-[36px]">
              2026
            </span>
            <div className="flex h-[140px] items-end">
              <img
                src={infoBoxImg}
                alt="PhishFlagger inbox demonstration"
                className="h-[120px] w-auto rounded-lg border-2 border-black object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end sm:mt-12">
          <Link
            to="/about/numbering-history"
            className="text-[15px] font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9] sm:text-[18px]"
          >
            Numbering History
          </Link>
        </div>
      </div>
    </section>

    </>
  );
}

function HistoryCard({ img, imgAlt }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-2 border-black p-0.5 text-center">
      <img
        src={img}
        alt={imgAlt}
        className="h-auto w-full rounded-2xl object-contain"
      />
    </div>
  );
}

// Inline brand text used in body copy: italic "Phish" bold + "Flagger"/"Counter" red normal
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

function PhonePlaceholder({ src, alt, large = false }) {
  return (
    <img
      src={src}
      alt={alt}
      className={
        large
          ? "mt-[2px] block h-auto w-[230px] max-w-full rounded-lg border-2 border-black bg-white object-contain sm:w-[300px] lg:w-[300px]"
          : "block h-auto w-[140px] max-w-full object-contain sm:w-[180px] lg:w-[170px]"
      }
    />
  );
}
