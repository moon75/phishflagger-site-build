import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import digitalDomainImg from "../../assets/images/domain-card-side-by-side-transparent-v4.png";
import outlookImg from "../../assets/images/outlook-image-90-square.png";
import emailInboxImg from "../../assets/images/email-inbox-v3-balanced.png";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        }}
      >
        <SectionCounter value="^0001" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-6 text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px]">
              Corporate
            </h2>
            <ul className="space-y-4 text-[15px] leading-[1.6] text-ink sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
              <li className="list-disc">
                Safeguard your domains with <BrandInline />
                &trade; email numbering to help enhance security and prevent
                impersonation, phishing and other email-based fraud.
              </li>
              <li className="list-disc">
                Placeholder text goes here. Replace this copy with the final
                content.
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end lg:pr-6">
            <div className="h-[217px] w-[217px] overflow-hidden rounded-xl border-2 border-black">
              <img
                src="/assets/images/corporate%20image%20and%20design.png"
                alt="Corporate email protection design"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0002" />
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
            Two Ways To Join
          </h2>
          <div className="mx-auto mt-10 grid max-w-[1080px] grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-16">
            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="flex h-[200px] items-center justify-center gap-12 bg-[#EEF0F4] px-5">
                <img
                  src={outlookImg}
                  alt="Microsoft Outlook"
                  className="h-[140px] w-[140px] rounded-2xl object-cover"
                />
                <img
                  src="/assets/images/thunderbird new pick.avif"
                  alt="Mozilla Thunderbird"
                  className="h-[140px] w-[140px] rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <div className="flex items-center justify-center">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                    Plug-In
                  </h3>
                </div>
                <ul className="list-disc space-y-4 pl-5 text-left text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                  <li>
                    Placeholder text goes here. Replace this copy with the
                    final content.
                  </li>
                  <li>
                    Placeholder text goes here. Replace this copy with the
                    final content.
                  </li>
                  <li>
                    Placeholder text goes here. Replace this copy with the
                    final content.
                  </li>
                  <li>
                    Placeholder text goes here. Replace this copy with the
                    final content.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[#EEF0F4] px-4 py-5">
                <img
                  src={digitalDomainImg}
                  alt="Digital diagram showing email server, domain records check, sending domain validation, and verified result"
                  className="h-[92%] w-[92%] object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <div className="flex items-center justify-center">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                    Domain
                  </h3>
                </div>
                <ul className="list-disc space-y-4 pl-5 text-left text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                  <li>
                    Domain protection for Microsoft, Google and Linux email
                    servers.
                  </li>
                  <li>
                    Enable all your users across all devices instantly with
                    our Domain Appliance.
                  </li>
                  <li>
                    Hosted on AWS, VMware, Azure, or any server with Open
                    Port 25. Available as a Linux, Kubernetes, or Docker
                    appliance.
                  </li>
                  <li>
                    Also available on-site with Linux (Postfix) or Microsoft
                    Exchange.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        }}
      >
        <SectionCounter value="^0003" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="text-[14px] leading-[1.75] text-ink-muted sm:text-[15px]">
            <h2 className="mb-6 text-center text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-left sm:text-[30px]">
              Protect your Brand and Recipients
            </h2>

            <ul className="space-y-2 pl-0">
              <li className="list-none">
                <BrandInline />
                &trade; email numbering helps prevent others
                from impersonating you, your organization, and your brand.
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

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0004" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-nowrap justify-center gap-6">
            <div className="h-[240px] w-[240px] shrink-0 overflow-hidden rounded-xl border-2 border-black">
              <img
                src="/assets/images/domain image for homepage.png"
                alt="City skyline representing corporate domain protection"
                className="h-full w-full scale-110 object-cover"
              />
            </div>
            <div className="flex h-[240px] w-[240px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-2">
              <img
                src={emailInboxImg}
                alt="PhishFlagger inbox showing numbered emails"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              Protect your Company
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px] lg:mx-0">
              Placeholder text goes here. Replace this copy with the final
              content.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
        }}
      >
        <SectionCounter value="^0005" />
        <div className="mx-auto max-w-content text-center">
          <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
            Pricing
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
            Placeholder pricing
          </p>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
        <SectionCounter value="^0006" />
        <div className="mx-auto flex max-w-[820px] flex-wrap items-center justify-center gap-4 text-center">
          <a
            href="https://join.phishflagger.com/membership-form-stripe.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Join
          </a>
          <Link
            to="/join-free"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Join
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
