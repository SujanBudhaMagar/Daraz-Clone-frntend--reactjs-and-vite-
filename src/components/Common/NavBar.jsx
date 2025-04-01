import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import DropdownMenu from "../Help&Support/Help";
import LogIn from "../Auth/LogIn";
import SignUp from "../Auth/SignUp";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerWidth < 768) {
      return;
    }
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
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

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setIsLogInOpen(false);
    localStorage.setItem("token", "token");
    document.body.classList.remove("no-scroll");
  };

  const handleLogInClose = () => {
    setIsLoggedIn(false);

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
    window.location.reload();
    setIsLoggedIn(false);
    setIsLogInOpen(false);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <div
        className={`bg-orange-600 flex flex-col justify-evenly sticky top-0 z-50 ${
          !isVisible ? "h-[100px]" : " h-[100px] md:h-[120px]"
        }`}
      >
        <div
          className={`flex items-end justify-end p-4 mr-32 ${
            !isVisible ? "hidden" : ""
          }`}
        >
          <nav className="text-white font-sans text-sm hidden md:flex">
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

        {/* mobile view */}
        <div className="md:hidden flex justify-end p-2">
          {!isMobileMenuOpen && (
            <div
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <CiMenuBurger size={30} />
            </div>
          )}
        </div>

        {/* mobile nav */}
        {isMobileMenuOpen && (
          <nav className="fixed inset-0 bg-orange-600 h-screen z-50 text-white flex flex-col p-6">
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full right  mb-14 "
            >
              <IoClose size={30} />
            </div>
            <div className="flex flex-col items-center justify-center  space-y-6">
              <Link
                to=""
                className="text-xl md:text-sm md:mr-4 hover:text-gray-300"
              >
                Save More On App
              </Link>
              <Link
                to=""
                className="text-xl md:text-sm mr-4 hover:text-gray-300"
              >
                Become a Seller
              </Link>
              <DropdownMenu />
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogInClick}
                    className=" text-xl md:text-sm mr-4 hover:text-gray-300"
                  >
                    LOG IN
                  </button>
                  <button
                    onClick={handleSignUpClick}
                    className="text-xl md:text-sm mr-4 hover:text-gray-300"
                  >
                    SIGN UP
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="text-xl md:text-sm mr-4 hover:text-gray-300"
                >
                  LOG OUT
                </button>
              )}
              <button className="text-xl md:text-sm mr-4 hover:text-gray-300">
                Change Language
              </button>
            </div>
          </nav>
        )}
        <Header />
      </div>

      {isLogInOpen && (
        <LogIn
          onClose={handleLogInClose}
          onLoginSuccess={handleSuccessfulLogin}
        />
      )}
      {isSignUpOpen && <SignUp onClose={handleSignUpClose} />}
      {/* larger screen */}
    </>
  );
};

export default NavBar;
