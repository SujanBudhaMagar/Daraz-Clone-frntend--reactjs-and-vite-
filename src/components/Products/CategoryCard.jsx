import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ id, image, name }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center hover:shadow-xl h-[100px] w-[100px] md:h-[150px] md:w-[150px] border-2 bg-white"
      onClick={() => {
        navigate(`/ProductDes/${id}`);
      }}
    >
      <img src={image} alt={name} className="h-10 w-10 md:h-24 md:w-24" />
      <button className="text-center text-black text-sm">{name}</button>
    </div>
  );
};

export default CategoryCard;
