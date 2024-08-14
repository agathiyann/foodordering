import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const Menu = () => {
    const { id } = useParams();
    const restaurant = restaurants.find((r) => r.id === parseInt(id));

    return (
        <div className="container py-5" style={{ backgroundColor: '#e0f7df', minHeight: '100vh' }}>
            <h1 className="text-center display-4 mb-5 text-black" style={{ backgroundColor: '#A0DC9E', borderRadius: '10px' }}>{restaurant.name} - Menu</h1>
            <ul className="list-group">
                {restaurant.menu.map((item) => (
                    <li key={item.id} className="list-group-item bg-transparent border-0 mb-3">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h3 className="h5 text-black">{item.name} - ₹{item.price}</h3>
                                <p className="text-black">{item.description}</p>
                            </div>
                            <Link to={`/select/${item.id}`} className="btn btn-outline-light align-self-center text-black" style={{ borderRadius: '20px' }}>
                                Select
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="text-center mt-4">
                <Link to="/order" className="btn btn-light" style={{ borderRadius: '20px' }}>Go to Cart</Link>
            </div>
            <div className="text-center mt-4">
                <Link to="/" className="btn btn-light" style={{ borderRadius: '20px' }}>Back to Restaurants</Link>
            </div>
        </div>
    );
};

export default Menu;
