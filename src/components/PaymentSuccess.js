import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { transactionId } = location.state || {};

    return (
        <div className="payment-status success">
            <h2>Payment Successful!</h2>
            <p>Thank you for your purchase. Your transaction ID is:</p>
            <p><strong>{transactionId || 'N/A'}</strong></p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
    );
};

export default PaymentSuccess;
