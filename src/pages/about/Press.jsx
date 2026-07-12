import { Link } from "react-router-dom";
import CloseButton from "../../components/ui/CloseButton.jsx";

const PRESS_ITEMS = [
  {
    title:
      'PhishFlagger™ announces a breakthrough in the global fight against Caller ID fraud.',
    url: "https://www.einpresswire.com/article/905767982/phishflagger-announces-a-breakthrough-in-the-global-fight-against-caller-id-fraud",
  },
  {
    title: "PhishFlagger anti-phishing email solution released",
    url: "https://appdevelopermagazine.com/phishflagger-anti-phishing-email-solution-released/",
  },
  {
    title: "Top 10 announcements from Black Hat 2024",
    url: "https://web.archive.org/web/20251005223901/https://thereadable.co/top-10-announcements-black-hat-2024/",
  },
  {
    title:
      "PhishFlagger™ Announces a new anti-phishing solution: a unique email validation technology highlights phishing attacks.",
    url: "https://www.einpresswire.com/article/733555885/phishflagger-announces-a-new-anti-phishing-solution-a-unique-email-validation-technology-highlights-phishing-attack",
  },
];

export default function Press() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-[820px]">
          {/* Header */}
          <div className="text-center">
            <div className="text-[28px] leading-none tracking-tight sm:text-[34px]">
              <Link to="/" className="inline-block hover:opacity-80">
                <em className="italic">
                  <span className="font-extrabold text-ink">Phish</span>
                  <span className="font-normal text-brand">Flagger</span>
                </em>
                <span className="ml-1 align-super text-[14px] font-normal not-italic sm:text-[16px]">
                  ™
                </span>
              </Link>
            </div>
            <p className="mt-3 text-[18px] font-medium text-ink sm:text-[19px]">
              Protecting Communications
            </p>
            <h1 className="mt-10 text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
              Press
            </h1>
          </div>

          {/* Press mentions */}
          <div className="mt-12 divide-y divide-gray-200 rounded-2xl border border-gray-200 sm:mt-16">
            {PRESS_ITEMS.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-5 transition-colors hover:bg-gray-50 sm:px-8 sm:py-6"
              >
                <p className="text-[15px] font-medium leading-snug text-ink sm:text-[17px]">
                  {item.title}
                </p>
                <span className="mt-2 inline-block text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]">
                  Link
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
