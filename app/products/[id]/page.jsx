import Image from "next/image";
import React from "react";

import Buttons from "../../components/Buttons";

const getProduct = async (id) => {
  const products = await fetch(
    `http://localhost:3000/api/products/${id}`,
    { next: { revalidate: 10 } }
  );
  return products.json();
};
const Page = async ({ params }) => {
  const { id } = params;
  const data = await getProduct(id);
  
  return (
    <div className="w-full flex flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full mb-5">
            <Image src={data?.[0]?.image} alt="" width={500} height={500} priority={true} className="mx-auto" />
        </div>
        <div className="lg:w-[80%] lg:ml-10 w-full">
            <h2 className="text-lg uppercase text-[#ff9900] tracking-widest">{data?.[0]?.brand}</h2>
            <h2 className="text-3xl font-bold">{data?.[0]?.name}</h2>
            <h2 className="text-xl font-semibold">&#8377;{data?.[0]?.price}</h2>
            <h2 className="text-sm tracking-wide">{data?.[0]?.description}</h2>
            <Buttons data={data} />
        </div>
    </div>
  )
};

export default Page;
