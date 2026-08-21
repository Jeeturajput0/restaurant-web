import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

const parsePrice = (price) => Number(String(price).replace(/[^0-9.]/g, "")) || 0;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item, quantity = 1) => {
    const normalizedItem = {
      ...item,
      image: item.image || item.img || "",
      img: item.image || item.img || "",
    };

    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.name === normalizedItem.name);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.name === normalizedItem.name
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }

      return [...prev, { ...normalizedItem, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((item) => item.name !== name));
  };

  const updateQuantity = (name, quantity) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems
        .reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0),
    [cartItems]
  );

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
