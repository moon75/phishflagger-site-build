import CloseButton from "../components/ui/CloseButton.jsx";

export default function WhitePaper() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20">
        <div className="mx-auto max-w-content">
          <h1 className="text-center text-[34px] font-semibold leading-tight tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
            White Paper
          </h1>

          <p className="mx-auto mt-8 max-w-[640px] text-center text-[15px] leading-relaxed text-ink sm:text-[16px]">
            PLACEHOLDER-WHITEPAPER. Replace this copy with the final content.
          </p>
        </div>
      </section>
    </>
  );
}
