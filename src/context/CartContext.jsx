//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React, { createContext, useState, useEffect } from 'react'; // Importing React and hooks for state and side effects

// Creating the CartContext to manage cart-related data and actions
export const CartContext = createContext();

// Provider component to wrap the application and provide cart context
export const CartProvider = ({ children }) => {
  // State to store cart items, initialized from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart'); // Retrieve saved cart from localStorage
    return savedCart ? JSON.parse(savedCart) : []; // Parse the saved cart or initialize as an empty array
  });

  // Effect to save cart items to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Save the cart to localStorage
  }, [cartItems]); // Dependency array ensures this runs whenever `cartItems` changes

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id); // Check if the product already exists in the cart
      if (existingItem) {
        // If the product exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If the product doesn't exist, add it to the cart with a quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Function to update the quantity of a specific product in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item // Update the quantity of the matching product
      )
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id) // Remove the product with the matching ID
    );
  };

  // Function to clear all items from the cart
  const clearCart = () => setCartItems([]); // Reset the cart to an empty array

  return (
    // Providing cart-related data and actions to the application
    <CartContext.Provider
      value={{
        cartItems, // Array of items in the cart
        addToCart, // Function to add a product to the cart
        updateQuantity, // Function to update the quantity of a product
        removeFromCart, // Function to remove a product from the cart
        clearCart // Function to clear the cart
      }}
    >
      {children} {/* Rendering child components wrapped by the provider */}
    </CartContext.Provider>
  );
};
