import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { Field } from "./JoinFree.jsx";

const REQUIRED_MESSAGES = {
  firstName: "First name is required.",
  lastName: "Last name is required.",
};

export default function JoinFreeRegister() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const inputRefs = useRef({});

  function validateField(fieldName) {
    const value = values[fieldName].trim();
    if (REQUIRED_MESSAGES[fieldName] && !value) {
      setErrors((prev) => ({ ...prev, [fieldName]: REQUIRED_MESSAGES[fieldName] }));
      return false;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    return true;
  }

  function handleChange(fieldName, value) {
    setValues((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName]) {
      validateField(fieldName);
    }
  }

  function handleTestFill() {
    setValues({
      firstName: "Mickey",
      lastName: "Mouse",
      address: "101 Duck Lane",
      city: "Toontown",
      zip: "90210",
      state: "CA",
      country: "USA",
      phone: "(555) 123-4567",
    });
    setErrors({});
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

    navigate("/joinfree/terms", { state: { email, ...values } });
  }

  return (
    <>
      <CloseButton to="/joinfree" />

      <section className="relative w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h1 className="text-[20px] font-semibold leading-none tracking-tight text-ink sm:text-[26px] lg:text-[32px]">
              Complete Your Registration
            </h1>
            {email && (
              <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-ink-muted sm:text-[16px]">
                {email}
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative mx-auto mt-10 max-w-[640px] space-y-6 sm:mt-14"
          >
              <button
                type="button"
                onClick={handleTestFill}
                className="absolute -top-2 right-0 cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-1.5 text-[12px] font-semibold text-ink-muted transition-colors hover:bg-gray-50 sm:right-0 sm:translate-x-[calc(100%+16px)]"
              >
                Test Fill
              </button>

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
                    placeholder="Last Name"
                    className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
                  />
                </Field>
              </div>

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
                  className="w-full cursor-pointer rounded-lg bg-[#585858] px-8 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f3f3f]"
                >
                  Join Free
                </button>
                <p className="text-center text-[12.5px] text-ink-muted">
                  By submitting, you agree to receive your plugin license by email. We never
                  share your information. You will receive an email shortly, and it will
                  contain the license for your email address.
                </p>
              </div>
          </form>
        </div>
      </section>
    </>
  );
}
