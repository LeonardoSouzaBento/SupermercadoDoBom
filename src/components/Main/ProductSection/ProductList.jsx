import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import ProductItem from "./ProductItem";
import { CartContext } from "../../CartContext";

const DivStyled = styled.div`
  will-change: transform;
  width: auto;
  height: auto;
  padding-bottom: 4px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 15px;
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
    props.$variant === "home" &&
    css`
      height: 590px;
      @media screen and (min-width: 577px){
        gap: 16px;
      }
      @media screen and (min-width: 993px) {
        height: 557px;
      }
    `}
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      padding-top: 4px;
      flex-direction: row;
      justify-content: center;
    `}

  ${(props) =>
    props.$variant === "cart" &&
    css`
      padding-right: 0px;
      gap: 12px;
    `}

  ${(props) =>
    props.$variant === "inSearch" &&
    css`
      padding-left: 16px;
      height: auto;
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
      }
      @media screen and (min-width: 993px) {
        padding-left: 20px;
      }
    `}
`;

const NoProcutsStyed = styled.div`
  height: max-content;
  width: max-content;
  padding: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.32);
  border-radius: 8px;
`;
const PNoneStyled = styled.p`
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;



export const ProductList = React.forwardRef(
  ({ variant, categoryKey }, ref) => {
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
        {products.length == 0 && (
          <NoProcutsStyed>
            <PNoneStyled>
              {categoryKey == 12
                ? "Nenhum produto no seu carrinho"
                : "Nenhum produto registrado"}
            </PNoneStyled>
          </NoProcutsStyed>
        )}
      </DivStyled>
    );
  }
);
