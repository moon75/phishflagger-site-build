import CloseButton from "../../../components/ui/CloseButton.jsx";

// Shared layout for the three individual numbering-history detail pages
// (Books / Documents / Communications). Each one shows its full card image
// full-page, with the close (X) always returning to Home.
export default function HistoryDetailPage({ title, img, imgAlt }) {
  return (
    <>
      <CloseButton force />

      <section
        className="relative w-full bg-[#eef0f4] bg-cover bg-center px-4 py-14 sm:px-6 sm:py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(238,240,244,0.94), rgba(238,240,244,0.94)), url('/assets/images/domain%20image%20for%20homepage.png')",
          backgroundSize: "140%",
        }}
      >
        <div className="mx-auto max-w-[920px] text-center">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            {title}
          </h1>

          <div className="mx-auto mt-10 flex max-w-[420px] flex-col items-center rounded-2xl border-2 border-black bg-white p-0.5 text-center">
            <img
              src={img}
              alt={imgAlt}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
