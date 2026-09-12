import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import { publicPath } from "../lib/publicPath.js";
import { isVideo1Unlocked, setVideo1Unlocked } from "../lib/videoAccess.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // Internal-use routing box, not part of the real sign-in flow: /video1 is
  // our Oracle-backed video demo, /video is the site's real, public video
  // page. Typing "007" anywhere in the box unlocks the demo — saved so it
  // stays unlocked (the box shows "007" again) until "off"/"OFF" is typed
  // to turn it back off. Anything else (or nothing) just goes to /video.
  const [accessCode, setAccessCode] = useState(() => (isVideo1Unlocked() ? "007" : ""));

  function onSubmit(event) {
    event.preventDefault();
    setError(true);
  }

  function onAccessCodeSubmit(event) {
    event.preventDefault();
    const normalized = accessCode.trim().toLowerCase();
    if (normalized === "off") {
      setVideo1Unlocked(false);
      setAccessCode("");
      navigate("/video");
      return;
    }
    if (accessCode.includes("007")) {
      setVideo1Unlocked(true);
      navigate("/video1");
      return;
    }
    navigate("/video");
  }

  return (
    <>
      <CloseButton />

      <section
        className="relative flex min-h-screen w-full items-center justify-center bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="w-full max-w-[420px] rounded-2xl border-2 border-black bg-white p-8 shadow-[0_8px_28px_rgba(15,23,42,0.07)] sm:p-10">
          <div className="mb-2 flex items-center justify-center gap-3">
            <img
              src={publicPath("/assets/images/logo-mark.png")}
              alt="PhishFlagger envelope and flag mark"
              className="h-8 w-auto object-contain pic-with-no-link-mouse-over-increase"
            />
            <h1 className="text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[28px]">
              Sign In
            </h1>
          </div>
          <p className="mb-8 text-center text-[13px] text-ink-muted sm:text-[14px]">
            Access your PhishFlagger account.
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="login-email"
                className="mb-1.5 block text-[13px] font-semibold text-ink"
              >
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-[14px] text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="mb-1.5 block text-[13px] font-semibold text-ink"
              >
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-[14px] text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p role="alert" className="text-center text-[13px] font-semibold text-[#c9002b]">
                Account not found or wrong password.
              </p>
            )}

            <div className="relative mt-2 inline-flex w-full">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#4a4a4a] px-7 py-3 text-[14px] font-semibold text-white transition duration-200 hover:bg-[#2f2f2f]"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-[13px] text-ink-muted">
            Don&rsquo;t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
            >
              Create one
            </Link>
          </p>

          {/* Internal — not part of sign-in. Enter "007" to jump to the
              Oracle-backed video demo (/video1); anything else goes to the
              site's real video page (/video). */}
          <form
            onSubmit={onAccessCodeSubmit}
            className="mt-6 border-t border-gray-200 pt-5"
          >
            <label
              htmlFor="login-access-code"
              className="mb-1.5 block text-[13px] font-semibold text-ink"
            >
              Access Code
            </label>
            <div className="flex gap-2">
              <input
                id="login-access-code"
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-[14px] text-ink outline-none transition focus:border-ink focus:ring-1 focus:ring-ink"
                placeholder="Enter code"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-2.5 text-[14px] font-semibold text-white transition duration-200 hover:bg-[#2f2f2f]"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
