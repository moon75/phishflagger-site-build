import CloseButton from "../components/ui/CloseButton.jsx";
import { brandify } from "../components/Brand.jsx";

export default function HumanCompatible() {
  return (
    <>
      <CloseButton to="/" />

      <section className="relative w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Human Compatible
          </h1>

          <p className="mx-auto mt-8 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:text-[16px]">
            {brandify("PhishFlagger™")} gives people a simple way to
            recognize trusted communications. Every outgoing email receives
            a unique, sequential {brandify("PhishCounter™")} in the subject
            line. Recipients can compare the number with the previous
            message from that sender. If the sequence is missing or doesn't
            match, it's a clear signal to stop and take a closer look.
          </p>
        </div>
      </section>
    </>
  );
}
