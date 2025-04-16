import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { fetchProductById } from '../api';
import Header from '../components/Header';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className={`page page-details`}>
        <h1 className="product-detail-title">{product.title}</h1>
        <img src={product.image} alt={product.title} className="detail-image" />
        <p className="detail-description">{product.description}</p>

        <ul className="spec-list">
          {product.specs.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
