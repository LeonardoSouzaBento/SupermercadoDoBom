import React from 'react';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { CartContext } from '../../CartContext';

const DivStyled = styled.div`
    width: 100%;
    padding: 0px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;
    position: relative;
    @media screen and (min-width: 320px) and (max-width: 375px){
      gap: 8px;
      height: 570px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      height: 593px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
       height: 552px;
    }
    @media screen and (min-width: 769px) and (max-width: 992px){
       height: 555px;
    }
    @media screen and (min-width: 993px){
      padding-bottom: 5px;
      height: 540px;
      gap: 11px;
    }
`;

const NoProcutsStyed= styled.div`
  height: 100px;
  width: 100%;
  max-width: 220px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 100px;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 7px;
`;
const PNoneStyled = styled.p`
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-left: 15px;
`;

function ProductListHome({variant, categoryKey}) {
  const { allQuantities, allProductsInCat, handleQuantityChange} = useContext(CartContext);

  const products = allProductsInCat[categoryKey];
  const quantities = allQuantities[categoryKey];

  return (
    <DivStyled $variant={variant}>
      {products.length === 0 ? (
        <NoProcutsStyed>
          <span className="material-symbols-outlined">
          search_off
          </span>
          <PNoneStyled>Nenhum produto nesta categoria ainda</PNoneStyled>
        </NoProcutsStyed>
      ) : (
      products.map((product, idx) => (
        <ProductItem 
          variant={variant}
          key={product.id} 
          id={product.id}
          $price={product.price}
          product={product}
          quantity={quantities[idx] || 0}
          onQuantityChange={(newQuantity, isAdding) =>
            handleQuantityChange(categoryKey, idx, newQuantity, product, isAdding)}
        />
      )))}
    </DivStyled>
  );
}


export default ProductListHome;
