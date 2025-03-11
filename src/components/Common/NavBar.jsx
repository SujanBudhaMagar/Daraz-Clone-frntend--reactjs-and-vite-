import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`bg-orange-600  flex flex-col justify-evenly sticky top-0 z-50 ${
          !isVisible ? "h-[100px]" : "h-[120px]"
        }`}
      >
        <div
          className={`flex items-end justify-end p-4 mr-32
        ${!isVisible ? "hidden" : ""}`}
        >
          <nav className="text-white font-sans text-sm">
            <Link to="" className="mr-4 hover:text-gray-300">
              Save More On App
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              Become a Seller
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              Help & Support
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              LOG IN
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              SIGN UP
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              Change Language
            </Link>
          </nav>
        </div>
        <Header />
      </div>
    </>
  );
};

export default NavBar;
