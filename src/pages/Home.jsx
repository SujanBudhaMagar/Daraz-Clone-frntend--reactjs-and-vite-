import React from "react";
import NavBar from "../components/Common/NavBar";
import Product from "../components/Products/Product";
import ImageSection from "../components/Common/ImageContainer";
import Categories from "../components/Products/Categories";
import MoreProduct from "../components/Products/MoreProduct";
import Footer from "../components/Common/Footer";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <NavBar />
        <div className="globalContainer">
          <ImageSection />
          <Product />
          <Categories />
          <MoreProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
