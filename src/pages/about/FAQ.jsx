import { useSearchParams } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import FaqTabs from "../../components/faq/FaqTabs.jsx";
import LogoMark from "../../components/ui/LogoMark.jsx";

export default function FAQ() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <>
      <CloseButton />

      <section
        className="relative w-full min-h-screen bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-[1240px]">
          <h1 className="flex items-center justify-center gap-3 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[44px]">
            <LogoMark />
            FAQ
          </h1>

          <div className="mt-8 sm:mt-12">
            <FaqTabs showAskAiComingSoon initialCategory={category} />
          </div>
        </div>
      </section>
    </>
  );
}
