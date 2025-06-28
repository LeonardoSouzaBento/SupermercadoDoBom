import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import ProductItem from "./ProductItem";
import { CartContext } from "../../CartContext";

const DivStyled = styled.div`
  will-change: transform;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 12px;
  position: relative;
  overflow-x: scroll;
  box-sizing: border-box !important;
  border-radius: 7px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      padding-top: 4px;
      flex-direction: row;
    `}

  ${(props) =>
    props.$variant === "cart" &&
    css`
      padding-left: 0px;
      padding-right: 0px;
      justify-content: center;
      @media screen and (max-width: 375px) {
        gap: 8px;
      }
      @media screen and (min-width: 375px) and (max-width: 596px) {
        justify-content: space-evenly ;
      }
      @media screen and (min-width: 596px) {
        gap: 12px;
      }
    `}

  ${(props) =>
    props.$variant === "inSearch" &&
    css`
      padding: 4px;
      padding-left: 5%;
      height: auto;
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
        padding-left: 24px;
      }
    `}
`;

export const ProductList = React.forwardRef(({ variant, categoryKey }, ref) => {
  const { allProductsInCat, handleQuantityChange } = useContext(CartContext);

  const products = allProductsInCat[categoryKey];

  return (
    <DivStyled $variant={variant} ref={ref}>
      {products.map((product) => (
        <ProductItem
          variant={variant}
          key={`${product.id}-${product.cat_id}`}
          product={product}
          handleQuantityChange={(product, isAdding) =>
            handleQuantityChange(product, isAdding)
          }
        />
      ))}
    </DivStyled>
  );
});
