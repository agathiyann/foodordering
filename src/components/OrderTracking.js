import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const OrderTracking = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setShowConfetti(true);

        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const orderStatus = [
        { id: 1, status: 'Order Placed Successfully' },
    ];

    return (
        <div className="container py-5" style={{ backgroundColor: '#e0f7df', minHeight: '100vh' }}>
            {/* Confetti animation */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            
            <div className="card bg-transparent border-0">
                <div className="card-body">
                    <h1 className="text-center display-4 mb-4 text-black">Order Tracking</h1>
                    <ul className="list-group">
                        {orderStatus.map((status) => (
                            <li
                                key={status.id}
                                className="list-group-item d-flex justify-content-center align-items-center bg-transparent mb-3"
                                style={{ borderRadius: '20px' }}
                            >
                                <span className="fw h2">{status.status}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-center mt-4">
                        <Link to="/" className="btn btn-outline-light text-black" style={{ borderRadius: '20px' }}>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
