import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import navLogo from "../../../public/images/nav-logo.png";

const Header = () => {
  return (
    <nav>
      <div className="antialiased text-slate-800 h-24 shadow-lg flex items-center justify-between px-10">
        <div className="flex items-center gap-x-11">
          <img
            className="w-12 h-12 cursor-pointer"
            src={navLogo}
            alt="starbucks logo"
          />
          <ul className="flex items-center font-bold text-[14px] gap-x-4">
            <li>
              <a href="#" className="tracking-wider">
                MENU
              </a>
            </li>
            <li>
              <a href="#" className="tracking-wider">
                REWARDS
              </a>
            </li>
            <li>
              <a href="#" className="tracking-wider">
                GIFT CARDS
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-16">
          <div className="flex items-center gap-x-3 cursor-pointer">
            <FaLocationDot className="h-12" />
            <p className="font-semibold">Find a store</p>
          </div>
          <div className="flex items-center gap-x-3 text-[14px] font-semibold">
            <button className="border border-black px-4 py-1 rounded-full shadow-sm">
              Sign in
            </button>
            <button className="border border-black bg-black  text-white px-4 py-1 rounded-full shadow-sm">
              Join now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
