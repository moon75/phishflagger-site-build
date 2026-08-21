import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import emailInboxImg from "../../assets/images/email-inbox-v4-gray-header.png";
import outlookImg from "../../assets/images/outlook image 90.png";

const DOWNLOADS = [
  {
    name: "Microsoft Outlook",
    image: outlookImg,
    imageScale: "scale-150",
    alt: "Microsoft Outlook with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Outlook&download=Windows%20Download" },
    ],
  },
  {
    name: "Thunderbird",
    image: "/assets/images/thunderbird new pick.avif",
    imageScale: "scale-125",
    alt: "Mozilla Thunderbird with the PhishFlagger plug-in",
    actions: [
      { label: "Windows Download", to: "/plugin-download?client=Thunderbird&download=Windows%20Download" },
      { label: "Linux Download", to: "/plugin-download?client=Thunderbird&download=Linux%20Download" },
    ],
  },
];

const PROVIDERS = [
  { key: "Gmail.com", labels: ["Gmail.com"] },
  { key: "Yahoo.com", labels: ["Yahoo.com"] },
  { key: "Outlook.com", labels: ["Outlook.com", "Live.com", "Hotmail.com"] },
  { key: "AOL.com", labels: ["AOL.com"] },
];

export default function EmailFreePlugIn() {
  return (
    <>
      <CloseButton />

      <div
        className="relative w-full bg-[#eef0f4] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <section className="relative w-full px-4 pb-6 pt-7 sm:px-6 sm:pb-8 sm:pt-10">
        <SectionCounter value="^0001" />
        <div className="mx-auto max-w-content text-center">
          <div className="mb-4 mt-3 flex items-center justify-center gap-4 sm:mt-4">
            <img
              src="/assets/images/logo-mark.png"
              alt="PhishFlagger envelope and flag mark"
              className="h-[34px] w-auto shrink-0 self-center object-contain sm:h-[42px]"
            />
            <h1 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              FREE
            </h1>
          </div>
          <h2 className="text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Step 1. Get your Key.&nbsp; Works with ....
          </h2>
          <div className="mx-auto mt-9 grid max-w-[892px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-12">
            {PROVIDERS.map(({ key, labels }) => (
              <div key={key} className="flex flex-col items-center">
                <div className="flex h-[186px] w-full flex-col items-center justify-center rounded-2xl border-2 border-black bg-white px-4 py-6 shadow-[0_5px_20px_rgba(15,23,42,0.05)]">
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
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-[892px] flex-wrap items-center justify-between gap-8">
            <Link
              to="/joinfree/request-domain"
              className="text-[12px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
            >
              Request My Domain be on the FREE list.
            </Link>
            <div className="flex items-center gap-3">
              <Link
                to="/joinfree"
                className="inline-flex items-center justify-center rounded-md whitespace-nowrap bg-[#fafafa] px-5 py-3 text-[13px] font-bold text-[#d8d8d8] transition hover:bg-[#f0f0f0] duration-200 hover:scale-[1.2]"
              >
                JF
              </Link>
              <div className="relative">
                <span className="absolute -top-4 -right-4 z-10 rotate-12 whitespace-nowrap rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white shadow-sm">
                  Coming Soon
                </span>
                <Link
                  to="/join-free"
                  className="inline-flex items-center justify-center rounded-md whitespace-nowrap bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
                >
                  Join Free
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="whitespace-nowrap text-[18px] font-semibold text-ink">
                Don&rsquo;t see your Domain
              </span>
              <Link
                to="/join-corporate"
                className="inline-flex items-center justify-center rounded-md whitespace-nowrap bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
              >
                Join Pro
              </Link>
              <span className="rounded bg-yellow-300 px-2 py-0.5 text-[12px] text-ink">
                $10.00 / Year
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
        <SectionCounter value="^0002" />
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[32px]">
            Step 2. Install Plug-In
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-3 md:gap-10">
            {DOWNLOADS.map((item) => (
              <DownloadCard key={item.name} {...item} />
            ))}

            <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
              <div className="flex h-[176px] items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e8edf5] p-6">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <img
                    src="/assets/images/logo-mark.png"
                    alt=""
                    className="h-9 w-9 object-contain"
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
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
                >
                  Go to Download Page
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative w-full px-4 py-14 sm:px-6 sm:py-20">
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
      </div>
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

function DownloadCard({ name, image, imageScale = "scale-125", alt, actions }) {
  return (
    <article className="flex min-h-[272px] flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[0_8px_28px_rgba(15,23,42,0.07)]">
      <div
        className="flex h-[176px] items-center justify-center overflow-hidden bg-[#f7f8fb]"
      >
        <img
          src={image}
          alt={alt}
          className={`h-full w-full object-contain ${imageScale}`}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-5 text-center">
        <h2 className="text-[15px] font-semibold text-ink">{name}</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {actions.map((action) => (
            <Link
              key={action.label}
              to={action.to}
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-4 py-2 text-[11px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
