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

export default function Press() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[820px]">
          {/* Header */}
          <div className="text-center">
            <div className="text-[32px] leading-none tracking-tight sm:text-[40px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[15px] font-normal not-italic sm:text-[18px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">
              Protecting Communications
            </p>
          </div>

          {/* Title block */}
          <div className="mt-10 text-center sm:mt-14">
            <h1 className="text-[22px] font-semibold leading-[1.35] text-ink sm:text-[26px]">
              <Brand />™ announces a breakthrough in the global fight against
              Caller ID fraud
            </h1>
            <p className="mt-3 text-[14px] font-medium text-ink sm:text-[15px]">
              FOR IMMEDIATE RELEASE: Toronto, ON April 17, 2026
            </p>
            <p className="mt-4 text-[13px] text-ink-muted sm:text-[14px]">
              Contact Information: Email:{" "}
              <a
                href="mailto:callerid@phishflagger.com"
                className="text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                callerid@phishflagger.com
              </a>
            </p>
            <p className="mt-6 text-[18px] font-semibold text-ink sm:text-[20px]">
              Press Release
            </p>
          </div>

          {/* Body */}
          <div className="mt-10 space-y-5 text-[14px] leading-[1.7] text-ink sm:mt-12 sm:text-[15px]">
            <p>
              Phone-based fraud using spoofing and fake Caller IDs has become a
              pervasive issue for individuals, companies, governments and law
              enforcement agencies worldwide. STIR/SHAKEN works well in modern
              networks, but has not solved call spoofing on a worldwide scale.{" "}
              <Brand />™ represents a breakthrough in the global fight against
              Caller ID fraud.
            </p>
            <p>
              <Brand />™ enhances traditional Caller ID systems by adding an
              innovative validation layer to the existing Caller ID rail,
              authenticating calls and making it significantly harder for
              fraudsters to misuse caller identification. As this technology
              spreads, it will reduce phone fraud, contributing to enhanced
              consumer protection and safer communication practices worldwide.
            </p>

            <h2 className="pt-2 text-[16px] font-bold text-ink sm:text-[17px]">
              How <Brand />™ Protection Works:
            </h2>
            <p>
              <strong className="font-bold">Caller Information:</strong> The{" "}
              <Brand />™ protocol enables telecom networks to add a unique{" "}
              <em className="italic">Sequence Number</em>, the{" "}
              <span className="font-bold">
                Phish<span className="text-brand">Counter</span>
                <sup className="text-[10px]">TM</sup>
              </span>
              , within the existing calling line identification information,
              also known as caller ID.
            </p>
            <p>
              <strong className="font-bold">Validation Process:</strong> The{" "}
              <Brand />™ protocol verifies if the unique{" "}
              <em className="italic">Sequence Number</em> is the next expected
              number in the series for the callee.
            </p>
            <p>
              <strong className="font-bold">Out-of-Order Check:</strong> If the{" "}
              <em className="italic">Sequence Number</em> is not in the
              expected order, the callee may notice, and the call can be
              flagged as potentially fraudulent. Receivers can now take steps
              to confirm the call's legitimacy before engaging, eliminating the
              risk of Caller ID fraud.
            </p>
            <p>
              As deepfake AI increases risks to Caller ID, telecoms will
              benefit from implementing a sequential <Brand />™ phone call
              numbering solution as an additional authentication layer to
              protect consumers and help prevent ransom attempts and other
              phone fraud.
            </p>

            <p className="pt-2">
              <Brand />™ protects communications. The creator of the{" "}
              <Brand />™ method, William Pearce, holds patents related to
              communication, including Email, Text, Messaging and Phone
              Hardware. Pearce received U.S. Patent no. 12309317B2 for the{" "}
              <Brand />™ Caller ID method, and similar patents are now pending
              in over 60 countries.
            </p>

            <p className="pt-4">
              For more information, visit{" "}
              <a
                href="https://www.phishflagger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
              >
                www.phishflagger.com
              </a>
              .
            </p>
            <p className="text-[12.5px] text-ink-muted sm:text-[13px]">
              <Brand />™ and <Brand trail="Counter" />™ are Trademarks of{" "}
              <Brand /> Inc.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
