import CloseButton from "../components/ui/CloseButton.jsx";
import humanVsDigitalText from "../assets/Txt/Human vs Digital.txt?raw";

export default function HumanVsDigital() {
  return (
    <>
      <CloseButton to="/kick" />

      <section className="mx-auto w-full max-w-3xl px-4 py-20">
        <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-relaxed text-[#2b2b2b]">
          {humanVsDigitalText}
        </pre>
      </section>
    </>
  );
}
