import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { CartContext } from '../../CartContext';

const DivStyled = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${props.$translateValue ?? 0}px)`,
  }
  }))`
  will-change: transform;
  transition: transform 0.1s linear;
  overflow-x: visible;
  width: ${(props) => props.$variant === 'inSearch' ? "calc(100% - 30px)" : "100%"};
  height: ${(props) => props.$variant === 'home' ? "auto" : "max-content"};
  padding: 0px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: ${(props) => props.$variant === 'home' ? "column" : "row"};
  flex-wrap: wrap;
  justify-content: ${(props) => props.$variant === 'home' ? "flex-start" : "center"};
  gap: 12px;
  position: relative;

  ${(props) => props.$variant === 'inSearch' && 'margin: auto;'}

  @media screen and (min-width: 320px) and (max-width: 375px){
    gap: 8px;
    height: ${(props) => props.$variant === 'home' ? "570px" : "max-content"};
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    height: ${(props) => props.$variant === 'home' ? "593px" : "max-content"};
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    height: ${(props) => props.$variant === 'home' ? "552px" : "max-content"};
  }
  @media screen and (min-width: 769px) and (max-width: 992px){
    height: ${(props) => props.$variant === 'home' ? "555px" : "max-content"};
  }
  @media screen and (min-width: 993px){
    padding-bottom: 5px;
    height: 540px;
    gap: 11px;
  }
`;

const NoProcutsStyed= styled.div`
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
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 8px;
`;
const PNoneStyled = styled.p`
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;


export const ProductListHome = React.forwardRef (({variant, categoryKey, $translateValue}, ref)=>{
  const { allQuantities, allProductsInCat, handleQuantityChange} = useContext(CartContext);

  const products = allProductsInCat[categoryKey];
  const quantities = allQuantities[categoryKey];
  
  return ( 
    <DivStyled $variant={variant} ref={ref} $translateValue={$translateValue}>
      {products.map((product, idx) => (
        <ProductItem
          variant={variant}
          key={`${product.id}-${idx}`}
          id={product.id}
          product={product}
          quantity={quantities[idx] || 0}
          onQuantityChange={(newQuantity, isAdding) =>
          handleQuantityChange(categoryKey, idx, newQuantity, product, isAdding)}
        />
      ))}
      {products.length==0 &&
      (<NoProcutsStyed>
        <PNoneStyled>{categoryKey==12?'Nenhum produto no seu carrinho':'Nenhum produto encontrado'}</PNoneStyled>
      </NoProcutsStyed>
      )}
    </DivStyled>
  );
})

