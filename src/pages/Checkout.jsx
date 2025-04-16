//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React, { useContext } from 'react'; // Importing React and the useContext hook
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for programmatic navigation
import { CartContext } from '../context/CartContext'; // Importing the CartContext to manage cart-related actions
import Header from '../components/Header'; // Importing the Header component for the page header

// Component for the Checkout page
const Checkout = () => {
  // Accessing cart-related actions and data from the CartContext
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Hook for navigating to different routes

  // Function to handle quantity changes for a cart item
  const handleQuantityChange = (id, amount) => {
    const item = cartItems.find((item) => item.id === id); // Find the item in the cart
    const newQuantity = item.quantity + amount; // Calculate the new quantity
    if (newQuantity < 1) return; // Prevent the quantity from going below 1
    updateQuantity(id, newQuantity); // Update the item's quantity in the cart
  };

  // Function to handle order submission
  const handleSubmitOrder = () => {
    clearCart(); // Clear the cart after submitting the order
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Sum up the total price
  };

  return (
    <>
      <main>
        {/* Rendering the Header component */}
        <Header />
        <div className="page page-checkout">
          <h1>Checkout</h1>

          {/* Display a message if the cart is empty */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="cart-list">
              {/* Mapping over cart items to display each item */}
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    {/* Displaying the item's title, price, and quantity */}
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-controls">
                    {/* Buttons to decrease, increase, or remove the item */}
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
              {/* Displaying the total price */}
              <div className="total-box">
                <h2>Total: ${calculateTotal().toFixed(2)}</h2>
              </div>
              {/* Button to submit the order */}
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

export default Checkout; // Exporting the Checkout component as the default export
