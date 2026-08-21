import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

// TODO: swap in the real Formspark endpoint once it's created
// (https://submit-form.com/<form-id>) — placeholder for now.
const FORMSPARK_ENDPOINT = "https://submit-form.com/YOUR_FORM_ID";

export default function MessagingAppRequest() {
  const [form, setForm] = useState({
    app: "",
    email: "",
    name: "",
    handle: "",
    other: "",
  });
  const [dontKnowApp, setDontKnowApp] = useState(false);
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
        body: JSON.stringify({
          ...form,
          app: dontKnowApp ? "Not sure / I don't know" : form.app,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      navigate("/join/messaging/request/thanks");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton to="/join/messaging" />

      <section
        className="w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-[640px]">
          <div className="text-center">
            <h1 className="text-[30px] font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">
              Want to see <BrandInline /> in your Message App?
            </h1>
            <p className="mt-3 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
              Tell us which app and we&rsquo;ll let you know when it&rsquo;s
              supported.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-10 space-y-6 rounded-2xl border-2 border-black bg-white p-6 sm:p-8"
          >
            <Field label="What app?">
              <input
                type="text"
                required={!dontKnowApp}
                disabled={dontKnowApp}
                value={form.app}
                onChange={update("app")}
                placeholder="e.g. WhatsApp, Signal, Slack…"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none disabled:text-gray-400"
              />
            </Field>
            <label className="-mt-3 flex items-center gap-2 text-[13px] text-ink-muted">
              <input
                type="checkbox"
                checked={dontKnowApp}
                onChange={(e) => setDontKnowApp(e.target.checked)}
                className="h-4 w-4 accent-[#4a4a4a]"
              />
              I dunno — just want to be kept in the loop
            </label>

            <Field label="Your Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Name">
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                autoComplete="name"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Handle / Username">
              <input
                type="text"
                value={form.handle}
                onChange={update("handle")}
                placeholder="@yourhandle"
                className="w-full bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <Field label="Other">
              <textarea
                rows={3}
                value={form.other}
                onChange={update("other")}
                placeholder="Anything else we should know?"
                className="w-full resize-none bg-transparent text-[15px] text-ink placeholder:text-gray-400 focus:outline-none"
              />
            </Field>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="cursor-pointer rounded-lg bg-[#3d3d3d] px-8 py-3 text-[14px] font-semibold text-white shadow-sm transition duration-200 hover:scale-[1.2] hover:bg-[#2b2b2b] disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
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

function BrandInline() {
  return (
    <em className="italic">
      <span className="font-extrabold text-ink">Phish</span>
      <span className="font-normal text-brand">Flagger</span>
    </em>
  );
}
