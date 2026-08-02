import { Link } from "react-router-dom";
import messagesPhoneImg from "../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import infoBoxImg from "../assets/images/email-inbox v2.png";
import heroInfoBoxImg from "../assets/images/email-inbox v2.png";
import domainProtectionImg from "../assets/images/3rd section left image.avif";
const howDoesItWorkImg = "/assets/images/How%20does%20phishflagger%20work.png";
import whoCanUseImg from "../assets/images/email-marketing-verified-v6.png";
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

const SCREENS = [
  { label: "Email Inbox", src: heroInfoBoxImg },
  { label: "Email", src: emailPhoneImg },
  { label: "Messages", src: messagesPhoneImg },
  { label: "Text/SMS", src: textPhoneImg },
  { label: "Caller ID", src: callerIdHandsetImg },
];

export default function Home() {
  return (
    <>
    {/* ===== Section 1 — Hero (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-32">
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
        <BrandInline />™ protects consumers and companies from brand
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

    {/* ===== Section 2 — How Does PhishFlagger Work? (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0002" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-6 text-center text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px] lg:text-left">
            How Does{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span> Work?
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
              <BrandInline trail="Flagger" />™ adds a unique, sequential
              identifier to the subject line called the{" "}
              <BrandInline trail="Counter" />™ on every outgoing communication.
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
              <BrandInline trail="Flagger" />™ strengthens email
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

    {/* ===== Section 3 — What is PhishFlagger? (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0003" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — heading + bullets */}
        <div>
          <h2 className="mb-6 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:mb-8 sm:text-[34px] lg:text-[40px]">
            Why{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span>?
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
                <span className="not-italic">™</span>, visible to the user.
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
          <img
            src={infoBoxImg}
            alt="PhishFlagger inbox demonstration"
            className="h-auto w-full max-w-[560px] rounded-lg border-2 border-black object-contain"
          />
          <p className="mt-4 text-center text-[14px] italic text-ink-muted sm:text-[15px]">
            Email client view from enabled Domain
          </p>
        </div>
      </div>
    </section>

    {/* ===== Section 4 — Domain protection (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
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
            <span className="font-normal not-italic">™</span>
            <br />
            Email Domain protection
          </h2>
          <ul className="mt-4 space-y-4 text-[15px] leading-[1.6] text-ink sm:mt-6 sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>Domain protection for Microsoft, Google and Linux email servers.</span>
            </li>
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>
                Enable all your users across all devices instantly with our
                Domain Appliance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* ===== Section 5 — Individual protection: Free Plug-In (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0005" />
      <div className="mx-auto max-w-content">
        <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
          Free Email Client Plug-In
        </h2>
        <div className="mt-10 grid grid-cols-1 items-start gap-10 sm:mt-14 sm:gap-8 lg:grid-cols-3">
          <div className="flex w-full flex-col items-center">
            <div className="relative flex h-[220px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black sm:h-[264px]">
              <img
                src="/assets/images/thunderbird new pick.avif"
                alt="Mozilla Thunderbird email client with PhishFlagger plugin"
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 top-4 z-10 text-right">
                <span className="block font-sans text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[26px]">
                  Thunderbird
                </span>
                <span className="block font-sans text-[15px] font-medium leading-tight text-ink-muted sm:text-[17px]">
                  Email Client
                </span>
              </div>
            </div>
            <div aria-hidden="true" className="mt-5 h-[22px]" />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/plugin-download?client=Thunderbird&download=Windows%20Download"
                className="cursor-pointer rounded-lg bg-[#585858] px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
              >
                Windows Download
              </Link>
              <Link
                to="/plugin-download?client=Thunderbird&download=Linux%20Download"
                className="cursor-pointer rounded-lg bg-[#585858] px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
              >
                Linux Download
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="flex h-[220px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black sm:h-[264px]">
              <img
                src={outlookImg}
                alt="Microsoft Outlook email client with PhishFlagger plugin"
                className="h-full w-full object-cover"
              />
            </div>
            <div aria-hidden="true" className="mt-5 h-[22px]" />
            <Link
              to="/plugin-download?client=Outlook&download=Windows%20Download"
              className="mt-5 cursor-pointer rounded-lg bg-[#585858] px-5 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
            >
              Windows Download
            </Link>
          </div>

          <div className="flex w-full flex-col items-center">
            <div className="flex h-[220px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-2xl border-2 border-black bg-white sm:h-[264px]">
              <div className="flex h-full w-full flex-col items-center justify-center bg-white">
                <img
                  src="/assets/images/logo-mark.png"
                  alt=""
                  className="h-14 w-14 object-contain"
                />
                <span className="mt-4 text-[18px] font-semibold text-ink">
                  Download Page
                </span>
                <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-[24px] font-bold leading-none text-white">
                  ↓
                </span>
              </div>
            </div>
            <h3 className="mt-5 text-[18px] font-semibold text-ink">
              Download Page
            </h3>
            <Link
              to="/download"
              className="mt-5 rounded-lg bg-[#585858] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
            >
              Go to Download Page
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 6 — Who Can Use (white) ===== */}
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0006" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[0.9fr_1.6fr]">
        <div className="lg:w-[500px]">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span> Email
          </h2>
          <p className="mt-4 text-[15px] leading-[1.65] text-ink sm:mt-6 sm:text-[16px] sm:leading-[1.6]">
            <BrandInline />™ is designed for individuals and organizations who
            want greater confidence in the authenticity of their emails.
            Whether you are using a custom domain or a supported email
            service, <BrandInline />™ adds an extra layer of protection
            against phishing and email impersonation.
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
              className="mt-6 inline-flex h-[51px] items-center justify-center rounded-full bg-[#585858] px-[30px] text-[19px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
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
                src="/assets/images/corporate%20image%20and%20design.png"
                alt="Domain protection illustration"
                className="h-full w-full object-cover"
              />
            </div>
            <Link
              to="/join/email-domain"
              className="mt-6 inline-flex h-[51px] items-center justify-center rounded-full bg-[#585858] px-[30px] text-[19px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
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
              className="mt-6 inline-flex h-[51px] items-center justify-center rounded-full bg-[#585858] px-[30px] text-[19px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Caller ID (gray) ===== */}
    <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
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
            <BrandInline />™ Email Marketing
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Place Holder text for Marketing home page
          </p>
        </div>
      </div>
    </section>

    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0008" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
        {/* Left — 3 phones in a row */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 lg:justify-start">
          <img
            src={callerIdDesktopImg}
            alt="Desktop corded phone with PhishFlagger Caller ID"
            className="h-auto w-1/3 max-w-[160px] object-contain"
          />
          <img
            src={threePhoneImg}
            alt="PhishFlagger Caller ID phones"
            className="h-auto w-1/3 max-w-[131px] object-contain"
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
            <BrandInline />™ for Telecom / Caller ID
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
            </Link>
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
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[40px] lg:text-[46px]">
            <BrandInline />™ for Telecom / SMS
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Phishing doesn't stop at email. <BrandInline />™ for Telecom and
            Text adds an additional layer of verification to SMS and mobile
            messaging, helping protect customers from text-based scams and
            impersonation.
          </p>
        </div>
        <div className="flex items-start justify-center gap-8 lg:justify-start">
          <div className="flex flex-col items-start">
            <img
              src={textPhoneImg}
              alt="Phone displaying PhishFlagger text messages"
              className="h-auto w-[280px] object-contain"
            />
            <Link
              to="/join/telecom"
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              SMS
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <SectionCounter value="^0010" />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            <BrandInline />™ for Messages
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
            <Link
              to="/join/telecom"
              className="mt-6 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Telecom
            </Link>
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
