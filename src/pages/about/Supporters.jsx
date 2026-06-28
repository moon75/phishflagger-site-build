import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import williamImg from "../../assets/images/william.avif";
import shawnImg from "../../assets/images/shawn.avif";
import danImg from "../../assets/images/dan.avif";

const SUPPORTERS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    img: williamImg,
    note: "How come it took so long? The world needed this yesterday. Proud to support PhishFlagger from day one.",
    verified: true,
  },
  {
    id: 2,
    name: "James Thornton",
    img: shawnImg,
    note: "Finally a real solution to email fraud. Simple, human-compatible, and long overdue. I'm all in.",
    verified: true,
  },
  {
    id: 3,
    name: "Linda Okafor",
    img: danImg,
    note: "I was scammed twice before I found PhishFlagger. This technology should be everywhere.",
    verified: false,
  },
];

export default function Supporters() {
  return (
    <>
      <CloseButton />

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
            <span className="ml-1 align-super text-[13px] font-normal not-italic sm:text-[15px]">
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
            People who believe in safer communications for everyone.
          </p>
        </div>
      </section>

      {/* Supporter cards */}
      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORTERS.map((s) => (
              <SupporterCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

function SupporterCard({ name, img, note, verified }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      <img
        src={img}
        alt={name}
        className="h-20 w-20 rounded-full object-cover ring-4 ring-[#eef0f4]"
      />
      <h3 className="mt-4 text-[17px] font-semibold text-ink">{name}</h3>

      {/* Verified badge */}
      <div className="mt-2 flex items-center gap-1.5">
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full text-white text-[11px] font-bold ${
            verified ? "bg-green-500" : "bg-gray-300"
          }`}
        >
          {verified ? "✓" : "✗"}
        </span>
        <span className={`text-[12px] font-medium ${verified ? "text-green-600" : "text-gray-400"}`}>
          {verified ? "Verified" : "Pending"}
        </span>
      </div>

      <p className="mt-4 text-[13px] leading-[1.7] text-ink-muted">
        &ldquo;{note}&rdquo;
      </p>
    </div>
  );
}

