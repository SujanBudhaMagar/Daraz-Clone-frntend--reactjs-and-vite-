import React, { useState } from "react";
import { MoreProductData } from "../../constants/Data";
import ProductCard from "./ProductCard";

const MoreProduct = () => {
  const [visibleCount, setVisibleCount] = useState(16);

  const HandleClick = () => {
    setVisibleCount((prevCount) => prevCount + 14);
  };

  return (
    <>
      <p className="py-4 text-xl">Just For You</p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-6 gap-2">
          {MoreProductData.slice(0, visibleCount).map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
        {visibleCount < MoreProductData.length && (
          <button
            className="border border-blue-700 justify-center my-4 py-2 px-4 text-lg"
            onClick={HandleClick}
          >
            LOAD MORE
          </button>
        )}
      </div>
    </>
  );
};

export default MoreProduct;
