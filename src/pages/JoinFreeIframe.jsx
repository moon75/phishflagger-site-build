import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_FREE_URL = "https://join.phishflagger.com/individual/";

export default function JoinFreeIframe() {
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
            Join Free
          </h1>
          <div className="w-full overflow-hidden rounded-2xl border-2 border-black bg-white">
            <iframe
              src={JOIN_FREE_URL}
              title="Join PhishFlagger"
              scrolling="no"
              className="block min-h-[2400px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
