import React, { useState } from "react";
/* import image & icons */
import { AiOutlineSearch } from "react-icons/ai";
/* import components */
import BackgroundVideo from "./BackgroundVideo";
import PopUpMenu from "./PopUpMenu";
/* import data */
import { category, yourStore, newNoteworthy } from "../data/data";

const Hero = () => {
  /* state for your store  pop up */
  const [isYourStoreOpen, setIsYourStoreOpen] = useState(false);
  const handleYourStore = () => {
    setIsYourStoreOpen(!isYourStoreOpen);
  };

  /* state for new and noteworthy */
  const [isNewOpen, setIsNewOpen] = useState(false);
  const handleNew = () => {
    setIsNewOpen(!isNewOpen);
  };

  /* state for category */
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const handleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="bg-[#1B2838]">
      <div className="flex justify-center">
        <div className="lg:absolute lg:z-[100] static hero-gradient lg:mx-8 mx-0 lg:mt-4 mt-0 lg:w-[940px] flex justify-between flex-col lg:flex-row w-full">
          <ul className="flex flex-col lg:flex-row items-start lg:items-center px-4 py-2 text-sm text-white lg:gap-8 gap-4 cursor-pointer">
            <li
              onMouseEnter={handleYourStore}
              onMouseLeave={handleYourStore}
              className="relative"
            >
              <span className="text-shadow">Your Store</span>
              {isYourStoreOpen && <PopUpMenu data={yourStore} />}
            </li>
            <li
              onMouseEnter={handleNew}
              onMouseLeave={handleNew}
              className="relative "
            >
              <span className="text-shadow">New &amp; Noteworthy</span>
              {isNewOpen && <PopUpMenu data={newNoteworthy} />}
            </li>
            <li
              onMouseEnter={handleCategory}
              onMouseLeave={handleCategory}
              className="relative"
            >
              <span className="text-shadow">Categories</span>{" "}
              {isCategoryOpen && <PopUpMenu data={category} />}
            </li>
            <li>
              <span className="text-shadow">News</span>
            </li>
            <li>
              <span className="text-shadow">Points Shop</span>{" "}
            </li>
            <li>
              <span className="text-shadow">Labs</span>
            </li>
          </ul>

          {/* search box */}
          <div className="bg-[#316282] flex items-center justify-between my-1 py-1 lg:mx-1 mx-3 hover:border hover:border-[#66C0F4] rounded-sm shadow-search">
            <input
              type="text"
              placeholder="search"
              className="pl-3 text-white bg-transparent  placeholder:text-[#11212b] focus:placeholder-transparent focus:outline-none"
            />
            <div className="bg-[#55a0cc] p-[3px] mr-1 rounded">
              <AiOutlineSearch size={20} className="text-[#1f3649]" />
            </div>
          </div>
        </div>
      </div>
      <BackgroundVideo />
    </div>
  );
};

export default Hero;
