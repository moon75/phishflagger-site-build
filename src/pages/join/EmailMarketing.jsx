import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import phishCounterImg from "../../assets/images/4th section.avif";
import inboxImg from "../../assets/images/email-inbox v2.png";
import marketerImg from "../../assets/images/5th sec.avif";

export default function EmailMarketing() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-content">
          <PageBrand />

          <h1 className="mt-8 text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Marketers and Bulk Emailers
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="space-y-7 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              Protect your Clients Brand from Impersonation.
            </h2>
            <p>
              You can help prevent phishing and fraud by numbering your outgoing
              emails. <BrandInline />
              &trade; can protect your brand and your clients brand while
              increasing your campaign reach.
            </p>
            <p>
              Protect all email recipients from phishing and fraud.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={marketerImg}
              alt="Email marketing and senders illustration with numbered outgoing emails"
              className="h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src={phishCounterImg}
              alt="PhishCounter subject line example"
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>

          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              How it works.
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
              <li className="list-disc">
                Tame email security and help prevent phishing and other email
                fraud.
              </li>
              <li className="list-disc">
                Prevent Impersonations of your customers.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
              Recipients that are <BrandInline />
              <span className="align-super text-[14px] font-normal not-italic sm:text-[16px]">
                &trade;
              </span>{" "}
              Enabled.
            </h2>
            <p className="mt-5">
              <BrandInline /> enabled domain or clients automatically validate
              emails.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <img
              src={inboxImg}
              alt="PhishFlagger inbox showing validated and flagged emails"
              className="h-auto w-full max-w-[560px] rounded-xl border-2 border-gray-300 object-contain shadow-[0_2px_6px_rgba(15,23,42,0.08)]"
            />
            <p className="mt-4 w-full max-w-[560px] text-center text-[14px] italic text-ink-muted sm:text-[15px]">
              Email client view from enabled Domain
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
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

function Divider() {
  return <div className="mx-auto h-px w-[94%] max-w-[1120px] bg-gray-300" />;
}

