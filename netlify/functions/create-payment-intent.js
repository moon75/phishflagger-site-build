import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const { amount, currency = "usd", email, description } = await req.json();

    const amountInCents = Math.round(Number(amount) * 100);
    if (!Number.isFinite(amountInCents) || amountInCents <= 0) {
      return new Response(
        JSON.stringify({ error: "Invalid amount" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency,
      receipt_email: email || undefined,
      description: description || "PhishFlagger test purchase",
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

export const config = {
  path: "/api/create-payment-intent",
};
