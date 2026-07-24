import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

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
        <div className="mx-auto max-w-content">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-[40px] font-semibold leading-tight tracking-tight text-ink sm:text-[56px]">
              Press
            </h1>
          </div>

          {/* Press mentions */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
            {PRESS_ITEMS.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-xl border border-gray-200 transition-colors hover:border-gray-300"
              >
                <div className="flex h-36 items-center justify-center bg-[#f4f5f8]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-10 w-10 text-gray-400"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 5.5A1.5 1.5 0 0 1 5.5 4H15v4h4.5A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 4 18.5v-13Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 4l4.5 4.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 9.5h4M7 12.5h9M7 15.5h9" />
                  </svg>
                </div>
                <div className="px-5 py-5 sm:px-6">
                  <p className="text-[15px] font-medium leading-snug text-ink sm:text-[16px]">
                    {brandify(item.title)}
                  </p>
                  <span className="mt-2 inline-block text-[13px] font-semibold text-[#2a6df4] underline underline-offset-4 sm:text-[14px]">
                    Link
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
