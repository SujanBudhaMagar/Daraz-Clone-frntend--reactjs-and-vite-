import React from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "../../constants/Data";

const Product = () => {
  return (
    <div className="flex flex-col">
      <p className="text-black text-lg mb-2">Flash Sale</p>
      <div className=" items-center justify-center bg-white">
        <div className="flex justify-between border-b-2 p-4">
          <p className="text-orange-500">On Sale Now</p>
          <button className="text-orange-500 border border-orange-500 p-2">
            Shop All Products
          </button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mr-4 mb-2">
          {ProductData.map((data, idx) => (
            <ProductCard
              key={idx}
              id={data.id}
              img={data.img}
              name={data.name}
              price={data.price}
              discount={data.discount}
              currency={data.currency}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
