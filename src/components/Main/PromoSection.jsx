import { useRef, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { ProductListHome } from './ProductSection/ProductListHome';
import { CartContext } from '../CartContext';
import {useScrollX} from '../../hooks/useScrollX'

const PaiAllProductsStyled = styled.div`
  overflow-x: hidden;
  padding-bottom: 42px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 375px){
    width: calc(100% - 12px);
    margin-left: 12px;
  }
  @media screen and (min-width: 385px) and (max-width: 993px){
    padding-bottom: 70px;
  }
  @media screen and (min-width: 375px) and (max-width: 1200px){
    width: calc(100% - 20px);
    margin-left: 20px;
  }
  @media screen and (min-width: 1201px){
    width: calc(100% - 52px);
    margin: auto;
  }
`;

function PromoSection({categoryKey}) {
  
  const {setLimitProductList, currentCategory, allProductsInCat, promotionsRef} = useContext(CartContext);
  const paiAllProductsRef=useRef(null);
  const timeoutId = useRef(null);
  useScrollX();

  const calcLimit = useCallback(() => {
    if (!promotionsRef.current || !paiAllProductsRef.current) {
      return;
    }
    const firstItem = promotionsRef.current.querySelector(':first-child');
    if (!firstItem) {
      return;
    }
    const widthProductItem = firstItem.offsetWidth;
    const quantProdsInLine = Math.ceil(allProductsInCat[currentCategory]?.length / 2) || 0;
    const gap = parseFloat(getComputedStyle(promotionsRef.current).gap) || 0;
    const widthProdsLine = quantProdsInLine * widthProductItem + (quantProdsInLine > 0 ? (quantProdsInLine - 1) * gap : 0);
    const widthPaiAll = paiAllProductsRef.current.offsetWidth;
    const marginleft = parseFloat(getComputedStyle(paiAllProductsRef.current).marginLeft);
    const calculatedLimit = widthPaiAll - widthProdsLine - marginleft;
    const calculatedLimit2 = calculatedLimit + marginleft;
    window.innerWidth<1201?setLimitProductList(calculatedLimit): setLimitProductList(calculatedLimit2);
  }, [currentCategory, allProductsInCat]);

  const handleResize = useCallback(() => {
    if(timeoutId.current){clearTimeout(timeoutId.current)}
    timeoutId.current = setTimeout(()=>{calcLimit(); timeoutId.current=null}, 300);
  }, [calcLimit]);

  useEffect(() => {
    calcLimit();
  }, [calcLimit])

  useEffect(() => {
    const debouncedResizeHandler = handleResize();
    window.addEventListener('resize', debouncedResizeHandler);

    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, [handleResize]);

  return (
    <PaiAllProductsStyled ref={paiAllProductsRef}>
      <ProductListHome
      categoryKey={categoryKey}  
      ref={promotionsRef}
      />
    </PaiAllProductsStyled>
  );
}

export default PromoSection;
