import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CloseButton from "../components/ui/CloseButton.jsx";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function TestStripe() {
  const [amount, setAmount] = useState("10.00");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("PhishFlagger test purchase");
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const startCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email, description }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to start checkout");
      setClientSecret(data.clientSecret);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CloseButton />

      <section className="w-full bg-white px-4 pt-12 pb-20 sm:px-6">
        <div className="mx-auto max-w-[520px]">
          <h1 className="text-center text-[32px] font-semibold leading-tight tracking-tight text-ink sm:text-[40px]">
            Test Stripe Checkout
          </h1>
          <p className="mt-3 text-center text-[14px] text-ink-muted">
            Example buy flow. Uses Stripe's hosted card fields — raw card
            numbers never touch this site's frontend or backend code.
          </p>

          {!clientSecret ? (
            <form onSubmit={startCheckout} className="mt-10 space-y-5">
              <Field label="Full Name">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="h-12 w-full rounded-md border border-gray-300 px-4 text-[15px] text-ink focus:border-brand focus:outline-none"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="h-12 w-full rounded-md border border-gray-300 px-4 text-[15px] text-ink focus:border-brand focus:outline-none"
                />
              </Field>

              <Field label="Description">
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="h-12 w-full rounded-md border border-gray-300 px-4 text-[15px] text-ink focus:border-brand focus:outline-none"
                />
              </Field>

              <Field label="Amount (USD)">
                <input
                  type="number"
                  required
                  min="0.50"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-12 w-full rounded-md border border-gray-300 px-4 text-[15px] text-ink focus:border-brand focus:outline-none"
                />
              </Field>

              {error && (
                <p className="text-[14px] text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-md bg-brand text-[15px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Loading…" : "Continue to Payment"}
              </button>
            </form>
          ) : (
            <Elements
              stripe={stripePromise}
              options={{ clientSecret, appearance: { theme: "stripe" } }}
            >
              <CheckoutForm email={email} amount={amount} />
            </Elements>
          )}
        </div>
      </section>
    </>
  );
}

function CheckoutForm({ email, amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/test-stripe`,
        receipt_email: email || undefined,
      },
    });

    if (error) {
      setMessage(error.message);
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      <p className="text-[14px] font-semibold text-ink">
        Charging ${Number(amount).toFixed(2)}
      </p>
      <PaymentElement />
      {message && <p className="text-[14px] text-red-600">{message}</p>}
      <button
        type="submit"
        disabled={!stripe || submitting}
        className="h-12 w-full rounded-md bg-brand text-[15px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Processing…" : "Pay Now"}
      </button>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </span>
      {children}
    </label>
  );
}
