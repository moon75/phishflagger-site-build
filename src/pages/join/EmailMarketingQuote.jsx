import { useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  role: "",
  phone: "",
  product: "Marketers and Bulk Emailers License",
  companyName: "",
  website: "",
  email: "",
  address: "",
  city: "",
  state: "",
  country: "",
  postal: "",
  monthlyEmails: "",
  employees: "",
  contactUs: "",
  message: "",
};

export default function EmailMarketingQuote() {
  const [form, setForm] = useState(initialForm);

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <Link
            to="/"
            aria-label="PhishFlagger home"
            className="inline-block text-[36px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[42px]"
          >
            <BrandDisplay />
          </Link>
          <p className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">
            Protecting Communications
          </p>
          <h1 className="mt-6 text-[22px] font-medium leading-tight tracking-tight text-ink sm:text-[30px]">
            Marketers and Bulk Emailers License Quote Request
          </h1>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-28 max-w-[860px] rounded-md border border-gray-100 px-6 py-12 shadow-sm sm:px-8 lg:px-10"
        >
          <FormSection title="Contact Information">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field label="First Name">
                <input
                  type="text"
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder="First Name"
                  autoComplete="given-name"
                  className={inputClass}
                />
              </Field>
              <Field label="Last Name">
                <input
                  type="text"
                  value={form.lastName}
                  onChange={update("lastName")}
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className={inputClass}
                />
              </Field>
              <Field label="What is your role?">
                <input
                  type="text"
                  value={form.role}
                  onChange={update("role")}
                  placeholder="Role"
                  className={inputClass}
                />
              </Field>
              <Field label="Phone Number">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+1 (123) 456 - 7890"
                  autoComplete="tel"
                  className={inputClass}
                />
              </Field>
              <Field label="Product" className="sm:col-span-2">
                <select
                  value={form.product}
                  onChange={update("product")}
                  className={inputClass}
                >
                  <option>Marketers and Bulk Emailers License</option>
                </select>
              </Field>
            </div>
          </FormSection>

          <FormSection title="Company Information" className="mt-12">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field label="Company Name">
                <input
                  type="text"
                  value={form.companyName}
                  onChange={update("companyName")}
                  placeholder="Name"
                  autoComplete="organization"
                  className={inputClass}
                />
              </Field>
              <Field label="Website url">
                <input
                  type="url"
                  value={form.website}
                  onChange={update("website")}
                  placeholder="yourwebsite.com"
                  className={inputClass}
                />
              </Field>
              <Field label="Email Address">
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="contact@example.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </Field>
              <Field label="Address">
                <input
                  type="text"
                  value={form.address}
                  onChange={update("address")}
                  placeholder="Address"
                  autoComplete="street-address"
                  className={inputClass}
                />
              </Field>
              <Field label="City">
                <input
                  type="text"
                  value={form.city}
                  onChange={update("city")}
                  placeholder="City"
                  autoComplete="address-level2"
                  className={inputClass}
                />
              </Field>
              <Field label="State/Province">
                <input
                  type="text"
                  value={form.state}
                  onChange={update("state")}
                  placeholder="State"
                  autoComplete="address-level1"
                  className={inputClass}
                />
              </Field>
              <Field label="Country">
                <input
                  type="text"
                  value={form.country}
                  onChange={update("country")}
                  placeholder="Country"
                  autoComplete="country-name"
                  className={inputClass}
                />
              </Field>
              <Field label="Zip/Postal">
                <input
                  type="text"
                  value={form.postal}
                  onChange={update("postal")}
                  placeholder="Zip/Postal"
                  autoComplete="postal-code"
                  className={inputClass}
                />
              </Field>
            </div>
          </FormSection>

          <FormSection title="Tell Us about your Company" className="mt-12">
            <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
              <Field
                label="How many emails do you send per month?"
                className="sm:col-span-2"
              >
                <select
                  value={form.monthlyEmails}
                  onChange={update("monthlyEmails")}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  <option>Under 10,000</option>
                  <option>10,000 - 100,000</option>
                  <option>100,000 - 1,000,000</option>
                  <option>More than 1,000,000</option>
                </select>
              </Field>
              <Field label="How many employees work at your company?">
                <select
                  value={form.employees}
                  onChange={update("employees")}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  <option>1 - 10</option>
                  <option>11 - 50</option>
                  <option>51 - 250</option>
                  <option>251+</option>
                </select>
              </Field>
              <Field label="Please Contact Us">
                <select
                  value={form.contactUs}
                  onChange={update("contactUs")}
                  className={inputClass}
                >
                  <option value="">Select an option</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Either email or phone</option>
                </select>
              </Field>
              <Field label="Message (optional)" className="sm:col-span-2">
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Message (optional)"
                  className={`${inputClass} resize-none py-3`}
                />
              </Field>
            </div>
          </FormSection>

          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="cursor-pointer rounded-md bg-[#4a4a4a] px-7 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
            >
              Submit Quote Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "h-11 w-full rounded-md bg-[#f4f7f8] px-3 text-[12px] text-ink placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300";

function FormSection({ title, children, className = "" }) {
  return (
    <section className={className}>
      <h2 className="mb-7 text-center text-[26px] font-medium leading-tight tracking-tight text-ink sm:text-[32px]">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[12px] font-medium text-ink sm:text-[13px]">
        {label}
      </span>
      {children}
    </label>
  );
}

function BrandDisplay() {
  return (
    <>
      <em className="italic">
        <span className="font-extrabold text-ink">Phish</span>
        <span className="font-normal text-brand">Flagger</span>
      </em>
      <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
        &trade;
      </span>
    </>
  );
}
