import { useState } from "react";
import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import blog1Img from "../../assets/images/blog one feature image of blackhat.avif";
import blog2Img from "../../assets/images/blog 2 feature.avif";
import blog3Img from "../../assets/images/blog 3 feature image.avif";
import blog3Img1 from "../../assets/images/blog 3 image 1.avif";
import blog3Img2 from "../../assets/images/blog 3 image 2.webp";

function Brand({ trail = "Flagger" }) {
  return (
    <em className="italic">
      <span className="font-bold text-ink">Phish</span>
      <span className="font-normal text-brand">{trail}</span>
    </em>
  );
}

const POSTS = [
  { id: "vegas", title: "PhishFlagger \"What happens in Vegas stays in Vegas.\" Not this time!" },
  { id: "fix-for-email", title: "Finally, a fix for email" },
  { id: "secured-patents", title: "Secured patents" },
];

export default function Blog() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[920px]">
          {/* Page header */}
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

            <h1 className="mt-10 text-[36px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-[48px]">
              Blog
            </h1>
          </div>

          {/* Table of contents */}
          <nav className="mx-auto mt-10 max-w-[680px] rounded-2xl border border-gray-200 bg-[#fafbfc] p-5 sm:mt-12 sm:p-6">
            <p className="text-[12px] font-bold uppercase tracking-wider text-ink-muted">
              In this issue
            </p>
            <ul className="mt-3 space-y-2 text-[14px] sm:text-[15px]">
              {POSTS.map((p, i) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className="text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
                  >
                    {i + 1}. {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ===== Article 1 — Vegas ===== */}
      <article id="vegas" className="w-full bg-white px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-[26px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
            <Brand /> "What happens in Vegas stays in Vegas." Not this time!
          </h2>

          <BlogImage
            src={blog1Img}
            alt="Black Hat conference signage in Las Vegas"
          />

          <div className="mt-8 space-y-5 text-[14.5px] leading-[1.75] text-ink sm:text-[15.5px]">
            <p>
              Our staff who were in Las Vegas for the official launch were
              delighted with the reception we received. Of the hundreds, and
              possibly thousands, of people we talked to at the show, a grand
              total of two (yes, two) had bad things to say about <Brand />
              <Sup>TM</Sup> and <Brand trail="Counter" />
              <Sup>TM</Sup>. We hope we'll have a chance to talk to both of
              them again, and maybe change their minds.
            </p>
            <p>
              According to the old saying, "What happens in Vegas stays in
              Vegas." Not this time! Now that we have officially launched, we
              intend to bring the good news about numbering emails to as many
              organizations as possible.
            </p>
          </div>
        </div>
      </article>

      <Divider />

      {/* ===== Article 2 — Finally, a fix for email ===== */}
      <article id="fix-for-email" className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-[26px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
            Finally, a fix for email
          </h2>

          <BlogImage
            src={blog2Img}
            alt="1892 numbering machine and 2024 anti-phishing solution comparison"
          />

          <CollapsibleBody>
            <p>
              It's 2024 and email phishing attempts and fraudulent emails are
              still a large problem for individuals and companies of all
              sizes, especially bulk email senders such as banks, utilities,
              and insurance companies.
            </p>
            <p>
              The damage resulting from a network breach includes steep
              financial/legal costs, and it can severely damage an
              organization's reputation. Financially-motivated phishing and
              spear-phishing attacks are increasingly putting people and
              organizations at risk of a breach.
            </p>
            <p>
              There is a clear need in the market for a simple solution that
              anyone can use. Consumer data privacy concerns are rising. It's
              not an exaggeration to say people are often afraid to open
              emails, and have to spend time looking at each email before
              determining whether it is safe to open. While some people
              unfortunately still fall for phishing scams, more and more
              people are saying "if I don't trust that email, I don't open
              it, I just delete it." Deleting is a way people can protect
              themselves, but there needs to be a way that email senders can
              help recipients know that emails from them are legitimate,
              trustworthy and safe to open.
            </p>
            <p>
              Other anti-phishing solutions are complicated, expensive, and
              have been often unreliable and ineffective, and so have not been
              widely adopted. User training, fraudulent web page recognition,
              augmented login passwords, spam filters, and two-factor
              verification have not solved the problem of email phishing and
              fraud. It's time for something new.
            </p>
            <p>
              But <Brand />™ brings a breath of fresh air to the anti-phishing
              space with a new anti-phishing safeguard that is easy enough for
              anyone to understand and use. The goal is simple: help stop
              phishing and make email safer.
            </p>
            <p>
              <Brand />™ is a licensable email safeguard that detects and
              prevents phishing email attempts so individuals, businesses, and
              their customers can verify the authenticity of emails. The heart
              of <Brand />™'s simple idea is expressed in its tagline, "We
              number emails. Why? To help protect you from phishing attempts
              and fraudulent email." <Brand />™'s patented method of using a
              sequential series of numbers, right in the subject line of each
              email that is sent to a specific recipient, can solve the
              phishing problem. People don't have to risk opening an email;
              they will be able to tell if an email is safe just by checking
              the email number.
            </p>
            <p>
              It works this way: every time you send an email to a specific
              recipient, you prefix the subject line of the email with a
              number. (This can be a manual process, or the bulk mailer or
              corporation can optionally use the downloadable Implementation
              Guide to have their IT departments integrate <Brand /> within
              their internal systems.)
            </p>

            <h3 className="pt-4 text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
              Say you're a business communicating with your client base by
              email:
            </h3>
            <ul className="space-y-3 pl-5">
              <li className="list-disc">
                So, the first email you send to potential client@market.com
                would be something like "001- Don't miss out on this unique
                opportunity to grow your sales."
              </li>
              <li className="list-disc">
                The second time you send an email to this same person, the
                subject line would be something like "002 - Last chance to
                take advantage of this special, limited-time offer!"
              </li>
              <li className="list-disc">
                The third one would be something like "003 - Another chance
                to…"
              </li>
              <li className="list-disc">
                Since the person receiving the email knows that the last email
                sequence number they received was 003, the next email from
                that particular sender should be 004. If they receive an email
                with no number, or with numbers 008 or 017, or anything other
                than 004, then that email is suspicious and should be viewed
                as a potential phishing email.
              </li>
              <li className="list-disc">
                It's so amazingly simple, but since it is virtually impossible
                for anyone else but the actual sender and receiver to know
                what the next sequence number is, the receiver should feel
                much safer when opening a correctly numbered email.
              </li>
              <li className="list-disc">
                If the correct sequence number is missing there is no need to
                open the email, thus enhancing safety by avoiding the risk of
                malicious payloads like a rootkit or other malware that can
                comprise a system.
              </li>
              <li className="list-disc">
                Think of it: a sequence of email numbers, like page numbers
                in a book, helps verify the authenticity of each email. The
                method is easy enough for anyone to understand and use, even
                senior citizens who struggle with the waves of malicious
                email scams aimed at them.
              </li>
              <li className="list-disc">
                <Brand />™'s initial target audience is bulk email senders
                (banks, insurance companies, financial institutions, and
                corporations) and it seems like a match made in heaven.
                Getting people to open all those emails bulk mailers send is
                critical to converting leads to sales, and extending the
                lifetime value of a customer. A bulk email sender that uses{" "}
                <Brand />™ gives their customers confidence that their emails
                are safe and that it takes client privacy seriously.
              </li>
            </ul>

            <h3 className="pt-4 text-[19px] font-semibold leading-[1.3] text-ink sm:text-[22px]">
              If you are a bulk email sender, <Brand />™ has many benefits for
              you:
            </h3>
            <ul className="space-y-3 pl-5">
              <li className="list-disc">
                Helps protect clients from phishing attempts so people won't
                get fooled by fraudulent emails claiming to be from you
              </li>
              <li className="list-disc">
                Gives your clients confidence that your emails are safe, and
                authentic, and reminds them that you take their customer
                privacy seriously
              </li>
              <li className="list-disc">
                Trust is critical to converting leads to sales and extending
                the lifetime value of a customer
              </li>
              <li className="list-disc">
                The <Brand />™ brand increases the likelihood that clients
                will trust and open all those emails you send (very often
                emails go unread if someone is uncertain whether a given email
                is safe to open)
              </li>
              <li className="list-disc">
                <Brand />™'s email numbering method is simple and easy for
                anyone to understand, like page numbers in a book (whereas
                other anti-phishing solutions are complicated, expensive, and
                unreliable)
              </li>
              <li className="list-disc">
                As a bonus that is worth mentioning, the numbering helps
                people quickly find specific emails when they need to!
              </li>
            </ul>

            <p>
              Additional information about how <Brand />™ works is embedded
              in every email that is sent, to instill more trust so <Brand />
              ™ adoption spreads quickly.
            </p>
            <p>
              It's "future-ready," as they say, and can work as email systems
              grow and change over time. <Brand />™'s method works with
              existing email systems but can also be adopted by email service
              providers, IT teams, and developers of email tools and plug-ins
              to automate the sending of sequentially numbered emails. For
              example, automated alerts—if the correct email sequence number
              does not match the message could turn red, start flashing or
              display an on-screen pop-up message. It could also trigger a
              mail rule to take further actions, e.g., forwarding the email
              to a safe place where IT staff could take a look at it too, and
              reporting the offender to the private <Brand /> database of
              suspected phishers.
            </p>
            <p>
              However, companies that send out emails do not need a new
              software application. No complex configurations are required.
              IT staff or IT providers only need to add a sequential counter
              to the subject line of each email they send to each recipient
              (tracked in a simple database), following the easy steps in the
              Implementation Guide.
            </p>
            <p>
              The problem is clear, and <Brand />™'s fix for email is spot on.
              At first glance, numbering emails like page numbers in a book
              to prevent email phishing and fraud may sound a little too
              simple or old-fashioned to work, but maybe simple and
              old-fashioned are exactly what we need right now. We've been
              numbering book pages for a LONG time. It's a human-compatible
              approach that can easily be implemented.
            </p>

            <p className="pt-2 text-[13.5px] italic text-ink-muted sm:text-[14.5px]">
              William Pearce, Founder, <Brand />™
            </p>
          </CollapsibleBody>
        </div>
      </article>

      <Divider />

      {/* ===== Article 3 — Secured patents ===== */}
      <article id="secured-patents" className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-[26px] font-semibold leading-[1.2] tracking-tight text-ink sm:text-[32px] lg:text-[36px]">
            Secured patents
          </h2>

          <BlogImage
            src={blog3Img}
            alt="Person reviewing a numbered inbox on a laptop"
          />

          <div className="mt-8 space-y-5 text-[14.5px] leading-[1.75] text-ink sm:text-[15.5px]">
            <p>
              <Brand />™ is awarded Patents in the USA and UK to help
              safeguard electronic messages. Among the many uses of the IP is
              a method to prevent email phishing by numbering outgoing emails.
              This method will empower email recipients with a method to
              validate authentic emails from the sender. It's a
              human-compatible approach that can easily be implemented now.
            </p>
          </div>

          <BlogImage
            src={blog3Img1}
            alt="PhishFlagger enabled email client preview"
          />

          <BlogImage
            src={blog3Img2}
            alt="Numbering prevents fraud — historical comparison"
          />
        </div>
      </article>
    </>
  );
}

function Divider() {
  return (
    <div className="mx-auto h-px w-[88%] max-w-[820px] bg-gray-200" />
  );
}

function Sup({ children }) {
  return (
    <sup className="ml-0.5 text-[10px] font-normal not-italic">{children}</sup>
  );
}

function BlogImage({ src, alt }) {
  const onError = (e) => {
    e.currentTarget.style.display = "none";
    const fb = e.currentTarget.nextElementSibling;
    if (fb) fb.style.display = "flex";
  };
  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:mt-10">
      <img
        src={src}
        alt={alt}
        onError={onError}
        className="block h-auto w-full object-cover"
      />
      <div
        className="hidden aspect-[16/9] items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-[13px] font-medium text-ink-muted"
        aria-hidden
      >
        Article image
      </div>
    </div>
  );
}

function CollapsibleBody({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 space-y-5 text-[14.5px] leading-[1.75] text-ink sm:text-[15.5px]">
      <div
        className={
          open
            ? ""
            : "relative max-h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
        }
      >
        <div className="space-y-5">{children}</div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="cursor-pointer text-[14px] font-bold text-[#2a6df4] underline underline-offset-4 hover:text-[#1a52c9]"
      >
        {open ? "Show less" : "Read more"}
      </button>
    </div>
  );
}
