import CloseButton from "../components/ui/CloseButton.jsx";

const JOIN_CORPORATE_URL = "https://join.phishflagger.com/membership-form-stripe.php";

export default function JoinCorporateIframe() {
  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-content">
          <div className="h-[80vh] min-h-[420px] w-full overflow-hidden rounded-2xl border-2 border-black sm:min-h-[600px]">
            <iframe
              src={JOIN_CORPORATE_URL}
              title="Join PhishFlagger Corporate"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
