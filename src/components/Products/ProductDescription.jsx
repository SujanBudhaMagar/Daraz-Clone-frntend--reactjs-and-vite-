import React, { useEffect, useState } from "react";
import DescriptionCard from "./DescriptionCard";
import { ProductDescriptionData } from "../../constants/Data";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the route parameter
  const [product, setProduct] = useState(null); // State to store the product data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  console.log("Product ID from URL:", id);

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const product = ProductDescriptionData.find(
          (item) => item.id === Number(id)
        );
        if (product) {
          setProduct(product);
        } else {
          setError("Product not found");
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching the data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if there is an error
  }

  return (
    <div>
      {product && (
        <DescriptionCard
          img={product.image}
          product_name={product.product_name}
          category={product.category}
          brand={product.brand}
          price={product.price.current}
          rating={product.rating}
          color={product.color}
          promotions={product.promotions}
        />
      )}
    </div>
  );
};

export default ProductDescription;
