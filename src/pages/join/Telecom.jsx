import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import grandmaImg from "../../../telecom Webpage/assets/images/icons/grandma.png";
import callerIdPhoneImg from "../../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import threePhoneImg from "../../../telecom Webpage/assets/images/products/3phone.png";
import callerIdBoxImg from "../../../telecom Webpage/assets/images/products/caller-id-box.png";
import desktopPhoneImg from "../../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import emailPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Email v6.png";
import messagesPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Messages v6.png";
import textPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";

export default function Telecom() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[1100px]">
          <PageBrand />

          <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <h1 className="text-center text-[34px] font-normal leading-[1.12] tracking-tight text-ink sm:text-[48px] lg:text-left lg:text-[60px]">
              Regulators and Telecoms
              <br />
              <span className="text-brand">Help stop Call Spoofing</span>
            </h1>

            <div className="flex flex-wrap justify-center gap-10 sm:gap-14">
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
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[24px] font-bold leading-tight text-ink sm:text-[30px]">
              User-facing authentication
            </h2>
            <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-ink sm:text-[18px]">
              {CALL_EXAMPLES.map((item) => (
                <li
                  key={`${item.seq}-${item.status}`}
                  className="grid grid-cols-[minmax(0,1fr)_4.5ch_minmax(0,0.8fr)_5rem] items-baseline gap-3 font-medium tabular-nums"
                >
                  <span>{item.number}</span>
                  <span className="font-bold text-[#1f6e5f]">{item.seq}</span>
                  <span>{item.name}</span>
                  <span className="font-bold text-brand">{item.status}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[18px] leading-relaxed text-ink sm:text-[22px]">
              Existing Caller ID will be used to validate calls.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={grandmaImg}
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
          "Flags fraud attempts that do not have the expected sequential number.",
          "Provides a defense against impersonation and fraud.",
        ]}
      />

      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
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

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-center text-[28px] font-normal tracking-tight text-ink sm:text-[36px]">
            Protecting Communications
          </h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-7">
            {PRODUCT_IMAGES.map((item) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className="mx-auto h-[150px] w-full object-contain sm:h-[190px]"
              />
            ))}
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

const PRODUCT_IMAGES = [
  { src: callerIdBoxImg, alt: "Caller ID box" },
  { src: desktopPhoneImg, alt: "Desktop phone" },
  { src: threePhoneImg, alt: "Three phones" },
  { src: callerIdPhoneImg, alt: "PhishFlagger Caller ID" },
  { src: emailPhoneImg, alt: "PhishFlagger Email" },
  { src: messagesPhoneImg, alt: "PhishFlagger Messages" },
  { src: textPhoneImg, alt: "PhishFlagger Text" },
];

function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[36px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[48px] lg:text-[56px]"
      >
        <em className="italic">
          <span className="font-extrabold text-ink">Phish</span>
          <span className="font-normal text-brand">Flagger</span>
        </em>
        <span className="ml-1 align-super text-[16px] font-normal not-italic sm:text-[18px] lg:text-[22px]">
          &trade;
        </span>
      </Link>
      <p className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">
        Protecting Communications.
      </p>
    </div>
  );
}

function ActionCard({ to, label, src, alt, imageClassName = "" }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center transition-opacity hover:opacity-80"
    >
      <span className="text-[18px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:text-[22px]">
        {label}
      </span>
      <img
        src={src}
        alt={alt}
        className={`mt-5 h-[150px] w-[150px] object-contain sm:h-[190px] sm:w-[190px] ${imageClassName}`}
      />
    </Link>
  );
}

function SplitSection({ image, imageAlt, text }) {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
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
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        {reverse ? imageEl : listEl}
        {reverse ? listEl : imageEl}
      </div>
    </section>
  );
}
