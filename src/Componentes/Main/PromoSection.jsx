import React from 'react';
import { useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {ProductListHome} from './Produto/ProductListHome';
import { products } from '../../data/data';
import { CartContext } from '../CartContext';

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
  const {widthProductItem, setLimitProductList, productItemReady} = useContext(CartContext);
  const productListRef= useRef(null);
  const paiAllProductsRef=useRef(null);
  let quantProdsInLine = 0;
  let gap = 0;
  let widthProdsLine = 0;
  let widthPaiAll = 0;

  useEffect(() => {
    if (
      !productListRef.current ||
      !paiAllProductsRef.current
    ) return;
    
    quantProdsInLine = Math.ceil(products.length / 3);
    gap = parseFloat(getComputedStyle(productListRef.current).gap) || 0;
    widthProdsLine = quantProdsInLine * widthProductItem + (quantProdsInLine - 1) * gap;
    widthPaiAll = paiAllProductsRef.current.offsetWidth;
  }, [productItemReady]);


  return (
    <PaiAllProductsStyled ref={paiAllProductsRef}>
      <ProductListHome variant={'home'} categoryKey={categoryKey} ref={productListRef}></ProductListHome>
    </PaiAllProductsStyled>
  );
}

export default PromoSection;