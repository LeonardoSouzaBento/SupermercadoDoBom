import React from "react";
import { useContext } from "react";
import styled, { css } from "styled-components";
import ProductItem from "./ProductItem";
import { CartContext } from "../../CartContext";

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
  @media screen and (min-width: 375px) and (max-width: 1201px){
    padding-right: 20px;
  }
  @media screen and (min-width: 385px) and (max-width: 993px){
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

  @media screen and (min-width: 385px) and (max-width: 993px){
    gap: 16px;
  }
  @media screen and (min-width: 993px) {
    gap: 14px;
  }
`;

const NoProcutsStyed = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.32);
  border-radius: 8px;
`;
const PNoneStyled = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
  padding: 16px 0px;
`;

export const ProductListHome = React.forwardRef(({ categoryKey }, ref) => {
  const { allProductsInCat, handleQuantityChange } = useContext(CartContext);

  const products = allProductsInCat[categoryKey];

  const middleIndex = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, middleIndex);
  const secondHalf = products.slice(middleIndex);

  return (
    <DivStyled ref={ref}>
      <DivHalfList>
        {firstHalf.map((product) => (
          <ProductItem
            variant={'home'}
            key={`${product.id}-${product.cat_id}`}
            product={product}
            handleQuantityChange={(product, isAdding) =>
              handleQuantityChange(product, isAdding)
            }
          />
        ))}
      </DivHalfList>

      <DivHalfList>
        {secondHalf.map((product) => (
          <ProductItem
            variant={'home'}
            key={`${product.id}-${product.cat_id}`}
            product={product}
            handleQuantityChange={(product, isAdding) =>
              handleQuantityChange(product, isAdding)
            }
          />
        ))}
      </DivHalfList>

      {products.length == 0 && (
        <NoProcutsStyed>
          <PNoneStyled>Nenhum produto nesta categoria</PNoneStyled>
        </NoProcutsStyed>
      )}
    </DivStyled>
  );
});
