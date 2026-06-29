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
        <div className="mx-auto max-w-content">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Join Your Domain
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <div className="space-y-5 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p>
              Protect your email domains and those you resell with{" "}
              <BrandInline />
              &trade;. Safeguard
              all of your domains with <BrandInline />
              &trade; email numbering to help enhance security and prevent
              impersonation, phishing and other email-based fraud.
            </p>
            <p>
              Obtain <BrandInline />
              &trade; to help protect in-house email domains and email domains that you resell
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
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
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
              <Benefit>Better Phishing protection protocol human validation.</Benefit>
              <Benefit>Flag or quarantine out of sequence email.</Benefit>
              <Benefit>Number outgoing email automatically.</Benefit>
              <Benefit>Resellers earn additional revenue.</Benefit>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
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
          </ul>
        </div>
      </section>

      <section className="w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-[820px] text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

const FAQ_ITEMS = [
  {
    q: "Why PhishFlagger™?",
    a: "Phishing scams and fraudulent emails hurt everybody. Today it is still far too easy to open an email that looks legitimate on the surface but hides malicious risks inside. For bulk email senders, getting people to open their emails is critical to sales and extending the lifetime value of a customer. PhishFlagger email numbering is a patented, licensable email safeguard to help prevent your email contacts from phishing and fraud.",
  },
  {
    q: "What is PhishFlagger™ email numbering?",
    a: "PhishFlagger email numbering is a patented protocol that assigns a sequential PhishCounter ID number to outgoing email so recipients can identify expected, legitimate communications.",
  },
  {
    q: "How does PhishFlagger™ email numbering work?",
    a: "Once you see it in action, the patented PhishFlagger email numbering method is simple and easy for anyone to understand and use, like page numbers in a book. Every time an email is sent to an email contact, the subject line gets prefixed with a sequential PhishCounter ID number. If the next email is missing the expected number or uses the wrong number, it is suspicious.",
  },
  {
    q: "How do outgoing emails get numbered?",
    a: "Bulk email senders that license PhishFlagger need to inform their technology staff or IT providers to add a sequential counter to the subject line of each email sent to each recipient, following the steps in the Compliance Guide. Automated implementations vary by environment and require customization for email systems.",
  },
  {
    q: "What are some other benefits of PhishFlagger™ email numbering?",
    a: "In addition to helping keep people safe from phishing and email fraud, PhishFlagger can help organizations save time, improve productivity, and support record-keeping and audit trails. Numbered emails are easier to reference, locate, and discuss across teams.",
  },
  {
    q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
    a: "The patented PhishFlagger email numbering system helps contacts compare the PhishCounter email ID number they receive to the number they are expecting. Fake emails claiming to be from you can be recognized if the number is wrong, missing, or out of sequence.",
  },
  {
    q: "Do I need to change my DNS settings, MX records, or email provider?",
    a: "No DNS or MX changes are required. PhishFlagger™ numbering is implemented at the application or sending layer — a back-end process that inserts the sequential counter into outgoing subject lines before delivery. Your existing email infrastructure remains unchanged.",
  },
  {
    q: "Does PhishFlagger™ work with our existing email platform?",
    a: "Yes. PhishFlagger™ is platform-agnostic and integrates with any email system that allows customization of outgoing messages. Your technical team will follow the Compliance Guide included with your license to implement it for your specific environment.",
  },
  {
    q: "Do our email recipients need to install anything?",
    a: "Nothing. The PhishCounter™ number appears in the subject line of every outgoing email — visible in any email client, on any device. No app, account, or setup is needed on the recipient's side.",
  },
];

function PageBrand() {
  return (
    <div className="text-center">
      <Link
        to="/"
        aria-label="PhishFlagger home"
        className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
      >
        <BrandDisplay />
      </Link>
      <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
        Protecting Communications
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
              defaultOpen={index === 0}
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
