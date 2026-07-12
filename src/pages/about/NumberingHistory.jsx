import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import history1Img from "../../assets/images/7 1st.avif";
import history2Img from "../../assets/images/7  2nd.avif";
import history3Img from "../../assets/images/7 3rd.avif";

export default function NumberingHistory() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-4 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-[920px] text-center">
          <Link
            to="/"
            aria-label="PhishFlagger home"
            className="inline-block text-[28px] leading-none tracking-tight transition-opacity hover:opacity-80 sm:text-[34px]"
          >
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>
            <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
              &trade;
            </span>
          </Link>
          <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
            Protecting Communications
          </p>
          <h1 className="mt-10 text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            Numbering History
          </h1>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <p className="mx-auto max-w-[820px] text-center text-[16px] leading-[1.5] text-ink sm:text-[20px] sm:leading-[1.45]">
            Numbering has been revolutionary in creating identifiable order to
            records and documents, thereby reducing fraud.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 md:grid-cols-3">
            <HistoryCard
              year="1470"
              topic="Pagination"
              patent="Printing Press 1440"
              attribution="Johannes Gutenberg"
              heading="Numbering Book Pages"
              img={history1Img}
              imgAlt="Numbered book pages"
            />
            <HistoryCard
              year="1892"
              topic="Consecutive Stamp"
              patent="US Patent 484391A"
              attribution="Edwin G. Bates"
              heading="Numbering Machine"
              img={history2Img}
              imgAlt="Mechanical numbering stamp"
            />
            <HistoryCard
              year="2026"
              topic="Phishing Protection"
              patent="US Patent 11,601,449 B2"
              attribution="William Pearce"
              heading="Numbering Communications"
              img={history3Img}
              imgAlt="PhishFlagger email numbering"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function HistoryCard({ year, topic, patent, attribution, heading, img, imgAlt }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-[28px] font-bold leading-none text-ink sm:text-[34px]">
        {year}
      </div>
      <div className="mt-1 text-[12px] font-medium text-ink-muted sm:text-[13px]">
        {topic}
      </div>
      <div className="text-[12px] text-ink-muted sm:text-[13px]">{patent}</div>
      <div className="mt-2 rounded-full bg-[#2a6df4] px-3 py-1 text-[11px] font-semibold text-white sm:text-[12px]">
        {attribution}
      </div>
      <div className="mt-3 text-[16px] font-semibold text-ink sm:mt-4 sm:text-[18px]">
        {heading}
      </div>
      <img
        src={img}
        alt={imgAlt}
        className="mt-3 h-auto w-full max-w-[240px] object-contain sm:mt-4 sm:max-w-[280px]"
      />
    </div>
  );
}
