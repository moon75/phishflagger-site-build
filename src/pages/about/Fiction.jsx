import { useState } from "react";
import CloseButton from "../../components/ui/CloseButton.jsx";
import page1 from "../../assets/images/fiction/Newspaper Page 1.jpg";
import page2 from "../../assets/images/fiction/Newspaper Page 2.jpg";
import page3 from "../../assets/images/fiction/Newspaper Page 3.jpg";
import page4 from "../../assets/images/fiction/Newspaper Page 4.jpg";

const PAGES = [page1, page2, page3, page4];

function downloadFile(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Fiction() {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((i) => (i - 1 + PAGES.length) % PAGES.length);
  const goNext = () => setIndex((i) => (i + 1) % PAGES.length);

  const downloadPage = (i) =>
    downloadFile(PAGES[i], `PhishFlagger-Newspaper-Page-${i + 1}.jpg`);

  const downloadAll = () => PAGES.forEach((_, i) => downloadPage(i));

  return (
    <div className="relative min-h-screen w-full bg-[#1f1f22] text-white">
      <CloseButton />

      {/* Header */}
      <div className="w-full bg-white px-4 pt-10 pb-8 text-center sm:px-6">
        <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[52px]">
          Fiction
        </h1>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between px-4 py-10 sm:px-8 sm:py-14">
        {/* Viewer */}
        <div className="relative flex w-full flex-1 items-center justify-center">
          {/* Prev */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous page"
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#3a3a3d] text-white shadow-md transition hover:bg-[#555558] sm:left-6 sm:h-14 sm:w-14"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          {/* Page image */}
          <img
            src={PAGES[index]}
            alt={`Newspaper page ${index + 1}`}
            className="max-h-[80vh] w-auto max-w-full rounded-md bg-white object-contain shadow-2xl"
          />

          {/* Next */}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next page"
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#3a3a3d] text-white shadow-md transition hover:bg-[#555558] sm:right-6 sm:h-14 sm:w-14"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          <button
            type="button"
            onClick={downloadAll}
            className="cursor-pointer rounded-full bg-[#5a6066] px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#6e7479] sm:text-[15px]"
          >
            Download all
          </button>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[14px] font-medium text-white sm:text-[15px]">
              Download Page:
            </span>
            {PAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => downloadPage(i)}
                aria-label={`Download page ${i + 1}`}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#5a6066] text-[14px] font-semibold text-white transition hover:bg-[#6e7479] sm:h-11 sm:w-11"
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
