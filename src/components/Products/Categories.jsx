import React from "react";
import { CategoryData } from "../../constants/Data";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <>
      <p className="text-xl py-8 md:py-4">Categories</p>
      <div>
        <div className="grid grid-cols-4 md:grid-cols-8">
          {CategoryData.map((category, idx) => (
            <CategoryCard
              key={idx}
              id={category.id}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
