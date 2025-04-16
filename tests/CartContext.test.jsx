import React from 'react';                       // ← add
import { renderHook, act } from '@testing-library/react';
import { CartProvider, CartContext } from '../src/context/CartContext';

describe('CartContext', () => {
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
