import Image from "next/image";
import { BsLaptopFill, BsSmartwatch } from "react-icons/bs";
import { GiSofa, GiWrappedSweet } from "react-icons/gi";
import { AiOutlineMobile } from "react-icons/ai";
import {
  FaTshirt,
  FaBicycle,
  FaHeadphonesAlt,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { v4 } from "uuid";
import Link from "next/link";
import Carousel from "./components/Carousel";



const getProducts = async() => {
  const products = await fetch('https://www.screentechnicals.com/api/ecommerce/products', { next: { revalidate: 10 } });
  return products.json();
}

export default async function Page() {
  const products = await getProducts();
  let componets = [
    {
      icon: <BsLaptopFill key={v4()} />,
      category: "laptop",
    },
    {
      icon: <GiSofa key={v4()} />,
      category: "sofa",
    },
    {
      icon: <AiOutlineMobile key={v4()} />,
      category: "phone",
    },
    {
      icon: <FaTshirt key={v4()} />,
      category: "tshirt",
    },
    {
      icon: <FaBicycle key={v4()} />,
      category: "cycle",
    },
    {
      icon: <FaHeadphonesAlt key={v4()} />,
      category: "",
    },
    {
      icon: <BsSmartwatch key={v4()} />,
      category: "watch",
    },
    {
      icon: <GiWrappedSweet key={v4()} />,
      category: "sweet",
    },
    {
      icon: <IoGameController key={v4()} />,
      category: "game",
    },
  ];
  

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full lg:h-[40vh] magic-gradient rounded-xl shadow-md flex justify-between items-center overflow-hidden">
        <div className="text-white lg:pl-20 p-5 text-center lg:text-left justify-center w-full">
          <h1 className="uppercase lg:text-6xl text-4xl font-bold">
            free delivery
          </h1>
          <p className="lg:text-xl py-3">
            Don&#39;t miss it out! Only today, get free Next Day Delivery on all
            your orders.
          </p>
          <div>
            <Link href={"/products"}>
            <button className="px-4 py-2 text-lg bg-white text-black rounded-md capitalize">
              browse products
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden w-full items-center justify-center">
          <Image
            src={"/gifs/delivery.gif"}
            alt="gif1"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold pt-7 pb-5">
          Popular Categories ✨
        </h1>
        <div className="w-full flex justify-center items-center flex-wrap">
          {componets.map((item) => {
            return (
              <Link href={`/category/${item.category}`}>
                <button className="text-6xl border shadow-md p-5 rounded-xl hover:scale-90 transition-transform m-3">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-3xl pt-10 pb-5">Hot Deals 🔥</h1>
        <div className="w-full px-10">
          <Carousel products={products} />
        </div>
      </div>
    </div>
  );
}
