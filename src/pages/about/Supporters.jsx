import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

const PRESS_AWARDS = [
  {
    id: 1,
    place: "1st Place",
    name: "Dain Oh",
    date: "August 10, 2024",
    img: "/assets/images/supporters/Dain_Oh.webp",
    description:
      'Our Top Recognition for the FIRST to write about PhishFlagger is awarded to Dain Oh. She was the very first editor to recognize and write about our solution.',
    articleUrl:
      "https://web.archive.org/web/20251005223901/https://thereadable.co/top-10-announcements-black-hat-2024/",
    articleLabel: "Read the article",
  },
  {
    id: 2,
    place: "2nd Place",
    name: "Austin Harris",
    date: "August 19, 2024",
    img: "/assets/images/supporters/Austin%20Harris.jpg",
    description:
      "The SECOND to write about PhishFlagger is awarded to Austin Harris. He was the second editor to recognize and write about our solution.",
    articleUrl:
      "https://appdevelopermagazine.com/phishflagger-anti-phishing-email-solution-released/",
    articleLabel: "Read the article",
  },
  {
    id: 3,
    place: "3rd Place",
    name: "J.D. Houvener",
    date: "2025",
    img: "/assets/images/supporters/jd%20houvener.jpg",
    description:
      "In 2025, J.D. Houvener reached out to Mr. Pearce, recognizing his patent.",
    pickUrl: "https://www.youtube.com/c/Boldip",
    pickLabel: "JD's Channel",
  },
];

export default function Supporters() {
  return (
    <>
      <CloseButton to="/help/telecom-endorse-us" />

      {/* Header */}
      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
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
              ™
            </span>
          </Link>
          <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
            Protecting Communications
          </p>
          <h1 className="mt-10 text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            Supporters
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[15px] leading-relaxed text-ink-muted sm:text-[17px]">
            Honoring the journalists and reviewers who first recognized{" "}
            {brandify("PhishFlagger")}.
          </p>
        </div>
      </section>

      {/* Press recognition awards */}
      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_AWARDS.map((a) => (
              <PressAwardCard key={a.id} {...a} />
            ))}
          </div>
        </div>
      </section>

      {/* Endorse Us CTA */}
      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto flex max-w-[980px] justify-center">
          <Link
            to="/help/endorse-us"
            className="inline-flex h-[49px] items-center justify-center rounded-[7px] bg-[#585858] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#3f3f3f]"
          >
            Endorse Us
          </Link>
        </div>
      </section>

    </>
  );
}

function PressAwardCard({
  place,
  name,
  date,
  img,
  description,
  articleUrl,
  articleLabel,
  pickUrl,
  pickLabel,
}) {
  return (
    <div className="flex h-full flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <span className="rounded-full bg-brand px-3 py-0.5 text-[12px] font-bold text-white tracking-wide">
        {place}
      </span>
      <img
        src={img}
        alt={name}
        className="mt-4 h-20 w-20 rounded-full object-cover object-top ring-4 ring-[#eef0f4]"
      />
      <h3 className="mt-4 text-[17px] font-semibold text-ink">{name}</h3>
      <p className="mt-1 text-[12px] font-medium text-ink-muted">{date}</p>

      <p className="mt-4 text-[13px] leading-[1.7] text-ink-muted">
        {brandify(description)}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-center gap-3 pt-5">
        {articleUrl && (
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand px-4 py-1.5 text-[13px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {articleLabel}
          </a>
        )}
        {pickUrl && (
          <a
            href={pickUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-4 py-1.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            {pickLabel}
          </a>
        )}
      </div>
    </div>
  );
}

