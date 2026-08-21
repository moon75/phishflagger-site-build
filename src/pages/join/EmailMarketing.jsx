import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import phishCounterImg from "../../assets/images/4th section.avif";
import inboxImg from "../../assets/images/email-inbox-v4-gray-header.png";
import marketerImg from "../../assets/images/email-marketing-verified-v9.png";

export default function EmailMarketing() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 pt-14 pb-14 sm:px-6 sm:pt-20 sm:pb-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0001" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-7 text-[15px] leading-relaxed text-ink sm:text-[17px]">
            <h2 className="flex items-center gap-3 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              <img
                src="/assets/images/logo-mark.png"
                alt="PhishFlagger envelope and flag mark"
                className="h-[30px] w-auto shrink-0 object-contain sm:h-[36px]"
              />
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

          <div className="flex justify-center lg:justify-end lg:pr-32">
            <img
              src={marketerImg}
              alt="Email marketing and senders illustration with numbered outgoing emails"
              className="h-auto w-full max-w-[271px] rounded-lg border-2 border-black bg-white object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0002" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="mb-6 text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px] lg:text-left">
              <BrandInline trail="Counter" /> protects recipients.
            </h2>
            <img
              src={phishCounterImg}
              alt="PhishCounter subject line example"
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>

          <div className="text-[15px] leading-relaxed text-ink sm:text-[17px]">
            <h2 className="flex items-center gap-3 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px] lg:mt-16">
              <img
                src="/assets/images/logo-mark.png"
                alt="PhishFlagger envelope and flag mark"
                className="h-[30px] w-auto shrink-0 object-contain sm:h-[36px]"
              />
              The Human Part
            </h2>
            <ul className="mt-5 space-y-2 pl-5">
              <li className="list-disc">
                <BrandInline />
                &trade; email numbering in your outgoing email campaigns helps
                prevent others from impersonating you and your brand.
              </li>
              <li className="list-disc">
                Designed for marketers and bulk emails.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0003" />
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
            <p className="mb-4 w-full max-w-[358px] text-center text-[16px] text-ink sm:text-[18px]">
              Email client view from enabled Domain
            </p>
            <div className="aspect-[1448/1017] w-full max-w-[358px] overflow-hidden rounded-2xl border-2 border-black bg-white">
              <img
                src={inboxImg}
                alt="PhishFlagger inbox showing validated and flagged emails"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0004" />
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
            Try our Email Demo Now
          </h2>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
            >
              Demo
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
            >
              Contact Us
            </Link>
          </div>
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

