import React, { createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);
  const [clickHistory, setClickHistory] = useState([]);
  const [viewConfirm, setViewConfirm] = useState(false);
  const [cancelCart, SetCancelCart] = useState(false);

  const handleQuantityChange = (index, newQuantity, id, price, isAdding) => {
    setQuantities(prev => {
      const updated = [...prev];
      updated[index] = newQuantity;
      return updated;
    });
    
    setClickHistory(prev => {
      const updatedHistory = [...prev, { id, price, add: isAdding, quant: 1}];
      
      if (isAdding && updatedHistory.length > 1) {
        for (let i = updatedHistory.length - 2; i >= 0; i--) {
          if (updatedHistory[i].id === id) {
            updatedHistory[i].quant += 1;
            updatedHistory.pop();
            break;
          }
        }
      }

      if (!isAdding) {
        updatedHistory.pop();
        for (let i = updatedHistory.length - 1; i >= 0; i--) {
          if (updatedHistory[i].id === id) {
            updatedHistory.splice(i, 1);
            break;
          }
        }
      }
      return updatedHistory;
    });
  };

  const totalQuantity = quantities.reduce((sum, q) => sum + q, 0);

  const totalAddedValue = clickHistory.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price.replace(',', '.'));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); //valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{ quantities, setQuantities, handleQuantityChange, totalQuantity, 
    clickHistory, setClickHistory, totalValueFormatted, cancelCart, SetCancelCart, viewConfirm, setViewConfirm}}>
      {children}
    </CartContext.Provider>
  );
}


