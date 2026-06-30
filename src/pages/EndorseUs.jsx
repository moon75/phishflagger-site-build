import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

const FORMSPARK_ID = "YOUR_FORM_ID";

export default function EndorseUs() {
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [pic, setPic] = useState(null);
  const [verifyMe, setVerifyMe] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("idle");
  const fileRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const body = new FormData();
    body.append("name", name);
    body.append("note", note);
    if (pic) body.append("pic", pic);
    if (verifyMe) {
      body.append("_verifyMe", "true");
      body.append("email", email);
      body.append("phone", phone);
      if (details) body.append("details", details);
    }

    try {
      const res = await fetch(
        `https://submit-api.formspark.io/f/${FORMSPARK_ID}`,
        { method: "POST", body, headers: { Accept: "application/json" } }
      );
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <>
        <CloseButton to="/join/telecom" />
        <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
          <div className="text-[52px] text-green-500">✓</div>
          <h2 className="mt-4 text-[28px] font-semibold text-[#303030]">
            Thank you!
          </h2>
          <p className="mt-3 text-[16px] text-[#666]">
            Your endorsement has been received.
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <CloseButton to="/join/telecom" />
      <section className="bg-white px-4 pb-16 pt-10 text-ink sm:px-6 sm:pt-14">
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

            <h1 className="mt-9 text-[34px] font-semibold leading-none tracking-tight text-[#303030] sm:text-[44px]">
              Endorse Us
            </h1>
          </div>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-16 max-w-[802px] rounded-[10px] border border-[#e9e9e9] bg-white px-6 pb-12 pt-14"
          >
            <div className="space-y-5">
              {/* Name */}
              <Field label="Name">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              {/* Note */}
              <Field label="Note">
                <textarea
                  required
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share your thoughts on PhishFlagger…"
                  className="min-h-[96px] w-full resize-none bg-transparent py-4 text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                />
              </Field>

              {/* Pic — optional file upload */}
              <div>
                <span className="mb-3 block text-[21px] font-medium leading-none text-[#333333]">
                  Pic{" "}
                  <span className="text-[14px] font-normal text-[#999]">
                    optional
                  </span>
                </span>
                <div
                  className="flex cursor-pointer items-center gap-4 rounded-[7px] bg-[#f5f7f8] px-4 py-3"
                  onClick={() => fileRef.current?.click()}
                >
                  <span className="rounded-[5px] bg-[#e2e5e9] px-3 py-1.5 text-[13px] font-medium text-[#444]">
                    Choose file
                  </span>
                  <span className="text-[14px] text-[#808080]">
                    {pic ? pic.name : "No file chosen"}
                  </span>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setPic(e.target.files?.[0] ?? null)}
                  />
                </div>
              </div>

              {/* Verify me as real — optional checkbox + conditional fields */}
              <div>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={verifyMe}
                    onChange={(e) => setVerifyMe(e.target.checked)}
                    className="h-5 w-5 cursor-pointer rounded border-[#ccc] accent-brand"
                  />
                  <span className="text-[16px] font-medium text-[#333]">
                    Verify me as real{" "}
                    <span className="text-[13px] font-normal text-[#999]">
                      optional
                    </span>
                  </span>
                </label>

                {verifyMe && (
                  <div className="mt-5 space-y-4 rounded-[8px] border border-[#e4e7ea] bg-[#fafbfc] px-5 py-5">
                    <Field label="Email">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hello@example.com"
                        autoComplete="email"
                        className="h-13 w-full bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                      />
                    </Field>

                    <Field label="Phone">
                      <div className="flex h-13 items-center gap-6">
                        <span className="text-[14px] font-bold text-[#242424]">
                          +1
                        </span>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(123) 456-7890"
                          autoComplete="tel"
                          className="min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                        />
                      </div>
                    </Field>

                    <div>
                      <span className="mb-3 block text-[21px] font-medium leading-none text-[#333333]">
                        Details{" "}
                        <span className="text-[14px] font-normal text-[#999]">
                          optional
                        </span>
                      </span>
                      <div className="rounded-[7px] bg-[#f5f7f8] px-4">
                        <textarea
                          rows={3}
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          placeholder="Any additional details…"
                          className="min-h-[72px] w-full resize-none bg-transparent py-4 text-[15px] text-ink placeholder:text-[#808080] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {status === "error" && (
              <p className="mt-6 text-center text-[14px] text-red-600">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="mt-12 flex justify-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="h-[49px] cursor-pointer rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f] focus:outline-none focus:ring-2 focus:ring-[#585858] focus:ring-offset-2 disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting…" : "Submit"}
              </button>
            </div>
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
