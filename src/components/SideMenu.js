import React, { useState, useEffect, useRef } from "react";
/* import icons and image*/
import { FiMenu } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import valve from "../assets/valve.png";

const SideMenu = () => {
  /* state for sidebar */
  const [sideBar, setSideBar] = useState(false);

  /* handle outside click */
  const sideMenuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target) &&
      event.target.tagName !== "svg"
    ) {
      setSideBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  /* state for store side menu */
  const [sideStore, setSideStore] = useState(false);
  /* state for store side menu */
  const [sideCommunity, setSideCommunity] = useState(false);

  return (
    <div>
      {/*  menu icon */}
      <div
        className="lg:hidden  text-white absolute left-4 top-6 cursor-pointer"
        onClick={() => setSideBar(!sideBar)}
      >
        <FiMenu size={30} />
      </div>
      {/* mobile menu  */}
      {/*  black overlay */}
      {sideBar && (
        <div className="bg-black/40 fixed w-full h-full z-10 top-0 left-0"></div>
      )}
      {/* menu slide */}
      <div
        ref={sideMenuRef}
        className={
          sideBar
            ? "fixed top-0 left-0 w-[300px] h-full  bg-[#171A21] duration-[700ms] z-[200]"
            : "fixed top-0 left-[-100%] w-[300px] h-screen  bg-[#171A21] duration-[1200ms] z-[200]"
        }
      >
        {/* menu slide -menus */}
        <div className="flex flex-col">
          <a
            href="/"
            className="text-[#bdbdbd]  text-2xl font-light py-4 px-4 border-b border-b-[#000000]"
          >
            Login
          </a>
          <span
            className={`relative text-[#bdbdbd] ${sideStore && "bg-[#192533]"}
            }  text-2xl font-light py-4 px-4 border-y border-t-[#2f3138]  border-b-[#000000]`}
            onClick={() => setSideStore(!sideStore)}
          >
            Store
            <BsChevronDown
              className={`absolute right-3 top-[30%] transition-transform duration-[400ms] ${
                sideStore ? "rotate-180" : ""
              }`}
            />
          </span>
          {sideStore && (
            <div className="flex flex-col px-6 py-2 text-[#bdbdbd] gap-2 bg-[#192533]">
              <a href="/">Home</a>
              <a href="/">Discovery Queue</a>
              <a href="/">Wishlist</a>
              <a href="/">Point Shop</a>
              <a href="/">News</a>
              <a href="/">Stats</a>
            </div>
          )}
          <span
            className={`relative text-[#bdbdbd] ${
              sideCommunity && "bg-[#192533]"
            }
            }  text-2xl font-light py-4 px-4 border-y border-t-[#2f3138]  border-b-[#000000]`}
            onClick={() => setSideCommunity(!sideCommunity)}
          >
            Community
            <BsChevronDown
              className={`absolute right-3 top-[30%] transition-transform duration-[400ms] ${
                sideCommunity ? "rotate-180" : ""
              }`}
            />
          </span>
          {sideCommunity && (
            <div className="flex flex-col px-6 py-2 text-[#bdbdbd] gap-2 bg-[#192533] ">
              <a href="/">Home</a>
              <a href="/">Discussion</a>
              <a href="/">Workshop</a>
              <a href="/">Market</a>
              <a href="/">Broadcasts</a>
            </div>
          )}
          <a
            href="/"
            className="text-[#bdbdbd]  text-2xl font-light py-4 px-4  border-y border-t-[#2f3138]  border-b-[#000000]"
          >
            Support
          </a>
          <a
            href="/"
            className="text-[#bdbdbd]  font-thin py-4 px-4 border-t border-t-[#2f3138]"
          >
            Change language
          </a>
          <a href="/" className="text-[#bdbdbd]  font-thin px-4 ">
            View desktop website
          </a>
        </div>

        {/* menu slide footer */}
        <div className="max-w-[92%] pl-4 absolute left-0 right-0 bottom-4">
          <img src={valve} alt="valveLogo" className="py-1" />
          <p className="text-[#8a8a8a] font-thin text-[10px]">
            © Valve Corporation. All rights reserved. All trademarks are
            property of their respective owners in the US and other countries.
            <span>
              <a href="/" className="hover:text-white">
                Privacy Policy
              </a>
              &nbsp;| &nbsp;
              <a href="/" className="hover:text-white">
                Legal
              </a>
              &nbsp;| &nbsp;
              <a href="/" className="hover:text-white">
                Steam Subscriber Agreement
              </a>
              &nbsp;| &nbsp;
              <a href="/" className="hover:text-white">
                Refunds
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
