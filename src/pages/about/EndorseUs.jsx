import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
      });
      navigate(
        location.pathname.startsWith("/help")
          ? "/help/endorse-us/thanks"
          : "/about/endorse-us/thanks"
      );
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <CloseButton />
      <section className="bg-white px-4 pb-16 pt-10 text-ink sm:px-6 sm:pt-14">
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
                className="h-[220px] w-full max-w-[600px] object-contain"
              />
              <Link
                to={
                  location.pathname.startsWith("/help")
                    ? "/help/supporters"
                    : "/about/supporters"
                }
                className="mt-auto inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
              >
                Supporters
              </Link>
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
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-[49px] cursor-pointer rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-[#585858] focus:ring-offset-2 disabled:opacity-60"
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
