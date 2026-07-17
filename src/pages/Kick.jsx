import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";
import launchPlanPdf from "../assets/Pdf/Launch Plan Living Doc.pdf";
import humanVsDigitalTxt from "../assets/Txt/Human vs Digital.txt?url";

export default function Kick() {
  return (
    <>
      <CloseButton />

      <section className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 bg-white px-4 py-20">
        <a
          href={kickstarterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          View Kickstarter Campaign
        </a>

        <a
          href="https://td.mediaroom.com/2026-02-09-TD-Launches-New-Brand-Platform-More-Human-,-Reflecting-A-Digital-First,-People-Centered-Future"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          TD Human
        </a>

        <a
          href={humanVsDigitalTxt}
          download="Human vs Digital.txt"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          Human vs Digital
        </a>

        <a
          href={launchPlanPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          joe1
        </a>

        <a
          href="https://fastercapital.com/content/A-Deep-Dive-into-Altruistic-Crowdfunding-Campaigns.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          Altruistic notes
        </a>
      </section>
    </>
  );
}
