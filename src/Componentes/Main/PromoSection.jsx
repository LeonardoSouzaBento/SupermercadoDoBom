import React from 'react';
import { useState, useRef, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {ProductListHome} from './Produto/ProductListHome';
import { CartContext } from '../CartContext';
import { useScroll } from '../../useScroll';

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

function PromoSection({variant, categoryKey, wasResized}) {
  useScroll();
  const {setLimitProductList, currentCategory, allProductsInCat, promotionsRef, translateX3} = useContext(CartContext);
  const paiAllProductsRef=useRef(null);

  const calcLimit = useCallback(() => {
    if (!promotionsRef.current || !paiAllProductsRef.current) {
      return;
    }
    const firstItem = promotionsRef.current.querySelector(':first-child');
    if (!firstItem) {
      return;
    }
    const widthProductItem = firstItem.offsetWidth;
    const quantProdsInLine = Math.ceil(allProductsInCat[currentCategory]?.length / 3) || 0;
    const gap = parseFloat(getComputedStyle(promotionsRef.current).gap) || 0;
    const widthProdsLine = quantProdsInLine * widthProductItem + (quantProdsInLine > 0 ? (quantProdsInLine - 1) * gap : 0);
    const widthPaiAll = paiAllProductsRef.current.offsetWidth;
    const marginleft = parseFloat(getComputedStyle(paiAllProductsRef.current).marginLeft);
    const calculatedLimit = widthPaiAll - widthProdsLine - marginleft;
    const calculatedLimit2 = calculatedLimit + marginleft;
    window.innerWidth<993?setLimitProductList(calculatedLimit): setLimitProductList(calculatedLimit2);
  }, [currentCategory, allProductsInCat]);

  useEffect(() => {
    calcLimit()
  },[wasResized])
  
  return (
    <PaiAllProductsStyled ref={paiAllProductsRef}>
      <ProductListHome variant={'home'} categoryKey={categoryKey}  ref={promotionsRef} $translateValue={translateX3}></ProductListHome>
    </PaiAllProductsStyled>
  );
}

export default PromoSection;