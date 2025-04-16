import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-container">
      <h1>Thank You for Your Order!</h1>
      <p>Your King PC is being prepped for shipment. We’ll notify you when it ships!</p>
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default Confirmation;
