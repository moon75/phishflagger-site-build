import CloseButton from "../../components/ui/CloseButton.jsx";
import { brandify } from "../../components/Brand.jsx";

const PRESS_ITEMS = [
  {
    title:
      'PhishFlagger™ announces a breakthrough in the global fight against Caller ID fraud.',
    url: "https://www.einpresswire.com/article/905767982/phishflagger-announces-a-breakthrough-in-the-global-fight-against-caller-id-fraud",
    image: "/assets/images/granny image.png",
    fit: "cover",
  },
  {
    title: "PhishFlagger anti-phishing email solution released",
    url: "https://appdevelopermagazine.com/phishflagger-anti-phishing-email-solution-released/",
    image:
      "/assets/images/PhishFlagger-anti-phishing-email-solution-released-App-Developer-Magazine_v6prlp8a.webp",
    fit: "cover",
  },
  {
    title: "Top 10 announcements from Black Hat 2024",
    url: "https://web.archive.org/web/20251005223901/https://thereadable.co/top-10-announcements-black-hat-2024/",
    image: "/assets/images/top 100 annouaments form balck hat.png",
    fit: "cover",
  },
  {
    title:
      "PhishFlagger™ Announces a new anti-phishing solution: a unique email validation technology highlights phishing attacks.",
    url: "https://www.einpresswire.com/article/733555885/phishflagger-announces-a-new-anti-phishing-solution-a-unique-email-validation-technology-highlights-phishing-attack",
    image: "/assets/images/PhishFlagger Presswire img.png",
    fit: "contain",
  },
];

export default function Press() {
  return (
    <>
      <CloseButton />

      <section className="relative w-full bg-white px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-[1000px]">
          {/* Header */}
          <div className="text-center">
            <h1 className="page-title">
              Press
            </h1>
          </div>

          {/* Press mentions */}
          <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_ITEMS.map((item) => (
              <div
                key={item.url}
                className="group overflow-hidden rounded-xl ring-1 ring-black/10 transition hover:ring-black/25"
              >
                <div
                  className={`relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[#f4f5f8] ${
                    item.fit === "contain" ? "p-6" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className={`h-full w-full ${
                      item.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
                <div className="bg-white px-3 py-3">
                  <p className="text-[13px] font-semibold text-ink">
                    {brandify(item.title)}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[12px] font-semibold text-[#2a6df4] underline underline-offset-4"
                  >
                    Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
