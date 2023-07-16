import React from "react";
import SpecialOffersCard from "./SpecialOffersCard";
import { spOffers } from "../data/data";
import Slider from "react-slick";

const SpecialOffers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  const sliderContainerStyles = {
    backgroundColor: "#0f1922", // Replace with your desired background color
  };
  return (
    <div className="px-8 py-6 bg-[#1B2838] ">
      <div className="max-w-[900px] mx-auto">
        <h1 className=" uppercase text-white pb-4">special offers</h1>
        <div className="featured-shadow " style={sliderContainerStyles}>
          <Slider {...settings}>
            {spOffers.map((item, key) => (
              <div key={key}>
                <SpecialOffersCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
