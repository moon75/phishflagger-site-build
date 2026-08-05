import CloseButton from "../components/ui/CloseButton.jsx";
import cloudImg from "../assets/images/domain-cloud-only.png";
import serverImg from "../assets/images/domain-server-only.png";

export default function DigitalIno() {
  return (
    <>
      <CloseButton to="/join/email-marketing" />

      <section className="w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Digital Verification
          </h1>

          <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-16">
            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[#EEF0F4] px-4 py-5">
                <img
                  src={cloudImg}
                  alt="Cloud email service"
                  className="h-auto w-full max-w-[210px] object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                  Cloud
                </h3>
                <div className="space-y-4 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
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
            </div>

            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="flex h-[200px] items-center justify-center overflow-hidden bg-[#EEF0F4] px-4 py-5">
                <img
                  src={serverImg}
                  alt="On-site email server appliance"
                  className="h-auto w-full max-w-[170px] object-contain"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                  On-Site Server
                </h3>
                <div className="space-y-4 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
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
      </section>
    </>
  );
}
