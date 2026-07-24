import { useState } from "react";
import CloseButton from "../../components/ui/CloseButton.jsx";

// TODO: replace with a real Formspark form endpoint for this page.
const FORMSPARK_ENDPOINT = "https://submit-form.com/REPLACE_ME";

function isValidEmailFormat(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getDomain(email) {
  const parts = email.split("@");
  return parts.length === 2 ? parts[1].toLowerCase().trim() : "";
}

export default function RequestDomain() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  const domain = getDomain(email.trim());

  const onSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setError("Email address is required.");
      return;
    }
    if (!isValidEmailFormat(trimmedEmail)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({
          email: trimmedEmail,
          domain,
          note,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton to="/joinfree" />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
              Request My Domain
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
              Don't see your domain in the free plugin list? Let us know and we'll look into
              adding it.
            </p>
          </div>

          {status !== "success" ? (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 max-w-[560px] space-y-6 sm:mt-14"
            >
              <Field label="Email Address" error={error}>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <Field label="Domain">
                <input
                  type="text"
                  readOnly
                  value={domain}
                  placeholder="Domain will appear here"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <Field label="Optional Text">
                <textarea
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Anything else you'd like us to know"
                  className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <div className="flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full cursor-pointer rounded-lg bg-[#585858] px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f] disabled:opacity-70"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
                {status === "error" && (
                  <p className="text-center text-[14px] font-medium text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          ) : (
            <div className="mx-auto mt-10 max-w-[560px] flex-col items-center text-center sm:mt-14">
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
                <h2 className="mt-5 text-[24px] font-semibold text-ink">Thank you!</h2>
                <p className="mt-2 text-[15px] text-ink-muted">
                  We've received your request and will look into adding your domain.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, children, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-semibold text-ink sm:text-[15px]">
        {label}
      </span>
      <div
        className={`flex items-center gap-3 rounded-md bg-[#f4f5f8] px-3 py-3 sm:px-4 ${
          error ? "ring-1 ring-red-400" : ""
        }`}
      >
        <div className="flex-1">{children}</div>
      </div>
      {error && <span className="mt-1.5 block text-[12px] text-red-600">{error}</span>}
    </label>
  );
}
