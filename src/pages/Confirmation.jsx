//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React from 'react'; // Importing React for building the component
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation

// Component for the order confirmation page
const Confirmation = () => {
  const navigate = useNavigate(); // Hook for navigating to different routes

  return (
    <div className="confirmation-container">
      {/* Displaying a thank-you message */}
      <h1>Thank You for Your Order!</h1>
      
      {/* Displaying additional information about the order */}
      <p>Your King PC is being prepped for shipment. We’ll notify you when it ships!</p>
      
      {/* Button to navigate back to the home page */}
      <button onClick={() => navigate('/')}>Return to Home</button>
    </div>
  );
};

export default Confirmation; // Exporting the Confirmation component as the default export
