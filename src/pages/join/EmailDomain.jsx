import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import inboxImg from "../../assets/images/email-inbox v2.png";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-12 pb-12 sm:px-6 sm:pb-16">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight sm:text-[46px] lg:text-[54px]">
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="text-ink"> for your Domain</span>
          </h1>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <p className="text-center text-[28px] leading-[1.5] text-ink-muted sm:text-[30px]">
            Protect your email domains and those you resell with{" "}
            <BrandInline />
            &trade;. Safeguard
            all of your domains with <BrandInline />
            &trade; email numbering to help enhance security and prevent
            impersonation, phishing and other email-based fraud.
          </p>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <img
              src={inboxImg}
              alt="PhishFlagger inbox showing validated and flagged emails"
              className="h-auto w-full max-w-[520px] rounded-lg border-2 border-black object-contain"
            />
          </div>

          <div className="space-y-5 text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              <BrandInline />
              &trade; Protection
            </h2>
            <p>
              All email addresses within the domain are automatically{" "}
              <BrandInline />
              &trade; enabled across all devices and operating systems. No
              Install or configuration is required by the entire User base.
            </p>
            <p>
              The is our best and safest implementation of the{" "}
              <BrandInline />
              &trade; Protocol &mdash; at the &ldquo;Email Domain
              Level&rdquo;. It involves a DNS entry and routing similar to Spam
              and Anti Virus solutions.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <p className="mb-6 text-center text-[18px] font-semibold text-ink sm:text-left sm:text-[20px]">
              <BrandInline trail="Counter" />
              &trade; Protect your recipients.
            </p>

            <ul className="space-y-2 pl-5">
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

          <div className="flex flex-col items-center lg:items-end">
            <img
              src={domainProtocolImg}
              alt="Email authentication protocol showing PhishFlagger with outgoing email validation"
              className="h-auto w-full max-w-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      <Divider />

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

