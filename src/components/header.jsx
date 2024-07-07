import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Header = ({ setFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setFilter(category); // Pass selected category to parent component (HomePage)
    toggleFilterDropdown(); // Close dropdown after selecting a category
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold ml-2 text-blue-600">E-Commerce</span>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <h6 className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </h6>
              <h6 className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Shop
              </h6>
              <h6 className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                About
              </h6>
              <h6 className="text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </h6>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40" 
                  placeholder="Search..." 
                />
                <button className="absolute right-2 top-2 text-gray-600 hover:text-blue-500">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l6 6M21 21l-6-6m0 0a9 9 0 11-12.728-12.728A9 9 0 0115 15z"></path>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button onClick={toggleFilterDropdown} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm">
                  Filter
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                    {categories.map((category, index) => (
                      <a key={index} onClick={() => handleCategorySelect(category)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{category}</a>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
              <Link  to="/cart"><button className="bg-white p-1 rounded-full text-gray-600 hover:text-blue-500 focus:outline-none">
                 <span className="sr-only">View cart</span>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 2.8A1 1 0 007 17h10a1 1 0 001-1v-1M7 13H5.4M5 21h14a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                  </svg>
                </button></Link>
              </div>
            </div>
            <button onClick={toggleDropdown} className="md:hidden text-gray-600 hover:text-blue-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      {isDropdownOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg z-10">
          <div className="p-4 border-t border-gray-200">
            <input 
              type="text" 
              className="block w-full px-4 py-2 text-gray-900 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40 mb-2" 
              placeholder="Search..." 
            />
            <button onClick={toggleFilterDropdown} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm mb-2">
              Filter
            </button>
            {isFilterDropdownOpen && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-md py-2 z-20">
                {categories.map((category, index) => (
                  <a key={index} onClick={() => handleCategorySelect(category)} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{category}</a>
                ))}
              </div>
            )}
            <div className="space-y-2">
              <h6 className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                Home
              </h6>
              <h6  className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                Shop
              </h6 >
              <h6 className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                About
              </h6 >
              < h6  className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </h6 >
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
