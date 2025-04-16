import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const ProductListing = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <Header />
      <div className="page page-listing">
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              image={p.image}
              description={p.description}
              onViewDetails={() => navigate(`/product/${p.id}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
