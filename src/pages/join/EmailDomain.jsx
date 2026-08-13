import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import domainProtocolImg from "../../assets/images/4th section.avif";
import digitalDomainImg from "../../assets/images/digital-domain-diagram-v6-no-connector.png";
import outlookThunderbirdImg from "../../assets/images/outlook and thunderbird.png";
import emailInboxImg from "../../assets/images/email-inbox-v4-gray-header.png";

export default function EmailDomain() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <SectionCounter value="^0001" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="mb-6 inline-block rounded-[6px] bg-[#FFE600] px-3 py-0.5 text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px]">
              PRO
            </h2>
            <ul className="space-y-4 text-[15px] leading-[1.6] text-ink sm:space-y-5 sm:text-[18px] sm:leading-[1.55]">
              <li className="list-disc">
                Safeguard your domain with <BrandInline />
                &trade; email numbering to prevent impersonation, phishing and
                other email-based fraud.
              </li>
            </ul>
          </div>

          <div className="flex justify-center lg:justify-end lg:pr-52">
            <div className="h-[217px] w-[217px] overflow-hidden rounded-xl border-2 border-black p-1">
              <img
                src="/assets/images/corporate%20image%20and%20design.png"
                alt="Corporate email protection design"
                className="h-full w-full rounded-lg object-contain"
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
            <div className="mx-auto flex w-full max-w-[460px] flex-col">
              <h3 className="mb-3 text-center text-[20px] font-bold uppercase tracking-[0.14em] text-ink">
                Plug-In
              </h3>
              <div className="flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
                <div className="flex h-[140px] items-center justify-center overflow-hidden bg-[#EEF0F4] px-5 sm:h-[200px]">
                  <img
                    src={outlookThunderbirdImg}
                    alt="Microsoft Outlook and Mozilla Thunderbird"
                    className="h-full w-full translate-y-1 scale-[1.5] object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-4 list-none pl-0 text-center text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                    <li>Windows</li>
                    <li>Linux / Window</li>
                    <li>
                      Placeholder text goes here. Replace this copy with the
                      final content.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-[460px] flex-col">
              <h3 className="mb-3 text-center text-[20px] font-bold uppercase tracking-[0.14em] text-ink">
                Appliance
              </h3>
              <div className="flex flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={digitalDomainImg}
                    alt="Cloud and server email hosting"
                    className="h-full w-full scale-[1.42] object-contain"
                  />
                </div>
                {/* Content split into two columns beneath the image — Cloud
                    (left, under the cloud icon) and On-Site Server (right,
                    under the server rack icon) */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-7 pb-10 text-center text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                  <div className="space-y-4">
                    <p>
                      Microsoft Email
                      <br />
                      Exchange 365
                      <br />
                      Office 365
                      <br />
                      Outlook 365
                    </p>
                    <p>
                      Google Workspace
                      <br />
                      Business Email Solution
                    </p>
                    <p>
                      Appliance forms:
                      <br />
                      Linux Kubernetes Docker
                    </p>
                    <p>
                      Hosted on: AWS, VMware, Azure,
                      <br />
                      or any server with Open Port 25.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p>
                      Linux
                      <br />
                      Postfix
                    </p>
                    <p>
                      Microsoft
                      <br />
                      Exchange
                    </p>
                  </div>
                </div>
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
          backgroundSize: "140%",
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

          <div className="flex flex-col items-center">
            <h2 className="mb-1 text-center text-[18px] text-ink sm:text-[21px]">
              <BrandInline trail="Counter" /> protect your Recipients.
            </h2>
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
          <div className="flex flex-wrap justify-center gap-4 sm:flex-nowrap sm:gap-6">
            <div className="h-[130px] w-[130px] shrink-0 overflow-hidden rounded-xl border-2 border-black sm:h-[180px] sm:w-[180px] lg:h-[240px] lg:w-[240px]">
              <img
                src="/assets/images/domain image for homepage.png"
                alt="City skyline representing corporate domain protection"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
            <div className="flex h-[130px] w-auto shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-black bg-white sm:h-[180px] lg:h-[240px]">
              <img
                src={emailInboxImg}
                alt="PhishFlagger inbox showing numbered emails"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              Protect your Company
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px] lg:mx-0">
              Firewall your important communication with your company
              network, including your customers and suppliers. Stop fraud.
            </p>
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
        <SectionCounter value="^0005" />
        <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-[420px] rounded-2xl border-2 border-black bg-white p-6 sm:p-8">
            <h3 className="text-[16px] font-bold text-ink sm:text-[18px]">
              What you will receive.
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-[1.65] text-ink sm:text-[15px]">
              <li>Terms of Service</li>
              <li>Access Key</li>
              <li>Appliance or Plug-In Install</li>
              <li>Install Instructions</li>
            </ul>
          </div>
          <div className="text-center">
            <h2 className="text-[24px] font-bold leading-tight tracking-tight text-ink sm:text-[30px]">
              Pricing
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
              As low as $10.00 per Year / per Email
            </p>
            <Link
              to="/join-corporate"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-[#4a4a4a] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#2f2f2f] duration-200 hover:scale-[1.2]"
            >
              Join
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
