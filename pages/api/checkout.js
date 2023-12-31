const stripe = require("stripe")(process.env.stripe_secret);

export default async function handler(req, res) {
  const { uid, cart } = req.body;
  const changedData = cart.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "INR",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: changedData,
    mode: "payment",
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["IN"],
    },
    success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_HOST}/cancel`,
    metadata: {
      userId: uid,
      images: JSON.stringify(cart.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id});
}
