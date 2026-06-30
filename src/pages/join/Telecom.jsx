import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";
import callerIdBoxImg from "../../../telecom Webpage/assets/images/products/caller-id-box.png";
import desktopPhoneImg from "../../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import callerIdPhoneImg from "../../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import threePhoneImg from "../../../telecom Webpage/assets/images/products/3phone.png";

export default function Telecom() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          <PageBrand />

          <div className="mt-14">
            <h1 className="text-center text-[20px] font-normal leading-[1.12] tracking-tight text-ink sm:text-[29px] lg:text-[36px]">
              Telecoms and Regulators
              <br />
              <span className="text-brand">Help stop Call Spoofing</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-ink sm:text-[30px]">
              User-facing authentication
            </h2>
            <ul className="mt-6 space-y-2 text-[12px] leading-relaxed text-ink sm:text-[15px] lg:text-[18px]">
              {CALL_EXAMPLES.map((item) => (
                <li
                  key={`${item.seq}-${item.status}`}
                  className="grid grid-cols-[minmax(0,1fr)_4ch_max-content_1fr] sm:grid-cols-[minmax(0,1fr)_4.5ch_max-content_1fr] items-baseline gap-2 sm:gap-3 font-medium tabular-nums"
                >
                  <span>{item.number}</span>
                  <span className="font-bold text-[#1f6e5f]">{item.seq}</span>
                  <span>{item.name}</span>
                  <span className="font-bold text-brand">{item.status}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14px] leading-relaxed text-ink sm:text-[18px] lg:text-[22px]">
              Existing Caller ID will be used to validate calls.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/images/granny image.png"
              alt="User receiving an authenticated call"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px]"
            />
          </div>
        </div>
      </section>

      <SplitSection
        image={callerIdPhoneImg}
        imageAlt="PhishFlagger Caller ID"
        text="As the Caller ID rail is interoperable between technologies and carriers globally, a sequence number can be implemented easily to authenticate calls and help prevent fraud."
      />

      <FeatureSection
        tone="gray"
        image={threePhoneImg}
        imageAlt="Phones with caller ID display"
        items={[
          "Human-compatible solution that validates legitimate communications and highlights fraud attempts.",
          "Provides protection by adding a unique sequential number, the PhishCounter, visible to the user.",
        ]}
      />

      <FeatureSection
        image={callerIdBoxImg}
        imageAlt="Caller ID box showing a PhishCounter sequence number"
        reverse
        items={[
          "Provides a defense against impersonation and fraud.",
          "Flags fraud attempts that do not have the expected sequential number.",
        ]}
      />

      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <p className="text-center text-[25px] leading-snug tracking-tight text-ink sm:text-[34px] lg:text-left">
            By adding a <strong>Sequence Number</strong> to the existing Caller
            ID rail, we can end Caller ID fraud.
          </p>
          <div className="flex justify-center">
            <img
              src={desktopPhoneImg}
              alt="Caller ID box with PhishCounter sequence number"
              className="h-auto w-full max-w-[320px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA panel ===== */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-20">
            <ActionCard
              to="/join/telecom/contact"
              label="Contact"
              src={contactIcon}
              alt="Contact"
              imageClassName="rounded-full object-cover"
            />
            <ActionCard
              to="/join/telecom/subscribe"
              label="Subscribe"
              src={subscribeIcon}
              alt="Subscribe"
            />
            <ActionCard
              to="/endorse-us"
              label="Endorse Us"
              src={endorseIcon}
              alt="Endorse Us"
            />
            <ActionCard
              to="/petition"
              label="Sign Petition"
              alt="Sign Petition"
              svgIcon={
                <svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-5 h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]">
                  <rect width="68" height="68" rx="34" fill="#eef0f4"/>
                  <rect x="18" y="14" width="28" height="36" rx="3" fill="white" stroke="#c0c4cc" strokeWidth="2"/>
                  <line x1="23" y1="23" x2="41" y2="23" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="23" y1="29" x2="41" y2="29" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="23" y1="35" x2="34" y2="35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M36 44 L48 32 L52 36 L40 48 L34 50 Z" fill="#ff0033" stroke="white" strokeWidth="1"/>
                  <line x1="46" y1="34" x2="50" y2="38" stroke="white" strokeWidth="1.5"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

    </>
  );
}

const CALL_EXAMPLES = [
  {
    number: "...613-861-8600",
    seq: "2031",
    name: "David Park",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "2032",
    name: "David Park",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "2033",
    name: "David Park",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "",
    name: "David Park",
    status: "<<< Fake",
  },
  {
    number: "...613-861-8600",
    seq: "3531",
    name: "David Park",
    status: "<<< Fake",
  },
];


function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
      >
        <em className="italic">
          <span className="font-extrabold text-ink">Phish</span>
          <span className="font-normal text-brand">Flagger</span>
        </em>
        <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
          &trade;
        </span>
      </Link>
      <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
        Protecting Communications.
      </p>
    </div>
  );
}

function ActionCard({ to, label, src, alt, imageClassName = "", svgIcon }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center transition-opacity hover:opacity-80"
    >
      <span className="text-[18px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:text-[22px]">
        {label}
      </span>
      {svgIcon ?? (
        <img
          src={src}
          alt={alt}
          className={`mt-5 h-[68px] w-[68px] object-contain sm:h-[83px] sm:w-[83px] ${imageClassName}`}
        />
      )}
    </Link>
  );
}

function SplitSection({ image, imageAlt, text }) {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full max-w-[300px] object-contain"
          />
        </div>
        <p className="text-center text-[22px] leading-relaxed text-ink sm:text-[28px] lg:text-left">
          {text}
        </p>
      </div>
    </section>
  );
}

function FeatureSection({ tone = "white", image, imageAlt, items, reverse }) {
  const imageEl = (
    <div className="flex justify-center">
      <img
        src={image}
        alt={imageAlt}
        className="h-auto w-full max-w-[320px] object-contain"
      />
    </div>
  );
  const listEl = (
    <ul className="space-y-4 pl-5 text-[19px] leading-snug text-ink sm:text-[24px]">
      {items.map((item) => (
        <li key={item} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className={`w-full px-4 py-14 sm:px-6 sm:py-20 ${
        tone === "gray" ? "bg-[#eef0f4]" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {reverse ? imageEl : listEl}
        {reverse ? listEl : imageEl}
      </div>
    </section>
  );
}
