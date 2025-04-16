import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (id, amount) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = item.quantity + amount;
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleSubmitOrder = () => {
    clearCart();
    navigate('/confirmation');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
  <>
    <main>
      <Header  />
        <div className="page page-checkout">
          <h1>Checkout</h1>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <div className="total-box">
                <h2>Total: ${calculateTotal().toFixed(2)}</h2>
              </div>
              <button className="submit-button" onClick={handleSubmitOrder}>
                Submit Order
              </button>
            </div>
          )}
        </div>
      </main>
  </>
  );
};

export default Checkout;
