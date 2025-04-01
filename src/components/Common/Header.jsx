import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mb-4 md:mb-0">
      <img
        src="https://files.oaiusercontent.com/file-AbjW3zmoex4B26iTTEz9EG?se=2025-03-25T11%3A13%3A36Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db05c97f1-12e5-4302-ad08-9b3b3687983f.webp&sig=p6YCFuM2P7YY/v21i4DJ3wU6opYD9/J%2BCZ0b0BksFMA%3D"
        alt="None"
        className="w-8 h-8 mr-5 md:mr-10 md:w-12 md:h-12 rounded-full"
      ></img>
      <div className="flex items-start justify-end relative">
        <input
          type=" text"
          placeholder=" Search in Daraz Clone"
          className="w-[300px] md:w-[800px] h-10 px-4 focus:outline-none"
        />
        <CiSearch className="absolute bg-orange-300 text-orange-500 w-10 h-full" />
      </div>
      <LuShoppingCart
        className="text-white h-6 w-8 md:h-8 md:w-10 ml-3 md:ml-4 md:mt-4"
        onClick={() => {
          navigate("/AddProduct");
        }}
      />
    </div>
  );
};

export default Header;
