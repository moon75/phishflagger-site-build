import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const FAQ_ITEMS = [
  {
    q: "Why PhishFlagger™?",
    a: "Phishing scams and fraudulent emails hurt everybody. Today it is still far too easy to open an email that looks legitimate on the surface but hides malicious risks inside. For bulk email senders (banks, insurance companies, financial institutions, and businesses that regularly send emails to customers), getting people to open their emails is critical to sales and extending the lifetime value of a customer. PhishFlagger™ email numbering is a patented, licensable email safeguard to help prevent your email contacts from phishing and fraud. PhishFlagger™ prevents your contacts from being fooled by fraudulent emails that may be claiming or even appearing to be from you. With PhishFlagger™ email numbering, you can give your clients confidence that emails they receive from you are authentic and safe to open. Help protect your customer base from phishing and assure them that you take their privacy and safety seriously.",
  },
  {
    q: "What is PhishFlagger™ email numbering?",
    a: "It’s simple. PhishFlagger™ email numbering is a patented process that inserts a sequential number – the PhishCounter™ – in the subject line of each outgoing email to help prevent phishing and other fraudulent emails. Once your emails are numbered, people will know whether an email is really from you.",
  },
  {
    q: "How does PhishFlagger™ email numbering work?",
    a: "Once you see it in action, the patented PhishFlagger™ email numbering method is simple and easy for anyone to understand and use, like page numbers in a book. PhishFlagger™ works this way: every time an email is sent to an email contact, the subject line of the email gets prefixed with a sequential PhishCounter™ ID number. - The first email that gets sent to potentialclient1@market.com would be numbered something like \"001 - Don't miss out on this special, limited-time offer.\" - With the second email, the PhishCounter™ number increases by one, so the subject line would be something like \"002 - Don’t forget to take advantage of this special, limited-time offer today!\" - The third one would be something like \"003 - Last chance to grab this offer before it’s gone!\" Since your contact knows that the last PhishCounter™ number they received from you was 003, the next email from you should be 004. If they receive an email with no number, or with number 8, or 217, or anything other than 004, then they know that email is suspicious and a potential phishing attempt.",
  },
  {
    q: "How do outgoing emails get numbered?",
    a: "Bulk email senders that license PhishFlagger™ need to inform their technology staff or IT providers to add a sequential counter to the subject line of each email sent to each recipient, following the easy steps in our Compliance Guide, which you receive when you obtain a license. Automated PhishFlagger™ email numbering implementations will vary depending on your environment and will require customization for your email system(s). A back-end process needs to be implemented to automatically generate and insert a sequential PhishCounter™ ID number into the subject line of each outgoing email that you send. This back-end process may be incorporated within an existing email system or may exist separately and interoperate with an existing email system.",
  },
  {
    q: "What are some other benefits of PhishFlagger™ email numbering?",
    a: "In addition to helping keep people safe from phishing and email fraud, PhishFlagger™ can be very beneficial in other ways for organizations, including: -Saving time and money -Improving productivity and efficiency -Record-keeping & audit trails Every year, businesses lose millions in lost productivity because of employees spending valuable time looking through cluttered email inboxes and folders for specific emails. Imagine if all of your emails were automatically numbered, for quick and easy reference by you, your email contacts, and even other people in your organization. Does this conversation sound familiar at all? Jill: Hi, Jack. Did you get my email? Jack: I dunno, which one? Jill: The one from December 23rd. Jack: Hang on. I see a few. The one named “draft document?” Jill: No, no. It’s called “draft document version 2–need help.” Jack: Are you sure you sent that to me? Jill: Yes. Jack: Okay, let me have a look here. This may take a minute. Jack: Hmmm, I don’t see it. Uggh, so many emails. Jill: I’ll wait.... Jack: Let me check my junk mail folder…. Wouldn’t you rather have a conversation like this instead? Jill: Hi, Jack. Did you get my email? Jack: I dunno, which one? Jill: Email number 1127, from me. Jack: One sec. Okay, yes. I see it right here. What’s up? PhishFlagger™ email numbering provides a handy way to reference, and quickly locate, emails in a mailbox or folder.",
  },
  {
    q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
    a: "The patented PhishFlagger™ email numbering system helps keep people safer and reduces the risks from email phishing and fraud. Your contacts compare the PhishCounter™ email ID number they receive to the number they are expecting to receive in the next email from you, to determine if the email is really from you and is safe to open. It's so simple, but since it is virtually impossible for anyone else but the actual sender and receiver to know what the next sequence number is, the recipient is safer. With PhishFlagger™ email numbering, customers won’t open fake emails claiming to be from you because those fake emails will be easily recognizable: if it has the wrong PhishCounter™ number, or no number, it’s fake.",
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
            <p className="mt-3 text-[13px] font-medium text-ink sm:text-[14px]">
              The Email Phishing Solution
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
