import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";
import callerIdBoxImg from "../../../telecom Webpage/assets/images/products/caller-id-box.png";
import desktopPhoneImg from "../../../telecom Webpage/assets/images/products/desktop-phone-v2.png";
import callerIdPhoneImg from "../../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import threePhoneImg from "../../../telecom Webpage/assets/images/products/3phone.png";
import textPhoneImg from "../../../telecom Webpage/assets/images/products/PhishFlagger-Text v6.png";
const smsPhoneImg = "/assets/images/only%204%20messages%20now.png";

export default function Telecom() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-white px-4 pt-12 pb-16 sm:px-6 sm:pb-24">
        <SectionCounter value="^0002" />
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[20px] font-normal leading-[1.12] tracking-tight text-ink sm:text-[29px] lg:text-[36px]">
            Telecoms and Regulators
            <br />
            <span className="text-brand">Help stop Call Spoofing</span>
          </h1>
          <p className="mx-auto mt-8 max-w-[860px] text-center text-[18px] leading-relaxed text-ink sm:text-[22px]">
            {brandify(
              "PhishFlagger protocols introduce a sequence number, known only by the valid carrier and the callee into the Caller ID field providing a simple way to identify fake calls.",
            )}
          </p>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="max-w-[440px] text-[20px] font-bold leading-snug tracking-tight text-ink [text-wrap:balance] sm:text-[26px]">
              Existing Caller ID can be used to validate calls now.
            </h2>
            <ul className="mt-8 space-y-2 text-[12px] leading-relaxed text-ink sm:text-[15px] lg:text-[18px]">
              {CALL_EXAMPLES.map((item) => (
                <li
                  key={`${item.seq}-${item.status}`}
                  className="font-medium tabular-nums"
                >
                  <span>{item.number}</span>
                  {item.seq && (
                    <>
                      {" "}
                      <span className="font-bold text-[#1f6e5f]">
                        {item.seq}
                      </span>
                    </>
                  )}{" "}
                  <span>{item.name}</span>
                  {item.status && (
                    <>
                      {" "}
                      <span className="font-bold text-brand">
                        {item.status}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/images/granny image.png"
              alt="User receiving an authenticated call"
              className="h-auto w-full max-w-[280px] object-contain sm:max-w-[340px]"
            />
          </div>
        </div>
      </section>

      <SplitSection
        counter="^0004"
        image={callerIdPhoneImg}
        imageAlt="PhishFlagger Caller ID"
        bullets={[
          "The solution can be deployed quickly and easily on an international basis, as the existing Caller ID rail is fully interoperable between carriers worldwide.",
          "In early deployment the callee may notice the sequence number, and — as the system matures — apps, hardware, and cell makers, etc. will flag any out-of-sequence calls automatically.",
          "In both cases, fraudulent callers who do not know the expected next number are easily exposed.",
        ]}
      />

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0005" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <ul className="space-y-4 pl-5 text-[19px] leading-snug text-ink sm:text-[24px]">
            <li className="list-disc">
              Human-compatible solution that validates legitimate
              communications and highlights fraud attempts.
            </li>
            <li className="list-disc">
              Provides protection by adding a unique sequential number, the
              PhishCounter, visible to the user.
            </li>
            <li className="list-disc">
              Provides a defense against impersonation and fraud.
            </li>
            <li className="list-disc">
              Provides immediate protection even with old Handsets.
            </li>
          </ul>
          <div className="flex items-center justify-center gap-6">
            <img
              src={threePhoneImg}
              alt="Phones with caller ID display"
              className="h-auto w-full max-w-[160px] object-contain"
            />
            <div className="relative flex items-center">
              <img
                src={desktopPhoneImg}
                alt="Caller ID box with PhishCounter sequence number"
                className="h-auto w-full max-w-[210px] object-contain"
              />
              <span className="absolute -top-2 left-[62%] flex translate-x-[calc(-50%+10px)] items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-[#16a34a] sm:text-[15px]">
                <span className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#22c55e] text-[11px] font-bold leading-none text-white">
                  ✓
                </span>
                Verified
              </span>
            </div>
            <img
              src={callerIdBoxImg}
              alt="Caller ID box showing a PhishCounter sequence number"
              className="h-auto w-full max-w-[210px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0006" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <div className="flex justify-center">
            <img
              src="/assets/images/image-stir.png"
              alt="Existing CLI"
              className="h-auto w-full max-w-[420px]"
            />
          </div>
          <div>
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              Method using existing CLI
            </h2>
            <ul className="mt-6 space-y-3 pl-5 text-[17px] leading-relaxed text-ink sm:text-[19px]">
              <li className="list-disc">Easily deployable.</li>
              <li className="list-disc">
                Immediate benefit even without enabled receiver.
              </li>
              <li className="list-disc">
                Interrogable among Telecoms and Carriers worldwide.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0007" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <div className="flex justify-center lg:order-2">
            <img
              src="/assets/images/existing%20CLI.jpg"
              alt="STIR/SHAKEN anti-spoofing ecosystem diagram"
              className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              UK&rsquo;s regulator does not approve STIR/SHAKEN
            </h2>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink sm:text-[17px]">
              <li className="font-semibold text-ink">
                Fraud has skyrocketed in the 5 years since it was{" "}
                <span className="whitespace-nowrap">
                  implemented.{" "}
                  <a
                    href="https://commsrisk.com/fraud-dashboard/#ftcDncVsPhoneLosses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 underline underline-offset-2"
                  >
                    Link
                  </a>
                </span>
              </li>
              <li className="font-semibold text-ink">
                UK Rejects STIR/SHAKEN; US Plan to Control Global Caller ID{" "}
                <span className="whitespace-nowrap">
                  Now Dead.{" "}
                  <a
                    href="https://commsrisk.com/uk-rejects-stir-shaken-us-plan-to-control-global-caller-id-now-dead/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 underline underline-offset-2"
                  >
                    Link
                  </a>
                </span>
              </li>
              <li className="font-semibold text-ink">
                Call authentication and STIR/SHAKEN is not the{" "}
                <span className="whitespace-nowrap">
                  solution.{" "}
                  <a
                    href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/260545-cli-authentication/responses/uk-competitive-telecommunications-association?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 underline underline-offset-2"
                  >
                    Link
                  </a>
                </span>
              </li>
              <li className="font-semibold text-ink">
                {brandify("PhishFlagger")} Numbering could meet the report{" "}
                <span className="whitespace-nowrap">
                  challenge.{" "}
                  <a
                    href="https://www.ofcom.org.uk/siteassets/resources/documents/phones-telecoms-and-internet/information-for-industry/scams/calling-line-identification-cli-authentication-assessment-and-future-roadmap?v=330857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 underline underline-offset-2"
                  >
                    Link
                  </a>
                </span>
              </li>
              <li className="font-semibold text-ink">
                <a
                  href="https://www.magrathea-telecom.co.uk/ofcom-attempt-to-close-the-cli-spoofing-loophole-but-are-there-holes-in-the-plan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  September 2, 2025
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-1-10-weeks/tackling-scam-calls-from-abroad/consultation---tackling-scam-calls-from-abroad.pdf?v=403699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  July 21, 2025
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://commsrisk.com/uk-rejects-stir-shaken-us-plan-to-control-global-caller-id-now-dead/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  February 2, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/276698---further-action-to-tackle--scam-calls/associated-documents/consultation-tackling-scam-calls--expecting-providers-to-block-more-calls-with-spoofed-numbers?v=330862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  February 2, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/phones-telecoms-and-internet/information-for-industry/scams/calling-line-identification-cli-authentication-assessment-and-future-roadmap?v=330857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  February 1, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/260545-cli-authentication/responses/uk-competitive-telecommunications-association?v=202723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  June 2023
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/260545-cli-authentication/associated-documents/cli-authentication-potential-approach-to-detect-and-block-spoof-numbers.pdf?v=329617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline underline-offset-2"
                >
                  April 28, 2023
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0008" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center">
            <img
              src="/assets/images/Respresntation%20image.png"
              alt="PhishFlagger using existing infrastructure"
              className="h-auto w-full max-w-[420px] rounded-2xl border-2 border-black object-contain"
            />
          </div>
          <div>
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              uses existing infrastructure.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink sm:text-[17px]">
              A sequence number know only by Valid Telecom and Callee could be
              implemented now to end spoofing.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0009" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              SMS
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink sm:text-[17px]">
              Placeholder text goes here. Replace this paragraph with the
              final copy for this section.
            </p>
          </div>
          <div className="flex justify-center gap-6">
            <img
              src={textPhoneImg}
              alt="Phone displaying PhishFlagger text messages"
              className="h-auto w-full max-w-[171px] object-contain"
            />
            <img
              src={smsPhoneImg}
              alt="Phone displaying PhishFlagger SMS messages"
              className="h-auto w-full max-w-[200px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0010" />
        <div className="mx-auto max-w-[960px] text-center">
          <p className="text-[19px] leading-relaxed text-ink sm:text-[23px]">
            The{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="align-super text-[12px] not-italic sm:text-[14px]">
              &trade;
            </span>{" "}
            process is protected by Patents
            <br />
            in the following Jurisdictions:
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-[16px] font-semibold leading-relaxed text-ink sm:text-[18px]">
            We are offering exceptional opportunities to early adopters.
          </p>
          <p className="mx-auto mt-8 max-w-[900px] text-[15px] leading-[1.85] text-ink sm:text-[18px]">
            Africa, Albania, Australia, Austria, Belgium, Brazil, Bulgaria,
            Canada, China, Columbia, Croatia, Cyprus, Czech Republic, Denmark,
            Egypt, Estonia, Finland, France, Germany, Greece, Hungary, Iceland,
            India, Indonesia, Ireland, Israel, Italy, Latvia, Liechtenstein,
            Lithuania, Luxembourg, Malta, Mexico, Monaco, Montenegro,
            Netherlands, Nigeria, North Macedonia, Norway, Philippines, Poland,
            Portugal, Romania, Russia, Saudi Arabia, San Marino, Serbia,
            Slovakia, Slovenia, Spain, Sweden, Switzerland, Thailand, Turkey,
            UAE, USA, England, Scotland, Singapore, Vietnam, Wales and Northern
            Ireland.
          </p>
        </div>
      </section>

      {/* ===== Bottom CTA panel ===== */}
      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0011" />
        <div className="mx-auto max-w-content">
          <h2 className="mb-10 text-center text-[24px] font-semibold tracking-tight text-ink sm:text-[30px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            for Telecom
          </h2>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-16 lg:gap-20">
            <ActionCard
              to="/join/telecom/contact"
              label="Contact"
              src={contactIcon}
              alt="Contact"
              imageClassName="rounded-full object-cover"
            />
            <ActionCard
              to="/join/telecom/subscribe"
              label="Subscribe"
              src={subscribeIcon}
              alt="Subscribe"
              imageSize="h-[80px] w-[80px] sm:h-[98px] sm:w-[98px]"
            />
            <ActionCard
              to="/help/telecom-endorse-us"
              label="Endorse Us"
              src={endorseIcon}
              alt="Endorse Us"
            />
            <ActionCard
              to="/petition"
              label="Sign Petition"
              alt="Sign Petition"
              svgIcon={
                <svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-5 h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]">
                  <rect width="68" height="68" rx="34" fill="#eef0f4"/>
                  <rect x="18" y="14" width="28" height="36" rx="3" fill="white" stroke="#c0c4cc" strokeWidth="2"/>
                  <line x1="23" y1="23" x2="41" y2="23" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="23" y1="29" x2="41" y2="29" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="23" y1="35" x2="34" y2="35" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M32 48 L50 28 L56 34 L38 54 L30 57 Z" fill="#2a6df4" stroke="white" strokeWidth="1.5"/>
                  <line x1="47" y1="31" x2="53" y2="37" stroke="white" strokeWidth="2"/>
                </svg>
              }
            />
          </div>
        </div>
      </section>

    </>
  );
}

const CALL_EXAMPLES = [
  {
    number: "...613-861-8600",
    seq: "2031",
    name: "ABC Bank",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "2032",
    name: "ABC Bank",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "2033",
    name: "ABC Bank",
    status: "",
  },
  {
    number: "...613-861-8600",
    seq: "",
    name: "ABC Bank",
    status: "<<< Fake",
  },
  {
    number: "...613-861-8600",
    seq: "3531",
    name: "ABC Bank",
    status: "<<< Fake",
  },
];


function ActionCard({
  to,
  label,
  src,
  alt,
  imageClassName = "",
  svgIcon,
  imageSize = "h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]",
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center transition-opacity hover:opacity-80"
    >
      <span className="text-[18px] font-bold uppercase tracking-[0.18em] text-ink-muted sm:text-[22px]">
        {label}
      </span>
      {svgIcon ?? (
        <img
          src={src}
          alt={alt}
          className={`mt-5 object-contain ${imageSize} ${imageClassName}`}
        />
      )}
    </Link>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}

function SplitSection({ image, imageAlt, text, bullets, counter }) {
  return (
    <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      {counter && <SectionCounter value={counter} />}
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full max-w-[300px] object-contain"
          />
        </div>
        {bullets ? (
          <ul className="space-y-5 pl-5 text-[19px] leading-relaxed text-ink sm:text-[23px] lg:text-left">
            {bullets.map((item) => (
              <li key={Array.isArray(item) ? item.join(" ") : item} className="list-disc">
                {Array.isArray(item) ? (
                  <div className="space-y-4">
                    {item.map((line) => (
                      <p key={line}>{brandify(line)}</p>
                    ))}
                  </div>
                ) : (
                  brandify(item)
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-[22px] leading-relaxed text-ink sm:text-[28px] lg:text-left">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

