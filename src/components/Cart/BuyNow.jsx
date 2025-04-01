import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { PiHandbagSimpleFill } from "react-icons/pi";

const BuyNow = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex gap-4 p-4 globalContainer  ">
        <div className="bg-white w-[80%] p-4">
          <h1 className="text-rabbit-yellow text-2xl mb-4">
            Delivery Information
          </h1>
          <div className="grid grid-cols-2">
            <div>
              <label htmlFor="Full Name" className="block font-medium mb-2">
                Full name
              </label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                className="border w-5/6 mb-2 p-2"
              />
            </div>
            <div className="">
              <label htmlFor="region" className="block font-medium mb-2">
                Region
              </label>
              <select id="region" className="border w-5/6 mb-2 p-2">
                <option value="" disabled selected>
                  Please choose your region
                </option>
                <option value="1">Bagmati Province</option>
                <option value="2">Gandaki Province</option>
                <option value="3">Lumbini Province</option>
                <option value="4">Karnali Province</option>
                <option value="4">Madesh Province</option>
                <option value="4">SudharPaschim Province</option>
                <option value="4">Koshi Province</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="Number" className="block font-medium mb-2">
                Phone Number
              </label>
              <input
                type="Number"
                placeholder="Please enter your phone number"
                className="border w-5/6 mb-2 p-2"
              />
            </div>
            <div className="">
              <label htmlFor="region" className="block font-medium mb-2">
                City
              </label>
              <select id="region" className="border w-5/6 mb-2 p-2">
                <option value="" disabled selected>
                  Please choose your city
                </option>
                <option value="1">Bagmati Province</option>
                <option value="2">Gandaki Province</option>
                <option value="3">Lumbini Province</option>
                <option value="4">Karnali Province</option>
                <option value="4">Madesh Province</option>
                <option value="4">SudharPaschim Province</option>
                <option value="4">Koshi Province</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="text" className="block font-medium mb-2">
                Building / House No / Street
              </label>
              <input
                type="text"
                placeholder="Please enter"
                className="border w-5/6 mb-2 p-2"
              />
            </div>
            <div className="">
              <label htmlFor="region" className="block font-medium mb-2">
                Area
              </label>
              <select id="region" className="border w-5/6 mb-2 p-2">
                <option value="" disabled selected>
                  Please choose your area
                </option>
                <option value="1">Bagmati Province</option>
                <option value="2">Gandaki Province</option>
                <option value="3">Lumbini Province</option>
                <option value="4">Karnali Province</option>
                <option value="4">Madesh Province</option>
                <option value="4">SudharPaschim Province</option>
                <option value="4">Koshi Province</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="text" className="block font-medium mb-2">
                Colony / Suburb / Locality / Landmark
              </label>
              <input
                type="text"
                placeholder="Please enter"
                className=" border w-5/6 mb-2 p-2"
              />
            </div>
            <div className="">
              <label htmlFor="Address" className="block font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="For Example: House#123, Street#123,ABC Road"
                className=" border w-5/6 mb-2 p-2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end items-end w-[91%] ">
            <p className="mb-2 mr-24">Select a label for effective delivery</p>
            <div className="flex gap-4 mr-32">
              <div className="flex border border-sky-400 rounded-md p-3 gap-2">
                <PiHandbagSimpleFill size={18} className="text-gray-300" />
                <p>Office</p>
              </div>
              <div className="flex border border-orange-400 rounded-md p-3 gap-2">
                <IoHomeOutline size={18} className="text-gray-300" />
                <p>Home</p>
              </div>
            </div>
            <button className="bg-sky-400 w-44 p-3 mt-4">Save</button>
          </div>
        </div>
        <div className="bg-white w-[400px] p-4 h-[60%]">
          <h1 className="text-rabbit-yellow text-2xl mb-4">Promotion</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter store/Daraz code"
              className="border w-2/3 p-3"
            />
            <button className="text-white bg-sky-500 px-6 text-bold py-3 mx-2">
              Apply
            </button>
          </div>
          <div className="flex justify-between mb-2">
            <h1 className="text-lg font-medium">Invoice and Contact Info</h1>
            <button className="text-sky-400 text-sm">Edit</button>
          </div>
          <h1 className="text-lg font-medium mb-2">Order Summary</h1>
          <div className="flex justify-between mb-4">
            <h1 className="text-base">Items Total</h1>
            <p className="text-base text-gray-300">Rs. 217</p>
          </div>
          <div className="flex justify-between mb-2">
            <h1 className="text-base">Delivery Fee</h1>
            <p className="text-base">Rs. 75</p>
          </div>
          <hr />
          <div className="flex justify-between mt-2">
            <h1 className="text-base">Total:</h1>
            <div className="flex flex-col">
              <p className="text-lg text-orange-400 text-end">Rs. 292</p>
              <p className="text-xs">All taxes included</p>
            </div>
          </div>
          <button className="bg-green-700 text-center w-full mt-2 px-4 py-2 rounded-sm">
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
