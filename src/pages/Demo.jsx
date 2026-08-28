import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function Demo() {
  return (
    <>
      <div className="mt-10 sm:mt-14">
        <CloseButton />
      </div>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[960px] px-6 text-center sm:px-12">
          <h1 className="page-title">
            Request Demo
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:demo@phishflaggerkey.com?subject=001%20-%20PhishFlagger%20Demo&body=Hi%20PhishFlagger%20team%2C%0A%0AI%27d%20like%20to%20try%20the%20demo."
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#2a6df4] px-8 py-3.5 text-[15px] font-bold text-white shadow-sm transition hover:bg-[#1a52c9] sm:px-10 sm:py-4 sm:text-[16px] duration-200 hover:scale-[1.2]"
            >
              ABC Bank
            </a>

            <div className="relative inline-flex">
              <span className="absolute -top-3 right-0 z-10 -translate-y-1/2 rotate-6 rounded-full bg-[#c9002b] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                Coming Soon
              </span>
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-[#2a6df4]/50 px-8 py-3.5 text-[15px] font-bold text-white shadow-sm sm:px-10 sm:py-4 sm:text-[16px]"
              >
                Text ACME Co.
              </button>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[640px] text-[16px] leading-[1.6] text-ink-muted sm:mt-10 sm:text-[17px]">
            This will open your default email client (Outlook, Apple Mail,
            Gmail, etc.). Subject or Content is not required. Just click
            send.
          </p>

          <div className="mx-auto mt-14 max-w-[640px] text-left">
            <h2 className="text-[20px] font-semibold text-ink sm:text-[24px]">
              What should I expect:
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink sm:text-[16px]">
              We will email you a series of 7 emails simulating bank
              communications. One of them will be a Phish. This will allow
              you a way to examine your emails should you suspect they are
              fraudulent.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink sm:text-[16px]">
              With PhishFlagger on your side also the validation would be
              automated.
            </p>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink sm:text-[16px]">
              We also validate Digitally.{" "}
              <Link
                to="/digital-verification"
                className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                More Info Here
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
