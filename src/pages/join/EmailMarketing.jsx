import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

export default function EmailMarketing() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[1100px]">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Marketers and Bulk Emailers
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-7 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p>
              You can help prevent phishing and fraud by numbering your outgoing
              emails. <BrandInline />
              &trade; can protect your brand and clients while
              increasing your campaign reach.
            </p>
            <p>
              Protect all email recipients from phishing and fraud.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/images/email-marketing-1.webp"
              alt="Email marketing and senders illustration with numbered outgoing emails"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[1100px] text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
          <ul className="mt-5 space-y-2 pl-5">
            <li className="list-disc">
              <BrandInline />
              &trade; email numbering in your outgoing email campaigns helps
              prevent others from impersonating you, your organization, clients,
              partners, and your brand.
            </li>
            <li className="list-disc">
              Designed for marketers and bulk emails.
            </li>
            <li className="list-disc">
              Tame email security and help prevent phishing and other email
              fraud.
            </li>
            <li className="list-disc">
              Prevent Impersonations of your customers.
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
    a: (
      <>
        <p>
          Phishing scams and fraudulent emails hurt everybody. Today it is still
          far too easy to open an email that looks legitimate on the surface but
          hides malicious risks inside. For bulk email senders, getting people
          to open their emails is critical to sales and extending the lifetime
          value of a customer. <BrandInline />
          &trade; email numbering is a patented, licensable email safeguard to
          help prevent your email contacts from phishing and fraud.
        </p>
        <p>
          <BrandInline />
          &trade; prevents your contacts from being fooled by fraudulent emails
          that may be claiming or even appearing to be from you. With{" "}
          <BrandInline />
          &trade; email numbering, you can give your clients confidence that
          emails they receive from you are authentic and safe to open.
        </p>
        <p>
          Help protect your customer base from phishing and assure them that you
          take their privacy and safety seriously.
        </p>
      </>
    ),
  },
  {
    q: "What is PhishFlagger™ email numbering?",
    a: (
      <p>
        It is simple. <BrandInline />
        &trade; email numbering is a patented process that inserts a sequential
        number, the <BrandInline trail="Counter" />
        &trade;, in the subject line of each outgoing email to help prevent
        phishing and other fraudulent emails. Once your emails are numbered,
        people will know whether an email is really from you.
      </p>
    ),
  },
  {
    q: "How does PhishFlagger™ email numbering work?",
    a: (
      <>
        <p>
          Once you see it in action, the patented <BrandInline />
          &trade; email numbering method is simple and easy for anyone to
          understand and use, like page numbers in a book. <BrandInline />
          &trade; works this way: every time an email is sent to an email
          contact, the subject line of the email gets prefixed with a sequential{" "}
          <BrandInline trail="Counter" />
          &trade; ID number.
        </p>
        <p>
          The first email that gets sent to potentialclient1@market.com would be
          numbered something like "001 - Don't miss out on this special,
          limited-time offer." With the second email, the <BrandInline trail="Counter" />
          &trade; number increases by one, so the subject line would be
          something like "002 - Don't forget to take advantage of this special,
          limited-time offer today."
        </p>
        <p>
          The third email would be something like "003 - Last chance to grab
          this offer before it's gone!" Since your contact knows that the last{" "}
          <BrandInline trail="Counter" />
          &trade; number they received from you was 003, the next email from you
          should be 004. If they receive an email with no number, or with number
          8, or 217, or anything other than 004, they know that email is
          suspicious and a potential phishing attempt.
        </p>
      </>
    ),
  },
  {
    q: "How do outgoing emails get numbered?",
    a: (
      <p>
        Bulk email senders that license <BrandInline />
        &trade; need to inform their technology staff or IT providers to add a
        sequential counter to the subject line of each email sent to each
        recipient, following the easy steps in our Compliance Guide, which you
        receive when you obtain a license. Automated <BrandInline />
        &trade; email numbering implementations will vary depending on your
        environment and will require customization for your email system. A
        back-end process needs to be implemented to automatically generate and
        insert a sequential <BrandInline trail="Counter" />
        &trade; ID number into the subject line of each outgoing email that you
        send. This back-end process may be incorporated within an existing email
        system or may exist separately and interoperate with an existing email
        system.
      </p>
    ),
  },
  {
    q: "What are some other benefits of PhishFlagger™ email numbering?",
    a: (
      <>
        <p>
          In addition to helping keep people safe from phishing and email fraud,{" "}
          <BrandInline />
          &trade; can be very beneficial in other ways for organizations,
          including saving time and money, improving productivity and
          efficiency. Record-keeping and audit trails are much easier to find
          when email discussions are uniquely numbered.
        </p>
        <p>
          This adaptability can benefit customer service providers, HR teams,
          legal teams, and sales teams that need to quickly reference specific
          conversations. With <BrandInline />
          &trade; email numbering, clients can refer to a numbered message
          instead of searching through cluttered inboxes or folders.
        </p>
        <p>
          Example: "The one from December 23rd. Jack: Hang on. I see a few. The
          one named 'draft document?' Jill: No, no. It's called 'draft document
          version 2-need help.' Jack: Are you sure you sent that to me? Jill:
          Yes. Jack: Okay, let me have a look here. This may take a minute."
        </p>
        <p>
          With numbered email, the same request is simpler: "I meant, Jack: Let
          me check my junk mail folder. Jill: Email number 1127, from me. Jack:
          One sec. Okay, yes, I see it right there."
        </p>
      </>
    ),
  },
  {
    q: "How does PhishFlagger™ help keep my email contacts safe from email phishing and fraud?",
    a: (
      <p>
        The patented <BrandInline />
        &trade; email numbering system helps keep people safer and reduces the
        risks from email phishing and fraud. Your contacts compare the{" "}
        <BrandInline trail="Counter" />
        &trade; email ID number they receive to the number they are expecting to
        receive in the next email from you, to determine if the email is really
        from you and is safe to open. It is simple, but since it is virtually
        impossible for anyone else but the actual sender and receiver to know
        what the next sequence number is, the recipient is safer. With{" "}
        <BrandInline />
        &trade; email numbering, customers will not open fake emails claiming to
        be from you because those fake emails will be easily recognizable: if it
        has the wrong <BrandInline trail="Counter" />
        &trade; number, or no number, it is fake.
      </p>
    ),
  },
  {
    q: "Will the PhishCounter™ number in the subject line affect my open rates?",
    a: (
      <p>
        Early adopters have found that numbered subject lines build recipient
        trust over time, which improves open rates. Recipients who recognize{" "}
        <BrandInline />
        &trade; numbering are more confident opening emails and less likely to
        delete them out of caution. A/B test subject lines as you normally would
        — the <BrandInline trail="Counter" />
        &trade; prefix is consistent and will not skew your results.
      </p>
    ),
  },
  {
    q: "Does PhishFlagger™ work with platforms like Mailchimp, Salesforce, or HubSpot?",
    a: (
      <p>
        Yes. <BrandInline />
        &trade; is platform-agnostic and integrates with any email marketing
        platform that allows customization of outgoing subject lines. Your
        technical team will follow the Compliance Guide included with your
        license to implement it within your existing sending environment.
      </p>
    ),
  },
  {
    q: "Do our email recipients need to install anything?",
    a: (
      <p>
        Nothing. The <BrandInline trail="Counter" />
        &trade; number is embedded in the email subject line — visible in any
        email client, on any device. No app, no account, and no setup is
        required on the recipient's side.
      </p>
    ),
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
        <div className="space-y-4 px-4 pb-5 text-[13px] leading-[1.75] text-ink-muted sm:px-6 sm:text-[14px]">
          {answer}
        </div>
      )}
    </div>
  );
}
