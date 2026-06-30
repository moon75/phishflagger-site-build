import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

export default function Kickstarter() {
  return (
    <>
      <CloseButton />

      <div className="flex justify-end px-4 pt-5 pr-24 sm:px-6 sm:pr-28">
        <Link
          to="/about/hall-of-fame"
          className="text-[14px] font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
        >
          Hall of Fame
        </Link>
      </div>

      <section className="w-full bg-white px-4 pt-6 pb-20 sm:px-6 sm:pt-8 sm:pb-28">
        <div className="mx-auto max-w-[920px] text-center">
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

          <h1 className="mt-10 text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            Kickstarter
          </h1>

          <p className="mt-6 text-[16px] leading-relaxed text-ink-muted sm:text-[18px]">
            Coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
