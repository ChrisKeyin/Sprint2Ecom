import React from 'react';
import { renderHook, act } from '@testing-library/react'; // Importing utilities for testing hooks and simulating actions
import { CartProvider, CartContext } from '../src/context/CartContext'; // Importing the CartProvider and CartContext for testing

// Grouping tests for the CartContext
describe('CartContext', () => {
  // Test case to verify that an item is added to the cart
  it('adds item to cart', () => {
    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

    const { result } = renderHook(() => React.useContext(CartContext), {
      wrapper
    });

    act(() => {
      result.current.addToCart({ id: 'i7', price: 999 });
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].id).toBe('i7');
  });
});
