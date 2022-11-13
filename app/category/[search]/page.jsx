import Link from "next/link";
import React from "react";
import Card from "../../components/Card";

const getProducts = async () => {
  const products = await fetch(
    "https://www.screentechnicals.com/api/ecommerce/products",
    { next: { revalidate: 10 } }
  );
  return products.json();
};
const Page = async ({ params }) => {
  const { search } = params;
  const products = await getProducts();

  return (
    <div className="w-full flex justify-center items-center flex-wrap">
      {products.map((item) => {
        if (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <Link key={item.id} href={`/products/${item.id}`}>
              <Card name={item.name} price={item.price} image={item.image} />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Page;
