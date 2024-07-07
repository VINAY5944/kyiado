import React, { useState } from 'react';

const Card = ({ name, description, price, image }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // Default quantity is 1

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleAddToCart = () => {
        const item = {
            name,
            description,
            price,
            image,
            quantity
        };

        // Retrieve existing cart items from localStorage or initialize an empty array
        let existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product already exists in the cart
        const existingItemIndex = existingCartItems.findIndex(cartItem => cartItem.name === item.name);

        if (existingItemIndex !== -1) {
            // If item exists, update its quantity
            existingCartItems[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add the new item to the cart
            existingCartItems.push(item);
        }

        // Store updated cart items back into localStorage
        localStorage.setItem('cart', JSON.stringify(existingCartItems));

        console.log('Item added to cart:', item);

        setIsModalOpen(false); // Close the modal after adding to cart
    };

    // Function to truncate the description if it's too long
    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="max-w-xs w-60 rounded overflow-hidden shadow-lg my-2">
            <img className="w-full h-40 object-cover" src={image} alt={name} />
            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-2">{name}</div>
                <p className="text-gray-700 text-sm">
                    {truncateDescription(description, 100)} {/* Adjust 100 to your desired max length */}
                </p>
            </div>
            <div className="px-4 pt-2 pb-4 flex justify-between items-center">
                <span className="text-gray-900 font-bold text-lg">${price}</span>
                <button onClick={toggleModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm">
                    Add to Cart
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={toggleModal}></div>
                    <div className="bg-white rounded-lg p-8 z-50">
                        <h2 className="text-lg font-bold mb-4">Enter quantity for {name}</h2>
                        <input
                            type="number"
                            className="w-16 px-3 py-2 border border-gray-300 rounded-md mr-2"
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            min={1}
                        />
                        <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm ml-2">
                            Add {quantity} to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
