import React from 'react';

const CartHeader = () => {
    return (
        <div className="bg-gray-800 text-white py-4 px-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Your Cart</h1>
                {/* Add any additional elements or navigation here */}
            </div>
        </div>
    );
};

export default CartHeader;
