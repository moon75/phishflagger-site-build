import { Link } from "react-router-dom";
import messagesPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import infoBoxImg from "../assets/images/email-inbox-v3-balanced.png";
import heroInfoBoxImg from "../assets/images/email-inbox-v3-balanced.png";
import domainProtectionImg from "../assets/images/3rd section left image.avif";
const howDoesItWorkImg = "/assets/images/How%20does%20phishflagger%20work-v3-transparent.png";
import whoCanUseImg from "../assets/images/email-marketing-verified-v9.png";
import outlookImg from "../assets/images/outlook image 90.png";
import callerIdDesktopImg from "../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import callerIdHandsetImg from "../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import emailPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Email v6.png";
import threePhoneImg from "../../telecom Webpage/assets/images/products/3phone.png";
import logoImg from "../../telecom Webpage/assets/images/logo/pf-logo-v2.png";
import history1Img from "../assets/images/7 1st.avif";
import history2Img from "../assets/images/7  2nd.avif";
import history3Img from "../assets/images/7 3rd.avif";
import textPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";
import messagingIconsImg from "../assets/images/Icons-2.png";
import cloudServerImg from "../assets/images/digital-domain-diagram-v5-wide.png";

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
    position: "left-0 top-0",
    size: "w-[72%]",
    bubbleSize: "min-h-[72px]",
  },
  {
    date: "Wednesday, Mar 11 · 12:41 PM",
    message: "^5202 Everything looks good! Your subscription is active until April.",
    position: "left-[8%] top-[18%]",
    size: "w-[76%]",
    bubbleSize: "min-h-[90px]",
  },
  {
    date: "Friday, Mar 13 · 9:38 AM",
    message: "^5204 We have a new renewal offer. Visit our site for details.",
    position: "left-[16%] top-[39%]",
    size: "w-[74%]",
    bubbleSize: "min-h-[78px]",
  },
  {
    date: "Friday, Mar 13 · 8:20 AM",
    message: "Message is missing. Expected ^5203 above but received ^5204",
    position: "left-[24%] top-[60%]",
    size: "w-[72%]",
    bubbleSize: "min-h-[86px]",
    warning: true,
  },
];

function SmsMessageSteps() {
  return (
    <div
      className="relative h-[270px] w-full max-w-[360px] shrink-0"
      aria-label="Sequential SMS messages showing a missing message warning"
    >
      {SMS_STEPS.map(({ date, message, position, size, bubbleSize, warning }, index) => (
        <div
          key={date}
          className={`absolute ${size} ${position}`}
          style={{ zIndex: index + 1 }}
        >
          <p className="mb-1 whitespace-nowrap text-[10px] font-medium leading-none text-[#454545] sm:text-[11px]">
            {date}
          </p>
          <div
            className={`flex items-center rounded-[12px] px-3 py-2.5 text-[12px] font-medium leading-[1.25] shadow-[0_3px_8px_rgba(0,0,0,0.14)] sm:text-[14px] ${bubbleSize} ${
              warning ? "bg-[#e11616] text-white" : "bg-white text-black"
            }`}
          >
            {message}
          </div>
        </div>
      ))}
    </div>
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
      }}
    >
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

      {/* Demo / Video links */}
      <div className="mt-10 flex justify-center gap-10 sm:mt-12 sm:gap-12">
        <Link
          to="/demo"
          className="cursor-pointer text-base font-bold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9] sm:text-lg"
        >
          Demo
        </Link>
        <Link
          to="/video"
          className="cursor-pointer text-base font-bold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9] sm:text-lg"
        >
          Video
        </Link>
      </div>

      </div>
    </section>

    {/* ===== Section 1b — Top Links (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0001" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[0.9fr_1.6fr]">
        <div className="lg:w-[500px]">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Our Top Email Links
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-ink sm:mt-6 sm:text-[16px] sm:leading-[1.6]">
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
            <div className="flex h-[225px] w-[225px] items-center justify-center rounded-xl border-2 border-black bg-white">
              <img
                src="/assets/images/individual.png"
                alt="Individual protection illustration"
                className="h-[195px] w-[195px] object-contain"
              />
            </div>
            <Link
              to="/join/email-free-plug-in"
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
          <div className="flex w-auto flex-col items-center">
            <div className="relative mb-[34px] flex h-[62px] items-end justify-center">
              <span className="whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
                Corporate
              </span>
              <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap text-center text-[15px] font-semibold leading-tight text-ink sm:text-[17px]">
                Plug-In or Domain
              </span>
            </div>
            <div className="flex h-[225px] w-[225px] items-center justify-center overflow-hidden rounded-xl border-2 border-black">
              <img
                src="/assets/images/corporate-image-homepage-v5.png"
                alt="Domain protection illustration"
                className="h-full w-full object-cover"
              />
            </div>
            <Link
              to="/join/email-corporate"
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
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

    {/* ===== Section 2 — How Does PhishFlagger Work? (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0002" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-6 text-center text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px] lg:text-left">
            How Does{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            Work?
          </h2>
          <img
            src={howDoesItWorkImg}
            alt="How Does PhishFlagger Work? Human validation via PhishCounter subject line, digital validation via sending domain checks"
            className="h-auto w-full max-w-[480px] object-contain"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-[20px] font-bold leading-tight tracking-tight text-ink sm:text-[24px]">
              Human.
            </h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
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
          <div>
            <h2 className="text-[20px] font-bold leading-tight tracking-tight text-ink sm:text-[24px]">
              Digital.
            </h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
              <BrandInline trail="Flagger" /> strengthens email
              authentication by verifying sender identity at the domain
              level. Working alongside existing email security standards and
              authentication technologies, our domain validation screens
              messages that originate from authorized senders, adding an
              extra layer of protection against impersonation and phishing
              attacks.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 3 — What is PhishFlagger? (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0003" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — heading + bullets */}
        <div>
          <h2 className="mb-6 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:mb-8 sm:text-[34px] lg:text-[40px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            / Human
          </h2>

          <ul className="space-y-4 text-[15px] leading-[1.6] text-ink sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>Provides a defense against impersonation and fraud.</span>
            </li>
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
                Provides protection by adding a unique sequential number, the{" "}
                <em className="italic font-semibold">
                  <span className="text-ink">Phish</span>
                  <span className="text-brand">Flagger</span>
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
            className="h-auto w-full max-w-[448px] rounded-lg border-2 border-black object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 4 — Domain protection (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0004" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — email authentication diagram */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-[560px] rounded-2xl border-2 border-black p-6 sm:p-8">
            <img
              src={domainProtectionImg}
              alt="Email authentication: PhishFlagger, DMARC, SPF, DKIM"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Right — heading + subheading */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            {" "}/ Digital
          </h2>
          <h3 className="mt-4 text-[18px] font-semibold text-ink sm:mt-6 sm:text-[22px]">
            Domain Protection
          </h3>
          <p className="mt-2 text-[15px] leading-[1.6] text-ink sm:text-[18px] sm:leading-[1.55]">
            PlaceHolder text for Domain Protection SPF
          </p>
          <Link
            to="/digital-ino"
            className="mt-2 inline-block text-[15px] font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9] sm:text-[18px]"
          >
            More info Here.
          </Link>
        </div>
      </div>
    </section>

    {/* ===== Section 5 — Individual protection: Free Plug-In (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0005" />
      <div className="mx-auto max-w-content">
        <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          <em className="italic">
            <span className="font-extrabold text-ink">Phish</span>
            <span className="font-normal text-brand">Flagger</span>
          </em>{" "}
          Email
        </h2>

        <div className="mx-auto mt-10 flex flex-nowrap items-start justify-center gap-[60px] px-4 sm:mt-16 sm:gap-[84px]">
          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Plug-In
            </span>
            <div className="flex h-[140px] w-[300px] items-center justify-center gap-2 overflow-hidden rounded-2xl border-2 border-black bg-[#f7f8fb] p-3 sm:h-[190px] sm:w-[460px] sm:gap-3 sm:p-6">
              <img
                src={outlookImg}
                alt="Microsoft Outlook"
                className="h-full w-1/2 rounded-xl object-contain"
              />
              <img
                src="/assets/images/thunderbird new pick.avif"
                alt="Mozilla Thunderbird"
                className="h-full w-1/2 rounded-xl object-contain"
              />
            </div>
            <p className="flex h-[130px] w-[300px] items-center justify-center p-6 text-center text-[22px] leading-[1.6] text-ink sm:h-[130px] sm:w-[460px] sm:p-8 sm:text-[22px]">
              Free for Individuals.
              <br />
              Perfect for small business.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/join/email-free-plug-in"
                className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Join Free
              </Link>
              <Link
                to="/join/email-corporate"
                className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Corporate
              </Link>
            </div>
          </div>

          <div className="flex h-[220px] items-center justify-center sm:h-[300px]">
            <span className="text-[23px] font-bold uppercase tracking-wide text-ink-muted sm:text-[26px]">
              Or
            </span>
          </div>

          <div className="flex w-auto flex-col items-center">
            <span className="mb-5 whitespace-nowrap text-center text-[22px] font-semibold leading-tight text-ink sm:text-[25px]">
              Domain Appliance
            </span>
            <div className="h-[140px] w-[300px] overflow-hidden rounded-2xl border-2 border-black sm:h-[190px] sm:w-[460px]">
              <img
                src={cloudServerImg}
                alt="Cloud connected to a server appliance"
                className="h-full w-full scale-105 object-contain"
              />
            </div>
            <p className="flex h-[130px] w-[300px] items-center justify-center p-6 text-center text-[22px] leading-[1.6] text-ink sm:h-[130px] sm:w-[460px] sm:p-8 sm:text-[22px]">
              Our Appliance will enable the protocol across your entire
              Domain. No Install or Downloads required by users.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/join/email-corporate"
                className="inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
              >
                Corporate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Caller ID (gray) ===== */}
    <section
      className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
      }}
    >
      <SectionCounter value="^0007" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <img
            src={whoCanUseImg}
            alt="PhishFlagger Email Marketing"
            className="h-auto w-full max-w-[405px] object-contain"
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

    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0008" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — 3 phones in a row */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 lg:justify-start">
          <div className="relative flex items-end pt-2">
            <img
              src={callerIdDesktopImg}
              alt="Desktop corded phone with PhishFlagger Caller ID"
              className="h-auto w-full max-w-[200px] object-contain"
            />
            <span className="absolute top-1 left-[62%] flex translate-x-[calc(-50%+10px)] items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-[#16a34a] sm:text-[15px]">
              <span className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#22c55e] text-[11px] font-bold leading-none text-white">
                ✓
              </span>
              Verified
            </span>
          </div>
          <img
            src={threePhoneImg}
            alt="PhishFlagger Caller ID phones"
            className="h-auto w-1/3 max-w-[135px] object-contain"
          />
          <img
            src={callerIdHandsetImg}
            alt="Cordless handset with PhishFlagger Caller ID"
            className="h-auto w-1/3 max-w-[160px] object-contain"
          />
        </div>
        {/* Right — heading + text */}
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
      </div>
    </section>

    {/* ===== Section 7b — Telecom / Text (white) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0009" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <BrandInline /> for Telecom / SMS
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Phishing doesn't stop at email. <BrandInline /> for Telecom and
            Text adds an additional layer of verification to SMS and mobile
            messaging, helping protect customers from text-based scams and
            impersonation.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:justify-center lg:justify-start">
          <div className="flex flex-col items-start">
            <img
              src={textPhoneImg}
              alt="Phone displaying PhishFlagger text messages"
              className="h-auto w-[171px] object-contain"
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
    </section>

    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0010" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <BrandInline /> for Messages
          </h2>
          <p className="mt-5 max-w-[420px] text-[15px] leading-[1.65] text-ink-muted sm:text-[16px]">
            Placeholder text goes here. Replace this copy with the final
            content describing PhishFlagger protection across messaging
            platforms.
          </p>
        </div>
        <div className="flex items-start justify-center gap-14 lg:justify-start">
          <div className="flex w-full max-w-[380px] flex-col items-start">
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
            className="h-auto w-[32%] max-w-[171px] object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 8 — Numbering history (white) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
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
