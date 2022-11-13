"use client";

import React from "react";
import Slider from "react-slick";
import {
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import Card from "./Card";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      onClick={onClick}
      className="slick-arrow absolute p-0 top-[30%] -right-12 cursor-pointer md:text-xl"
      style={{ ...style, display: "block", color: "black" }}
    >
      <FaAngleRight />
    </span>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      onClick={onClick}
      className="slick-arrow absolute p-0 top-[30%] w-[500px] h-[800px] z-[999] -left-12 cursor-pointer md:text-xl"
      style={{ ...style, display: "block", color: "black" }}
    >
      <FaAngleLeft />
    </span>
  );
}
const Carousel = ({products}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-3">
      <Slider {...settings}>
        {
          products.map((item)=>{
            return (
              <Card key={item.id} name={item.name} price={item.price} image={item.image}/>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default Carousel;
