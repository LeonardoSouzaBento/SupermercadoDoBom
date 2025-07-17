import React from "react";
import { useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import ProductItem from "./ProductItem";
import { CartContext } from "../../CartContext";

const DivStyled = styled.div`
  width: auto;
  height: max-content;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 7px;
  overflow-x: scroll;
  position: relative;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 385px) {
    gap: 11px;
  }
  @media screen and (min-width: 385px) and (max-width: 414px) {
    justify-content: space-evenly;
    gap: 0px;
  }

  ${(props) =>
    props.$variant == "search" &&
    css`
      @media screen and (min-width: 385px) and (max-width: 414px) {
        justify-content: center;
        gap: 12px;
      }
      @media screen and (min-width: 414px) and (max-width: 577px) {
        width: 414px;
        margin: auto;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        max-width: 90%;
        margin: auto;
      }
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
        padding-left: 24px;
      }
      @media screen and (min-width: 768px) and (max-width: 993px) {
        max-width: 95%;
      }
    `}
    ${(props) => props.$variant === "cart" && css`
      padding-top: 12px;
      margin-bottom: 0px;
    `}
`;

export const ProductList = React.forwardRef(({ variant, categoryKey }, ref) => {
  const { allProductsInCat, isDraggingRef } = useContext(CartContext);

  const products = allProductsInCat[categoryKey];

  useEffect(() => {
    return () => {
      isDraggingRef.current = false;
    };
  }, []);

  return (
    <>
      <DivStyled $variant={variant} ref={ref}>
        {products.map((product) => (
          <ProductItem
            variant={variant}
            key={`${product.id}-${product.cat_id}`}
            product={product}
          />
        ))}
      </DivStyled>
    </>
  );
});
