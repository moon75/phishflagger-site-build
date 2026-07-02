import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import { FAQ_ITEMS } from "../data/faq.js";
import victimImg from "../assets/images/victim testimonials.avif";
import endorseImg from "../assets/images/endorse us.avif";
import communityImg from "../assets/images/commnity image.avif";

export default function PhishFlaggerOrg() {
  return (
    <>
      <CloseButton />

      {/* ===== Section 1 — Heading + intro + two icons (white) ===== */}
      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[820px]">
          {/* PhishFlagger.org wordmark */}
          <h1 className="text-center text-[28px] leading-none tracking-tight sm:text-[34px]">
            <Link to="/" className="inline-block hover:opacity-80">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="font-semibold text-ink">.org</span>
            </Link>
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-center text-[18px] font-medium text-ink sm:text-[19px]">
            Protecting Communications
          </p>

          {/* Section heading */}
          <h2 className="mt-8 text-center text-[18px] font-semibold tracking-tight text-ink sm:mt-10 sm:text-[22px]">
            Our Community of participants who want to help
          </h2>

          {/* Intro paragraph */}
          <p className="mx-auto mt-5 max-w-[640px] text-center text-[13px] leading-[1.7] text-ink sm:mt-6 sm:text-[13.5px]">
            <BrandInline />
            <Tm />{" "}
            prevents Phishing cybercrime. Our mission is to make emails safer.
            To solve this crisis, we bring together developers, email forwarders
            and consumers. Implementation of the{" "}
            <BrandInline />
            <Tm />{" "}
            Protocol can empower everyone to identify malicious Phishing
            attempts. Whether you can contribute as a developer, need resources
            or want to share your knowledge or if you have been victimized or
            you simply care. Our Community is open to anyone.
          </p>

        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto h-px w-[88%] max-w-content bg-gray-300" />

      {/* ===== Section 2 — Participate and Help Improve (gray) ===== */}
      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — community illustration with pill label */}
          <Link to="/community" className="flex flex-col items-center">
            <img
              src={communityImg}
              alt="People holding hands in community"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[360px]"
            />
            <span className="mt-4 inline-block rounded-md bg-[#2b2b2b] px-3 py-1 text-[12px] font-semibold text-white sm:mt-6">
              Community
            </span>
          </Link>

          {/* Right — heading + paragraph */}
          <div className="text-center lg:text-left">
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[30px] lg:text-[34px]">
              Participate and Help
              <br className="hidden sm:block" />
              {" "}Improve{" "}
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                ™
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-[1.7] text-ink sm:mt-5 lg:mx-0">
              There are a number of ways to get involved with{" "}
              <BrandInline />
              <Tm />
              <br />
              General discussions, Questions, and Comments
              <br />
              Join the email discussion list to ask questions about deploying{" "}
              <br className="hidden sm:block" />
              <BrandInline />
              {" "}or share your operational experience.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-300" />

      {/* ===== Section 3 — FAQ (white) ===== */}
      <section className="w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
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
        <div className="whitespace-pre-line px-4 pb-5 text-[13.5px] leading-[1.65] text-ink-muted sm:px-6 sm:pb-6 sm:text-[15px]">
          {answer}
        </div>
      )}
    </div>
  );
}

function IconCard({ to, src, alt, label }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center transition-opacity hover:opacity-80"
    >
      <img
        src={src}
        alt={alt}
        className="h-[96px] w-auto object-contain sm:h-[120px]"
      />
      <span className="mt-3 text-[12px] font-medium text-ink group-hover:text-brand sm:mt-4 sm:text-[12.5px]">
        {label}
      </span>
    </Link>
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

function Tm() {
  return <span className="ml-0.5 align-super text-[9px] not-italic">™</span>;
}
