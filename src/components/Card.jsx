import React from 'react';

const Card = () => {
  return (
    <div className="max-w-xs w-60 rounded overflow-hidden shadow-lg my-2">
      <img className="w-full h-40 object-cover" src="https://via.placeholder.com/150" alt="Product Image" />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2">Product Name</div>
        <p className="text-gray-700 text-sm">
          This is a short description of the product. It is meant to give a quick overview to the customer.
        </p>
      </div>
      <div className="px-4 pt-2 pb-4 flex justify-between items-center">
        <span className="text-gray-900 font-bold text-lg">$20.00</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
