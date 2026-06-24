import { useState } from "react";
import { Link } from "react-router-dom";
import emailImg from "../assets/images/email.avif";
import messagesImg from "../assets/images/messages.avif";
import textImg from "../assets/images/text.avif";
import callerIdImg from "../assets/images/callerid.avif";
import infoBoxImg from "../assets/images/email-inbox v2.png";
import domainProtectionImg from "../assets/images/3rd section left image.avif";
import howWorksImg from "../assets/images/4th section.avif";
import whoCanUseImg from "../assets/images/5th sec.avif";
import callerIdSectionImg from "../assets/images/6th sec.avif";
import history1Img from "../assets/images/7 1st.avif";
import history2Img from "../assets/images/7  2nd.avif";
import history3Img from "../assets/images/7 3rd.avif";

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
      <div className="mx-auto max-w-[1100px]">
      {/* Logo — mark + wordmark */}
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        <img
          src="/assets/images/logo-mark.png"
          alt=""
          className="h-14 w-auto sm:h-20"
        />
        <img
          src="/assets/images/logo-wordmark.png"
          alt="PhishFlagger"
          className="h-8 w-auto sm:h-12"
        />
      </div>

      {/* Headline */}
      <h1 className="mt-2 text-center text-[28px] font-medium tracking-tight text-ink leading-[1.15] sm:mt-3 sm:text-[36px] lg:text-[42px]">
        Protecting Communications
      </h1>

      {/* Phones row — flex so phones sit tight together regardless of container width */}
      <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-10 sm:mt-20 sm:gap-x-16 sm:gap-y-12">
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

    {/* ===== Section 2 — What is PhishFlagger? (white) ===== */}
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
        {/* Left — heading + bullets */}
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            What is{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span>?
          </h2>

          <ul className="mt-6 space-y-4 text-[15px] leading-[1.6] text-ink sm:mt-8 sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>
                Human-compatible solution that validates legitimate
                communications an highlights fraud attempts.
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
            <li className="flex gap-4">
              <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span>Provides a defense against impersonation and fraud.</span>
            </li>
          </ul>
        </div>

        {/* Right — info box image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={infoBoxImg}
            alt="PhishFlagger inbox demonstration"
            className="h-auto w-full max-w-[560px] rounded-xl border-2 border-gray-300 object-contain shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 3 — Domain protection (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1.1fr_1fr]">
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
          <p className="mt-4 text-[15px] leading-[1.6] text-ink sm:mt-6 sm:text-[18px] sm:leading-[1.55]">
            Domain protection for Microsoft, Google and Linux.
          </p>
        </div>
      </div>
    </section>

    {/* ===== Section 4 — How Does PhishFlagger Work? (white) ===== */}
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex justify-center lg:justify-start">
          <img
            src={howWorksImg}
            alt="PhishCounter subject line example"
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            How Does{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="font-normal not-italic">™</span>{" "}
            Work?
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            <BrandInline trail="Flagger" />™ inserts an uncounted sequential
            number in the subject line, called the{" "}
            <BrandInline trail="Counter" />™, from the sender. The recipient
            will see this number and be able to verify if it matches the last
            email sent (Human Compatible) or it will be automatically flagged
            as out of sequence by an application or domain (Auto-Flagging). In
            both cases, the recipient is protected from fraudulent senders.
          </p>
        </div>
      </div>
    </section>

    {/* ===== Section 5 — Who Can Use (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
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
            Any Email Domain can join the PhishFlagger Protocol. We also enable
            Marketers, Portals and Security Providers. Please see our licensing
            section to review and select which is most applicable for your
            organization.
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={whoCanUseImg}
            alt="Join PhishFlagger illustration"
            className="h-auto w-full max-w-[520px] object-contain"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 6 — Caller ID (white) ===== */}
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-[1fr_1.05fr]">
        <div className="flex justify-center lg:justify-start">
          <img
            src={callerIdSectionImg}
            alt="Caller ID device"
            className="h-auto w-full max-w-[420px] object-contain"
          />
        </div>
        <div>
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] lg:text-[40px]">
            Caller ID
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
            Sequence Number known only by valid carrier and callee prevents
            impersonation. As the existing Caller ID roll is fully
            interoperable globally, a &lsquo;sequence number&rsquo; could be
            implemented by telecoms worldwide to help authenticate calls.
          </p>
        </div>
      </div>
    </section>

    {/* ===== Section 7 — Numbering history (gray) ===== */}
    <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="mx-auto max-w-[820px] text-center text-[16px] leading-[1.5] text-ink sm:text-[20px] sm:leading-[1.45]">
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
            year="2024"
            topic="Phishing Protection"
            patent="US Patent 11,601,449 B2"
            attribution="William Pearce"
            heading="Numbering Email"
            img={history3Img}
            imgAlt="PhishFlagger email numbering"
          />
        </div>
      </div>
    </section>

    {/* ===== Section 8 — FAQ (white) ===== */}
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center text-[28px] font-bold tracking-tight text-ink sm:text-[36px] lg:text-[42px]">
          Frequently asked questions
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 sm:mt-12">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              last={idx === FAQ_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

const FAQ_ITEMS = [
  {
    q: "Why PhishFlagger™?",
    a: "Phishing scams and fraudulent emails hurt everybody. Today it is still far too easy to open an email that looks legitimate on the surface but hides malicious risks inside. PhishFlagger™ helps bulk email senders — banks, insurance companies, financial institutions — prevent customers from falling victim to phishing attempts by providing authenticated, numbered communications that assure recipients of message legitimacy.",
  },
  {
    q: "What is PhishFlagger™ email numbering?",
    a: "PhishFlagger™ email numbering is a patented protocol that assigns a unique sequential number to each outgoing email from a sender domain, making every legitimate message individually identifiable to the recipient.",
  },
  {
    q: "How does PhishFlagger™ email numbering work?",
    a: "Each outgoing email is tagged with the next number in the sender’s sequence (the PhishCounter™) and placed in the subject line. The recipient — or their email client — can confirm the number is in sequence; any out-of-sequence or missing number is automatically flagged as suspicious.",
  },
  {
    q: "How do outgoing emails get numbered?",
    a: "Numbering happens at the sending domain. When an email leaves the sender’s server, PhishFlagger™ inserts the next sequential number into the message header / subject line before delivery, so every recipient receives a counter-stamped email.",
  },
  {
    q: "What are some other benefits of PhishFlagger™ email numbering?",
    a: "Beyond phishing defense, sequential numbering improves deliverability trust, helps recipients track and audit communications, reduces support load from impersonation incidents, and gives marketers verifiable engagement signals.",
  },
  {
    q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
    a: "PhishFlagger™ was created to protect consumers and help companies eliminate brand destruction by imposters. By sequentially numbering digital communications, recipients can immediately identify legitimate messages and spot fraudulent ones that lack the expected sequence number.",
  },
];

function FaqItem({ question, answer, last }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={last ? "" : "border-b border-gray-200"}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:gap-6 sm:px-6 sm:py-5"
      >
        <span className="text-[14px] font-medium text-ink sm:text-[17px]">
          {question}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`h-5 w-5 shrink-0 text-ink transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-5 text-[13.5px] leading-[1.65] text-ink-muted sm:px-6 sm:pb-6 sm:text-[15px]">
          {answer}
        </div>
      )}
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

function HistoryCard({ year, topic, patent, attribution, heading, img, imgAlt }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-[28px] font-bold leading-none text-ink sm:text-[34px]">
        {year}
      </div>
      <div className="mt-1 text-[12px] font-medium text-ink-muted sm:text-[13px]">
        {topic}
      </div>
      <div className="text-[12px] text-ink-muted sm:text-[13px]">{patent}</div>
      <div className="mt-2 rounded-full bg-[#2a6df4] px-3 py-1 text-[11px] font-semibold text-white sm:text-[12px]">
        {attribution}
      </div>
      <div className="mt-3 text-[16px] font-semibold text-ink sm:mt-4 sm:text-[18px]">
        {heading}
      </div>
      <img
        src={img}
        alt={imgAlt}
        className="mt-3 h-auto w-full max-w-[240px] object-contain sm:mt-4 sm:max-w-[280px]"
      />
    </div>
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

