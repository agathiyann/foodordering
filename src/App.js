import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css" ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantListing from './components/RestaurantListing';
import Menu from './components/Menu';
import ItemSelection from './components/ItemSelection';
import PlaceOrder from './components/PlaceOrder';
import OrderTracking from './components/OrderTracking';

const App = () => {
    return (
        <Router>
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<RestaurantListing />} />
                    <Route path="/menu/:id" element={<Menu />} />
                    <Route path="/select/:id" element={<ItemSelection />} />
                    <Route path="/order" element={<PlaceOrder />} />
                    <Route path="/track" element={<OrderTracking />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
