import React from "react";
import { useRef, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import { CartContext } from "../../contexts/CartContext";
import ProductItem from "./ProductItem";
import { useScrollX } from "../../hooks/useScrollX";

const ContainerStyled = styled.div`
  overflow-x: hidden;
  padding-bottom: 42px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 375px) {
    width: calc(100% - 12px);
    margin-left: 12px;
  }
  @media screen and (min-width: 385px) and (max-width: 993px) {
    padding-bottom: 70px;
  }
  @media screen and (min-width: 375px) and (max-width: 1200px) {
    width: calc(100% - 20px);
    margin-left: 20px;
  }
  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
  }
`;

const DivStyled = styled.div`
  width: auto;
  min-height: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  overflow-x: scroll;
  box-sizing: border-box !important;
  border-radius: 7px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 375px) {
    padding-right: 13px;
  }
  @media screen and (min-width: 375px) and (max-width: 1201px) {
    padding-right: 20px;
  }
  @media screen and (min-width: 385px) and (max-width: 993px) {
    gap: 16px;
  }
  @media screen and (min-width: 993px) {
    gap: 14px;
  }
`;

const DivHalfList = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 12px;

  @media screen and (min-width: 385px) and (max-width: 993px) {
    gap: 16px;
  }
  @media screen and (min-width: 993px) {
    gap: 14px;
  }
`;

const NoProcutsStyed = styled.div`
  width: calc(90% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-52%);
  border-radius: 8px;
  background-color: white;

  @media screen and (min-width: 1201px) {
    transform: translateX(-50%);
  }
`;
const PNoneStyled = styled.p`
  font-family: var(--p-font);
  font-weight: 600;
  width: 100%;
  text-align: center;
  padding: 16px 0px;
  color: #292e4e;
  font-size: 1.04em;
`;

const ProductList = React.forwardRef(({ categoryKey }, ref) => {
  const { allProductsInCat } = useContext(CartContext);

  const products = allProductsInCat[categoryKey];

  const middleIndex = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, middleIndex);
  const secondHalf = products.slice(middleIndex);

  return (
    <DivStyled ref={ref}>
      <DivHalfList>
        {firstHalf.map((product) => (
          <ProductItem
            variant={"home"}
            key={`${product.id}-${product.cat_id}`}
            product={product}
          />
        ))}
      </DivHalfList>

      <DivHalfList>
        {secondHalf.map((product) => (
          <ProductItem
            variant={"home"}
            key={`${product.id}-${product.cat_id}`}
            product={product}
          />
        ))}
      </DivHalfList>

      {products.length == 0 && (
        <NoProcutsStyed>
          <PNoneStyled>Não há produtos nesta categoria</PNoneStyled>
        </NoProcutsStyed>
      )}
    </DivStyled>
  );
});

function ProductListHome({ categoryKey, wasResize }) {
  const {
    setLimitProductList,
    currentCategory,
    allProductsInCat,
    productListHomeRef,
    isDraggingRef
  } = useContext(CartContext);

  const paiAllProductsRef = useRef(null);

  useScrollX();

  const calcLimit = useCallback(() => {
    if (!productListHomeRef.current || !paiAllProductsRef.current) {
      return;
    }
    const firstItem = productListHomeRef.current.querySelector(":first-child");
    if (!firstItem) {
      return;
    }
    const widthProductItem = firstItem.offsetWidth;
    const quantProdsInLine =
      Math.ceil(allProductsInCat[currentCategory]?.length / 2) || 0;
    const gap =
      parseFloat(getComputedStyle(productListHomeRef.current).gap) || 0;
    const widthProdsLine =
      quantProdsInLine * widthProductItem +
      (quantProdsInLine > 0 ? (quantProdsInLine - 1) * gap : 0);
    const widthPaiAll = paiAllProductsRef.current.offsetWidth;
    const marginleft = parseFloat(
      getComputedStyle(paiAllProductsRef.current).marginLeft
    );
    const calculatedLimit = widthPaiAll - widthProdsLine - marginleft;
    const calculatedLimit2 = calculatedLimit + marginleft;
    window.innerWidth < 1201
      ? setLimitProductList(calculatedLimit)
      : setLimitProductList(calculatedLimit2);
  }, [currentCategory, allProductsInCat]);

  useEffect(() => {
    calcLimit();
    return () => {
      isDraggingRef.current = false;
    };
  }, []);

  useEffect(() => {
    calcLimit();
  }, [wasResize]);

  useEffect(() => {
    productListHomeRef.current.scrollLeft = 0;
  }, [currentCategory]);

  return (
    <ContainerStyled ref={paiAllProductsRef}>
      <ProductList categoryKey={categoryKey} ref={productListHomeRef} />
    </ContainerStyled>
  );
}

export default ProductListHome;
