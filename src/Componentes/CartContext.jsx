import React, { createContext, useState} from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [quantities, setQuantities] = useState([]);
  const [quantities1, setQuantities1] = useState([]);
  const [quantities2, setQuantities2] = useState([]);
  const [quantities3, setQuantities3] = useState([]);
  const [quantities4, setQuantities4] = useState([]);
  const [quantities5, setQuantities5] = useState([]);
  const [quantities6, setQuantities6] = useState([]);
  const [quantities7, setQuantities7] = useState([]);
  const [quantities8, setQuantities8] = useState([]);
  const [quantities9, setQuantities9] = useState([]);
  const [quantities10, setQuantities10] = useState([]);
  const [quantities11, setQuantities11] = useState([]);

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


