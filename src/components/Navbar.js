import React, { useState } from "react";
/* import images & icons*/
import logo from "../assets/header_logo.png";
import { AiOutlineDownload } from "react-icons/ai";
/* import components */
import LanguagePopUp from "./LanguagePopUp";
import SlideMenu from "./SideMenu";
import PopUpMenu from "../components/PopUpMenu";
/* import data */
import { communityMenu, storeMenu } from "../data/data";

const Navbar = () => {
  /* state for store menu pop up */
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  const handleStore = () => {
    setIsStoreOpen(!isStoreOpen);
  };

  /* state for community menu pop up */
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const handleCommunity = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

  return (
    <div className="bg-[#171A21] flex items-center">
      {/* left - logo  */}
      <div className="w-full lg:w-auto px-4 py-4 lg:px-8 flex items-center justify-center lg:justify-start">
        {/* slide menu */}
        <SlideMenu />
        {/* logo */}
        <div>
          <a href="/">
            <img src={logo} alt="steamLogo" className="w-40" />
          </a>
        </div>
      </div>
      {/* middle - menu list */}
      <div className="text-[#C5C3C0] pl-8 ">
        <ul className="hidden lg:flex gap-8 cursor-pointer">
          <li
            className="hover:text-white relative"
            onMouseEnter={handleStore}
            onMouseLeave={handleStore}
          >
            STORE
            {isStoreOpen && <PopUpMenu data={storeMenu} />}
          </li>
          <li
            className="hover:text-white relative"
            onMouseEnter={handleCommunity}
            onMouseLeave={handleCommunity}
          >
            COMMUNITY
            {isCommunityOpen && <PopUpMenu data={communityMenu} />}
          </li>
          <li className="hover:text-white">
            <a href="/">ABOUT</a>
          </li>
          <li className="hover:text-white">
            <a href="/">SUPPORT</a>
          </li>
        </ul>
      </div>
      {/* right - buttons + login*/}
      <div className="absolute right-8 lg:flex hidden ">
        {/* button */}
        <div>
          <button className="text-[#ececec] hover:text-white bg-[#5B8003] hover:bg-[#648d04] py-[2px] px-2 font-light text-sm flex items-center gap-1">
            <AiOutlineDownload size={18} />
            Install Steam
          </button>
        </div>
        {/* login */}
        <div className="text-[#b8b6b4] px-4 flex gap-4 font-light ">
          <button className="hover:text-white text-sm ">
            <a href="/">login</a>
          </button>
          <p className="flex items-center">|</p>
          <LanguagePopUp />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
