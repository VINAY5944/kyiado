import React, { useState, useEffect } from 'react';
import CartCard from '../cartCard';

const CartLayout = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        // Retrieve cart items from localStorage on component mount
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartProducts(storedCartItems);
    }, []); // Empty dependency array to run only on mount

    const handleDeleteItem = (itemName) => {
        // Filter out the item to delete based on its name
        const updatedCartItems = cartProducts.filter(item => item.name !== itemName);

        // Update state with the updated cart items
        setCartProducts(updatedCartItems);

        // Update localStorage with the updated cart items
        localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    };

    // Function to calculate total cost of items in the cart
    const calculateTotalCost = () => {
        let total = 0;
        cartProducts.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2); // Adjust to fixed decimal places as needed
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cartProducts.map((product) => (
                        <CartCard
                            key={product.name} // Ensure each card has a unique key
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                            quantity={product.quantity}
                            onDelete={() => handleDeleteItem(product.name)} // Pass delete handler
                        />
                    ))}
                </div>

                <div className="mt-8 flex justify-end">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
                        <div className="text-lg font-bold mb-2">Total Cost:</div>
                        <div className="text-2xl font-bold text-blue-600">${calculateTotalCost()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartLayout;
