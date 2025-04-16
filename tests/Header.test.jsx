import { render, screen } from '@testing-library/react'; // Importing testing utilities for rendering components and querying the DOM
import { MemoryRouter } from 'react-router-dom'; // Importing MemoryRouter to provide routing context for the test
import { CartContext } from '../src/context/CartContext'; // Importing the CartContext to provide mock context values
import Header from '../src/components/Header'; // Importing the Header component to be tested

// Mock context value for the CartContext
const mockCtx = { cartItems: [{ id: 'i7', quantity: 2 }] }; // Simulating a cart with 2 items of product 'i7'

// Test case to verify that the total items in the cart are displayed correctly
it('shows total items from context', () => {
  // Rendering the Header component with the mock CartContext and MemoryRouter
  render(
    <MemoryRouter>
      <CartContext.Provider value={mockCtx}>
        <Header />
      </CartContext.Provider>
    </MemoryRouter>
  );

  // Asserting that the cart button displays the correct total items (2)
  expect(screen.getByRole('button', { name: /cart \(2\)/i }))
    .toBeInTheDocument();
});
