import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const ItemSelection = () => {
    const { id } = useParams();
    const restaurant = restaurants.find((r) => r.menu.some((item) => item.id === parseInt(id)));
    const selectedItem = restaurant.menu.find((item) => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItemIndex = cart.findIndex(item => item.id === selectedItem.id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({ ...selectedItem, quantity, restaurantId: restaurant.id });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className="container py-5" style={{ backgroundColor: '#e0f7df', minHeight: '100vh' }}>
            <h1 className="text-center display-4 mb-5 text-black" style={{ backgroundColor: '#A0DC9E', borderRadius: '10px' }}>Confirm Your Selection</h1>
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <h2 className="card-title text-black">{selectedItem.name} - ₹{selectedItem.price}</h2>
                    <p className="card-text text-black">{selectedItem.description}</p>
                    <div className="d-flex justify-content-center mt-4">
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="form-control w-25 me-2"
                        />
                        <button
                            onClick={addToCart}
                            className="btn btn-outline-light me-2 text-black"
                            style={{ borderRadius: '20px' }}
                        >
                            Add 
                        </button>
                        <Link to="/order" className="btn btn-outline-light me-2 text-black" style={{ borderRadius: '20px' }}>
                             Cart
                        </Link>
                        <Link to={`/menu/${restaurant.id}`} className="btn btn-light" style={{ borderRadius: '20px' }}>
                            Menu
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemSelection;