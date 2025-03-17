import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaWhatsapp,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import bcrypt from "bcryptjs";

const LogIn = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("password"); // "password" or "phone"
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [clickLogin, setClickLogin] = useState("login");

  const handleLogIn = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("User not found. Please sign up first.");
      return;
    }

    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, storedUser.password);

    if (email === storedUser.email && isPasswordValid) {
      // Simulate token generation
      const token = "dummy-token";
      localStorage.setItem("token", token);

      // Navigate to the home page or another page
      onClose();
    } else {
      setError("Invalid email or password.");
    }
    {
      error && <p className="text-red-500 text-sm mb-4">{error}</p>;
    }
  };

  const handleFacebookLogin = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          console.log("Welcome! Fetching your information.... ");
          window.FB.api("/me", function (response) {
            console.log("Good to see you, " + response.name + ".");
            // Handle successful login here
            // Redirect back to your application or perform any other actions
            onClose();
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  useEffect(() => {
    // Load the Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1702917926928935", // Replace with your Facebook app ID
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  useEffect(() => {
    // Add the no-scroll class to the body when the component mounts
    document.body.classList.add("no-scroll");

    // Remove the no-scroll class from the body when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="relative bg-white rounded-lg p-6 w-[450px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-3 text-gray-500 hover:text-gray-700 text-base"
        >
          ✖
        </button>

        {/* Login Form */}
        {clickLogin === "login" ? (
          <>
            {/* Tab Selection */}
            <div className="flex justify-evenly">
              <button
                className={`text-lg${
                  activeTab === "password" ? " text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("password")}
              >
                Password
              </button>
              <button
                className={`text-lg${
                  activeTab === "phone" ? " text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("phone")}
              >
                Phone Number
              </button>
            </div>

            <form className="h-[450px]" onSubmit={handleLogIn}>
              {activeTab === "phone" ? (
                <>
                  <div className="flex mb-4 gap-4 max-w-full pt-14 pb-10">
                    <h1 className="border rounded-md text-black text-xs w-14 text-center">
                      🇳🇵+977
                    </h1>
                    <input
                      type="text"
                      placeholder="Please enter your Phone Number"
                      className="w-full h-12 p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col gap-4 h-[100px]">
                    <div className="flex items-center bg-orange-500 rounded-md h-12 p-3">
                      <FaWhatsapp className=" h-6 w-6 ml-4 text-white border rounded-full bg-green-400" />
                      <button className="text-center w-full">
                        Send Code Via WhatsApp
                      </button>
                    </div>
                    <div className="flex items-center border-orange-500 border-2 rounded-md h-12 p-3">
                      <MdPhoneIphone className="h-6 w-6 text-black ml-4" />
                      <button className="text-center text-orange-500 w-full">
                        Send Code Via SMS
                      </button>
                    </div>
                    <h1 className="text-center text-gray-400 mt-4 text-xl">
                      Don't have an account?
                      <a
                        href="#"
                        className="text-blue-400"
                        onClick={() => setClickLogin("signup")}
                      >
                        SignUp
                      </a>
                    </h1>
                    <h1 className="text-center text-gray-400 mt-4 text-xl">
                      Or, login with
                    </h1>
                    <div className="flex justify-center gap-6 mt-4">
                      <button className="flex items-center gap-2">
                        <FaGoogle className="text-red-500 h-6 w-6" /> Google
                      </button>
                      <button
                        className="flex items-center gap-2"
                        onClick={handleFacebookLogin}
                      >
                        <FaFacebook className="text-blue-500 h-6 w-6" />{" "}
                        Facebook
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col justify-between pt-12">
                  <div className="mb-6">
                    <input
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Please enter your Email"
                      className="h-12 w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className=" relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Please enter your password"
                      className="h-12 w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <h1 className="text-right mb-4 hover:underline">
                    Forgot password?
                  </h1>
                  <button
                    className="w-full bg-orange-500 rounded-md p-3 text-base text-white font-sans"
                    type="submit"
                  >
                    Log In
                  </button>
                  <h1 className="text-center text-gray-400 mt-4 text-xl">
                    Don't have an account?
                    <a
                      href="#"
                      className="text-blue-400"
                      onClick={() => setClickLogin("signup")}
                    >
                      SignUp
                    </a>
                  </h1>
                  <h1 className="text-center text-gray-400 mt-4 text-xl">
                    Or, login with
                  </h1>
                  <div className="flex justify-center gap-6 mt-4">
                    <button className="flex items-center gap-2">
                      <FaGoogle className="text-red-500 h-6 w-6" /> Google
                    </button>
                    <button
                      className="flex items-center gap-2"
                      onClick={handleFacebookLogin}
                    >
                      <FaFacebook className="text-blue-500 h-6 w-6" /> Facebook
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <form className="h-[450px]">
            <h1 className="text-xl text-gray-400 text-center p-5">Sign up</h1>
            <div className="flex mb-4 gap-4 max-w-full">
              <h1 className="border rounded-md text-black text-xs">🇳🇵+977</h1>
              <input
                type="text"
                placeholder="Please enter your Phone Number"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <input type="checkbox" className="mr-2" />
              <span className="text-black">
                By creating and/or using your account, you agree to our
                <a href="#" className="text-blue-400">
                  Terms of use
                </a>
                and
                <a href="#" className="text-blue-400">
                  Policy
                </a>
              </span>
            </div>
            <div className="flex flex-col gap-2 h-[100px]">
              <div className="flex items-center bg-orange-500 rounded-md h-12">
                <FaWhatsapp className=" h-6 w-6 ml-4 text-white border rounded-full bg-green-400" />
                <a href="" className="text-center w-full p-3">
                  Send Code Via WhatsApp
                </a>
              </div>
              <div className="flex items-center border-orange-500 border-2 rounded-md h-12">
                <MdPhoneIphone className="h-6 w-6 text-black ml-4" />
                <button className="text-center text-orange-500 w-full p-3">
                  Send Code Via SMS
                </button>
              </div>
              <h1 className="text-black text-center">
                Already have an account?
                <a
                  href="#"
                  className="text-blue-700 hover:underline"
                  onClick={() => setClickLogin("login")}
                >
                  Log In
                </a>
              </h1>
              <h1 className="text-center text-gray-400 mt-3">
                Or, signup with
              </h1>
              <div className="flex justify-center gap-4 mt-2">
                <button className="flex items-center gap-2">
                  <FaGoogle className="text-red-500" /> Google
                </button>
                <button
                  className="flex items-center gap-2"
                  onClick={handleFacebookLogin}
                >
                  <FaFacebook className="text-blue-500" /> Facebook
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogIn;
