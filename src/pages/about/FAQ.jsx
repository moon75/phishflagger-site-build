import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { FAQ_ITEMS } from "../../data/faq.js";

export default function FAQ() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[920px]">
          {/* Header */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>

            <h1 className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-ink sm:mt-10 sm:text-[56px]">
              FAQ
            </h1>
          </div>

          {/* FAQ list */}
          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200 sm:mt-16">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-2 py-5 text-left transition-colors hover:bg-gray-50 sm:gap-6 sm:px-4 sm:py-6"
      >
        <span className="text-[15px] font-semibold text-ink sm:text-[17px]">
          {question}
        </span>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-ink-muted">
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </span>
      </button>
      {open && (
        <div className="whitespace-pre-line px-2 pb-6 text-[13.5px] leading-[1.7] text-ink sm:px-4 sm:pb-7 sm:text-[14.5px]">
          {answer}
        </div>
      )}
    </div>
  );
}
