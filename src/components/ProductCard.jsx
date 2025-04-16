//Christopher King,
//Sprint #2,
// //April 16th, 2025
import React from 'react'; // Importing React for building the component

// Functional component for displaying a product card
const ProductCard = ({ title, image, description, onViewDetails }) => {
  return (
    <div className="product-card">
      {/* Displaying the product image */}
      <img src={image} alt={title} className="product-image" />
      
      {/* Displaying the product title */}
      <h2 className="product-title">{title}</h2>
      
      {/* Displaying the product description */}
      <p className="product-description">{description}</p>
      
      {/* Button to view more details about the product */}
      <button className="view-button" onClick={onViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard; // Exporting the ProductCard component as the default export
