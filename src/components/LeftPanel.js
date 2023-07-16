import React from "react";
import steamCard from "../assets/steamCard.png";

const LeftPanel = () => {
  return (
    <div className="bg-[#1B2838] w-[200px] z-[200] hidden cus2:flex cus2:flex-col gap-6 absolute top-16 cus2:left-20 cus1:left-24 cus3:left-36 cus4:left-40 cus5:left-48 cus6:left-60 transition-left duration-300 ease-in-out">
      {/* 1st block - steam card */}
      <div>
        <a href="/">
          <img src={steamCard} alt="steamCard" className="w-[180px]" />
          <h1 className="pt-2 text-[#64b8e9] hover:text-white font-semibold">
            STEAM GIFT CARD
          </h1>
          <p className="text-[#9cb3c4] hover:text-white text-sm">
            Give the Girt of Game
          </p>
        </a>
      </div>

      {/* 2nd block - recently viewed */}
      <div>
        <h1 className="uppercase text-[#536f86] font-semibold pb-1">
          recently viewed
        </h1>
        <ul className="text-xs space-y-1">
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Apex Legends</a>
          </li>
          <li className="text-[#7A8B9D]  hover:text-[#4da3ff]">
            <a href="/">Street Fighter Six</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Call of Duty</a>
          </li>
        </ul>
      </div>
      {/* 3rd block - recommended */}
      <div>
        <h1 className="uppercase text-[#536f86] font-semibold pb-1">
          recommended
        </h1>
        <ul className="text-xs space-y-1">
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">By Friend</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff] ">
            <a href="/">By Curators</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Tags</a>
          </li>
        </ul>
      </div>
      {/* 4th block - browse category */}
      <div>
        <h1 className="uppercase text-[#536f86] font-semibold pb-1">
          browse by category
        </h1>
        <ul className="text-xs space-y-1">
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Top Sellers</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff] ">
            <a href="/">New Releases</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Upcoming</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Specials</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Vr Titles</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Controller Friendly</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Great on Deck</a>
          </li>
        </ul>
      </div>
      {/* 5th block - browse genre */}
      <div>
        <h1 className="uppercase text-[#536f86] font-semibold pb-1">
          browse by genre
        </h1>
        <ul className="text-xs space-y-1">
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Free to Play</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff] ">
            <a href="/">Early Access</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Action</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Adventure</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Casual</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Indie</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">RPG</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Sports</a>
          </li>
          <li className="text-[#7A8B9D] hover:text-[#4da3ff]">
            <a href="/">Strategy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftPanel;
