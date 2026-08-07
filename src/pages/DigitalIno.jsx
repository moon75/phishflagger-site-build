import CloseButton from "../components/ui/CloseButton.jsx";
import cloudServerImg from "../assets/images/digital-domain-diagram-v6-no-connector.png";
import topImg from "../assets/images/3rd section left image.avif";

export default function DigitalIno() {
  return (
    <>
      <CloseButton to="/join/email-marketing" />

      <section className="w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            Digital Verification
          </h1>

          <div className="mx-auto mt-10 flex justify-center">
            <img
              src={topImg}
              alt="Digital verification overview"
              className="h-auto w-full max-w-[420px] object-contain"
            />
          </div>

          <p className="mx-auto mt-8 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:text-[16px]">
            PLACEHOLDER-DIGITALINO-1. Replace this copy with the final
            content.
          </p>

          <p className="mx-auto mt-14 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:mt-20 sm:text-[16px]">
            PLACEHOLDER-DIGITALINO-2. Replace this copy with the final
            content.
          </p>

          <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 sm:gap-16">
            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={cloudServerImg}
                  alt="Cloud and server email hosting"
                  className="h-full w-full scale-[1.7] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                  Cloud
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
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
                  </div>

                  <div className="space-y-4">
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
            </div>

            <div className="mx-auto flex w-full max-w-[460px] flex-col overflow-hidden rounded-[28px] border-2 border-black bg-white">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src={cloudServerImg}
                  alt="Cloud and server email hosting"
                  className="h-full w-full scale-[1.7] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7 pb-10">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink">
                  On-Site Server
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-[14px] leading-[1.65] text-ink-muted sm:text-[15px]">
                  <div>
                    <p>
                      Linux
                      <br />
                      Postfix
                    </p>
                  </div>

                  <div>
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

          <p className="mx-auto mt-14 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:mt-20 sm:text-[16px]">
            PLACEHOLDER-DIGITALINO-3. Replace this copy with the final
            content.
          </p>
        </div>
      </section>
    </>
  );
}
