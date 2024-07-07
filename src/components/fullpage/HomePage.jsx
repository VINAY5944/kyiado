import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header';
import Layout from '../Layout/Layout';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null); // State for filtering products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://fakestoreapi.com/products/';
        if (filter) {
          url += `category/${filter}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [filter]); 
 console.log(products);
  return (
    <div>
      <Header setFilter={setFilter} /> 
      <Layout products={products} />
    </div>
  );
};

export default HomePage;
