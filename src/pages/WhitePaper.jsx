import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import PageDownButton from "../components/ui/PageDownButton.jsx";

export default function WhitePaper() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <PageDownButton />
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            White Paper
          </h1>

          <p className="mx-auto mt-8 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:text-[16px]">
            PLACEHOLDER-WHITEPAPER. Replace this copy with the final content.
          </p>

          <p className="mx-auto mt-4 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:text-[16px]">
            <Link
              to="/digital-ino"
              className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
            >
              More Info Here
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
