//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React, { useContext } from 'react'; // Importing React and the useContext hook
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation
import { CartContext } from '../context/CartContext'; // Importing the CartContext to access cart-related data

// Functional component for the Header
const Header = () => {
  const navigate = useNavigate(); // Hook for navigating to different routes
  const { cartItems } = useContext(CartContext); // Accessing the cart items from the CartContext

  // Calculating the total number of items in the cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      {/* Site title that navigates to the home page when clicked */}
      <h1 className="site-title" onClick={() => navigate('/')}>
        King PC Towers
      </h1>
      <div className="header-buttons">
        {/* Button to navigate to the home page */}
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
        {/* Button to navigate to the checkout page, displaying the total items in the cart */}
        <button className="cart-button" onClick={() => navigate('/checkout')}>
          Cart ({totalItems})
        </button>
      </div>
    </header>
  );
};

export default Header; // Exporting the Header component as the default export
