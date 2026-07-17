import CloseButton from "../components/ui/CloseButton.jsx";

export default function Demo() {
  return (
    <>
      <div className="mt-10 sm:mt-14">
        <CloseButton />
      </div>

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[960px] px-6 text-center sm:px-12">
          <h1 className="text-[40px] font-semibold leading-none tracking-tight text-ink sm:text-[52px] lg:text-[64px]">
            Request Email Demo
          </h1>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:Info@PhishFlagger.com?subject=001%20-%20PhishFlagger%20Demo&body=Hi%20PhishFlagger%20team%2C%0A%0AI%27d%20like%20to%20try%20the%20demo."
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#2a6df4] px-8 py-3.5 text-[15px] font-bold text-white shadow-sm transition-colors hover:bg-[#1a52c9] sm:px-10 sm:py-4 sm:text-[16px]"
            >
              Click to Email
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-[640px] text-[27px] leading-[1.6] text-ink-muted sm:mt-10 sm:text-[29px]">
            This will open your default email client (Outlook, Apple Mail,
            Gmail, etc.). Subject or Content is not required.
          </p>
        </div>
      </section>
    </>
  );
}
