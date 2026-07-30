import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FAQ_CATEGORIES } from "../../data/faq.js";
import { brandify } from "../Brand.jsx";

// Reusable category-tabbed FAQ block. Renders a row of pill tabs (one per
// FAQ_CATEGORIES entry) and the accordion for whichever category is active.
export default function FaqTabs({
  showAskAiComingSoon = false,
  categoryOrder = null,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);
  const categories = categoryOrder
    ? categoryOrder.map((index) => FAQ_CATEGORIES[index])
    : FAQ_CATEGORIES;
  const active = activeIndex === null ? null : categories[activeIndex];
  const { pathname } = useLocation();

  // The Footer (and this FAQ block) persists across route changes, so an
  // expanded category/question would otherwise stay open when navigating away.
  useEffect(() => {
    setActiveIndex(null);
    setOpenQuestion(null);
  }, [pathname]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((category, idx) => (
          <button
            key={category.name}
            type="button"
            onClick={() => {
              setActiveIndex(idx === activeIndex ? null : idx);
              setOpenQuestion(null);
            }}
            className={`cursor-pointer rounded-full border px-4 py-2 text-[13px] font-medium transition-colors sm:text-[14px] ${
              idx === activeIndex
                ? "border-[#5a6066] bg-[#5a6066] text-white"
                : "border-gray-300 text-ink-muted hover:bg-gray-100 hover:text-ink"
            }`}
          >
            {category.name}
          </button>
        ))}
        {showAskAiComingSoon && (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-[13px] font-medium text-gray-400 sm:text-[14px]"
          >
            Ask AI coming soon
          </button>
        )}
      </div>

      {active && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 sm:mt-10">
          {active.items.length > 0 ? (
            active.items.map((item, idx) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                last={idx === active.items.length - 1}
                open={openQuestion === item.q}
                onToggle={() =>
                  setOpenQuestion((prev) => (prev === item.q ? null : item.q))
                }
              />
            ))
          ) : (
            <p className="px-4 py-10 text-center text-[14px] italic text-ink-muted sm:px-6 sm:text-[15px]">
              Coming soon.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function FaqItem({ question, answer, last, open, onToggle }) {
  return (
    <div className={last ? "" : "border-b border-gray-200"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:gap-6 sm:px-6 sm:py-5"
      >
        <span className="text-[14px] font-medium text-ink sm:text-[17px]">
          {brandify(question)}
        </span>
        <span className="text-[20px] leading-none text-ink-muted">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="whitespace-pre-line px-4 pb-5 text-[13.5px] leading-[1.65] text-ink-muted sm:px-6 sm:pb-6 sm:text-[15px]">
          {answer.includes("Help stop phone fraud in your country. Sign our Petition")
            ? answer.split("\n").map((line, index, lines) => (
                <span key={`${line}-${index}`}>
                  {line === "Help stop phone fraud in your country. Sign our Petition" ? (
                    <>
                      Help stop phone fraud in your country. Sign our{" "}
                      <Link
                        to="/petition"
                        className="text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                      >
                        Petition
                      </Link>
                    </>
                  ) : (
                    brandify(line)
                  )}
                  {index < lines.length - 1 ? "\n" : ""}
                </span>
              ))
            : brandify(answer)}
        </div>
      )}
    </div>
  );
}
