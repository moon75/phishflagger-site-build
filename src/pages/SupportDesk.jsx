import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

const FORMSPARK_ENDPOINT = "https://submit-form.com/VLb4zabl";

export default function SupportDesk() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ ...form, form: "Support Desk" }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      navigate("/help/support-desk/thanks");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton />
      <section
        className="w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
              Support Desk
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-relaxed text-ink sm:text-[16px]">
              Need help with your account, a technical issue, or have a
              question about <em className="not-italic font-semibold">PhishFlagger</em>? Send
              us a message and our support team will get back to you.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 max-w-[640px] space-y-6 rounded-2xl border-2 border-black bg-white p-6 sm:mt-16 sm:p-8"
          >
            <Field label="Name">
              <input
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your Name"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="hello@example.com"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Subject">
              <input
                type="text"
                required
                value={form.subject}
                onChange={update("subject")}
                placeholder="What do you need help with?"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Message">
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Describe your issue or question"
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
