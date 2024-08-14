import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const RestaurantListing = () => {
    return (
        <div className="container py-5" style={{ backgroundColor: '#e0f7df', minHeight: '100vh' }}>
            
            <div className="py-3 mb-5" style={{ backgroundColor: '#A0DC9E', borderRadius: '10px' }}>
                <h1 className="text-center display-4 text-black">Available Restaurants</h1>
            </div>
            <ul className="list-group">
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id} className="list-group-item bg-transparent border-0 mb-3">
                        <Link 
                            to={`/menu/${restaurant.id}`} 
                            className="text-decoration-none"
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="h5 text-black">{restaurant.name}</h3>
                                    <p className="mb-0 text-black">{restaurant.cuisine} Cuisine, {restaurant.location}</p>
                                </div>
                                <span className="btn btn-outline-light text-black" style={{ borderRadius: '20px' }}>
                                    View Menu
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantListing;
