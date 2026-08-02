import { Link } from "react-router-dom";
import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";
import launchPlanPdf from "../assets/Pdf/Launch Plan Living Doc.pdf";
import kickstarterRequirementsPdf from "../assets/Pdf/Kickstarter Requirements.pdf";
import kickstarterRewardsDoc from "../assets/Pdf/Kickstarter Rewards.docx";

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
      </section>
    </>
  );
}
