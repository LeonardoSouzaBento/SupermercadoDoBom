import React, { createContext, useState} from 'react';
import { productsCatId1, productsCatId2, productsCatId3} from '../data/data2';
import { products } from '../data/data';


export const CartContext = createContext();

export function CartProvider({ children }) {

  const [currentCategory, setCurrentCategory] = useState(0);

  const allProductsInCat = [products, productsCatId1, productsCatId2, productsCatId3,[],
  [],[],[],[],[],[],[]]

  //array para lembrar as quantidades de product itens alteradas
  const [allQuantities, setAllQuantities] = useState([
    products.map(() => 0),
    productsCatId1.map(() => 0),
    productsCatId2.map(() => 0),
    productsCatId3.map(() => 0),
    [],[],[],[],[],[],[],[]
  ]);

  const [clickHistory, setClickHistory] = useState([]);
  const [viewConfirm, setViewConfirm] = useState(false);
  const [cancelCart, SetCancelCart] = useState(false);

  const handleQuantityChange = (categoryKey, index, newQuantity, id, price, isAdding) => {
    
    setAllQuantities(prev => {
      // clona o array completo de categorias
      const next = [...prev];
      // clona a sub-lista da categoria que mudou (ou cria uma vazia)
      const updatedCategory = [...(next[categoryKey] || [])];
      // atualiza só o índice que mudou
      updatedCategory[index] = newQuantity;
      // coloca a lista atualizada de volta no lugar correto
      next[categoryKey] = updatedCategory;
      return next;
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

  const totalQuantity = clickHistory.reduce((sum, item) => sum + item.quant, 0);

  const totalAddedValue = clickHistory.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price.replace(',', '.'));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); //valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{ allQuantities,
    setAllQuantities, handleQuantityChange, totalQuantity, currentCategory, setCurrentCategory,
    clickHistory, setClickHistory, totalValueFormatted, cancelCart, SetCancelCart, viewConfirm, setViewConfirm, allProductsInCat}}>
      {children}
    </CartContext.Provider>
  );
}


