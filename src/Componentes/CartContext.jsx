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

  const handleQuantityChange = (categoryKey, index, newQuantity, product, isAdding) => {
    
    setAllQuantities(prev => { 
      const next = [...prev]; //copia allQuantities
      const updatedCategory = [...(next[categoryKey] || [])]; // copia a categoria específica
      updatedCategory[index] = newQuantity; // altera a quantidade do item desejado
      next[categoryKey] = updatedCategory; // atualiza o array da categoria no array geral
      return next; // devolve o novo estado completo
    });

    setClickHistory(prev => {
      const existingIndex = prev.findIndex(item => product.id === item.id);
      const updatedHistory = [...prev];
  
      if (isAdding) {
        if (existingIndex !== -1) {
          // Atualiza quantidade se já existir
          updatedHistory[existingIndex].quant += 1;
        } else {
          // Adiciona novo item se não existir
          updatedHistory.push({ ...product, quant: 1 });
        }
      } else {
        if (existingIndex !== -1) {
          if (updatedHistory[existingIndex].quant > 1) {
            // Diminui quantidade se maior que 1
            updatedHistory[existingIndex].quant -= 1;
          } else {
            // Remove item se quantidade chegar a 0
            updatedHistory.splice(existingIndex, 1);
          }
        }
      }
      
      return updatedHistory;
    });
  };

  const totalQuantity = clickHistory.reduce((acc, item) => acc + item.quant, 0);

  const totalAddedValue = clickHistory.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price.replace(',', '.'));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); //valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{ allQuantities,
    setAllQuantities, handleQuantityChange, totalQuantity, currentCategory, setCurrentCategory,
    clickHistory, setClickHistory, totalAddedValue,totalValueFormatted, cancelCart, SetCancelCart, viewConfirm, setViewConfirm, allProductsInCat}}>
      {children}
    </CartContext.Provider>
  );
}


