import { useState } from "react";
import CloseButton from "../components/ui/CloseButton.jsx";
import kickstarterPdf from "../assets/Pdf/Kickstarter Campaign.pdf";

export default function Kick() {
  const [showPositioning, setShowPositioning] = useState(false);

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

        <button
          type="button"
          onClick={() => setShowPositioning(true)}
          className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
        >
          Human vs Digital
        </button>
      </section>

      {showPositioning && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10"
          onClick={() => setShowPositioning(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-[720px] overflow-y-auto rounded-[10px] bg-white p-8 text-[15px] leading-[1.7] text-ink shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPositioning(false)}
              aria-label="Close"
              className="float-right -mt-2 -mr-2 text-[20px] font-semibold text-[#808080] hover:text-[#333]"
            >
              &times;
            </button>

            <h2 className="text-[22px] font-bold text-ink">
              Numbered for HUMANS. DIGITAL for systems
            </h2>
            <h3 className="mt-1 text-[18px] font-semibold text-ink-muted">
              HUMAN-readable. DIGITAL for systems
            </h3>

            <hr className="my-5 border-[#e5e5e5]" />

            <p className="font-semibold text-ink">
              What sets us apart &gt;&gt; Human AND Digital
            </p>
            <p className="text-ink-muted">(we are unicorn with patents)</p>

            <div className="mt-5">
              <p className="font-semibold text-ink">Leading with the human angle:</p>
              <ul className="mt-2 space-y-1 pl-5">
                <li className="list-disc">
                  "Trust you can see. Security you can count."
                </li>
                <li className="list-disc">
                  "The only fraud protection humans can verify themselves."
                </li>
                <li className="list-disc">
                  "You don't need software to know it's real."
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-ink">
                Leading with the dual-layer idea:
              </p>
              <ul className="mt-2 space-y-1 pl-5">
                <li className="list-disc">
                  "Human-readable. Machine-verified. Fraud-proof."
                </li>
                <li className="list-disc">"Sequential trust. Digital certainty."</li>
                <li className="list-disc">
                  "Two layers of authentication — one anyone can read."
                </li>
              </ul>
            </div>

            <div className="mt-5">
              <p className="font-semibold text-ink">Punchy/brand-forward:</p>
              <ul className="mt-2 space-y-1 pl-5">
                <li className="list-disc">"Count on it. Literally."</li>
                <li className="list-disc">"If the number's off, it's a fraud."</li>
                <li className="list-disc">
                  "Numbered for humans. Verified for systems."
                </li>
              </ul>
            </div>

            <div className="mt-5 rounded-[8px] bg-[#f5f7f8] px-5 py-4">
              <p className="font-semibold text-ink">
                The one I'd highlight as strongest for your positioning:
              </p>
              <p className="mt-1 italic text-ink">
                "Human-readable. Machine-verified. Fraud-proof."
              </p>
            </div>

            <hr className="my-5 border-[#e5e5e5]" />

            <p className="text-center font-semibold text-ink">
              HUMAN-readable. DIGITAL for systems
            </p>
          </div>
        </div>
      )}
    </>
  );
}
