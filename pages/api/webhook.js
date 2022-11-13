import Stripe from "stripe";
import { buffer } from "micro";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const stripe = new Stripe(process.env.stripe_secret);

export const config = {
  api: {
    bodyParser: false,
  },
};

const createOrder = async (data) => {
  const docRef = await addDoc(collection(db, "orders"), {
    uid: data.metadata.userId,
    paymentId: data.id,
    amount: data.amount_total / 100,
    images: data.metadata.images,
    createdAt: serverTimestamp(),
  });
};
export default async function handler(req, res) {
  if (req.method === "POST") {
    let event;
    try {
      const rawBody = await buffer(req);
      const signature = req.headers["stripe-signature"];
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.stripe_webkook_secret
      );
      console.log("✅ Success!");
    } catch (error) {
      console.log("❌ Error" + error.message);
      res.status(400).send("Webhook error: " + error.message);
    }

    if (event.type === "checkout.session.completed") {
      const data = event.data.object;
      createOrder(data);
      console.log("💰 Payment successful : " + data);
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }
}
