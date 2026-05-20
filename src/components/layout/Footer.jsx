export default function Footer({ logoSrc = "/pf-logo-v2.png" }) {
  const tags = [
    "#phishflagger", "#phishcounter", "#sendmailsafe", "#numbering",
    "#numberingemail", "#cybersecurity", "#emailsecurity",
    "#phishing", "#cyberthreats", "#digitalsecurity",
    "#identityprotection", "#databreach", "#emailphishing", "#ransomware",
    "#callerid",
  ];

  return (
    <>
      <footer className="bg-[#eef0f4] font-['Mulish',sans-serif]">
        <div className="mx-auto max-w-[980px] px-6 pt-9 pb-[18px] text-center text-[#3a3a3a] max-sm:px-4 max-sm:pt-7">
          <p className="mx-auto mb-[18px] max-w-[720px] text-base leading-[1.55] text-[#4a4a4a] [text-wrap:balance] max-sm:text-[15px]">
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Flagger</strong>
            </em>
            ™ was created to protect consumers and help companies eliminate brand
            destruction by imposters. We sequentially number outgoing digital
            communications including Email, Message, Text/SMS and Caller ID.
          </p>

          <ul
            aria-label="Social media"
            className="mb-[22px] flex flex-wrap justify-center gap-[18px] list-none p-0"
          >
            <li>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0A66C2] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.66h2.67v8.66zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.84h-2.67v-4.21c0-1 0-2.31-1.41-2.31s-1.62 1.1-1.62 2.24v4.28h-2.67V9.68h2.56v1.18h.04a2.81 2.81 0 0 1 2.53-1.39c2.71 0 3.21 1.78 3.21 4.1v4.77z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M18.244 2H21.5l-7.5 8.575L23 22h-6.844l-5.36-7-6.131 7H1.41l8.02-9.17L1 2h7.02l4.846 6.405L18.244 2zm-1.2 18h1.86L7.05 4H5.06l11.984 16z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#FF0000] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1877F2] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.12)] max-sm:h-10 max-sm:w-10"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block h-[22px] w-[22px]">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </li>
          </ul>

          <div className="mx-auto mb-6">
            <h2 className="text-3xl italic leading-none">
              <span className="font-extrabold text-black">Phish</span>
              <span className="font-normal text-[#FF0033]">Flagger</span>
              <sup className="ml-0.5 text-sm font-bold not-italic">TM</sup>
            </h2>
            <p className="mt-2 text-[11px] text-[#4a4a4a]">
              Protecting Communications.
            </p>
          </div>

          <p className="mx-auto mb-5 whitespace-nowrap text-[13px] leading-[1.4] text-[#4a4a4a] max-sm:whitespace-normal max-sm:text-xs">
            US Granted Patents: US20200351275A1, US12238052B2, US12238083B2,
            US12309317B2, US20240305986A1. Pending in 62 Countries.
          </p>

          <p className="mx-auto mt-1 text-[10px] text-[#4a4a4a]">
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Flagger</strong>
            </em>
            ™ and{" "}
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Counter</strong>
            </em>
            ™ are Trademarks of{" "}
            <em className="text-black">
              Phish<strong className="text-[#FF0033]">Flagger</strong>
            </em>{" "}
            Inc.
          </p>
        </div>
      </footer>

      <section
        aria-label="Related tags"
        className="flex w-full flex-wrap justify-center gap-x-2.5 gap-y-1.5 bg-[#eef0f4] px-[max(48px,calc((100%-940px)/2+48px))] pb-5 text-center text-[10px] font-semibold leading-[1.35] text-[#8a8f98] font-['Mulish',sans-serif] max-sm:gap-x-2 max-sm:gap-y-1 max-sm:px-[18px] max-sm:pt-4 max-sm:pb-[18px] max-sm:text-[9px]"
      >
        {tags.map((t) => (
          <span key={t} className="inline-block whitespace-nowrap">
            {t}
          </span>
        ))}
      </section>
    </>
  );
}
