import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { FAQ_ITEMS } from "../../data/faq.js";
import phishCounterImg from "../../assets/images/4th section.avif";

export default function EmailMarketing() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Marketers and Bulk Emailers
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-7 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p>
              You can help prevent phishing and fraud by numbering your outgoing
              emails. <BrandInline />
              &trade; can protect your brand and clients while
              increasing your campaign reach.
            </p>
            <p>
              Protect all email recipients from phishing and fraud.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/images/email-marketing-1.webp"
              alt="Email marketing and senders illustration with numbered outgoing emails"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <ul className="mt-5 space-y-2 pl-5">
              <li className="list-disc">
                <BrandInline />
                &trade; email numbering in your outgoing email campaigns helps
                prevent others from impersonating you, your organization, clients,
                partners, and your brand.
              </li>
              <li className="list-disc">
                Designed for marketers and bulk emails.
              </li>
              <li className="list-disc">
                Tame email security and help prevent phishing and other email
                fraud.
              </li>
              <li className="list-disc">
                Prevent Impersonations of your customers.
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={phishCounterImg}
              alt="PhishCounter subject line example"
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[820px] text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
      >
        <BrandDisplay />
      </Link>
      <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
        Protecting Communications
      </p>
    </div>
  );
}

function BrandDisplay() {
  return (
    <>
      <em className="italic">
        <span className="font-extrabold text-ink">Phish</span>
        <span className="font-normal text-brand">Flagger</span>
      </em>
      <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
        &trade;
      </span>
    </>
  );
}

function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-extrabold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}

function FaqSection() {
  return (
    <>
    <hr className="border-t border-gray-300" />
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center text-[36px] font-semibold tracking-tight text-ink sm:text-[48px]">
          Frequently asked questions
        </h2>

        <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 sm:mt-14">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              defaultOpen={index === 0}
              last={index === FAQ_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

function FaqItem({ question, answer, defaultOpen, last }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={last ? "" : "border-b border-gray-200"}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:px-6"
      >
        <span className="text-[14px] font-semibold text-ink sm:text-[15px]">
          {question}
        </span>
        <span className="text-[20px] leading-none text-ink">
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div className="space-y-4 px-4 pb-5 text-[13px] leading-[1.75] text-ink-muted sm:px-6 sm:text-[14px]">
          {answer}
        </div>
      )}
    </div>
  );
}
