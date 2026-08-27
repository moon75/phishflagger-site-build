import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";


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

  function handleTestFill() {
    setValues({ email: "test.user@gmail.com", code: "123456" });
    setErrors({});
    setEmailVerified(true);
    setCodeVerified(true);
  }

  return (
    <>
      <CloseButton to="/kick" />

      <section className="relative w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          {/* ===== Page heading ===== */}
          <div className="relative text-center">
            <button
              type="button"
              onClick={handleTestFill}
              className="absolute right-0 top-0 cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-ink-muted transition hover:bg-gray-50 duration-200 hover:scale-[1.2]"
            >
              Test Fill
            </button>
            <div className="flex items-center justify-center gap-4">
              <img
                src="/assets/images/logo-mark.png"
                alt="PhishFlagger envelope and flag mark"
                className="h-[38px] w-auto shrink-0 object-contain sm:h-[50px] lg:h-[60px]"
              />
              <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                Join
              </h1>
            </div>
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

              <span className="mb-2 mt-3 block text-[14px] font-semibold text-ink sm:text-[15px]">
                Email Address
              </span>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <div
                  className={`flex flex-1 items-center gap-3 rounded-md bg-[#f4f5f8] px-3 py-3 sm:px-4 ${
                    errors.email ? "ring-1 ring-red-400" : ""
                  }`}
                >
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
                </div>
                <button
                  type="button"
                  onClick={handleVerifyEmail}
                  disabled={emailVerified}
                  className="h-[50px] shrink-0 cursor-pointer rounded-md bg-[#585858] px-6 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#3f3f3f] hover:text-btn-hover-red disabled:cursor-default disabled:opacity-60 duration-200 hover:scale-[1.2]"
                >
                  {emailVerified ? "Email Verified" : "Verify Email"}
                </button>
              </div>
              {errors.email && (
                <span className="mt-1.5 block text-[12px] text-red-600">
                  {errors.email}
                </span>
              )}
            </div>

            <div
              className={`transition-opacity ${
                emailVerified ? "" : "pointer-events-none opacity-50"
              } ${codeVerified ? "pointer-events-none opacity-50" : ""}`}
            >

              <span className="mb-2 mt-3 block text-[14px] font-semibold text-ink sm:text-[15px]">
                Enter the code we sent to you email.
              </span>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <div
                  className={`flex flex-1 items-center gap-3 rounded-md bg-[#f4f5f8] px-3 py-3 sm:px-4 ${
                    errors.code ? "ring-1 ring-red-400" : ""
                  }`}
                >
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
                </div>
                <button
                  type="button"
                  onClick={handleVerifyCode}
                  disabled={!emailVerified || codeVerified}
                  className="h-[50px] shrink-0 cursor-pointer rounded-md bg-[#585858] px-6 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#3f3f3f] hover:text-btn-hover-red disabled:cursor-default disabled:opacity-60 duration-200 hover:scale-[1.2]"
                >
                  {codeVerified ? "Code Verified" : "Verify Code"}
                </button>
              </div>
              {errors.code && (
                <span className="mt-1.5 block text-[12px] text-red-600">
                  {errors.code}
                </span>
              )}
              {codeVerified && (
                <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-[#16a34a]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-[11px] font-bold leading-none text-white">
                    ✓
                  </span>
                  Your Code is Valid
                </p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleJoin}
                disabled={!codeVerified}
                className={`h-[50px] w-full cursor-pointer rounded-md px-6 text-[15px] font-semibold shadow-sm transition duration-200 disabled:cursor-default ${
                  codeVerified
                    ? "bg-[#585858] text-white hover:bg-[#3f3f3f] hover:text-btn-hover-red hover:scale-[1.2]"
                    : "bg-[#e4e6ea] text-[#c7cad0]"
                }`}
              >
                Join
              </button>
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
