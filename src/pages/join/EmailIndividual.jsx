import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { FAQ_ITEMS } from "../../data/faq.js";
import emailInboxImg from "../../assets/images/email-inbox v2.png";

export default function EmailIndividual() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Individual Email
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-content justify-center">
          <img
            src={emailInboxImg}
            alt="Inbox showing PhishCounter numbered email messages"
            className="h-auto w-full max-w-[520px] rounded-md object-contain"
          />
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
              defaultOpen={false}
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
        <div className="whitespace-pre-line space-y-4 px-4 pb-5 text-[13px] leading-[1.75] text-ink-muted sm:px-6 sm:text-[14px]">
          {answer}
        </div>
      )}
    </div>
  );
}
