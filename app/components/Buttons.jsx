"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

const Buttons = ({ data }) => {
  const [user] = useAuthState(auth);
  const addToCart = async () => {
    if (user) {
      const docRef = addDoc(collection(db, "cart"), {
        id: data[0].id,
        name: data[0].name,
        description: data[0].description,
        price: data[0].price,
        image: data[0].image,
        uid: user?.uid,
        createdAt: serverTimestamp(),
      });
    } else {
      alert("Please Sign In!");
    }
  };
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const createCheckout = async () => {
    const stripe = await stripePromise;
    const checkout = await axios.post("/api/checkout", {
      uid: user?.uid,
      cart: data,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkout.data.id,
    });
    if (result.error) {
      console.log(error);
    }
  };
  return (
    <>
      {user ? (
        <div className="flex items-center space-x-3 pt-5">
          <button className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md" onClick={createCheckout}>
            Buy Now
          </button>
          <button
            className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3 pt-5">
          <button className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md" onClick={()=> {alert("Plaese Login!")}}>
            Buy Now
          </button>
          <button
            className="text-white bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md"
            onClick={()=> {alert("Plaese Login!")}}
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Buttons;
