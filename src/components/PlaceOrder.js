import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load cart from local storage on component mount
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleDelete = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleConfirmOrder = () => {
        // Clear the cart after confirming the order
        localStorage.removeItem('cart');
        setCart([]); // Clear the cart in state as well
    };

    // Retrieve the restaurant ID from the cart if available, else use a fallback value
    const restaurantId = cart.length > 0 ? cart[0].restaurantId : null;

    return (
        <div className="container py-5" style={{ backgroundColor: '#e0f7df', minHeight: '100vh' }}>
            <h1 className="text-center display-4 mb-5 text-black">Place Your Order</h1>
            <div className="card bg-transparent border-0 text-black">
                <div className="card-body">
                    <h2 className="h4 card-title">Order Summary</h2>
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item, index) => (
                                <div key={index} className="mb-3 d-flex justify-content-between align-items-center">
                                    <div>
                                        <h3 className="h6">{item.name} - ₹{item.price} x {item.quantity}</h3>
                                        <p className="h7">{item.description}</p>
                                    </div>
                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => handleDelete(index)}
                                        style={{ borderRadius: '50%', width: '30px', height: '30px' }}
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                            <div className="mt-4">
                                <Link
                                    to="/track"
                                    onClick={handleConfirmOrder}
                                    className="btn btn-light btn-block text-black"
                                    style={{ borderRadius: '20px' }}
                                >
                                    Confirm Order
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <p>No items in the cart.</p>
                    )}
                    <div className="mt-3">
                        <button
                            className="btn btn-outline-light btn-block text-black"
                            style={{ borderRadius: '20px' }}
                            onClick={() => navigate(restaurantId ? `/menu/${restaurantId}` : '/')}
                        >
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
