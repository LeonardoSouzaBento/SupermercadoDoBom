import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities(prev => {
      const updated = [...prev];
      updated[index] = newQuantity;
      return updated;
    });
  };

  const totalQuantity = quantities.reduce((sum, q) => sum + q, 0);

  return (
    <CartContext.Provider value={{ quantities, setQuantities, handleQuantityChange, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
