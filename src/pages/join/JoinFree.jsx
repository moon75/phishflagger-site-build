import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const ALLOWED_DOMAINS = ["gmail.com", "hotmail.com", "outlook.com", "live.com", "yahoo.com"];

const REQUIRED_MESSAGES = {
  firstName: "First name is required.",
  lastName: "Last name is required.",
  email: "Email address is required.",
};

function isValidEmailFormat(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getDomain(email) {
  const parts = email.split("@");
  return parts.length === 2 ? parts[1].toLowerCase().trim() : "";
}

export default function JoinFree() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRefs = useRef({});

  function validateField(fieldName, valueOverride) {
    const value = (valueOverride !== undefined ? valueOverride : values[fieldName]).trim();

    if (REQUIRED_MESSAGES[fieldName] && !value) {
      setErrors((prev) => ({ ...prev, [fieldName]: REQUIRED_MESSAGES[fieldName] }));
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

  function handleBlur(fieldName) {
    validateField(fieldName);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fieldNames = Object.keys(REQUIRED_MESSAGES);
    const validity = fieldNames.map((fieldName) => [fieldName, validateField(fieldName)]);
    const firstInvalid = validity.find(([, isValid]) => !isValid);

    if (firstInvalid) {
      const [fieldName] = firstInvalid;
      if (inputRefs.current[fieldName]) {
        inputRefs.current[fieldName].focus();
      }
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log("Registration submitted:", values);
    }, 900);
  }

  return (
    <>
      <CloseButton to="/kick" />

      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          {/* ===== Page heading ===== */}
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
              Join Free
            </h1>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
              Get you Free Email licenses here.
            </p>
          </div>

          {/* ===== Available domains ===== */}
          <div className="mx-auto mt-10 max-w-[640px] rounded-lg bg-[#f4f5f8] px-5 py-4 sm:mt-14">
            <p className="text-[13px] font-semibold text-ink">
              Available now for the following domains:
            </p>
            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
              {ALLOWED_DOMAINS.map((domain) => (
                <span
                  key={domain}
                  className="text-[12.5px] font-semibold text-ink"
                >
                  {domain}
                </span>
              ))}
            </div>
            <p className="mt-2.5 text-[12.5px] text-ink-muted">
              You will receive an email shortly, and it will contain the license for your email
              address.
            </p>
            <p className="mt-2.5 text-[12.5px] text-ink-muted">
              Don't see your domain?{" "}
              <Link
                to="/joinfree/request-domain"
                className="font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
              >
                Request My Domain
              </Link>
            </p>
          </div>

          {/* ===== Form ===== */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 max-w-[640px] space-y-6 sm:mt-14"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="First Name" error={errors.firstName}>
                  <input
                    type="text"
                    id="firstName"
                    autoComplete="given-name"
                    required
                    ref={(el) => (inputRefs.current.firstName = el)}
                    value={values.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    onBlur={() => handleBlur("firstName")}
                    placeholder="First Name"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>

                <Field label="Last Name" error={errors.lastName}>
                  <input
                    type="text"
                    id="lastName"
                    autoComplete="family-name"
                    required
                    ref={(el) => (inputRefs.current.lastName = el)}
                    value={values.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    onBlur={() => handleBlur("lastName")}
                    placeholder="Last Name"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
              </div>

              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  ref={(el) => (inputRefs.current.email = el)}
                  value={values.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  placeholder="you@gmail.com"
                  className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <Field label="Address">
                <textarea
                  rows={2}
                  autoComplete="street-address"
                  value={values.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Address"
                  className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                />
              </Field>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <Field label="City">
                  <input
                    type="text"
                    autoComplete="address-level2"
                    value={values.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="City"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
                <Field label="Zip/Postal Code">
                  <input
                    type="text"
                    autoComplete="postal-code"
                    value={values.zip}
                    onChange={(e) => handleChange("zip", e.target.value)}
                    placeholder="Zip/Postal Code"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
                <Field label="Province/State">
                  <input
                    type="text"
                    autoComplete="address-level1"
                    value={values.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    placeholder="Province/State"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Country">
                  <input
                    type="text"
                    autoComplete="country-name"
                    value={values.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    placeholder="Country"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
                <Field label="Phone Number (optional)">
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full cursor-pointer rounded-lg bg-[#585858] px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f] disabled:opacity-70"
                >
                  {submitting ? "Joining..." : "Join Free"}
                </button>
                <p className="text-center text-[12.5px] text-ink-muted">
                  By submitting, you agree to receive your plugin license by email. We never
                  share your information.
                </p>
              </div>
            </form>
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
                  Check your inbox shortly for your Thunderbird Plugin license.
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
