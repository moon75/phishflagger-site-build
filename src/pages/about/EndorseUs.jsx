import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import supportersImg from "../../assets/images/supporters-cartoon.png";
import { brandify } from "../../components/Brand.jsx";

const FORMSPARK_ENDPOINT = "https://submit-form.com/IxWqoD0pH";

export default function EndorseUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    company: "",
    endorsement: "",
    subscribe: false,
  });
  const [status, setStatus] = useState("idle");
  const location = useLocation();
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
      setForm({
        name: "",
        email: "",
        phone: "",
        position: "",
        company: "",
        endorsement: "",
        subscribe: false,
      });
      navigate(
        location.pathname.startsWith("/resources")
          ? "/resources/endorse-us/thanks"
          : "/about/endorse-us/thanks"
      );
    } catch {
      setStatus("error");
    }
  };

  const closeTo = location.pathname.startsWith("/resources") ? "/resources" : "/about";
  // Where the whole close chain should ultimately land — normally the page
  // that linked here (via state.from), but if we got here by closing back
  // out of Supporters instead, that page forwards it along as
  // `originFrom` so it survives the round trip instead of being dropped
  // (see CloseButton.jsx and Supporters.jsx).
  const cameFrom = location.state?.from ?? location.state?.originFrom;

  return (
    <>
      <CloseButton to={cameFrom || closeTo} force />
      <section
        className="bg-[#eef0f4] bg-cover bg-center px-4 pb-16 pt-10 text-ink sm:px-6 sm:pt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-[1040px]">
          <h1 className="text-center text-[34px] font-semibold leading-none tracking-tight text-[#303030] sm:text-[44px]">
            Endorse Us
          </h1>

          <div className="mt-10 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="max-w-[420px] text-center text-[16px] leading-relaxed text-ink-muted sm:text-[18px]">
                {brandify(
                  "Join our supporters. These visionaries understand how human compatible PhishFlagger can finally solve Phishing.",
                )}
              </p>
            </div>
            <div className="flex h-full w-full flex-col items-center gap-6 text-center">
              <img
                src={supportersImg}
                alt="Happy PhishFlagger supporters"
                className="h-[220px] w-full max-w-[600px] object-contain pic-with-no-link-mouse-over-increase"
              />
              <div className="relative mt-auto">
                <span className="absolute -top-4 -left-6 z-10 flex -rotate-12 flex-col items-center whitespace-nowrap rounded-full bg-brand px-3 py-1 text-center text-[9px] font-extrabold uppercase leading-tight tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] ring-2 ring-white sm:text-[10px]">
                  Coming Soon
                </span>
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white opacity-50"
                >
                  Supporters
                </button>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-14 w-full rounded-[10px] border border-[#e9e9e9] bg-white px-6 pb-12 pt-14"
          >
            <div className="space-y-4">
              <Field label="Name">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your Name"
                  autoComplete="name"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="hello@example.com"
                  autoComplete="email"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <Field label="Phone">
                <div className="flex h-13 items-center gap-6">
                  <span className="text-[14px] font-bold text-[#242424]">+1</span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(123) 456 - 7890"
                    autoComplete="tel"
                    className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                  />
                </div>
              </Field>

              <Field
                label={
                  <>
                    Position{" "}
                    <span className="text-[14px] font-normal text-[#999]">
                      optional
                    </span>
                  </>
                }
              >
                <input
                  type="text"
                  value={form.position}
                  onChange={update("position")}
                  placeholder="Your Position"
                  autoComplete="organization-title"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <Field
                label={
                  <>
                    Company{" "}
                    <span className="text-[14px] font-normal text-[#999]">
                      optional
                    </span>
                  </>
                }
              >
                <input
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Your company name"
                  autoComplete="organization"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <Field label="Endorsement">
                <textarea
                  rows={4}
                  required
                  value={form.endorsement}
                  onChange={update("endorsement")}
                  placeholder="Endorsement Details"
                  className="min-h-[96px] w-full resize-none bg-transparent py-4 text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.subscribe}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      subscribe: event.target.checked,
                    }))
                  }
                  className="h-5 w-5 cursor-pointer rounded border-[#ccc] accent-brand"
                />
                <span className="text-[16px] font-medium text-[#333]">
                  Please also subscribe me for updates.
                </span>
              </label>
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-[49px] cursor-pointer rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition hover:bg-[#3f3f3f] hover:text-btn-hover-red focus:outline-none focus:ring-2 focus:ring-[#585858] focus:ring-offset-2 disabled:opacity-60 duration-200 hover:scale-[var(--btn-hover-scale)]"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-6 text-center text-[14px] font-medium text-red-600">
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
      <span className="mb-3 block text-[21px] font-medium leading-none text-[#333333]">
        {label}
      </span>
      <div className="rounded-[7px] bg-[#f5f7f8] px-4">{children}</div>
    </label>
  );
}
