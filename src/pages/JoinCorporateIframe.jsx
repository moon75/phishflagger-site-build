import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_CORPORATE_URL = "https://join.phishflagger.com/business/";
const logoMarkImg = "/assets/images/logo-mark.png";

export default function JoinCorporateIframe() {
  return (
    <>
      <CloseButton />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-3 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-content">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 sm:mb-8 sm:gap-4">
            <img
              src={logoMarkImg}
              alt="PhishFlagger envelope and flag mark"
              className="h-[28px] w-auto shrink-0 object-contain pic-with-no-link-mouse-over-increase sm:h-[42px]"
            />
            <h1 className="text-center text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              Join Pro
            </h1>
          </div>
          <div className="mx-auto max-h-[112.5vh] w-full max-w-[650px] overflow-y-auto overscroll-contain rounded-2xl border-2 border-black bg-white [-webkit-overflow-scrolling:touch]">
            <iframe
              src={JOIN_CORPORATE_URL}
              title="Join PhishFlagger Corporate"
              className="block h-[2400px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
