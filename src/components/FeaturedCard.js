import React from "react";
import { IoGridSharp } from "react-icons/io5";

const FeaturedCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" bg-[#0f1922] text-white flex flex-col md:flex-row"
    >
      {/* left grid - main thumbnail*/}
      <div>
        <img
          src={item.thumbnail}
          alt="thumbnail"
          className="w-[616px] h-[220px] md:h-[353px] object-cover pl-[2px]"
        />
      </div>
      {/* right grid - images , title and price */}
      <div className="flex flex-col px-2">
        {/* name */}
        <h1 className="text-2xl pt-2 md:pt-4 pb-2 md:pb-6">{item.name}</h1>
        {/* images */}
        <div className="hidden md:grid grid-cols-2 gap-2">
          <img
            src={item.img1}
            alt="img"
            className="w-[162px] h-[85px] object-cover "
          />
          <img
            src={item.img2}
            alt="img"
            className="w-[162px] h-[85px] object-cover"
          />
          <img
            src={item.img3}
            alt="img"
            className="w-[162px] h-[85px] object-cover"
          />
          <img
            src={item.img4}
            alt="img"
            className="w-[162px] h-[85px] object-cover"
          />
        </div>
        <div className="hidden md:block">
          <h3 className="text-lg py-1">Now Available</h3>
          <div className="bg-[#394148] w-[75px] flex justify-center text-sm">
            Top Seller
          </div>
        </div>
        {/* price and icon */}
        <div className="pt-0 md:pt-6 pb-2 flex justify-between">
          <p className="text-sm">{item.price}</p>
          <IoGridSharp />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
