import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import domainProtectionImg from "../../assets/images/3rd section left image.avif";
import domainProtocolImg from "../../assets/images/4th section.avif";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[1100px]">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Domain Applications and Resellers
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div className="space-y-5 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p>
              Protect your email domains and those you resell with{" "}
              <BrandInline />
              &trade; Domain Applications and Reseller Licensing. Safeguard
              all of your domains with <BrandInline />
              &trade; email numbering to help enhance security and prevent
              impersonation, phishing and other email-based fraud.
            </p>
            <p>
              Obtain <BrandInline />
              &trade; Domain Applications and Reseller licensing to help
              protect in-house email domains and email domains that you resell
              to clients from email phishing and fraud.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={domainProtectionImg}
              alt="Email authentication diagram including PhishFlagger, DKIM, DMARC, SPF, ARC, and BIMI"
              className="h-auto w-full max-w-[390px] object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src={domainProtocolImg}
              alt="Email authentication protocol showing PhishFlagger with outgoing email validation"
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>

          <div>
            <h2 className="text-[30px] font-semibold leading-tight tracking-tight text-ink sm:text-[42px]">
              <BrandDisplay />
              <br />
              Domain Protection
            </h2>

            <ul className="mt-6 space-y-4 text-[14px] font-semibold leading-relaxed text-ink sm:text-[15px]">
              <Benefit>Another Phishing protection protocol.</Benefit>
              <Benefit>Flag or quarantine out of sequence email.</Benefit>
              <Benefit>Number outgoing email automatically.</Benefit>
              <Benefit>Resellers earn additional revenue.</Benefit>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1100px] text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
          <p>
            Domain Applications and Reseller licensing can help secure your
            email domains and all incoming and outgoing email communications:
          </p>

          <ul className="mt-5 space-y-2 pl-5">
            <li className="list-disc">
              <BrandInline />
              &trade; email numbering in email domains helps prevent others
              from impersonating you, your organization, and your brand.
            </li>
            <li className="list-disc">
              Designed for organizations of all sizes with email domains, and
              for resellers.
            </li>
            <li className="list-disc">
              Tame email security at all levels and help prevent
              impersonation, phishing and other email-based fraud.
            </li>
            <li className="list-disc">
              You will receive a copy of the <BrandInline />
              &trade; Compliance Guide.
            </li>
            <li className="list-disc">
              Get all the resources required to understand and implement email
              numbering for safety and fraud prevention.
            </li>
            <li className="list-disc">
              Learn how to insert <BrandInline trail="Counter" />
              &trade; sequential email numbering into outgoing emails.
            </li>
            <li className="list-disc">
              Learn how to flag suspicious emails as potential phishing and
              email fraud attempts.
            </li>
            <li className="list-disc">
              Book a meeting with a member of our team to explore your
              opportunities.
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[24px] font-medium leading-snug tracking-tight text-ink sm:text-[30px]">
            Licensees must be capable of implementing the Protocol into their
            Applications
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Request Quote
          </Link>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

const FAQ_ITEMS = [
  {
    q: "Why PhishFlagger(TM)?",
    a: "Phishing scams and fraudulent emails hurt everybody. Today it is still far too easy to open an email that looks legitimate on the surface but hides malicious risks inside. For bulk email senders, getting people to open their emails is critical to sales and extending the lifetime value of a customer. PhishFlagger email numbering is a patented, licensable email safeguard to help prevent your email contacts from phishing and fraud.",
  },
  {
    q: "What is PhishFlagger(TM) email numbering?",
    a: "PhishFlagger email numbering is a patented protocol that assigns a sequential PhishCounter ID number to outgoing email so recipients can identify expected, legitimate communications.",
  },
  {
    q: "How does PhishFlagger(TM) email numbering work?",
    a: "Once you see it in action, the patented PhishFlagger email numbering method is simple and easy for anyone to understand and use, like page numbers in a book. Every time an email is sent to an email contact, the subject line gets prefixed with a sequential PhishCounter ID number. If the next email is missing the expected number or uses the wrong number, it is suspicious.",
  },
  {
    q: "How do outgoing emails get numbered?",
    a: "Bulk email senders that license PhishFlagger need to inform their technology staff or IT providers to add a sequential counter to the subject line of each email sent to each recipient, following the steps in the Compliance Guide. Automated implementations vary by environment and require customization for email systems.",
  },
  {
    q: "What are some other benefits of PhishFlagger(TM) email numbering?",
    a: "In addition to helping keep people safe from phishing and email fraud, PhishFlagger can help organizations save time, improve productivity, and support record-keeping and audit trails. Numbered emails are easier to reference, locate, and discuss across teams.",
  },
  {
    q: "How does PhishFlagger(TM) help keep my email contacts safe from email phishing and fraud?",
    a: "The patented PhishFlagger email numbering system helps contacts compare the PhishCounter email ID number they receive to the number they are expecting. Fake emails claiming to be from you can be recognized if the number is wrong, missing, or out of sequence.",
  },
];

function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[36px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[42px]"
      >
        <BrandDisplay />
      </Link>
      <p className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">
        The Email Phishing Solution
      </p>
    </div>
  );
}

function BrandDisplay() {
  return (
    <>
      <em className="italic">
        <span className="font-extrabold text-ink">Phish</span>
        <span className="font-normal text-brand">Flagger</span>
      </em>
      <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
        &trade;
      </span>
    </>
  );
}

function BrandInline({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-extrabold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

function Benefit({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[0.45em] h-3 w-3 shrink-0 rounded-full bg-[#2a6df4]" />
      <span>{children}</span>
    </li>
  );
}

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}

function FaqSection() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-[1000px]">
        <h2 className="text-center text-[36px] font-semibold tracking-tight text-ink sm:text-[48px]">
          Frequently asked questions
        </h2>

        <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 sm:mt-14">
          {FAQ_ITEMS.map((item, index) => (
            <FaqItem
              key={item.q}
              question={item.q}
              answer={item.a}
              defaultOpen={index !== 1}
              last={index === FAQ_ITEMS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer, defaultOpen, last }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={last ? "" : "border-b border-gray-200"}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:px-6"
      >
        <span className="text-[14px] font-semibold text-ink sm:text-[15px]">
          {question}
        </span>
        <span className="text-[20px] leading-none text-ink">
          {open ? "-" : "+"}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-5 text-[13px] leading-[1.75] text-ink-muted sm:px-6 sm:text-[14px]">
          {answer}
        </div>
      )}
    </div>
  );
}
