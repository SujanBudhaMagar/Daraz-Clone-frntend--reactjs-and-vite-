import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDescription from "./components/Products/ProductDescription";
import NavBar from "./components/Common/NavBar";
import Footer from "./components/Common/Footer";
import AddProduct from "./components/Cart/AddProduct";
import { CartProvider } from "./context/CardContext";
import BuyNow from "./components/Cart/BuyNow";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDes/:id" element={<ProductDescription />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/buynow" element={<BuyNow />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
