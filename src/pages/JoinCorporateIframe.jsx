import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_CORPORATE_URL = "https://join.phishflagger.com/membership-form-stripe.php";

export default function JoinCorporateIframe() {
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
        <div className="mx-auto max-w-content">
          <h1 className="mb-8 text-center text-[28px] font-bold leading-tight tracking-tight text-ink sm:text-[34px]">
            Join
          </h1>
          <div className="w-full overflow-hidden rounded-2xl border-2 border-black bg-white">
            <iframe
              src={JOIN_CORPORATE_URL}
              title="Join PhishFlagger Corporate"
              scrolling="no"
              className="block min-h-[1700px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
