//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React, { useEffect, useState, useContext } from 'react'; // Importing React and hooks for state, side effects, and context
import { useNavigate, useParams } from 'react-router-dom'; // Importing hooks for navigation and accessing route parameters
import { CartContext } from '../context/CartContext'; // Importing the CartContext to manage cart-related actions
import { fetchProductById } from '../api'; // Importing the API function to fetch a product by its ID
import Header from '../components/Header'; // Importing the Header component for the page header

// Component for the Product Details page
const ProductDetails = () => {
  const { id } = useParams(); // Extracting the product ID from the route parameters
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from the CartContext
  const [product, setProduct] = useState(null); // State to store the product details

  // Fetching the product details from the API when the component mounts or the ID changes
  useEffect(() => {
    fetchProductById(id).then(setProduct); // Fetch the product and update the state
  }, [id]); // Dependency array ensures this runs when the ID changes

  // Display a loading message while the product data is being fetched
  if (!product) return <p>Loading...</p>;

  return (
    <>
      {/* Rendering the Header component */}
      <Header />
      <div className={`page page-details`}>
        {/* Displaying the product title */}
        <h1 className="product-detail-title">{product.title}</h1>
        
        {/* Displaying the product image */}
        <img src={product.image} alt={product.title} className="detail-image" />
        
        {/* Displaying the product description */}
        <p className="detail-description">{product.description}</p>

        {/* Displaying the product specifications as a list */}
        <ul className="spec-list">
          {product.specs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        {/* Button to add the product to the cart */}
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product)} // Calls the addToCart function with the product
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails; // Exporting the ProductDetails component as the default export
