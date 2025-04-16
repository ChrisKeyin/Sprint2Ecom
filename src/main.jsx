// Importing React library for building user interfaces
import React from 'react';

// Importing ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';

// Importing the main App component
import App from './App';

// Importing global CSS styles
import './index.css';

// Importing the CartProvider to provide cart-related context to the application
import { CartProvider } from './context/CartContext';

// Rendering the root React component into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/* Enables additional checks and warnings in development mode */}
    <CartProvider> {/* Provides the cart context to the entire application */}
      <App /> {/* Main application component */}
    </CartProvider>
  </React.StrictMode>
);
