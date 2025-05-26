// CartContext.jsx

import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Delete item from cart
  const deleteFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.name !== item.name));
  };

  // Update item quantity in the cart
  const updateItemQuantity = (item, quantityChange) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + quantityChange, 1) }
          : cartItem
      )
    );
  };
  const clearCart = () => {
    setCart([]);  // Clear all items
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, updateItemQuantity,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export the CartProvider correctly
export default CartProvider ;
