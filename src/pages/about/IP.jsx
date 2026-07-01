import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

function Brand({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-bold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

const HIGHLIGHTS = [
  "Broad license opportunities",
  "Easy to comprehend",
  "Enforceable",
  "Disruptive",
];

const PATENTS = [
  {
    title:
      "EMAIL / METHOD OF DETECTING AN EMAIL PHISHING ATTEMPT OR FRAUDULENT EMAIL USING SEQUENTIAL EMAIL NUMBERING",
    number: "US11601440B2",
    issued: "Issued Mar 7, 2023",
    url: "https://patents.google.com/patent/US20200351275A1/en",
  },
  {
    title:
      "TEXT / METHOD OF DETECTING INCOMPLETE ELECTRONIC RECORD SETS USING SEQUENTIAL NUMBERING",
    number: "GB2600029",
    issued: "Issued Mar 7, 2023",
    url: "https://patentscope.wipo.int/search/en/detail.jsf?docId=GB358107562&_cid=P21-LHATEZ-20098-1",
  },
  {
    title:
      "SMS / Method of detecting incomplete instant messaging record sets using sequential numbering",
    number: "US12238052B2",
    issued: "Issued Feb 24, 2025",
    url: "https://patents.google.com/patent/US12238052B2/en",
  },
  {
    title:
      "TEXT / Method of detecting incomplete electronic record sets using sequential numbering",
    number: "US12238083B2",
    issued: "Issued Feb 25, 2025",
    url: "https://patents.google.com/patent/US12238083B2/en",
  },
  {
    title:
      "CALLER_ID / A system and a method of using sequential numbering to detect a fraudulent telephone call within a telephone system",
    number: "US12309317B2",
    issued: "Issued May 20, 2025",
    url: "https://patents.google.com/patent/US12309317B2/en",
  },
  {
    title:
      "CELL-PHONE / Method of Detecting Incomplete Text Message Record Sets using Sequential Numbering Utilizing Cellular Phone Firmware",
    number: "US20240305986A1",
    issued: "Issued Dec 9, 2025",
    url: "https://patents.google.com/patent/US20240305986A1/en",
  },
];

export default function IP() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[820px]">
          {/* Header */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>

            <h1 className="mt-10 text-[32px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[44px] lg:text-[48px]">
              Intellectual Property and Patents
            </h1>
          </div>

          {/* Highlight bullets */}
          <ul className="mx-auto mt-14 max-w-[520px] space-y-3 sm:mt-16">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 shrink-0 text-[#2a6df4]"
                  aria-hidden
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1.2 14.2l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4z" />
                </svg>
                <span className="text-[14.5px] text-ink sm:text-[15px]">
                  {h}
                </span>
              </li>
            ))}
          </ul>

          {/* Trademark + license line */}
          <p className="mt-8 text-[13px] leading-[1.6] text-ink-muted sm:text-[13.5px]">
            <Brand />™ and <Brand trail="Counter" />™ are Trademarks of{" "}
            <Brand /> Inc. 2026.
            <br />
            License is required.
          </p>

          {/* Patents list */}
          <div className="mt-12 space-y-10 sm:mt-14">
            {PATENTS.map((p) => (
              <PatentItem key={p.number} {...p} />
            ))}
          </div>

          {/* Footer line */}
          <p className="mt-12 text-[13px] text-ink-muted sm:mt-14 sm:text-[13.5px]">
            Related applications are pending in 62 Countries.
          </p>
        </div>
      </section>
    </>
  );
}

function PatentItem({ title, number, issued, url }) {
  return (
    <div>
      <h3 className="text-[15px] font-semibold leading-[1.45] text-ink sm:text-[16px]">
        {title}
      </h3>
      <p className="mt-2 text-[13px] text-ink-muted sm:text-[13.5px]">
        {number} · {issued}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block cursor-pointer rounded-md bg-[#3d3d3d] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#2b2b2b]"
      >
        Go to Patent
      </a>
    </div>
  );
}
