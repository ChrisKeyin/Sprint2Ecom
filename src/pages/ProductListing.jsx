//Christopher King,
//Sprint #2,
// //April 16th, 2025

import React, { useEffect, useState } from 'react'; // Importing React and hooks for state and side effects
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation between routes
import { fetchProducts } from '../api'; // Importing the API function to fetch products
import ProductCard from '../components/ProductCard'; // Importing the ProductCard component to display individual products
import Header from '../components/Header'; // Importing the Header component for the page header

// Component for the Product Listing page
const ProductListing = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [products, setProducts] = useState([]); // State to store the list of products

  // Fetching products from the API when the component mounts
  useEffect(() => {
    fetchProducts().then(setProducts); // Fetch products and update the state
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      <div className="page page-listing">
        {/* Container for the product grid */}
        <div className="product-grid">
          {/* Mapping over the products array to render a ProductCard for each product */}
          {products.map((p) => (
            <ProductCard
              key={p.id} // Unique key for each product
              title={p.title} // Passing the product title as a prop
              image={p.image} // Passing the product image as a prop
              description={p.description} // Passing the product description as a prop
              onViewDetails={() => navigate(`/product/${p.id}`)} // Navigates to the product details page when clicked
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing; // Exporting the ProductListing component as the default export
