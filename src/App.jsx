// Importing necessary components and hooks from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing page components for different routes
import ProductListing from './pages/ProductListing'; // Product listing page
import ProductDetails from './pages/ProductDetails'; // Product details page
import Checkout from './pages/Checkout'; // Checkout page
import Confirmation from './pages/Confirmation'; // Order confirmation page

function App() {
  return (
    // Wrapping the application in a Router to enable routing
    <Router>
      {/* Defining the routes for the application */}
      <Routes>
        {/* Route for the product listing page */}
        <Route path="/" element={<ProductListing />} />
        
        {/* Route for the product details page, with a dynamic parameter for the product ID */}
        <Route path="/product/:id" element={<ProductDetails />} />
        
        {/* Route for the checkout page */}
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Route for the order confirmation page */}
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App; // Exporting the App component as the default export
