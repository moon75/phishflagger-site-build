import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";
import launchPlanPdf from "../assets/Pdf/Launch Plan Living Doc.pdf";
import kickstarterRequirementsPdf from "../assets/Pdf/Kickstarter Requirements.pdf";
import kickstarterRewardsDoc from "../assets/Pdf/Kickstarter Rewards.docx";

const DOMAIN_PROVIDERS = [
  { domain: "gmail.com", provider: "Gmail" },
  { domain: "yahoo.com", provider: "Yahoo" },
  { domain: "hotmail.com", provider: "Hotmail" },
  { domain: "outlook.com", provider: "Outlook" },
  { domain: "live.com", provider: "Live" },
  { domain: "aol.com", provider: "AOL" },
];

export default function Kick() {
  return (
    <>
      <CloseButton />

      <section className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3 bg-white px-4 py-20">
        <a
          href={kickstarterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          1. View Kickstarter Campaign
        </a>

        <a
          href="https://td.mediaroom.com/2026-02-09-TD-Launches-New-Brand-Platform-More-Human-,-Reflecting-A-Digital-First,-People-Centered-Future"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          2. TD Human
        </a>

        <Link
          to="/kick/human-vs-digital"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          3. Human vs Digital
        </Link>

        <a
          href={launchPlanPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          4. joe1
        </a>

        <a
          href="https://fastercapital.com/content/A-Deep-Dive-into-Altruistic-Crowdfunding-Campaigns.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          5. Altruistic notes
        </a>

        <a
          href={kickstarterRequirementsPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          6. Kickstarter Requirements
        </a>

        <a
          href={kickstarterRewardsDoc}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          7. Kickstarter Rewards
        </a>

        <a
          href="https://join.phishflagger.com/individual/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          8. Join Free
        </a>

        <a
          href="https://join.phishflagger.com/membership-form-stripe.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          9. Purchase
        </a>

        {/* TODO: replace with the real "Anyone with the link can edit" Google Doc URL once created */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          10. Rewards
        </a>

        {/* TODO: replace with the real "Anyone with the link can edit" Google Doc URL once created */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          11. Campaign
        </a>

        {/* ===== Available domains ===== */}
        <div className="mx-auto mt-10 w-full max-w-[640px] rounded-lg bg-[#f4f5f8] px-5 py-4">
          <p className="text-[13px] font-semibold text-ink">
            Available now for the following domains:
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {DOMAIN_PROVIDERS.map(({ domain, provider }) => (
              <div
                key={domain}
                className="flex min-h-[92px] flex-col items-center justify-center rounded-lg bg-white px-3 py-3 text-center"
              >
                <DomainIcon provider={provider} />
                <span className="mt-2 text-[12.5px] font-semibold text-ink">
                  {domain}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link
              to="/joinfree/request-domain"
              className="text-[12.5px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
            >
              Request My Domain
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function DomainIcon({ provider }) {
  if (provider === "Gmail") {
    return (
      <svg viewBox="0 0 64 48" className="h-8 w-11" aria-label="Gmail">
        <path d="M5 10v31h10V20l17 13 17-13v21h10V10l-7-5-20 16L12 5Z" fill="#ea4335" />
        <path d="M5 10v31h10V20L5 13Z" fill="#4285f4" />
        <path d="M49 20v21h10V13Z" fill="#34a853" />
      </svg>
    );
  }

  if (provider === "Yahoo") {
    return (
      <span className="text-[18px] font-black italic tracking-[-0.08em] text-[#6001d2]">
        YAHOO!
      </span>
    );
  }

  if (provider === "AOL") {
    return <span className="text-[18px] font-black text-black">AOL.</span>;
  }

  return (
    <span className="flex h-8 items-center gap-2" aria-label={`Microsoft ${provider}`}>
      <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="2" width="17" height="17" fill="#f25022" />
        <rect x="21" y="2" width="17" height="17" fill="#7fba00" />
        <rect x="2" y="21" width="17" height="17" fill="#00a4ef" />
        <rect x="21" y="21" width="17" height="17" fill="#ffb900" />
      </svg>
      <span className="text-[13px] font-semibold text-[#5e5e5e]">{provider}</span>
    </span>
  );
}
