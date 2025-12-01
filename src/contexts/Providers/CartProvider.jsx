import { useState, useEffect } from "react";
import { CartContext } from "../Contexts/CartContext";

/*Schemas*/
const currentOrderSchema = {
  time: "",
  status: "",
  cartProducts: []
};

export function CartProvider({ children }) {
  /*Lista de produtos*/
  const [cartProducts, setCartProducts] = useState(() => {
    const stored = localStorage.getItem("cartProducts");
    return stored ? JSON.parse(stored) : [];
  });
  useEffect(() => {
    if (cartProducts.length == 0) {
      setCurrentOrder({ time: "", status: "" });
    }
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const quantityItens = cartProducts.reduce((acc, item) => acc + item.quant, 0);

  /*Função para adicionar ou retirar produto*/
  function handleQuantityChange(product, isAdding) {
    setCartProducts((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.id === product.id
      );
      const updatedCart = [...prev];

      if (isAdding) {
        if (existingItemIndex !== -1) {
          // Aumenta a quantidade, se o produto já existir
          updatedCart[existingItemIndex].quant += 1;
        } else {
          // Adiciona o produto
          updatedCart.push({ ...product, quant: 1 });
        }
      } else {
        if (existingItemIndex !== -1) {
          if (updatedCart[existingItemIndex].quant > 1) {
            // Diminui a quantidade
            updatedCart[existingItemIndex].quant -= 1;
          } else {
            // Remove o produto do carrinho
            updatedCart.splice(existingItemIndex, 1);
          }
        }
      }
      return updatedCart;
    });
  }

  const totalAddedValue = cartProducts.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price?.replace(",", "."));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); // valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace(".", ",");
  
  /*Pedido*/
  const [currentOrder, setCurrentOrder] = useState(() => {
    const savedOrder = localStorage.getItem("currentOrder");
    return savedOrder ? JSON.parse(savedOrder) : currentOrderSchema;
  });

  useEffect(() => {
    localStorage.setItem("orderInfo", JSON.stringify(currentOrder));
  }, [currentOrder]);

  return (
    <CartContext.Provider
      value={{
        handleQuantityChange,
        quantityItens,
        totalAddedValue,
        totalValueFormatted,
        setCartProducts,
        cartProducts,
        currentOrder,
        setCurrentOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


