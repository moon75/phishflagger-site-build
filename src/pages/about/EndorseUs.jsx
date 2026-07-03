import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import supportersImg from "../../assets/images/supporters-cartoon.png";

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
      <section className="bg-white px-4 pb-16 pt-4 text-ink sm:px-6 sm:pt-6">
        <div className="mx-auto max-w-[1040px]">
          <div className="text-center">
            <Link
              to="/"
              aria-label="PhishFlagger home"
              className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
            >
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
              <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                &trade;
              </span>
            </Link>

            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-14">
          <div>
            <h1 className="text-center text-[34px] font-semibold leading-none tracking-tight text-[#303030] sm:text-left sm:text-[44px]">
              Endorse Us
            </h1>
          </div>
          <aside className="text-center lg:sticky lg:top-32">
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-[#303030] sm:text-[42px]">
              See our Supporters
            </h2>
            <img
              src={supportersImg}
              alt="Happy PhishFlagger supporters"
              className="mx-auto mt-8 h-auto w-full max-w-[520px] object-contain"
            />
            <Link
              to="/about/supporters"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
            >
              Supporters
            </Link>
          </aside>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-16 w-full rounded-[10px] border border-[#e9e9e9] bg-white px-6 pb-12 pt-14"
          >
            <h2 className="text-center text-[26px] font-semibold leading-tight tracking-tight text-[#333333] sm:text-[36px]">
              Endorsement Information
            </h2>

            <div className="mt-8 space-y-4">
              <Field label="Name">
                <input
                  type="text"
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
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(123) 456 - 7890"
                    autoComplete="tel"
                    className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                  />
                </div>
              </Field>

              <Field label="Position">
                <input
                  type="text"
                  value={form.position}
                  onChange={update("position")}
                  placeholder="Your Position"
                  autoComplete="organization-title"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              <Field label="Company">
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
