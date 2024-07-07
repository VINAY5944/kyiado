import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../header";
import Layout from "../Layout/Layout";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Layout products={products} />
    </div>
  );
};

export default HomePage;
