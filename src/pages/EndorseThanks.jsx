import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function EndorseThanks() {
  return (
    <>
      <CloseButton to="/join/telecom" />
      <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <Link
              to="/"
              aria-label="PhishFlagger home"
              className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
            >
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                &trade;
              </span>
            </Link>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications.
            </p>
          </div>

          <h1 className="mx-auto mt-14 max-w-[900px] text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[48px] lg:text-[56px]">
            Thank you. Your endorsement has been received.
          </h1>
        </div>
      </section>
    </>
  );
}
