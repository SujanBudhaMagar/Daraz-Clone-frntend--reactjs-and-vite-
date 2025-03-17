import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import LogIn from "../Auth/Auth";
import DropdownMenu from "../Help&Support/Help";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isHashed = localStorage.getItem("token");
    if (isHashed) {
      setIsLoggedIn(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleLogInClick = () => {
    setIsSignUpOpen(false); // Close SignUp modal if open
    setIsLogInOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleLogInClose = () => {
    setIsLogInOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleSignUpClick = () => {
    setIsLogInOpen(false); // Close LogIn modal if open
    setIsSignUpOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLogInOpen(false);
    setIsSignUpOpen(false);
    document.body.classList.remove("no-scroll");
    window.location.reload();
  };

  return (
    <>
      <div
        className={`bg-orange-600 flex flex-col justify-evenly sticky top-0 z-50 ${
          !isVisible ? "h-[100px]" : "h-[120px]"
        }`}
      >
        <div
          className={`flex items-end justify-end p-4 mr-32 ${
            !isVisible ? "hidden" : ""
          }`}
        >
          <nav className="text-white font-sans text-sm flex">
            <Link to="" className="mr-4 hover:text-gray-300">
              Save More On App
            </Link>
            <Link to="" className="mr-4 hover:text-gray-300">
              Become a Seller
            </Link>
            <DropdownMenu />
            {!isLoggedIn ? (
              <>
                <button
                  onClick={handleLogInClick}
                  className="mr-4 hover:text-gray-300"
                >
                  LOG IN
                </button>
                <button
                  onClick={handleSignUpClick}
                  className="mr-4 hover:text-gray-300"
                >
                  SIGN UP
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="mr-4 hover:text-gray-300"
              >
                LOG OUT
              </button>
            )}
            <button className="mr-4 hover:text-gray-300">
              Change Language
            </button>
          </nav>
        </div>
        <Header />
      </div>
      {isLogInOpen && <LogIn onClose={handleLogInClose} />}
      {isSignUpOpen && <SignUp onClose={handleSignUpClose} />}
    </>
  );
};

export default NavBar;
