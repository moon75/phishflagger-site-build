import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox-v3-balanced.png";
import outlookImg from "../../assets/images/outlook image 90.png";

const DOWNLOADS = [
  {
    name: "Outlook",
    image: outlookImg,
    alt: "Microsoft Outlook with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Outlook&download=Windows%20Download" },
    ],
  },
  {
    name: "Thunderbird",
    image: "/assets/images/thunderbird new pick.avif",
    alt: "Mozilla Thunderbird with the PhishFlagger plug-in",
    fit: "contain",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Thunderbird&download=Windows%20Download" },
      { label: "Linux Download", to: "/plugin-download?client=Thunderbird&download=Linux%20Download" },
    ],
  },
];

const PROVIDERS = [
  "Gmail.com",
  "Yahoo.com",
  "Outlook.com",
  "Live.com",
  "Hotmail.com",
  "AOL.com",
];

export default function EmailFreePlugIn() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0001" />
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Step 1. Install Plug-In
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3">
            {DOWNLOADS.map((item) => (
              <DownloadCard key={item.name} {...item} />
            ))}

            <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
              <div className="flex h-[176px] items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e8edf5] p-6">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src="/assets/images/logo-mark.png"
                    alt=""
                    className="h-11 w-11 object-contain"
                  />
                  <span className="mt-3 text-[15px] font-semibold text-ink">
                    Download Page
                  </span>
                  <span className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[19px] font-bold leading-none text-white">
                    ↓
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-5 text-center">
                <h2 className="text-[15px] font-semibold text-ink">
                  Download Page
                </h2>
                <Link
                  to="/download"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
                >
                  Go to Download Page
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0002" />
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Step 2. Get your Free Key.&nbsp; Works with ....
          </h2>
          <div className="mx-auto mt-9 grid max-w-[1100px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="flex min-h-[142px] flex-col items-center justify-center rounded-2xl border-2 border-black bg-white px-4 py-6 shadow-[0_5px_20px_rgba(15,23,42,0.05)]"
              >
                <ProviderIcon provider={provider} />
                <span className="mt-4 text-[15px] font-semibold text-ink">
                  {provider}
                </span>
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
              href="https://join.phishflagger.com/individual/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#e4e6ea] px-5 py-3 text-[13px] font-bold text-[#c7cad0] transition-colors hover:bg-[#d8dade]"
            >
              Join2
            </a>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-center text-[28px] text-ink sm:text-[30px]">
              Email client view from Outlook
            </p>
            <img
              src={emailInboxImg}
              alt="Inbox showing PhishCounter numbered email messages in Outlook"
              className="h-auto w-full max-w-[460px] rounded-lg border-2 border-black object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-4 text-center text-[28px] text-ink sm:text-[30px]">
              Email client view from Thunderbird
            </p>
            <img
              src={emailInboxImg}
              alt="Inbox showing PhishCounter numbered email messages in Thunderbird"
              className="h-auto w-full max-w-[460px] rounded-lg border-2 border-black object-contain"
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

function DownloadCard({ name, image, alt, actions, fit = "cover" }) {
  return (
    <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
      <div
        className={`flex h-[176px] items-center justify-center overflow-hidden bg-[#f7f8fb] ${
          fit === "contain" ? "p-4" : ""
        }`}
      >
        <img
          src={image}
          alt={alt}
          className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-5 text-center">
        <h2 className="text-[15px] font-semibold text-ink">{name}</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
