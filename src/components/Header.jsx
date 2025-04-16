import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1 className="site-title" onClick={() => navigate('/')}>
        King PC Towers
      </h1>
      <div className="header-buttons">
        <button className="home-button" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="cart-button" onClick={() => navigate('/checkout')}>
          Cart ({totalItems})
        </button>
      </div>
    </header>
  );
};

export default Header;
