import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

const FORMSPARK_ENDPOINT = "https://submit-form.com/W5T1Pc8bd";

export default function Community() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const update = (field) => (event) =>
    setForm((current) => ({ ...current, [field]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      navigate("/community/thanks");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton to="/phishflagger-org" />
      <section className="w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[760px]">
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                &trade;
              </span>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications.
            </p>
            <h1 className="page-title mt-8 sm:mt-10">
              Join Community
            </h1>
          </div>

          <form onSubmit={onSubmit} className="mt-12 space-y-6 sm:mt-16">
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
                placeholder="hello@example.com"
                autoComplete="email"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Phone Number">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-ink">+1</span>
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
                placeholder="Your Message"
                className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="cursor-pointer rounded-lg bg-[#3d3d3d] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#2b2b2b] disabled:opacity-60 duration-200 hover:scale-[1.2]"
              >
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-center text-[14px] font-medium text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
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
