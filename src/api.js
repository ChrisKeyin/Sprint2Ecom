// Base URL for the API
const BASE = 'http://localhost:3001'; 

// Function to fetch all products from the server
export const fetchProducts = () =>
  fetch(`${BASE}/products`) // Sends a GET request to the /products endpoint
    .then((res) => res.json()); // Parses the response as JSON

// Function to fetch a specific product by its ID
export const fetchProductById = (id) =>
  fetch(`${BASE}/products/${id}`) // Sends a GET request to the /products/:id endpoint
    .then((res) => res.json()); // Parses the response as JSON

// Function to add an item to the server-side cart
export const addToServerCart = (item) =>
  fetch(`${BASE}/cart`, {
    method: 'POST', // Specifies the HTTP method as POST
    headers: { 'Content-Type': 'application/json' }, // Sets the content type to JSON
    body: JSON.stringify(item) // Converts the item object to a JSON string
  });

// Function to delete an item from the server-side cart by its ID
export const deleteFromServerCart = (id) =>
  fetch(`${BASE}/cart/${id}`, { method: 'DELETE' }); // Sends a DELETE request to the /cart/:id endpoint
