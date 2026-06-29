import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // wire up submission later
  };

  return (
    <>
    <CloseButton />
    <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-content">
        {/* ===== Top — wordmark, tagline, page heading ===== */}
        <div className="text-center">
          <div className="text-[36px] leading-none tracking-tight sm:text-[48px] lg:text-[56px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="ml-1 align-super text-[16px] font-normal not-italic sm:text-[18px] lg:text-[22px]">
              ™
            </span>
          </div>
          <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
            Protecting Communications.
          </p>
          <h1 className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-ink sm:mt-10 sm:text-[52px] lg:text-[64px]">
            Contact
          </h1>
        </div>

        {/* ===== Two-column body ===== */}
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-20 sm:gap-16 lg:grid-cols-2">
          {/* Left — contact info */}
          <div className="space-y-8 sm:space-y-10">
            {/* Email block with icon */}
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-ink"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <div>
                <div className="text-[15px]">
                  <em className="italic">
                    <span className="font-extrabold text-ink">Phish</span>
                    <span className="font-normal text-brand italic">
                      Flagger
                    </span>
                  </em>
                  <span className="ml-0.5 align-super text-[9px] not-italic">
                    ™
                  </span>
                </div>
                <a
                  href="mailto:contact@PhishFlagger.com"
                  className="mt-1 inline-block text-[15px] text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                >
                  contact@PhishFlagger.com
                </a>
              </div>
            </div>

            {/* Address block */}
            <div className="text-[14px] leading-[1.7] text-ink sm:text-[15px]">
              <div>
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand italic">
                    Flagger
                  </span>
                </em>
                <span className="font-semibold text-ink">.com</span>
              </div>
              <div className="mt-4">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand italic">
                    Flagger
                  </span>
                </em>
                <span className="font-semibold text-ink"> Inc.</span>
              </div>
              <div>2300 Yonge Street, Suite 1600</div>
              <div>Toronto, ON M4P 1E4</div>
            </div>

            {/* Telecom / Caller ID link */}
            <div className="text-[14px] text-ink sm:text-[15px]">
              Contact for Telecom or Caller ID{" "}
              <Link
                to="/join/telecom/contact"
                className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                Click Here
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                label="First Name"
                trailingIcon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-gray-400"
                    aria-hidden
                  >
                    <circle cx="6" cy="12" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="18" cy="12" r="1.6" />
                  </svg>
                }
              >
                <input
                  type="text"
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder="First Name"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <Field label="Last Name">
                <input
                  type="text"
                  value={form.lastName}
                  onChange={update("lastName")}
                  placeholder="Last Name"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="hello@example.com"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Phone Number">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-ink">+1</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="(123) 456 - 7890"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </Field>

            <Field label="Message">
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Your Message"
                className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-[#3d3d3d] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2b2b2b]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}

function Field({ label, children, trailingIcon }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-ink sm:text-[15px]">
        {label}
      </span>
      <div className="flex items-center gap-3 rounded-md bg-[#f4f5f8] px-3 py-3 sm:px-4">
        <div className="flex-1">{children}</div>
        {trailingIcon}
      </div>
    </label>
  );
}
