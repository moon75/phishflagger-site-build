import CloseButton from "../../components/ui/CloseButton.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import digitalDomainImg from "../../assets/images/digital-domain-diagram-v4-transparent.png";
import outlookImg from "../../assets/images/outlook image 90.png";
import emailInboxImg from "../../assets/images/email-inbox-v3-balanced.png";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0002" />
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

          <div className="flex justify-center lg:justify-end">
            <img
              src="/assets/images/corporate%20image%20and%20design.png"
              alt="Corporate email protection design"
              className="h-auto w-full max-w-[280px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0003" />
        <div className="mx-auto max-w-content">
          <h2 className="text-center text-[28px] font-semibold leading-tight tracking-tight text-ink sm:text-[38px]">
            Two Ways To Join
          </h2>
          <div className="mx-auto mt-10 grid max-w-[820px] grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10">
            <div className="flex flex-col items-center">
              <h3 className="text-[22px] font-semibold text-ink sm:text-[26px]">
                Plug-In
              </h3>
              <div className="mt-5 flex h-[220px] w-full max-w-[360px] items-center justify-center gap-3 rounded-2xl border-2 border-black bg-[#f7f8fb] p-6">
                <img
                  src={outlookImg}
                  alt="Microsoft Outlook"
                  className="h-full w-1/2 rounded-xl object-contain"
                />
                <img
                  src="/assets/images/thunderbird new pick.avif"
                  alt="Mozilla Thunderbird"
                  className="h-full w-1/2 rounded-xl object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[22px] font-semibold text-ink sm:text-[26px]">
                Domain
              </h3>
              <div className="mt-5 h-[220px] w-full max-w-[360px] overflow-hidden rounded-2xl border-2 border-black">
                <img
                  src={digitalDomainImg}
                  alt="Digital diagram showing email server, domain records check, sending domain validation, and verified result"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="flex flex-col items-center">
              <div className="flex h-[220px] w-full max-w-[360px] items-center justify-center rounded-2xl border-2 border-black bg-[#f7f8fb] p-6">
                <p className="text-center text-[14px] leading-[1.6] text-ink-muted sm:text-[15px]">
                  Placeholder text goes here. Replace this copy with the final
                  content.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-[220px] w-full max-w-[360px] items-center justify-center rounded-2xl border-2 border-black bg-[#f7f8fb] p-6">
                <ul className="space-y-2 pl-5 text-left text-[14px] leading-[1.6] text-ink-muted sm:text-[15px]">
                  <li className="list-disc">
                    Domain protection for Microsoft, Google and Linux email
                    servers.
                  </li>
                  <li className="list-disc">
                    Enable all your users across all devices instantly with
                    our Domain Appliance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <SectionCounter value="^0004" />
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
        <SectionCounter value="^0005" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="h-[240px] w-[240px] overflow-hidden rounded-xl border-2 border-black">
              <img
                src="/assets/images/domain image for homepage.png"
                alt="City skyline representing corporate domain protection"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white p-2">
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

      <section className="relative w-full bg-white px-4 pb-16 pt-4 sm:px-6 sm:pb-24">
        <SectionCounter value="^0006" />
        <div className="mx-auto max-w-[820px] text-center">
          <a
            href="https://join.phishflagger.com/membership-form-stripe.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#2f2f2f]"
          >
            Purchase Corporate
          </a>
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

