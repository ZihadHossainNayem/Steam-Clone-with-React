import React from "react";
// Import Swiper React components
import { featured } from "../data/data";
//import components
import FeaturedCard from "./FeaturedCard";
import Slider from "react-slick";

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const sliderContainerStyles = {
    backgroundColor: "#0f1922", // Replace with your desired background color
  };

  return (
    <div className="px-8 py-6 bg-[#1B2838]">
      <div className="max-w-[900px] mx-auto">
        <h1 className=" uppercase text-white pb-4">featured & recommended</h1>
        <div className="featured-shadow" style={sliderContainerStyles}>
          <Slider {...settings}>
            {featured.map((item, key) => (
              <div key={key}>
                <FeaturedCard item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Featured;
