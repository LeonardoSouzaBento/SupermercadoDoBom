import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { products } from '../../../data/data';

const DivStyled = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 12px;
    padding-left: 5px;
    padding-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 12px;
    box-sizing: border-box;
    @media screen and (min-width: 993px){
      gap: 15px;
    }
`;

function ProductList() {
  return (
    <DivStyled>
       {products.map((products) => (
        <ProductItem key={products.id} products={products}/>
      ))}
    </DivStyled>
  );
}

export default ProductList;
