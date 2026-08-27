import CloseButton from "../../components/ui/CloseButton.jsx";
import newsCardImg from "../../assets/images/phishing-news-card.png";

const NEWS_ITEMS = [
  {
    title:
      "Q1 Goals to Cops in Security: The Rise of AI-Powered Phishing",
    image: newsCardImg,
    url: "https://securityboulevard.com/2025/04/q1-goals-to-gaps-in-security-the-rise-of-hr-themed-phishing/",
  },
  {
    title:
      "New PoisonSeed Attacking CRM & Bulk Email Providers in Supply Chain Phishing Attack",
    image: "/assets/images/news/poisonseed-crm-bulk-email-phishing.jpg",
    url: "https://cybersecuritynews.com/new-poisonseed-attacking-crm-bulk-email-providers/",
  },
  {
    title:
      "Hackers Abuse Cloudflare Services for Sophisticated Phishing Attacks",
    image: "/assets/images/news/cloudflare-services-phishing-attacks.jpg",
    url: "https://cybersecuritynews.com/hackers-abuse-cloudflare-services/",
  },
  {
    title:
      "Phishing platform 'Lucid' behind wave of iOS, Android SMS attacks",
    image: "/assets/images/news/phishing-hook.jpg",
    url: "https://www.bleepingcomputer.com/news/security/phishing-platform-lucid-behind-wave-of-ios-android-sms-attacks/",
  },
  {
    title: "Top 10 announcements from Black Hat 2024",
    image: "/assets/images/news/vegas.avif",
    url: "https://s2w.inc/en/news/detail/949",
  },
  {
    title:
      "Phishing emails aren't as obvious anymore. Here's how to spot them",
    image: "/assets/images/news/gettyimages-496819483.webp",
    url: "https://www.cnet.com/tech/services-and-software/phishing-emails-arent-as-obvious-anymore-heres-how-to-spot-them/",
  },
  {
    title: "OPP warning Ontarians to be aware of 'smishing' fraud",
    image:
      "/assets/images/news/opp-warning-ontarians-to-be-aware-smishing-fraud.avif",
    url: "https://www.quintenews.com/2025/03/31/opp-warning-ontarians-to-be-aware-smishing-fraud/",
  },
  {
    title: "New Data Shows Impact of AI-Powered Phishing on Businesses",
    image:
      "/assets/images/news/State-of-Credential-Security_Blog-1_Header_628x4002X.webp",
    url: "https://www.dashlane.com/blog/new-data-aipowered-phishing",
  },
  {
    title:
      "Weekly Recap: Chrome 0-Day, IngressNightmare, Solar Bugs, DNS Tactics, and More",
    image: "/assets/images/news/recap.jpg",
    url: "https://thehackernews.com/2025/03/weekly-recap-chrome-0-day.html?m=1",
  },
];

export default function News() {
  return (
    <>
      <CloseButton />
      <section className="relative bg-white px-4 pb-16 pt-10 text-ink sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-[1040px]">
          <form className="mx-auto mt-12 max-w-[640px] rounded-[6px] bg-[#f5f8fa] px-6 py-5 text-center sm:px-8">
            <h2 className="text-[22px] font-semibold leading-tight text-[#435154] sm:text-[26px]">
              Subscribe to{" "}
              <em className="italic">
                <span className="font-extrabold text-ink">Phish</span>
                <span className="font-normal text-brand">Flagger</span>
              </em>{" "}
              News
            </h2>
            <p className="mx-auto mt-3 max-w-[480px] text-[11px] leading-[1.6] text-[#4f5c60]">
              Tip: To ensure our News mail never go in your junk folder
              <br />
              we recommend you add a new contact as no-reply@phishflaggernews.com
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="hello@example.com"
                className="h-[44px] min-w-0 flex-1 rounded-[5px] bg-white px-4 text-[14px] text-ink placeholder:text-[#b6b6b6] focus:outline-none focus:ring-2 focus:ring-[#cdd4d7]"
              />
              <button
                type="submit"
                className="h-[44px] rounded-[5px] bg-[#565656] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#3f3f3f] hover:text-btn-hover-red"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-center text-[12px] text-[#8a9296]">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </form>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {NEWS_ITEMS.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[8px] border border-[#dedede] bg-white shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex min-h-[330px] w-full flex-col">
                  <div className="h-[185px] w-full overflow-hidden bg-[#f4f5f7]">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                    <h2 className="text-[16px] font-bold leading-snug text-[#303030]">
                      {item.title}
                    </h2>
                    <a
                      href={item.url || "#"}
                      target={item.url ? "_blank" : undefined}
                      rel={item.url ? "noopener noreferrer" : undefined}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-[12px] font-bold uppercase tracking-wide text-[#303030] hover:text-brand"
                    >
                      View News
                      <span aria-hidden>›</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
