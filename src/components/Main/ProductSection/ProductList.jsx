import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import ProductItem from "./ProductItem";
import { CartContext } from "../../CartContext";

const DivStyled = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 12px;
  position: relative;
  overflow-x: scroll;
  box-sizing: border-box;
  border-radius: 7px;
  gap: 12px;

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
