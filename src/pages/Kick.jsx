import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";
import launchPlanPdf from "../assets/Pdf/Launch Plan Living Doc.pdf";
import kickstarterRequirementsPdf from "../assets/Pdf/Kickstarter Requirements.pdf";

const howDoesItWorkImg = "/assets/images/How%20does%20phishflagger%20work-v3-transparent.png";
const logoMarkImg = "/assets/images/logo-mark.png";

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

      <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center gap-3 bg-white px-4 py-20">
        <a
          href={kickstarterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          Alex
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
          4. Joe Launch Plan
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
          6. Alex Kickstarter Requirements
        </a>

        <a
          href="https://docs.google.com/document/d/173wHC60O8Tj-eTLNsztZ8SkqT93WkINuMvkVyuT0zD8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          Tools
        </a>

        <a
          href="https://docs.google.com/document/d/1olfrnOWQUrix5wTU6MGi0ZIAIgynBpMHNr9th3IcYkY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          10. Rewards
        </a>

        <a
          href="https://docs.google.com/document/d/1KjaMfKx4kps-Gcet5RKJQ4MkjKdWrZ0QIAFN3z0RB50/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          11. Campaign
        </a>

        <a
          href="https://docs.google.com/document/d/1eaUA95JVGbALRbThnSx9dUFPLGYOq34Po9ikeK9yC9k/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[16px] font-semibold text-[#585858] underline hover:text-[#3f3f3f]"
        >
          12. Marketing
        </a>

        <img
          src={howDoesItWorkImg}
          alt="How Does PhishFlagger Work? Human validation via PhishCounter subject line, digital validation via sending domain checks"
          className="mt-6 h-auto w-full max-w-[480px] object-contain"
        />

        {/* ===== Email authentication diagram (moved from Home) ===== */}
        <div className="mt-10 w-full max-w-[1000px] overflow-hidden rounded-lg shadow-[0_4px_14px_-4px_rgba(15,23,42,0.15)]">
          <img
            src="/assets/images/phishflagger%20email%20authentication.png"
            alt="Email authentication: PhishFlagger, DMARC, SPF, DKIM"
            className="h-auto w-full object-contain"
          />
        </div>

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

        {/* ===== Email Solutions (moved from /join) ===== */}
        <div className="mt-16 w-full max-w-[640px] text-left">
          <div className="mb-6 flex items-center justify-start gap-5">
            <img
              src={logoMarkImg}
              alt="PhishFlagger envelope and flag mark"
              className="h-[52px] w-auto shrink-0 object-contain sm:h-[64px]"
            />
            <h2 className="section-title whitespace-nowrap text-left">
              Email Solutions
            </h2>
          </div>
          <p className="text-[15px] leading-[1.65] text-ink sm:text-[16px] sm:leading-[1.6]">
            <em className="italic">
              <span className="font-bold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            protects individuals and organizations who want greater
            confidence in the authenticity of their emails. Whether you are
            using a custom domain or a supported email service,{" "}
            <em className="italic">
              <span className="font-bold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            adds extra layers of protection against phishing and email
            impersonation.
          </p>
          <p className="mt-4 text-[15px] text-ink sm:text-[16px]">
            Like what you see.{" "}
            <Link
              to="/help/endorse-us"
              className="font-semibold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
            >
              Endorse Us
            </Link>
          </p>
        </div>

        {/* ===== Why PhishFlagger Email? (moved from Home ^0002) ===== */}
        <div className="mt-16 w-full max-w-[900px] text-left">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="section-title">
                Why{" "}
                <em className="italic">
                  <span className="font-bold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                Email?
              </h2>
              <p className="mt-4 max-w-[560px] text-[14px] leading-[1.65] text-ink sm:mt-6 sm:text-[15px] sm:leading-[1.6]">
                Because you should know who you're communicating with.{" "}
                <em className="italic">
                  <span className="font-bold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                gives every email an additional layer of identity
                verification, helping people recognize trusted communications
                and identify messages that may be fraudulent. Simple to
                understand, easy to verify, and designed to put the power of
                email authentication in your hands.
              </p>
            </div>

            <div className="flex w-full max-w-[380px] justify-center lg:ml-auto">
              <img
                src="/assets/images/0005%20image.png"
                alt="Why PhishFlagger Mail"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* ===== Protecting Communications (moved from Home hero ^0001) ===== */}
        <div className="mt-16 w-full max-w-[900px] text-left">
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <img
              src={logoMarkImg}
              alt="PhishFlagger envelope and flag mark"
              className="h-[30px] w-auto shrink-0 object-contain sm:h-[38px] lg:h-[42px]"
            />
            <h2 className="text-center text-[24px] font-medium tracking-tight text-ink leading-[1.15] sm:text-[32px] lg:text-left lg:text-[36px]">
              Protecting Communications
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-[780px] text-center text-[16px] leading-[1.6] text-ink sm:text-[20px] sm:leading-[1.5] lg:mx-0 lg:text-left">
            Because you should know who you're communicating with.{" "}
            <em className="italic">
              <span className="font-bold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            gives every email an additional layer of identity
            verification, helping people recognize trusted communications and
            identify messages that may be fraudulent.
          </p>
        </div>
      </section>

      {/* ===== Human / Digital text (moved here from /email = Join.jsx) ===== */}
      <section className="relative w-full bg-white px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-14">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-[20px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[24px] lg:text-[28px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                / Human
              </h2>
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                <em className="italic">
                  <span className="font-bold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                adds a unique, sequential identifier to the subject line
                called the{" "}
                <em className="italic">
                  <span className="font-bold text-ink">Phish</span>
                  <span className="font-normal text-brand">Counter</span>
                </em>{" "}
                on every outgoing communication. Recipients can quickly
                verify if the sequence matches the previous email they
                received from the same sender. If the number is missing or
                out of sequence, it provides an immediate warning that the
                message may not be authentic, giving users a simple way to
                spot phishing attempts.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-[20px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[24px] lg:text-[28px]">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                {" "}/ Digital
              </h2>
              <p className="text-[14px] leading-[1.65] text-ink sm:text-[15px] sm:leading-[1.6]">
                <em className="italic">
                  <span className="font-bold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>{" "}
                strengthens email authentication by verifying sender identity
                at the domain level. Working alongside existing email
                security standards and authentication technologies, our
                domain validation screens messages that originate from
                authorized senders, adding an extra layer of protection
                against impersonation and phishing and other attacks.
              </p>
            </div>
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
