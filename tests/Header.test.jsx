import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';          // ← add
import { CartContext } from '../src/context/CartContext';
import Header from '../src/components/Header';

const mockCtx = { cartItems: [{ id: 'i7', quantity: 2 }] };

it('shows total items from context', () => {
  render(
    <MemoryRouter>                                       {/* wrap */}
      <CartContext.Provider value={mockCtx}>
        <Header />
      </CartContext.Provider>
    </MemoryRouter>
  );
  expect(screen.getByRole('button', { name: /cart \(2\)/i }))
    .toBeInTheDocument();
});
