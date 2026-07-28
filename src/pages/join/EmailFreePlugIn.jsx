import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox v2.png";
import outlookImg from "../../assets/images/outlook image 90.png";

const DOWNLOADS = [
  {
    name: "Outlook",
    image: outlookImg,
    alt: "Microsoft Outlook with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?download=Windows%20Download" },
    ],
  },
  {
    name: "Thunderbird",
    image: "/assets/images/thunderbird new pick.avif",
    alt: "Mozilla Thunderbird with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?download=Windows%20Download" },
      { label: "Linux Download", to: "/plugin-download?download=Linux%20Download" },
    ],
  },
];

const PROVIDERS = [
  "Outlook",
  "Gmail",
  "Yahoo",
  "AOL",
];

export default function EmailFreePlugIn() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
        <div className="mx-auto max-w-content text-center">
          <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            PhishFlagger Plug-In
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {DOWNLOADS.map((item) => (
              <DownloadCard key={item.name} {...item} />
            ))}

            <article className="flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
              <div className="flex h-[220px] items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e8edf5] p-8">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                  <img
                    src="/assets/images/logo-mark.png"
                    alt=""
                    className="h-14 w-14 object-contain"
                  />
                  <span className="mt-4 text-[18px] font-semibold text-ink">
                    Download Page
                  </span>
                  <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-[24px] font-bold leading-none text-white">
                    ↓
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-6 text-center">
                <h2 className="text-[18px] font-semibold text-ink">
                  Download Page
                </h2>
                <Link
                  to="/download"
                  className="mt-5 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
                >
                  Go to Download Page
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-content flex-col items-center">
          <img
            src={emailInboxImg}
            alt="Inbox showing PhishCounter numbered email messages"
            className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain"
          />
          <p className="mt-4 text-center text-[14px] italic text-ink-muted sm:text-[15px]">
            Email client view from enabled Domain
          </p>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
            Available for
          </h2>
          <div className="mx-auto mt-9 grid max-w-[820px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {PROVIDERS.map((provider) => (
              <div
                key={provider}
                className="flex min-h-[142px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-[0_5px_20px_rgba(15,23,42,0.05)]"
              >
                <ProviderIcon provider={provider} />
                <span className="mt-4 text-[15px] font-semibold text-ink">
                  {provider}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProviderIcon({ provider }) {
  if (provider === "Outlook") {
    return (
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0878d1] shadow-sm">
        <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
          <rect x="21" y="15" width="31" height="34" rx="3" fill="white" />
          <path d="M23 20 37 32 51 20v25H23Z" fill="#d9efff" />
          <rect x="8" y="10" width="27" height="44" rx="3" fill="#106ebe" />
          <text x="21.5" y="40" textAnchor="middle" fill="white" fontSize="24" fontWeight="700">O</text>
        </svg>
      </span>
    );
  }

  if (provider === "Gmail") {
    return (
      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
        <svg viewBox="0 0 64 64" className="h-10 w-10" aria-hidden="true">
          <path d="M8 18v30h9V27l15 11 15-11v21h9V18l-6-5-18 14L14 13Z" fill="#ea4335" />
          <path d="M8 18v30h9V27L8 20Z" fill="#4285f4" />
          <path d="M47 27v21h9V20Z" fill="#34a853" />
          <path d="m14 13 18 14 18-14 6 5-24 20L8 18Z" fill="#fbbc04" opacity=".38" />
        </svg>
      </span>
    );
  }

  if (provider === "Yahoo") {
    return (
      <span className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-[#6001d2] px-2 text-[20px] font-black italic tracking-[-0.08em] text-white shadow-sm">
        YAHOO!
      </span>
    );
  }

  return (
    <span className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-[#171717] px-2 text-[18px] font-black text-white shadow-sm">
      AOL.
    </span>
  );
}

function DownloadCard({ name, image, alt, actions }) {
  return (
    <article className="flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
      <div className="flex h-[220px] items-center justify-center bg-[#f7f8fb] p-5">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-xl object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-6 text-center">
        <h2 className="text-[18px] font-semibold text-ink">{name}</h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-200" />;
}
