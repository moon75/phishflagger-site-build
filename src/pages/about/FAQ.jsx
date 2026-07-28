import CloseButton from "../../components/ui/CloseButton.jsx";
import FaqTabs from "../../components/faq/FaqTabs.jsx";

export default function FAQ() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[1000px]">
          <h1 className="text-center text-[24px] font-semibold tracking-tight text-ink sm:text-[30px]">
            Frequently asked questions
          </h1>

          <div className="mt-8 sm:mt-12">
            <FaqTabs showAskAiComingSoon />
          </div>
        </div>
      </section>
    </>
  );
}
