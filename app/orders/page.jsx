"use client";

import { collection, orderBy, query } from "firebase/firestore";
import React from "react";
import { auth, db } from "../../firebase";
import OrderCard from "../components/OrderCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { ImSpinner2 } from "react-icons/im";

const Page = () => {
  const [user] = useAuthState(auth);
  const ordersRef = collection(db, "orders");
  const ordersQuery = query(ordersRef, orderBy("createdAt", "desc"));
  const [orderSnapshots, loading] = useCollection(ordersQuery);
  const orders = orderSnapshots?.docs?.filter(
    (order) => order?.data()?.uid === user?.uid
  );

  return (
    <div className="w-full h-[80vh] bg-white border shadow-sm rounded-xl p-5">
      <h1 className="text-center text-3xl font-bold py-5">
        Showing All Your Orders
      </h1>
      <div className="w-full space-y-4">
        {!loading ? (
          user ? (
            orders?.map((order) => {
              return <OrderCard key={order.id} order={order} />;
            })
          ) : (
            <h1 className="text-center text-2xl font-bold">
              Please Login To See Your Cart
            </h1>
          )
        ) : (
          <div className="w-full h-[63vh] flex justify-center items-center">
            <ImSpinner2 className="text-6xl text-[#ff9900] animate-spin inline" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
