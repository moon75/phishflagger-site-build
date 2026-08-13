import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

const SUPPORTERS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    number: "#0001",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahMitchell&backgroundColor=b6e3f4",
    quote:
      "How come it took so long? The world needed this yesterday. I've been waiting for something like PhishFlagger my entire career in banking.",
  },
  {
    id: 2,
    name: "James Thornton",
    number: "#0002",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=JamesThornton&backgroundColor=c0aede",
    quote:
      "Finally a real solution to email fraud. PhishFlagger is a game changer — simple, human-compatible, and long overdue.",
  },
  {
    id: 3,
    name: "Linda Okafor",
    number: "#0003",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=LindaOkafor&backgroundColor=ffd5dc",
    quote:
      "I was scammed twice before I found PhishFlagger. I wish this existed sooner. Proud to be Supporter #0003.",
  },
];

export default function HallOfFame() {
  return (
    <>
      <CloseButton to="/about/kickstarter" />

      <section className="w-full bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-[920px] text-center">
          <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
            <Link to="/" className="inline-block hover:opacity-80">
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>
            </Link>
          </div>
          <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
            Protecting Communications
          </p>

          <h1 className="mt-10 text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
            Hall of Fame
          </h1>

          <p className="mx-auto mt-6 max-w-[640px] text-[16px] leading-relaxed text-ink-muted sm:text-[18px]">
            Our earliest Kickstarter supporters who believed in{" "}
            <em className="italic">
              <span className="font-extrabold text-ink">Phish</span>
              <span className="font-normal text-brand">Flagger</span>
            </em>{" "}
            from day one. Thank you.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
            <Link
              to="/about/video1?video=thank-you"
              className="rounded-full border border-gray-300 px-4 py-2 text-[13px] font-medium text-ink-muted transition-colors hover:bg-gray-100 hover:text-ink sm:text-[14px]"
            >
              Thank You Video
            </Link>
            <Link
              to="/about/video1?video=kickstarter"
              className="rounded-full border border-gray-300 px-4 py-2 text-[13px] font-medium text-ink-muted transition-colors hover:bg-gray-100 hover:text-ink sm:text-[14px]"
            >
              Kickstarter Videos
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#eef0f4] px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-[980px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SUPPORTERS.map((s, i) => (
              <SupporterCard key={s.id} {...s} index={i + 1} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/about/kickstarter"
              className="text-[15px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[16px]"
            >
              Help stop phishing — support our Kickstarter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SupporterCard({ name, number, img, quote, index }) {
  return (
    <div className="relative flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
      {/* Sign-in number */}
      <span className="absolute left-5 top-4 text-[52px] font-extrabold leading-none text-black">
        {index}
      </span>
      <img
        src={img}
        alt={name}
        className="relative h-24 w-24 rounded-full object-cover ring-4 ring-[#eef0f4]"
      />
      <h2 className="mt-4 text-[18px] font-semibold text-ink">{name}</h2>
      <span className="mt-1 inline-block rounded-full bg-brand px-3 py-0.5 text-[12px] font-bold text-white tracking-wide">
        Kickstarter Supporter {number}
      </span>
      <p className="mt-4 text-[14px] leading-[1.7] text-ink-muted">
        &ldquo;{brandify(quote)}&rdquo;
      </p>
    </div>
  );
}
