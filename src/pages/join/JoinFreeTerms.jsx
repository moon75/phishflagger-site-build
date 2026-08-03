import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

export default function JoinFreeTerms() {
  const location = useLocation();
  const email = location.state?.email || "";

  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!agreed) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log("Free key requested:", { email, ...location.state });
    }, 900);
  }

  return (
    <>
      <CloseButton to="/" />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          {!submitted ? (
            <>
              <div className="text-center">
                <h1 className="text-[28px] font-semibold leading-none tracking-tight text-ink sm:text-[36px] lg:text-[44px]">
                  Terms Of Service
                </h1>
                {email && (
                  <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
                    {email}
                  </p>
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-10 max-w-[640px] space-y-6 sm:mt-14"
              >
                <div className="h-[260px] overflow-y-auto rounded-md border border-gray-300 bg-white p-4 text-left text-[14px] leading-[1.65] text-ink sm:p-6">
                  License key placeholder text for Terms of Service
                </div>

                <label className="flex items-start gap-3 text-[14px] text-ink sm:text-[15px]">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#585858]"
                  />
                  I agree to the Terms of Service.
                </label>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={!agreed || submitting}
                    className="w-full cursor-pointer rounded-lg bg-[#585858] px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f] disabled:cursor-default disabled:opacity-60"
                  >
                    {submitting ? "Creating..." : "Create My Free Key"}
                  </button>
                  <p className="text-center text-[12.5px] text-ink-muted">
                    By submitting, you agree to receive your plugin license by email. We never
                    share your information. You will receive an email shortly, and it will
                    contain the license for your email address.
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="mx-auto mt-10 max-w-[640px] flex-col items-center text-center sm:mt-14">
              <div className="flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#585858] text-[#585858]">
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M8 12.5l2.5 2.5L16 9.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="mt-5 text-[24px] font-semibold text-ink">You're all set!</h2>
                <p className="mt-2 text-[15px] text-ink-muted">
                  Check your inbox shortly for your Email Plugin Key.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-flex h-[42px] items-center justify-center rounded-full bg-[#585858] px-7 text-[14px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
