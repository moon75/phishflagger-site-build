import { Link } from "react-router-dom";
import emailImg from "../assets/images/email.avif";
import messagesImg from "../assets/images/messages.avif";
import textImg from "../assets/images/text.avif";
import callerIdImg from "../assets/images/callerid.avif";
import infoBoxImg from "../assets/images/email-inbox v2.png";
import domainProtectionImg from "../assets/images/3rd section left image.avif";
const howDoesItWorkImg = "/assets/images/How%20does%20phishflagger%20work.png";
import whoCanUseImg from "../assets/images/5th sec.avif";
import outlookImg from "../assets/images/outlook image.png";
import callerIdDesktopImg from "../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import callerIdHandsetImg from "../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import threePhoneImg from "../../telecom Webpage/assets/images/products/3phone.png";
import logoImg from "../../telecom Webpage/assets/images/logo/pf-logo-v2.png";

const SCREENS = [
  { label: "Email", src: emailImg },
  { label: "Messages", src: messagesImg },
  { label: "Text/SMS", src: textImg },
  { label: "Caller ID", src: callerIdImg },
];

export default function Home() {
  return (
    <>
    {/* ===== Section 1 — Hero (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 pt-12 pb-20 sm:px-6 sm:pt-20 sm:pb-32">
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
      <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-10 sm:mt-16 sm:gap-x-16 sm:gap-y-12">
        {SCREENS.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <span className="mb-3 text-[14px] font-semibold text-ink sm:mb-4 sm:text-base">
              {s.label}
            </span>
            <PhonePlaceholder src={s.src} alt={`${s.label} screen`} />
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
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
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
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-[20px] font-bold leading-tight tracking-tight text-ink sm:text-[24px]">
              Human.
            </h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
              <BrandInline trail="Flagger" />™ inserts a sequential
              number in the subject line, called the{" "}
              <BrandInline trail="Counter" />™, from the sender. The recipient
              will see this number and be able to verify if it matches the
              last email sent (Human Compatible) or it will be automatically
              flagged as out of sequence by an application or domain
              (Auto-Flagging). In both cases, the recipient is protected from
              fraudulent senders.
            </p>
          </div>
          <div>
            <h2 className="text-[20px] font-bold leading-tight tracking-tight text-ink sm:text-[24px]">
              Digital.
            </h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
              We ensure the sending domain or email is accurate.{" "}
              <BrandInline trail="Flagger" />™ uses the Domain registry and
              Plug-Ins to add additional authentication.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 3 — What is PhishFlagger? (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
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
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — email authentication diagram */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={domainProtectionImg}
            alt="Email authentication: PhishFlagger, DMARC, SPF, DKIM"
            className="h-auto w-full max-w-[560px] object-contain"
          />
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
            Domain protection
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

    {/* ===== Section 5 — Individual protection (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.1fr]">
        {/* Left — heading + text */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Individual protection: Free
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink sm:mt-6 sm:text-[18px] sm:leading-[1.55]">
            Support our Thunderbird plug help stop impersonation now.
          </p>
        </div>

        {/* Right — Thunderbird client image */}
        <div className="relative flex w-full max-w-[560px] flex-col items-center lg:ml-auto lg:items-end">
          <div className="absolute right-4 top-4 z-10 text-right">
            <span className="block font-sans text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[26px]">
              Thunderbird
            </span>
            <span className="block font-sans text-[15px] font-medium leading-tight text-ink-muted sm:text-[17px]">
              Email Client
            </span>
          </div>
          <img
            src="/assets/images/thunderbird new pick.avif"
            alt="Mozilla Thunderbird email client with PhishFlagger plugin"
            className="h-auto w-full max-w-[560px] rounded-2xl border-2 border-black object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 5b — Individual protection: Outlook (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1.1fr_1fr]">
        {/* Left — Outlook client image */}
        <div className="flex w-full max-w-[560px] flex-col items-center lg:items-start">
          <img
            src={outlookImg}
            alt="Microsoft Outlook email client with PhishFlagger plugin"
            className="h-auto w-full max-w-[560px] rounded-2xl border-2 border-black object-contain"
          />
        </div>

        {/* Right — heading + text */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Individual protection: Free
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-ink sm:mt-6 sm:text-[18px] sm:leading-[1.55]">
            Support our Outlook plug help stop impersonation now.
          </p>
        </div>
      </div>
    </section>

    {/* ===== Section 6 — Who Can Use (white) ===== */}
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Who Can Use
            <br />
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Any Email Domain can join <BrandInline />™ protection. We also enable
            Marketers, Portals and Security Providers.
          </p>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-5 sm:text-[15px] sm:leading-[1.6]">
            <span className="font-semibold">Coming Soon Free:</span> Any
            Individual or Business using Gmail, Yahoo, Outlook/Hotmail/Live (and other
            approved free sites) can install a plug-in for Thunderbird, Outlook
            (and other approved Email Clients) and be protected with{" "}
            <BrandInline />™.
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-6 lg:justify-end">
          <div className="flex w-[150px] flex-col items-center">
            <span className="mb-3 text-center text-[20px] font-semibold leading-tight text-ink sm:text-[22px]">
              Plug-In
              <br />
              Free
            </span>
            <div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg border-2 border-black">
              <img
                src="/assets/images/individual.png"
                alt="Individual protection illustration"
                className="h-[130px] w-[130px] object-contain"
              />
            </div>
            <Link
              to="/join/email-free-plug-in"
              className="mt-4 inline-flex h-[34px] items-center justify-center rounded-full bg-[#585858] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
          <div className="flex w-[150px] flex-col items-center">
            <span className="mb-3 text-center text-[20px] font-semibold leading-tight text-ink sm:text-[22px]">
              Plug-In
              <br />
              Corporate
            </span>
            <div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg border-2 border-black">
              <svg
                viewBox="0 0 150 150"
                role="img"
                aria-label="Small business team illustration"
                className="h-[130px] w-[130px]"
              >
                <circle cx="38" cy="48" r="22" fill="none" stroke="#0c2217" strokeWidth="4" />
                <path
                  d="M4 132c0-24 15-42 34-42s34 18 34 42"
                  fill="none"
                  stroke="#0c2217"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="90" cy="40" r="26" fill="none" stroke="#ff0033" strokeWidth="4" />
                <path
                  d="M46 136c0-26 20-44 44-44s44 18 44 44"
                  fill="none"
                  stroke="#ff0033"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="120" cy="54" r="18" fill="none" stroke="#0c2217" strokeWidth="4" />
                <path
                  d="M92 132c0-20 13-34 32-34s32 14 32 34"
                  fill="none"
                  stroke="#0c2217"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <Link
              to="/join/email-plug-in"
              className="mt-4 inline-flex h-[34px] items-center justify-center rounded-full bg-[#585858] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
          <div className="flex w-[150px] flex-col items-center">
            <span className="mb-3 text-center text-[20px] font-semibold leading-tight text-ink sm:text-[22px]">
              Domain
              <br />
              Corporate
            </span>
            <div className="flex h-[150px] w-[150px] items-center justify-center rounded-lg border-2 border-black">
              <img
                src="/assets/images/domain.png"
                alt="Domain protection illustration"
                className="h-[130px] w-[130px] object-contain"
              />
            </div>
            <Link
              to="/join/email-domain"
              className="mt-4 inline-flex h-[34px] items-center justify-center rounded-full bg-[#585858] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
          <div className="flex w-[150px] flex-col items-center">
            <span className="mb-3 whitespace-nowrap text-[20px] font-semibold leading-tight text-ink sm:text-[22px]">
              Marketing
            </span>
            <div className="mt-[1.7rem] flex h-[150px] w-[150px] items-center justify-center rounded-lg border-2 border-black">
              <img
                src={whoCanUseImg}
                alt="Join PhishFlagger illustration"
                className="h-[130px] w-[130px] object-contain"
              />
            </div>
            <Link
              to="/join/email-marketing"
              className="mt-4 inline-flex h-[34px] items-center justify-center rounded-full bg-[#585858] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Caller ID (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1.3fr_1fr]">
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

    </>
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

function PhonePlaceholder({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="block h-auto w-[140px] max-w-full object-contain sm:w-[180px] lg:w-[220px]"
    />
  );
}
