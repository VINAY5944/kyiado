import React, { useState, useEffect } from "react";

const CartModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);







  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value, 10));
//   };

  const handleAddToCart = () => {
   

    onClose(); // Close modal after adding to cart
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-1/2">
        <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <input
          type="number"
          className="w-20 px-3 py-1 border rounded-md mr-2"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-sm"
          onClick={handleAddToCart}
        >
          Add to Cart ({cartItems.length}) {/* Display cart item count */}
        </button>
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 1a9 9 0 100 18 9 9 0 000-18zM6.707 6.707a1 1 0 011.414 0L10 8.586l1.879-1.879a1 1 0 111.414 1.414L11.414 10l1.879 1.879a1 1 0 01-1.414 1.414L10 11.414l-1.879 1.879a1 1 0 01-1.414-1.414L8.586 10 6.707 8.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartModal;
