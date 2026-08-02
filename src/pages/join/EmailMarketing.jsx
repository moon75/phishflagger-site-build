import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import phishCounterImg from "../../assets/images/4th section.avif";
import inboxImg from "../../assets/images/email-inbox-v3-balanced.png";
import marketerImg from "../../assets/images/email-marketing-verified-v6.png";

export default function EmailMarketing() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Marketers and Bulk Emailers
          </h1>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0002" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-7 text-[15px] leading-relaxed text-ink sm:text-[17px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              Brand Protection
            </h2>
            <p>
              You can help prevent phishing and fraud by numbering your outgoing
              emails. <BrandInline />
              &trade; can protect your brand and your clients brand while
              increasing your campaign reach.
            </p>
            <p>
              Protect your email recipients from phishing and fraud.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={marketerImg}
              alt="Email marketing and senders illustration with numbered outgoing emails"
              className="h-auto w-full max-w-[416px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src={phishCounterImg}
              alt="PhishCounter subject line example"
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>

          <div className="text-[15px] leading-relaxed text-ink sm:text-[17px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              The Human Part
            </h2>
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
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0004" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-[15px] leading-relaxed text-ink sm:text-[17px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              <BrandInline />
              <span className="align-super text-[14px] font-normal not-italic sm:text-[16px]">
                &trade;
              </span>{" "}
              enabled Recipients.
            </h2>
            <ul className="mt-5 list-disc space-y-2 pl-5">
              <li>
                <BrandInline /> enabled domain or clients automatically
                validate emails.
              </li>
              <li>
                Enabled clients are additionally protected with our Digital
                verification method that validates the sending domain similar
                to SPF.{" "}
                <Link
                  to="/digital-ino"
                  className="font-semibold text-[#2a6df4] underline underline-offset-4"
                >
                  More info Here.
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <img
              src={inboxImg}
              alt="PhishFlagger inbox showing validated and flagged emails"
              className="h-auto w-full max-w-[560px] rounded-lg border-2 border-black object-contain"
            />
            <p className="mt-4 w-full max-w-[560px] text-center text-[14px] italic text-ink-muted sm:text-[15px]">
              Email client view from enabled Domain
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0005" />
        <div className="mx-auto max-w-[820px] text-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Contact Us
          </Link>
        </div>
      </section>

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

function SectionCounter({ value }) {
  return (
    <span className="absolute left-6 top-4 text-[17px] font-normal tracking-[0.04em] text-ink sm:left-10 sm:text-[19px]">
      {value}
    </span>
  );
}

