import React from 'react';
import { Link } from 'react-router-dom';

const CartHeader = () => {
    return (
        <div className="bg-gray-800 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Your Cart</h1>
                <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default CartHeader;
