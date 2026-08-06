import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_FREE_URL = "https://join.phishflagger.com/individual/";

const PROVIDERS = [
  { key: "Gmail.com", labels: ["Gmail.com"] },
  { key: "Yahoo.com", labels: ["Yahoo.com"] },
  { key: "Outlook.com", labels: ["Outlook.com", "Live.com", "Hotmail.com"] },
  { key: "AOL.com", labels: ["AOL.com"] },
];

export default function JoinFreeIframe() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <SectionCounter value="^0001" />
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Step 2. Get your Free Key.&nbsp; Works with ....
          </h2>
          <div className="mx-auto mt-9 grid max-w-[820px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {PROVIDERS.map(({ key, labels }) => (
              <div
                key={key}
                className="flex min-h-[142px] flex-col items-center justify-center rounded-2xl border-2 border-black bg-white px-4 py-6 shadow-[0_5px_20px_rgba(15,23,42,0.05)]"
              >
                <ProviderIcon provider={key} />
                <div className="mt-4 flex flex-col items-center gap-1">
                  {labels.map((label) => (
                    <span
                      key={label}
                      className="text-[15px] font-semibold text-ink"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13.5px] text-ink-muted">
            Don&rsquo;t see your free email domain?{" "}
            <Link
              to="/joinfree/request-domain"
              className="font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
            >
              Request My Domain
            </Link>
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/joinfree"
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
            >
              Join
            </Link>
            <a
              href={JOIN_FREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#e4e6ea] px-5 py-3 text-[13px] font-bold text-[#c7cad0] transition-colors hover:bg-[#d8dade]"
            >
              Join2
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="h-[80vh] min-h-[420px] w-full overflow-hidden rounded-2xl border-2 border-black sm:min-h-[600px]">
            <iframe
              src={JOIN_FREE_URL}
              title="Join PhishFlagger"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}

function ProviderIcon({ provider }) {
  if (provider === "Gmail.com") {
    return (
      <svg viewBox="0 0 64 48" className="h-8 w-11" aria-label="Gmail">
        <path d="M5 10v31h10V20l17 13 17-13v21h10V10l-7-5-20 16L12 5Z" fill="#ea4335" />
        <path d="M5 10v31h10V20L5 13Z" fill="#4285f4" />
        <path d="M49 20v21h10V13Z" fill="#34a853" />
      </svg>
    );
  }

  if (provider === "Yahoo.com") {
    return (
      <span className="text-[18px] font-black italic tracking-[-0.08em] text-[#6001d2]">
        YAHOO!
      </span>
    );
  }

  if (provider === "AOL.com") {
    return <span className="text-[18px] font-black text-black">AOL.</span>;
  }

  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-label={`Microsoft ${provider}`}>
      <rect x="2" y="2" width="17" height="17" fill="#f25022" />
      <rect x="21" y="2" width="17" height="17" fill="#7fba00" />
      <rect x="2" y="21" width="17" height="17" fill="#00a4ef" />
      <rect x="21" y="21" width="17" height="17" fill="#ffb900" />
    </svg>
  );
}
