import React from "react";

const ProductCard = ({ name, price, discount, img }) => {
  return (
    <div>
      <div className="hover:shadow-xl bg-white">
        <img src={img} alt="Not found" className="h-[200px] w-[500px]" />
        <p className="text-sm">{name}</p>
        <p className="text-sm">{price}</p>
        <p className="text-sm">{discount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
