import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const FAQ_ITEMS = [
  {
    q: "Why PhishFlagger™?",
    a: "PhishFlagger™ helps bulk email senders — banks, insurance companies, financial institutions — and friends from falling victim to impersonation by providing authenticated, human compatible numbered communications (The PhishCounter™) that assure recipients of message legitimacy.",
  },
  {
    q: "What is PhishFlagger™ email numbering?",
    a: "PhishFlagger™ email numbering is a patented protocol that assigns a unique sequential number to each outgoing email from a sender domain, making every legitimate message individually identifiable to the recipient. We also will offer Plug In’s for Individual use.",
  },
  {
    q: "How does PhishFlagger™ email numbering work?",
    a: "Each outgoing email is tagged with the next number in the sender’s sequence (the PhishCounter™) and placed in the subject line. The recipient — or their email client — can confirm the number is in sequence; any out-of-sequence or missing number is automatically flagged as suspicious. Additionally we certify the sending domain or email.",
  },
  {
    q: "How do outgoing emails get numbered?",
    a: "Numbering happens at the sending domain or from a plug in. When an email leaves the sender's server or Client, PhishFlagger™ inserts the next sequential number into the message header/subject line before delivery, so every recipient receives a counter-stamped email.",
  },
  {
    q: "What are some other benefits of PhishFlagger™ email numbering?",
    a: "Beyond phishing defense, sequential numbering improves deliverability trust, helps recipients track and audit communications, reduces support load from impersonation incidents.",
  },
  {
    q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
    a: "PhishFlagger™ was created to protect consumers and help prevent brand destruction by imposters. By sequentially numbering digital communications, recipients can immediately identify legitimate messages and spot fraudulent ones that lack the expected sequence number.",
  },
  {
    q: "Do email recipients need to install anything?",
    a: "For our Domain customers nothing at all. The PhishCounter™ number appears in the subject line of every email — visible in any email client, on any device. No app, no account, and no setup is required on the recipient's side. For Individuals a Plug-in or compliant Email client is required.",
  },
  {
    q: "Can a phisher just replicate the sequence number to fool the system?",
    a: "Virtually impossible. The PhishCounter™ number is specific to each individual sender-recipient pair and is only known between the legitimate sender and that particular recipient. A phisher blasting emails to thousands of people cannot know the unique sequence number each individual is expecting — making it effectively impossible to craft a convincing fake at scale.",
  },
  {
    q: "Is PhishFlagger™ email numbering patented?",
    a: "The PhishFlagger™ email numbering method is a patented process.",
  },
  {
    q: "How do I get a license, and how much does it cost?",
    a: "Licensing options depend on the size and type of your organization. PhishFlagger™ offers plans for individual users, businesses licensing a domain, and email marketing organizations. Visit our Join page or contact us directly to discuss the right plan for your needs.",
  },
  {
    q: "What happens if a recipient forgets their last PhishCounter™ number?",
    a: "They can simply look back at the most recent legitimate email from that sender to check the last number used. If that is not possible, the safest step is to contact the sender through a trusted channel — by phone or via the company’s official website — to confirm whether the email is genuine. PhishFlagger™ is an added layer of protection that works alongside existing email safety best practices.",
  },
  {
    q: "Does PhishFlagger™ work with platforms like Mailchimp, Salesforce, or HubSpot?",
    a: "Yes. PhishFlagger™ is platform-agnostic. The numbering process is implemented at the sending domain or email infrastructure level and can be integrated with any platform that allows customization of outgoing subject lines. Your technical team will follow the Compliance Guide included with your license to implement it for your specific environment.",
  },
];

export default function FAQ() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[920px]">
          {/* Header */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>

            <h1 className="mt-8 text-[40px] font-semibold leading-none tracking-tight text-ink sm:mt-10 sm:text-[56px]">
              FAQ
            </h1>
          </div>

          {/* FAQ list */}
          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200 sm:mt-16">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-2 py-5 text-left transition-colors hover:bg-gray-50 sm:gap-6 sm:px-4 sm:py-6"
      >
        <span className="text-[15px] font-semibold text-ink sm:text-[17px]">
          {question}
        </span>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-ink-muted">
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M5 12h14" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          )}
        </span>
      </button>
      {open && (
        <div className="px-2 pb-6 text-[13.5px] leading-[1.7] text-ink sm:px-4 sm:pb-7 sm:text-[14.5px]">
          {answer}
        </div>
      )}
    </div>
  );
}
