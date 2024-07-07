import React from 'react';

const CartCard = ({ name, description, price, image, quantity, onDelete }) => {
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
                    {truncateDescription(description, 100)}
                </p>
            </div>
            <div className="px-4 pt-2 pb-4 flex justify-between items-center">
                <span className="text-gray-900 font-bold text-lg">${price}</span>
                <span className="text-gray-900 font-bold">{quantity} pcs</span>
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={onDelete} // Call onDelete function passed from CartLayout
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CartCard;
