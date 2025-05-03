import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import {ProductListHome} from './Produto/ProductListHome';
import { products } from '../../data/data';

const PaiAllProductsStyled = styled.div`
   overflow-x: hidden;
   margin-left: 10px;
   @media screen and (min-width: 320px) and (max-width: 375px){
    width: calc(100% - 15px);
    margin-left: 15px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    width: calc(100% - 20px);
    margin-left: 20px;
  }
  @media screen and (min-width: 577px) and (max-width: 1200px){
    width: calc(100% - 20px);
    margin-left: 20px;
  }
  @media screen and (min-width: 1201px){
    width: calc(100% - 52px);
    margin: auto;
  }
`;

function PromoSection({variant, categoryKey}) {

  const productListRef= useRef(null);
  const paiAllProductsRef=useRef(null);

  if(productListRef.current && paiAllProductsRef.current){
    let quantProdsInLine = Math.ceil(products.length / 3);
    let gap = parseFloat(getComputedStyle(productListRef.current).gap);
    console.log('gap: '+gap);
  }

  return (
    <PaiAllProductsStyled ref={paiAllProductsRef}>
      <ProductListHome variant={'home'} categoryKey={categoryKey} ref={productListRef}></ProductListHome>
    </PaiAllProductsStyled>
  );
}

export default PromoSection;