import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function TelecomFormPage({
  title,
  buttonLabel,
  thanksPath,
  formsparkEndpoint,
  form,
  setForm,
}) {
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();
  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(formsparkEndpoint, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      if (thanksPath) navigate(thanksPath);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
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
          <h1 className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-ink sm:mt-10 sm:text-[52px] lg:text-[64px]">
            {title}
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-20 sm:gap-16 lg:grid-cols-2">
          <div className="space-y-8 sm:space-y-10">
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-300 sm:h-12 sm:w-12">
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
                    &trade;
                  </span>
                </div>
                <a
                  href="mailto:callerid@phishflagger.com"
                  className="mt-1 inline-block text-[15px] text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                >
                  callerid@phishflagger.com
                </a>
              </div>
            </div>

            <div className="text-[14px] leading-[1.7] text-ink sm:text-[15px]">
              <div>
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand italic">Flagger</span>
                </em>
                <span className="font-semibold text-ink">.com</span>
              </div>
              <div className="mt-4">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand italic">Flagger</span>
                </em>
                <span className="font-semibold text-ink"> Inc.</span>
              </div>
              <div>2300 Yonge Street, Suite 1600</div>
              <div>Toronto, ON M4P 1E4</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="First Name">
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder="First Name"
                  autoComplete="given-name"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <Field label="Last Name">
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={update("lastName")}
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>
            </div>

            <Field label="Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="Email"
                autoComplete="email"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Phone Number">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-[#2a6df4]">
                  +1
                </span>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="(123) 456 - 7890"
                  autoComplete="tel"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </div>
            </Field>

            <Field label="Message">
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                placeholder="Message"
                className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="cursor-pointer rounded-lg bg-[#3d3d3d] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2b2b2b] disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : buttonLabel}
              </button>
            </div>
            {status === "error" && (
              <p className="text-center text-[14px] font-medium text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-ink sm:text-[15px]">
        {label}
      </span>
      <div className="flex items-center gap-3 rounded-md bg-[#f4f5f8] px-3 py-3 sm:px-4">
        <div className="flex-1">{children}</div>
      </div>
    </label>
  );
}
