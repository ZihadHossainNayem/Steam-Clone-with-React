import React from "react";
import discount from "../assets/discount.png";
import bgSpotlight from "../assets/background_spotlight.jpg";

const SpecialOffersCard = ({ item }) => {
  const bgImg = `url(${bgSpotlight})`;
  return (
    <div className="bg-[#1B2838] md:px-1 px-0">
      <div
        className="max-w-[330px] bg-cover bg-no-repeat mx-auto"
        style={{ backgroundImage: bgImg }}
      >
        {/* thumbnail */}
        <div>
          <img src={item.thumbnail} alt="thumbnail" />
        </div>
        {/* text and price */}
        <div className="flex md:flex-col">
          {/* section 1 */}
          <div className="flex md:flex-col justify-start py-4 px-2 md:px-4">
            {/* name offer */}
            <div>
              <h1 className="text-white text-sm md:text-lg">
                {item.offerName}
              </h1>
              <p className="text-[#acdbf5] font-light text-sm py-2">
                {item.endDate}
              </p>
            </div>
          </div>
          {/* section 2 */}
          <div className="flex px-2 md:px-4 pb-4">
            <div className="bg-[#4c6b22] flex items-center my-3 md:my-0">
              <p className="text-[#beee11] md:text-2xl text-lg px-1 font-semibold">
                {item.discount}
              </p>
            </div>
            <div className="bg-[#162f41] flex flex-col items-center justify-center my-3 md:my-0">
              <p className="text-[#596f7d] md:text-[13px] text-[11px] px-2 flex justify-end -mb-1 relative">
                {item.prevPrice}
                <div className="absolute w-12 md:top-1 md:right-1 top:0 right-0">
                  <img src={discount} alt="discount" />
                </div>
              </p>
              <p className="text-[#beee11] font-light md:text-[15px] text-[14px] px-2 flex">
                {item.currPrice}
                <span className="hidden md:flex ml-1">USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffersCard;
