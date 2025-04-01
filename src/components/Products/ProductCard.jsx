import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ name, price, discount, img, id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="hover:shadow-xl bg-white"
        onClick={() => {
          navigate(`/ProductDes/${id}`);
        }}
      >
        <img
          src={img}
          alt="Not found"
          className="h-15 w-15 md:h-[200px] md:w-[500px]"
        />
        <p className="text-sm">{name}</p>
        <p className="text-sm">{price}</p>
        <p className="text-sm">{discount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
