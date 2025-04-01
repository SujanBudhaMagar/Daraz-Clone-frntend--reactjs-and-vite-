import React, { useState } from "react";
import { useCart } from "../../context/CardContext"; // Corrected import path
import LogIn from "../Auth/LogIn"; // Import LogIn component
import Categories from "./Categories";
import MoreProduct from "./MoreProduct";
import { Link, useNavigate } from "react-router-dom";
const DescriptionCard = ({
  product_name,
  category,
  brand,
  img,
  price,
  rating,
  color,
  promotions,
}) => {
  const [count, setCount] = useState(1); // Default quantity to 1
  const { addToCart, isLoggedIn } = useCart();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    if (isLoggedIn) {
      navigate("/buynow");
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      const product = {
        product_name,
        category,
        brand,
        img,
        price,
        rating,
        color,
        promotions,
        quantity: count,
      };
      addToCart(product);
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <div className="globalContainer">
      <div className="flex items-center justify-center">
        <div className="w-[400px] h-[400px]">
          <img
            src={img}
            alt={product_name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-3/4 ml-8 p-4">
          <h2 className="md:text-4xl text-2xl font-bold mb-2">
            {product_name}
          </h2>
          <p className="text-gray-700 mb-1 text-base">Category: {category}</p>
          <p className="text-gray-700 mb-1 text-base">Brand: {brand}</p>
          <p className="text-gray-700 mb-1 text-base">Price: ${price}</p>
          <p className="text-gray-700 mb-1 text-base">Rating: {rating}</p>
          <p className="text-gray-700 mb-1 text-base">Color: {color}</p>
          <p className="text-gray-700 mb-1 text-base">
            Promotions: {promotions}
          </p>
          <div className="text-gray-700 mb-1 flex text-base">
            Quantity:
            <div className="relative">
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(Math.max(1, Number(e.target.value)))}
                className="relative w-16 text-center rounded mx-2 border"
              />
              <button
                className="text-gray-300 absolute left-3"
                onClick={() => setCount(Math.max(1, count - 1))}
              >
                -
              </button>
              <button
                className="text-gray-300 absolute right-4"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mt-3">
            <button
              onClick={handleBuyNow}
              className="bg-blue-700 text-white px-4 py-2 md:px-14 md:py-4 md:text-base text-sm text-center rounded-md"
            >
              Buy Now
            </button>
            <button
              className="bg-orange-700 text-white px- py-2 md:px-14 md:py-4 md:text-base text-sm text-center rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {showLoginPopup && <LogIn onClose={handleCloseLoginPopup} />}
      </div>
      <hr />
      <Categories />
      <hr className="mt-4" />
      <MoreProduct />
    </div>
  );
};

export default DescriptionCard;
