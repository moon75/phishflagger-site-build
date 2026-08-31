import { useRef } from "react";
import { Link } from "react-router-dom";
import PageCycleArrows from "../../components/ui/PageCycleArrows.jsx";
import { TOP_NAV_LOOP_PAGES } from "../../components/ui/topNavLoopPages.js";
import PageDownButton from "../../components/ui/PageDownButton.jsx";
import LogoMark from "../../components/ui/LogoMark.jsx";
import { brandify } from "../../components/Brand.jsx";

import contactIcon from "../../../telecom Webpage/assets/images/products/OIP-915219841.png";
import subscribeIcon from "../../../telecom Webpage/assets/images/icons/checkbox-icon.png";
import endorseIcon from "../../../telecom Webpage/assets/images/icons/endorse-us-removebg-preview.png";
import callerIdBoxImg from "../../../telecom Webpage/assets/images/products/caller-id-box.png";
import desktopPhoneImg from "../../../telecom Webpage/assets/images/products/desktop-phone-v3-verified.png";
import callerIdPhoneImg from "../../../telecom Webpage/assets/images/products/phishflagger-callerid-v6.png";
import threePhoneImg from "../../../telecom Webpage/assets/images/products/3phone.png";
import telecomIntroCombinedImg from "../../assets/images/telecom-intro-combined.png";

export default function Telecom() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full">

      <section
        className="relative flex w-full min-h-[480px] flex-col justify-center bg-[#eef0f4] bg-cover bg-center px-4 pt-12 pb-6 sm:min-h-[560px] sm:px-6 sm:pb-8"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <PageCycleArrows pages={TOP_NAV_LOOP_PAGES} current={3} center />
        <div className="mx-auto flex max-w-[1800px] flex-col items-stretch justify-center gap-6 sm:gap-8 lg:h-[300px] lg:flex-row lg:flex-nowrap lg:items-stretch lg:justify-center lg:gap-4">
          {/* A — spacer */}
          <div className="hidden lg:block lg:flex-[0.5]" />

          {/* 1 — heading + intro */}
          <div className="flex h-[220px] items-center justify-center lg:h-full lg:flex-1">
            <img
              src={telecomIntroCombinedImg}
              alt="Telecoms and Regulators — Help stop Call Spoofing. PhishFlagger protocols introduce a sequence number, known only by the valid carrier and the callee into the Caller ID field, providing a simple way to identify fake calls."
              className="relative z-10 block h-auto w-[432px] max-h-full max-w-full scale-[1.3] object-contain lg:-translate-x-[clamp(5rem,7vw,8.5rem)]"
            />
          </div>

          {/* 2 — Caller ID list */}
          <div className="flex h-[220px] items-center justify-center lg:h-full lg:flex-1">
            <img
              src="/assets/images/existing-caller-id-with-status.png"
              alt="Existing Caller ID can be used to validate calls now. The first three calls are marked safe and the fourth is marked fraud."
              className="relative z-10 block h-auto max-h-full w-auto max-w-full scale-[1.3] rounded-xl object-contain"
            />
          </div>

          {/* 3 — granny image */}
          <div className="flex h-[220px] items-end justify-center lg:h-full lg:flex-1">
            <img
              src="/assets/images/granny image.png"
              alt="User receiving an authenticated call"
              className="h-[95%] w-auto max-w-full -translate-y-3 scale-[1.2] rounded-2xl object-cover lg:translate-x-[clamp(3.5rem,calc(3.5vw+1rem),5.25rem)]"
            />
          </div>

          {/* B — spacer */}
          <div className="hidden lg:block lg:flex-[0.5]" />
        </div>

        {/* Merged from former Bottom CTA panel */}
        <div className="mx-auto mt-6 max-w-content sm:mt-8">
          <div className="grid grid-cols-[repeat(3,max-content)] place-items-center justify-center gap-x-6 gap-y-4 sm:grid-cols-[repeat(6,max-content)] sm:gap-x-8">
            <ActionCard
              to="/telecom/contact"
              label="Contact"
              src={contactIcon}
              alt="Contact"
              imageClassName="rounded-full object-cover"
            />
            <ActionCard
              to="/telecom/subscribe"
              label="Subscribe"
              src={subscribeIcon}
              alt="Subscribe"
            />
            <ActionCard
              to="/help/telecom-endorse-us"
              label={
                <>
                  Endorse
                  <br />
                  Safe Calls
                </>
              }
              src={endorseIcon}
              alt="Endorse Safe Calls"
            />
            <ActionCard
              to="/petition"
              label="Sign Petition"
              alt="Sign Petition"
              svgIcon={
                <svg viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]">
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
            <ActionCard
              to="/about/faq?category=Telecom"
              label="FAQ"
              alt="FAQ"
              svgIcon={
                <svg viewBox="0 0 24 24" className="h-[68px] w-[68px] sm:h-[83px] sm:w-[83px]">
                  <circle cx="12" cy="12" r="11" fill="#f59e0b" />
                  <path
                    d="M9.3 9.3a2.7 2.7 0 1 1 4 2.35c-.75.43-1.3.83-1.3 1.75"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <circle cx="12" cy="16.7" r="1.05" fill="white" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <SplitSection
        containerRef={containerRef}
        counter="^0001"
        image={callerIdPhoneImg}
        imageAlt="PhishFlagger Caller ID"
        bullets={[
          "The solution can be deployed quickly and easily on an international basis, as the existing Caller ID rail is fully interoperable between carriers and devices worldwide.",
          "In early deployment the callee may notice the sequence number, and — as the system matures — apps, hardware, and cell makers, etc. will flag any out-of-sequence calls automatically.",
          "In both cases, fraudulent callers who do not know the expected next number are easily exposed.",
        ]}
      />

      <section
        className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <SectionCounter value="^0002" />
        <PageDownButton containerRef={containerRef} bg="white" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <ul className="telecom-body-text space-y-4 pl-5">
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
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <img
              src={threePhoneImg}
              alt="Phones with caller ID display"
              className="h-auto w-[24vw] max-w-[85px] object-contain transition-transform duration-200 hover:scale-120 sm:w-full sm:max-w-[130px]"
            />
            <img
              src={desktopPhoneImg}
              alt="Caller ID box with PhishCounter sequence number, verified"
              className="h-auto w-[32vw] max-w-[125px] object-contain transition-transform duration-200 hover:scale-120 sm:w-full sm:max-w-[195px]"
            />
            <img
              src={callerIdBoxImg}
              alt="Caller ID box showing a PhishCounter sequence number"
              className="h-auto w-[28vw] max-w-[115px] object-contain transition-transform duration-200 hover:scale-120 sm:w-full sm:max-w-[180px]"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <PageDownButton containerRef={containerRef} />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <div className="flex justify-center">
            <img
              src="/assets/images/image-stir.png"
              alt="Existing CLI"
              className="h-auto w-full max-w-[500px] transition-transform duration-200 hover:scale-120"
            />
          </div>
          <div>
            <h2 className="telecom-title">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              Method using existing Calling Line Identifier
            </h2>
            <ul className="telecom-body-text mt-6 space-y-3 pl-5">
              <li className="list-disc">Easily deployable.</li>
              <li className="list-disc">
                Immediate benefit even without enabled receiver.
              </li>
              <li className="list-disc">
                Interoperable among Telecoms and Carriers worldwide.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <SectionCounter value="^0004" />
        <PageDownButton containerRef={containerRef} bg="white" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-28">
          <div className="flex justify-center lg:order-2">
            <img
              src="/assets/images/existing%20CLI.jpg"
              alt="STIR/SHAKEN anti-spoofing ecosystem diagram"
              className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain transition-transform duration-200 hover:scale-120"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="telecom-title">
              UK&rsquo;s regulator does not approve STIR/SHAKEN
            </h2>
            <ul className="telecom-body-text mt-6 space-y-4">
              <li className="font-semibold text-ink">
                Fraud has skyrocketed in the 5 years since it was{" "}
                <span className="whitespace-nowrap">
                  implemented.{" "}
                  <a
                    href="https://commsrisk.com/fraud-dashboard/#ftcDncVsPhoneLosses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
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
                    className="ml-2 inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
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
                    className="ml-2 inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
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
                    className="ml-2 inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
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
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  September 2, 2025
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-1-10-weeks/tackling-scam-calls-from-abroad/consultation---tackling-scam-calls-from-abroad.pdf?v=403699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  July 21, 2025
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://commsrisk.com/uk-rejects-stir-shaken-us-plan-to-control-global-caller-id-now-dead/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  February 2, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/276698---further-action-to-tackle--scam-calls/associated-documents/consultation-tackling-scam-calls--expecting-providers-to-block-more-calls-with-spoofed-numbers?v=330862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  February 2, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/phones-telecoms-and-internet/information-for-industry/scams/calling-line-identification-cli-authentication-assessment-and-future-roadmap?v=330857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  February 1, 2024
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/260545-cli-authentication/responses/uk-competitive-telecommunications-association?v=202723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  June 2023
                </a>
                ,&nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.ofcom.org.uk/siteassets/resources/documents/consultations/category-2-6-weeks/260545-cli-authentication/associated-documents/cli-authentication-potential-approach-to-detect-and-block-spoof-numbers.pdf?v=329617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 underline underline-offset-2 transition-transform duration-200 hover:scale-[1.2]"
                >
                  April 28, 2023
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0005" />
        <PageDownButton containerRef={containerRef} />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex justify-center">
            <img
              src="/assets/images/Respresntation%20image.png"
              alt="PhishFlagger using existing infrastructure"
              className="h-auto w-full max-w-[420px] rounded-2xl border-2 border-black object-contain transition-transform duration-200 hover:scale-120"
            />
          </div>
          <div>
            <h2 className="telecom-title">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              uses existing infrastructure.
            </h2>
            <p className="telecom-body-text mt-6">
              A sequence number know only by Valid Telecom and Callee could be
              implemented now to end spoofing.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <SectionCounter value="^0006" />
        <PageDownButton containerRef={containerRef} bg="white" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="telecom-title flex items-center gap-3">
              <LogoMark />
              SMS
            </h2>
            <p className="telecom-body-text mt-6 rounded-lg bg-[#FFFF00] px-4 py-3">
              Placeholder text goes here. Replace this paragraph with the
              final copy for this section.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/images/sms-phone-and-text.png"
              alt="Phone showing PhishFlagger SMS messages next to numbered message sequence detail"
              className="h-auto w-full max-w-[560px] object-contain transition-transform duration-200 hover:scale-120"
            />
          </div>
        </div>
      </section>

      <div className="h-1.5 w-full bg-gray-300" aria-hidden />
      <section
        className="relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "url('/assets/images/nice%20background%20shade.png')",
        }}
      >
        <SectionCounter value="^0007" />
        <PageDownButton bg="white" />
        <div className="mx-auto max-w-[960px] text-center">
          <p className="telecom-body-text">
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
          <div
            className="mx-auto mt-8 max-w-[1100px] rounded-2xl border-2 border-black bg-white p-6 transition-transform duration-200 hover:z-10 hover:scale-[1.5] sm:p-8"
            style={{ zoom: 0.6 }}
          >
            <p className="telecom-body-text">
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
        </div>
      </section>

    </div>
  );
}

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
      className="group flex w-[170px] scale-[0.75] flex-col items-center transition-transform duration-200 ease-out hover:scale-[0.9] sm:w-[200px]"
    >
      <div className="flex min-h-[48px] w-full flex-col items-center justify-end sm:min-h-[58px]">
        <span className="whitespace-nowrap text-center text-[18px] font-bold uppercase leading-tight tracking-[0.18em] text-ink-muted sm:text-[22px]">
          {label}
        </span>
      </div>
      <div className="mt-5 flex h-[100px] w-[100px] items-center justify-center rounded-2xl border-2 border-black bg-white transition-all duration-200 group-hover:border-4 group-hover:border-blue-600 group-hover:bg-blue-100 sm:h-[120px] sm:w-[120px]">
        {svgIcon ?? (
          <img
            src={src}
            alt={alt}
            className={`object-contain ${imageSize} ${imageClassName}`}
          />
        )}
      </div>
    </Link>
  );
}

function PlaceholderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14 text-gray-300"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.83 0L3 20" />
    </svg>
  );
}

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}

function SplitSection({ image, imageAlt, text, bullets, counter, tone = "white", containerRef }) {
  return (
    <section
      className={
        tone === "gray"
          ? "relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
          : "relative w-full scroll-mt-[var(--header-h)] lg:scroll-mt-0 bg-white px-4 py-14 sm:px-6 sm:py-20"
      }
      style={
        tone === "gray"
          ? { backgroundImage: "url('/assets/images/nice%20background%20shade.png')" }
          : undefined
      }
    >
      {counter && <SectionCounter value={counter} />}
      <PageDownButton containerRef={containerRef} forceTopOnUp bg={tone === "gray" ? "white" : "gray"} />
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full max-w-[210px] object-contain transition-transform duration-200 hover:scale-120"
          />
        </div>
        {bullets ? (
          <ul className="telecom-body-text space-y-5 pl-5 lg:text-left">
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
          <p className="telecom-body-text text-center lg:text-left">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}
