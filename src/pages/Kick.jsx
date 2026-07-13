import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";

export default function Kick() {
  return (
    <>
      <CloseButton />

      <section className="flex min-h-[60vh] w-full items-center justify-center bg-white px-4 py-20">
        <a
          href={kickstarterPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          View Kickstarter Campaign
        </a>
      </section>
    </>
  );
}
