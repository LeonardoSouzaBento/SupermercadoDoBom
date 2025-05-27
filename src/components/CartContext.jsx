import React, { createContext, useState, useEffect, useRef} from 'react';
import { productsCatId1, productsCatId2, productsCatId3} from '../data/products_by_category';
import { promo_products } from '../data/promo_products';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [limitProductList, setLimitProductList] = useState(0);
  const [limitCategories, setLimitCategories] = useState(0);
  const [limitAdvertisements, setLimitAdvertisements] = useState(0);
  
  const advertisementsRef = useRef();
  const categoriesRef = useRef();
  const promotionsRef = useRef();

  const [cartProducts, setCartProducts] = useState([]);
  const [cartQuantities] = useState([]);
  const [searchProducts, setSearchProducts]= useState([]);
  const [searchQuantitites, setSearchQuantities] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(0); //seleção de categorias

  const allProductsInCat = [promo_products, productsCatId1, productsCatId2, productsCatId3,[],
  [],[],[],[],[],[],[], cartProducts, searchProducts];

  const [allQuantities, setAllQuantities] = useState([
    promo_products.map(() => 0),
    productsCatId1.map(() => 0),
    productsCatId2.map(() => 0),
    productsCatId3.map(() => 0),
    [],[],[],[],[],[],[],[], cartQuantities, searchQuantitites
  ]);

  const [shoppingCart, setShoppingCart] = useState([]);

  const handleQuantityChange = (categoryKey, index, newQuantity, product, isAdding) => {
    
    setAllQuantities(prev => { 
      const next = [...prev]; //copia allQuantities
      const updatedCategory = [...(next[categoryKey] || [])]; // copia a categoria específica
      updatedCategory[index] = newQuantity; // altera a quantidade do item desejado
      next[categoryKey] = updatedCategory; // atualiza o array da categoria no array geral
      return next; // devolve o novo estado completo
    });

    //registrar todos os dados dos produtos
    setShoppingCart(prev => {
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

  //Guardar quant. e prods. no carrinho (categoria 12)
  useEffect(() => {
    setAllQuantities(prev => {
      const next = [...prev];
      next[12] = shoppingCart.map(item => item.quant);
      return next;
    });

    const simplifiedCart = shoppingCart.map(item => ({
      id: item.id,
      name: item.name,
      weight: item.weight,
      price: item.price,
      url: item.url,
    }));
    setCartProducts(simplifiedCart);
  }, [shoppingCart]);

  const totalQuantity = shoppingCart.reduce((acc, item) => acc + item.quant, 0);

  const totalAddedValue = shoppingCart.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price.replace(',', '.'));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); //valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{advertisementsRef, categoriesRef, promotionsRef, setLimitProductList, limitProductList,
    setLimitCategories, limitCategories, setLimitAdvertisements, limitAdvertisements, allQuantities,
    setAllQuantities, handleQuantityChange, totalQuantity, currentCategory, setCurrentCategory,
    shoppingCart, setShoppingCart, totalAddedValue,totalValueFormatted, allProductsInCat, setCartProducts, setSearchProducts, setSearchQuantities}}>
      {children}
    </CartContext.Provider>
  );
}

  // const [isMobile, setIsMobile] = useState(false);
  // const [translateX1, setTranslateX1] = useState(0);
  // const [translateX2, setTranslateX2] = useState(0);
  // const [translateX3, setTranslateX3] = useState(0);

