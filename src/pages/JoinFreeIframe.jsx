const JOIN_FREE_URL = "https://join.phishflagger.com/individual/";

export default function JoinFreeIframe() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-content">
        <div className="w-full overflow-hidden rounded-2xl border-2 border-black">
          <iframe
            src={JOIN_FREE_URL}
            title="Join PhishFlagger"
            scrolling="no"
            className="block min-h-[2400px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
