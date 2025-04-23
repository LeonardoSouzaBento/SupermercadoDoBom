import React, { createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);
  const [clickHistory, setClickHistory] = useState([]);

  const handleQuantityChange = (index, newQuantity, id, price, isAdding) => {
    setQuantities(prev => {
      const updated = [...prev];
      updated[index] = newQuantity;
      return updated;
    });

    setClickHistory(prev => [...prev, { id, price, add: isAdding}]);
  };

  const totalQuantity = quantities.reduce((sum, q) => sum + q, 0);

  const totalAddedValue = clickHistory.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace(',', '.'));
    return item.add ? sum + priceNumber : sum - priceNumber;
  }, 0);

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{ quantities, setQuantities, handleQuantityChange, totalQuantity, clickHistory, totalValueFormatted}}>
      {children}
    </CartContext.Provider>
  );
}


