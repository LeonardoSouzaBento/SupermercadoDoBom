import { HomeDivsContext } from "../Contexts/HomeDivsContext";
import { useState, useRef } from "react";
import { allProducts } from "@data/productList";

export function HomeDivsProvider({ children }) {
  const [limitProductList, setLimitProductList] = useState(0);
  const [limitCategories, setLimitCategories] = useState(0);
  const [limitAdvertisements, setLimitAdvertisements] = useState(0);
  const advertisementsRef = useRef();
  const categoriesRef = useRef();
  const productListHomeRef = useRef();
  const isDraggingRef = useRef(null);
  const pointerPositionRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(1);
  const allProductsInCat = [...allProducts, [], []];

  return (
    <HomeDivsContext.Provider
      value={{
        advertisementsRef,
        categoriesRef,
        productListHomeRef,
        setLimitProductList,
        limitProductList,
        setLimitCategories,
        currentCategory,
        setCurrentCategory,
        limitCategories,
        setLimitAdvertisements,
        limitAdvertisements,
        isDraggingRef,
        pointerPositionRef,
        allProductsInCat,
      }}
    >
      {children}
    </HomeDivsContext.Provider>
  );
}


