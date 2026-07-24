import { useRef, useState } from "react";

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
    <div className="joinfree flex min-h-screen items-center justify-center bg-white px-5 py-4">
      <style>{`
        .joinfree, .joinfree * { box-sizing: border-box; }
        .joinfree {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          color: #4a4a4a;
          -webkit-font-smoothing: antialiased;
        }
        .joinfree .card {
          width: 100%;
          max-width: 640px;
          background: #ffffff;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.05);
          padding: 20px 28px 22px;
        }
        .joinfree .card-header { margin-bottom: 12px; }
        .joinfree .card-header h1 {
          margin: 0 0 2px;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.25;
          color: #4a4a4a;
        }
        .joinfree .subtitle { margin: 0; font-size: 13px; color: #7a7a7a; }
        .joinfree .info-box {
          background: #fafafa;
          border: 1px solid #e6e6e6;
          border-radius: 10px;
          padding: 10px 14px;
          margin-bottom: 14px;
        }
        .joinfree .info-label { margin: 0 0 6px; font-size: 12px; color: #7a7a7a; }
        .joinfree .domain-list { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; }
        .joinfree .domain-chip {
          background: #fff;
          border: 1px solid #ffd3d6;
          color: #d81321;
          font-size: 11.5px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 999px;
        }
        .joinfree .info-note { margin: 0; font-size: 12px; color: #7a7a7a; }
        .joinfree form { display: flex; flex-direction: column; gap: 10px; }
        .joinfree .form-row { display: grid; grid-template-columns: 1fr; gap: 10px; }
        .joinfree .form-row.two-col { grid-template-columns: 1fr 1fr; }
        .joinfree .form-row.three-col { grid-template-columns: 1fr 1fr 1fr; }
        .joinfree .form-group { display: flex; flex-direction: column; gap: 3px; }
        .joinfree label { font-size: 12.5px; font-weight: 600; color: #4a4a4a; }
        .joinfree .optional { font-weight: 400; color: #7a7a7a; }
        .joinfree input[type="text"],
        .joinfree input[type="email"],
        .joinfree input[type="tel"] {
          width: 100%;
          padding: 8px 12px;
          font-size: 13.5px;
          border: 1px solid #e6e6e6;
          border-radius: 8px;
          background: #fff;
          color: #4a4a4a;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .joinfree input::placeholder { color: #a7aeb8; }
        .joinfree input:focus {
          outline: none;
          border-color: #ff1f2e;
          box-shadow: 0 0 0 3px rgba(255, 31, 46, 0.14);
        }
        .joinfree input.invalid { border-color: #d5313a; }
        .joinfree input.invalid:focus { box-shadow: 0 0 0 3px rgba(213, 49, 58, 0.15); }
        .joinfree .error-message { min-height: 13px; font-size: 11.5px; color: #d5313a; display: block; }
        .joinfree .submit-btn {
          position: relative;
          margin-top: 2px;
          width: 100%;
          padding: 11px 16px;
          font-size: 14.5px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #ff1f2e, #d81321);
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.1s ease, box-shadow 0.15s ease, opacity 0.15s ease;
          box-shadow: 0 4px 14px rgba(255, 31, 46, 0.32);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .joinfree .submit-btn:hover { box-shadow: 0 6px 18px rgba(255, 31, 46, 0.4); transform: translateY(-1px); }
        .joinfree .submit-btn:active { transform: translateY(0); }
        .joinfree .submit-btn:disabled { opacity: 0.75; cursor: not-allowed; transform: none; }
        .joinfree .btn-spinner {
          display: none;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: joinfree-spin 0.7s linear infinite;
        }
        .joinfree .submit-btn.loading .btn-spinner { display: inline-block; }
        .joinfree .submit-btn.loading .btn-text { opacity: 0.85; }
        @keyframes joinfree-spin { to { transform: rotate(360deg); } }
        .joinfree .form-footnote { margin: 2px 0 0; font-size: 11px; color: #7a7a7a; text-align: center; }
        .joinfree .success-message {
          display: none;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 16px 10px 4px;
        }
        .joinfree .success-message.show { display: flex; }
        .joinfree .success-icon { color: #ff1f2e; margin-bottom: 12px; }
        .joinfree .success-message h2 { margin: 0 0 6px; font-size: 20px; color: #4a4a4a; }
        .joinfree .success-message p { margin: 0; font-size: 14px; color: #7a7a7a; }
        .joinfree form.hide { display: none; }
        @media (max-width: 560px) {
          .joinfree .card { padding: 16px 18px 18px; }
          .joinfree .form-row.two-col, .joinfree .form-row.three-col { grid-template-columns: 1fr; }
          .joinfree .card-header h1 { font-size: 17px; }
        }
      `}</style>

      <div className="card">
        <div className="card-header">
          <div>
            <h1>Email Registration for Thunderbird Plugin</h1>
            <p className="subtitle">Get your free license and start flagging phishing emails in minutes.</p>
          </div>
        </div>

        <div className="info-box">
          <p className="info-label">Available now for the following domains:</p>
          <div className="domain-list">
            {ALLOWED_DOMAINS.map((domain) => (
              <span className="domain-chip" key={domain}>{domain}</span>
            ))}
          </div>
          <p className="info-note">
            You will receive an email shortly, and it will contain the license for your email address.
          </p>
        </div>

        <form className={submitted ? "hide" : ""} onSubmit={handleSubmit} noValidate>
          <div className="form-row two-col">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                autoComplete="given-name"
                required
                ref={(el) => (inputRefs.current.firstName = el)}
                className={errors.firstName ? "invalid" : ""}
                value={values.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                onBlur={() => handleBlur("firstName")}
              />
              <span className="error-message">{errors.firstName}</span>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                autoComplete="family-name"
                required
                ref={(el) => (inputRefs.current.lastName = el)}
                className={errors.lastName ? "invalid" : ""}
                value={values.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                onBlur={() => handleBlur("lastName")}
              />
              <span className="error-message">{errors.lastName}</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="you@gmail.com"
                required
                ref={(el) => (inputRefs.current.email = el)}
                className={errors.email ? "invalid" : ""}
                value={values.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
              />
              <span className="error-message">{errors.email}</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                autoComplete="street-address"
                value={values.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
              <span className="error-message" />
            </div>
          </div>

          <div className="form-row three-col">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                autoComplete="address-level2"
                value={values.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <span className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip/Postal Code</label>
              <input
                type="text"
                id="zip"
                autoComplete="postal-code"
                value={values.zip}
                onChange={(e) => handleChange("zip", e.target.value)}
              />
              <span className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="state">Province/State</label>
              <input
                type="text"
                id="state"
                autoComplete="address-level1"
                value={values.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <span className="error-message" />
            </div>
          </div>

          <div className="form-row two-col">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                autoComplete="country-name"
                value={values.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
              <span className="error-message" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="optional">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <span className="error-message" />
            </div>
          </div>

          <button type="submit" className={`submit-btn${submitting ? " loading" : ""}`} disabled={submitting}>
            <span className="btn-text">Join Free</span>
            <span className="btn-spinner" aria-hidden="true" />
          </button>

          <p className="form-footnote">
            By submitting, you agree to receive your plugin license by email. We never share your information.
          </p>
        </form>

        <div className={`success-message${submitted ? " show" : ""}`} role="status">
          <div className="success-icon" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M8 12.5l2.5 2.5L16 9.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2>You're all set!</h2>
          <p>Check your inbox shortly for your Thunderbird Plugin license.</p>
        </div>
      </div>
    </div>
  );
}
