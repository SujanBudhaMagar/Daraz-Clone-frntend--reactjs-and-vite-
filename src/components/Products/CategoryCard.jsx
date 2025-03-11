import React from "react";

const CategoryCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center hover:shadow-xl h-[150px] w-[150px] border-2 bg-white">
      <img src={image} alt="Nne" className="h-24 w-24" />
      <p className="text-center text-black text-sm">{name}</p>
    </div>
  );
};

export default CategoryCard;
