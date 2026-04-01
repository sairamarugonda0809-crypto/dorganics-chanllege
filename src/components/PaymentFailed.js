import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentFailed = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { error } = location.state || {};

    return (
        <div className="payment-status failed">
            <h2>Payment Failed!</h2>
            <p>We encountered an error during your transaction:</p>
            <p><strong>{error || 'Unknown error occurred.'}</strong></p>
            <button onClick={() => navigate('/')}>Try Again</button>
        </div>
    );
};

export default PaymentFailed;
