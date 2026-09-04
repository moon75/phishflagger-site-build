import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import supportersImg from "../assets/images/supporters-cartoon.png";
import { publicPath } from "../lib/publicPath.js";

const grannyImg = publicPath("/assets/images/granny%20image.png");

const FORMSPARK_ENDPOINT = "https://submit-form.com/YW0bMhHOg";

export default function EndorseUs() {
  const [pic, setPic] = useState(null);
  const [verifyMe, setVerifyMe] = useState(false);
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const data = new FormData(form);
    const body = {};

    for (const [key, value] of data.entries()) {
      if (value instanceof File) continue;
      body[key] = value;
    }

    if (pic) {
      body.pic = pic.name;
    }

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
      setPic(null);
      setVerifyMe(false);
      navigate("/help/telecom-endorse-us/thanks");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton to="/telecom" />
      <section
        className="bg-[#eef0f4] bg-cover bg-center px-4 pb-16 pt-10 text-ink sm:px-6 sm:pt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-[1040px]">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-[#303030] sm:text-[44px]">
            Endorse Us for safe phone Calls.
          </h1>

          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex h-full flex-col items-center gap-6 sm:items-start">
              <img
                src={grannyImg}
                alt="Woman on a phone call"
                className="h-[220px] w-full max-w-[300px] rounded-2xl object-cover object-top shadow-sm pic-with-no-link-mouse-over-increase"
              />
              <p className="mt-auto max-w-[420px] text-center text-[16px] leading-relaxed text-ink-muted sm:text-left sm:text-[18px]">
                Share why verified, numbered calls matter to you — your endorsement
                helps us show telecom providers and regulators that people want an
                end to caller ID spoofing and phone fraud.
              </p>
            </div>
            <div className="flex h-full w-full flex-col items-center gap-6 text-center">
              <img
                src={supportersImg}
                alt="Happy PhishFlagger supporters"
                className="h-[220px] w-full max-w-[600px] object-contain pic-with-no-link-mouse-over-increase"
              />
              <div className="relative mt-auto inline-block">
                <span className="absolute -top-3 -left-3 z-10 -rotate-12 whitespace-nowrap rounded-full bg-[#c9002b] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white">
                  Coming Soon
                </span>
                <span
                  aria-disabled="true"
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition duration-200 hover:bg-[#d0d0d0] hover:text-[#4a4a4a]"
                >
                  Supporters
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-14 w-full rounded-[10px] border border-[#e9e9e9] bg-white px-6 pb-12 pt-14"
          >
            <div className="space-y-5">
              {/* Name */}
              <Field label="Name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  autoComplete="name"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              {/* Country */}
              <Field label="Country">
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="Your country"
                  autoComplete="country-name"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              {/* Company */}
              <Field
                label={
                  <>
                    Company{" "}
                    <span className="text-[14px] font-normal text-[#999]">
                      optional
                    </span>
                  </>
                }
              >
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company"
                  autoComplete="organization"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              {/* Note */}
              <Field label="Note">
                <textarea
                  id="note"
                  name="note"
                  required
                  rows={4}
                  placeholder="Share your thoughts on PhishFlagger…"
                  className="min-h-[96px] w-full resize-none bg-transparent py-4 text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <div>
                <span className="mb-3 block text-[21px] font-medium leading-none text-[#333333]">
                  Pic{" "}
                  <span className="text-[14px] font-normal text-[#999]">
                    optional
                  </span>
                </span>
                <div
                  className="flex cursor-pointer items-center gap-4 rounded-[7px] bg-[#f5f7f8] px-4 py-3"
                  onClick={() => fileRef.current?.click()}
                >
                  <span className="rounded-[5px] bg-[#e2e5e9] px-3 py-1.5 text-[13px] font-medium text-[#444]">
                    Choose file
                  </span>
                  <span className="text-[14px] text-[#808080]">
                    {pic ? pic.name : "No file chosen"}
                  </span>
                  <input
                    ref={fileRef}
                    id="pic"
                    name="pic"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setPic(e.target.files?.[0] ?? null)}
                  />
                </div>
              </div>

              <div>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    id="verifyMe"
                    name="verifyMe"
                    value="true"
                    type="checkbox"
                    checked={verifyMe}
                    onChange={(e) => setVerifyMe(e.target.checked)}
                    className="h-5 w-5 cursor-pointer rounded border-[#ccc] accent-brand"
                  />
                  <span className="text-[16px] font-medium text-[#333]">
                    Verify me as real{" "}
                    <span className="text-[13px] font-normal text-[#999]">
                      optional
                    </span>
                  </span>
                </label>

                {verifyMe && (
                  <div className="mt-5 space-y-4 rounded-[8px] border border-[#e4e7ea] bg-[#fafbfc] px-5 py-5">
                    <Field label="Email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="hello@example.com"
                        autoComplete="email"
                        className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                      />
                    </Field>

                    <Field label="Phone">
                      <div className="flex h-13 items-center gap-6">
                        <span className="text-[14px] font-bold text-[#242424]">
                          +1
                        </span>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="(123) 456-7890"
                          autoComplete="tel"
                          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                        />
                      </div>
                    </Field>

                    <Field label="Details">
                      <textarea
                        id="details"
                        name="details"
                        rows={3}
                        placeholder="Any additional details..."
                        className="min-h-[72px] w-full resize-none bg-transparent py-4 text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                      />
                    </Field>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-[49px] cursor-pointer rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red focus:outline-none focus:ring-2 focus:ring-[#585858] focus:ring-offset-2 disabled:opacity-60 duration-200 hover:scale-[1.2]"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-6 text-center text-[14px] font-medium text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[21px] font-medium leading-none text-[#333333]">
        {label}
      </span>
      <div className="rounded-[7px] bg-[#f5f7f8] px-4">{children}</div>
    </label>
  );
}
