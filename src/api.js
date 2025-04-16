
const BASE = 'http://localhost:3001'; 

export const fetchProducts = () =>
  fetch(`${BASE}/products`).then((res) => res.json());

export const fetchProductById = (id) =>
  fetch(`${BASE}/products/${id}`).then((res) => res.json());

export const addToServerCart = (item) =>
  fetch(`${BASE}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });

export const deleteFromServerCart = (id) =>
  fetch(`${BASE}/cart/${id}`, { method: 'DELETE' });
