import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <img src="" alt="None" className="mr-10"></img>
      <div className="flex items-start justify-end relative">
        <input
          type=" text"
          placeholder=" Search in Daraz Clone"
          className="w-[800px] h-12 px-4 focus:outline-none"
        />
        <CiSearch className="absolute bg-orange-300 text-orange-500 w-10 h-full" />
      </div>
      <LuShoppingCart className="text-white h-8 w-10 ml-4 mt-4" />
    </div>
  );
};

export default Header;
