import React from "react";
import Product from "../components/Products/Product";
import ImageSection from "../components/Common/ImageContainer";
import Categories from "../components/Products/Categories";
import MoreProduct from "../components/Products/MoreProduct";

const Home = () => {
  return (
    <div className="bg-gray-200 overflow-hidden">
      <div>
        <div className="globalContainer">
          <ImageSection />
          <Product />
          <Categories />
          <MoreProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
