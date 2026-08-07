const JOIN_CORPORATE_URL = "https://join.phishflagger.com/membership-form-stripe.php";

export default function JoinCorporateIframe() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-content">
        <div className="w-full overflow-hidden rounded-2xl border-2 border-black">
          <iframe
            src={JOIN_CORPORATE_URL}
            title="Join PhishFlagger Corporate"
            scrolling="no"
            className="block min-h-[1700px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
