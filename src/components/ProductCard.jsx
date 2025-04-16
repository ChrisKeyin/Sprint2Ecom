import React from 'react';

const ProductCard = ({ title, image, description, onViewDetails }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <button className="view-button" onClick={onViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
