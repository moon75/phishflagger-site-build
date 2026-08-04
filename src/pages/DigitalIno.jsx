import CloseButton from "../components/ui/CloseButton.jsx";
import cloudServerImg from "../assets/images/digital-domain-diagram-v5-wide.png";

export default function DigitalIno() {
  return (
    <>
      <CloseButton to="/join/email-marketing" />

      <section className="w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Digital Verification
          </h1>

          <div className="mx-auto mt-14 grid max-w-[900px] grid-cols-1 gap-14 sm:mt-20 sm:grid-cols-2 sm:gap-16">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h2 className="text-[22px] font-semibold leading-tight tracking-tight text-ink sm:text-[26px]">
                Cloud
              </h2>

              <img
                src={cloudServerImg}
                alt="Cloud connected to a server appliance"
                className="mt-6 h-auto w-full max-w-[280px] object-contain"
              />

              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink sm:text-[16px]">
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
                  Hosted on: AWS, VMware, Azure,
                  <br />
                  or any server with Open Port 25.
                </p>

                <p>
                  Appliance forms:
                  <br />
                  Linux Kubernetes Docker
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <h2 className="text-[22px] font-semibold leading-tight tracking-tight text-ink sm:text-[26px]">
                On-Site Server
              </h2>

              <img
                src={cloudServerImg}
                alt="Cloud connected to a server appliance"
                className="mt-6 h-auto w-full max-w-[280px] object-contain"
              />

              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink sm:text-[16px]">
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
      </section>
    </>
  );
}
