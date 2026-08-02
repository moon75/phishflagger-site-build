import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const DOMAIN_PROVIDERS = [
  { domain: "gmail.com", provider: "Gmail" },
  { domain: "yahoo.com", provider: "Yahoo" },
  { domain: "hotmail.com", provider: "Hotmail" },
  { domain: "outlook.com", provider: "Outlook" },
  { domain: "live.com", provider: "Live" },
  { domain: "aol.com", provider: "AOL" },
];

const ALLOWED_DOMAINS = DOMAIN_PROVIDERS.map(({ domain }) => domain);

function isValidEmailFormat(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getDomain(email) {
  const parts = email.split("@");
  return parts.length === 2 ? parts[1].toLowerCase().trim() : "";
}

export default function JoinFree() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", code: "" });
  const [errors, setErrors] = useState({});
  const [emailVerified, setEmailVerified] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const inputRefs = useRef({});

  function validateField(fieldName, valueOverride) {
    const value = (valueOverride !== undefined ? valueOverride : values[fieldName]).trim();

    if (fieldName === "email" && !value) {
      setErrors((prev) => ({ ...prev, email: "Email address is required." }));
      return false;
    }

    if (fieldName === "email" && value) {
      if (!isValidEmailFormat(value)) {
        setErrors((prev) => ({ ...prev, email: "Enter a valid email address." }));
        return false;
      }
      const domain = getDomain(value);
      if (!ALLOWED_DOMAINS.includes(domain)) {
        setErrors((prev) => ({
          ...prev,
          email: "Domain not supported. Use " + ALLOWED_DOMAINS.join(", ") + ".",
        }));
        return false;
      }
    }

    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    return true;
  }

  function handleChange(fieldName, value) {
    setValues((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      validateField(fieldName, value);
    }
  }

  function handleVerifyEmail() {
    if (!validateField("email")) {
      inputRefs.current.email?.focus();
      return;
    }
    setEmailVerified(true);
  }

  function handleVerifyCode() {
    const code = values.code.trim();
    if (!code) {
      setErrors((prev) => ({ ...prev, code: "Enter the code we sent to your email." }));
      inputRefs.current.code?.focus();
      return;
    }
    setErrors((prev) => ({ ...prev, code: "" }));
    setCodeVerified(true);
  }

  function handleJoin() {
    if (!codeVerified) return;
    navigate("/joinfree/register", { state: { email: values.email } });
  }

  return (
    <>
      <CloseButton to="/kick" />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          {/* ===== Page heading ===== */}
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
              Join
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
              Get you Free Email licenses here.
            </p>
          </div>

          {/* ===== Form ===== */}
          <div className="mx-auto mt-10 max-w-[640px] space-y-6 sm:mt-14">
            <div
              className={`transition-opacity ${
                emailVerified ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <p className="text-[13px] font-bold uppercase tracking-wide text-ink-muted">
                Step 1
              </p>

              <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <Field label="Email Address" error={errors.email}>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      required
                      disabled={emailVerified}
                      ref={(el) => (inputRefs.current.email = el)}
                      value={values.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none disabled:text-ink-muted"
                    />
                  </Field>
                </div>
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={emailVerified}
                  className="h-[50px] shrink-0 cursor-pointer rounded-md bg-[#585858] px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f] disabled:cursor-default disabled:opacity-60"
                >
                  {emailVerified ? "Email Verified" : "Verify Email"}
                </button>
              </div>
            </div>

            <div
              className={`transition-opacity ${
                emailVerified ? "" : "pointer-events-none opacity-50"
              } ${codeVerified ? "pointer-events-none opacity-50" : ""}`}
            >
              <p className="text-[13px] font-bold uppercase tracking-wide text-ink-muted">
                Step 2
              </p>

              <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-end">
                <div className="flex-1">
                  <Field label="Enter the code we sent to you email." error={errors.code}>
                    <input
                      type="text"
                      id="code"
                      autoComplete="one-time-code"
                      disabled={!emailVerified || codeVerified}
                      ref={(el) => (inputRefs.current.code = el)}
                      value={values.code}
                      onChange={(e) => handleChange("code", e.target.value)}
                      placeholder="Enter code"
                      className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none disabled:text-ink-muted"
                    />
                  </Field>
                  {codeVerified && (
                    <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-[#16a34a]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-[11px] font-bold leading-none text-white">
                        ✓
                      </span>
                      Your Code is Valid
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleVerifyCode}
                  disabled={!emailVerified || codeVerified}
                  className="h-[50px] shrink-0 cursor-pointer rounded-md bg-[#585858] px-6 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f] disabled:cursor-default disabled:opacity-60"
                >
                  {codeVerified ? "Code Verified" : "Verify Code"}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleJoin}
                disabled={!codeVerified}
                className={`h-[50px] w-full cursor-pointer rounded-md px-6 text-[15px] font-semibold shadow-sm transition-colors disabled:cursor-default ${
                  codeVerified
                    ? "bg-[#585858] text-white hover:bg-[#3f3f3f]"
                    : "bg-[#e4e6ea] text-[#c7cad0]"
                }`}
              >
                Join
              </button>
            </div>
          </div>

          {/* ===== Available domains ===== */}
          <div className="mx-auto mt-10 max-w-[640px] rounded-lg bg-[#f4f5f8] px-5 py-4 sm:mt-14">
            <p className="text-[13px] font-semibold text-ink">
              Available now for the following domains:
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {DOMAIN_PROVIDERS.map(({ domain, provider }) => (
                <div
                  key={domain}
                  className="flex min-h-[92px] flex-col items-center justify-center rounded-lg bg-white px-3 py-3 text-center"
                >
                  <DomainIcon provider={provider} />
                  <span className="mt-2 text-[12.5px] font-semibold text-ink">
                    {domain}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <Link
                to="/joinfree/request-domain"
                className="text-[12.5px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
              >
                Request My Domain
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Field({ label, children, error }) {
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

function DomainIcon({ provider }) {
  if (provider === "Gmail") {
    return (
      <svg viewBox="0 0 64 48" className="h-8 w-11" aria-label="Gmail">
        <path d="M5 10v31h10V20l17 13 17-13v21h10V10l-7-5-20 16L12 5Z" fill="#ea4335" />
        <path d="M5 10v31h10V20L5 13Z" fill="#4285f4" />
        <path d="M49 20v21h10V13Z" fill="#34a853" />
      </svg>
    );
  }

  if (provider === "Yahoo") {
    return (
      <span className="text-[18px] font-black italic tracking-[-0.08em] text-[#6001d2]">
        YAHOO!
      </span>
    );
  }

  if (provider === "AOL") {
    return <span className="text-[18px] font-black text-black">AOL.</span>;
  }

  return (
    <span className="flex h-8 items-center gap-2" aria-label={`Microsoft ${provider}`}>
      <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="2" width="17" height="17" fill="#f25022" />
        <rect x="21" y="2" width="17" height="17" fill="#7fba00" />
        <rect x="2" y="21" width="17" height="17" fill="#00a4ef" />
        <rect x="21" y="21" width="17" height="17" fill="#ffb900" />
      </svg>
      <span className="text-[13px] font-semibold text-[#5e5e5e]">{provider}</span>
    </span>
  );
}
