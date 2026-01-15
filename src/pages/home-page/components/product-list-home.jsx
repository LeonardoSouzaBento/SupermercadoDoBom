import React from 'react';
import { useRef, useContext, useEffect, useCallback } from 'react';
import { useScrollX } from '@hooks/useScrollX';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import ProductItem from '@components/product-list/product-item';
import { CentralizeDiv } from '@components/generic-stylized-tags';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  overflow-x: hidden;
  position: relative;
  z-index: 2;

  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
  }
`;

const DivStyled = styled.div`
  width: auto;
  height: auto;
  min-height: 40rem;
  padding-bottom: 1.2rem;
  padding-right: 2rem;
  padding-left: 0.8rem;
  padding-top: 0.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 1.4rem;
  overflow-x: scroll;
  border-radius: 0.7rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 375px) {
    min-height: 39.2rem;
  }
  @media screen and (min-width: 993px) {
    min-height: 28.4rem;
  }
  @media screen and (min-width: 1201px) {
    padding-right: 0.8rem;
    margin-right: 0;
  }
`;

const DivHalfList = styled.div`
  height: auto;
  width: auto;
  display: flex;
  gap: 1.4rem;
`;

const NoProcutsStyed = styled(CentralizeDiv)`
  width: calc(90% - 20px);
  padding: 1.2rem 0;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-52%);
  border-radius: 0.8rem;
  background-color: var(--white-foreground);

  @media screen and (min-width: 1201px) {
    transform: translateX(-50%);
  }

  & p {
    font-family: var(--font-body);
    font-weight: 500;
    width: 100%;
    text-align: center;
    color: var(--dark-primary);
  }
`;

const ProductList = React.forwardRef(({ categoryKey }, ref) => {
  const { allProductsInCat } = useContext(HomeDivsContext);

  const products = allProductsInCat[categoryKey];

  const middleIndex = Math.ceil(products.length / 2);
  const firstHalf = products.slice(0, middleIndex);
  const secondHalf = products.slice(middleIndex);

  return (
    <DivStyled ref={ref}>
      <DivHalfList>
        {firstHalf.map((product) => (
          <ProductItem variant={'home'} key={`${product.id}-${product.cat_id}`} product={product} />
        ))}
      </DivHalfList>

      <DivHalfList>
        {secondHalf.map((product) => (
          <ProductItem variant={'home'} key={`${product.id}-${product.cat_id}`} product={product} />
        ))}
      </DivHalfList>

      {products.length == 0 && (
        <NoProcutsStyed>
          <p>Não há produtos nesta categoria</p>
        </NoProcutsStyed>
      )}
    </DivStyled>
  );
});

function ProductListHome({ categoryKey, wasResize }) {
  const {
    setLimitProductList,
    currentCategory,
    allProductsInCat,
    productListHomeRef,
    isDraggingRef,
  } = useContext(HomeDivsContext);

  const paiAllProductsRef = useRef(null);

  useScrollX();

  const calcLimit = useCallback(() => {
    if (!productListHomeRef.current || !paiAllProductsRef.current) {
      return;
    }
    const firstItem = productListHomeRef.current.querySelector(':first-child');
    if (!firstItem) {
      return;
    }
    const widthProductItem = firstItem.offsetWidth;
    const quantProdsInLine = Math.ceil(allProductsInCat[currentCategory]?.length / 2) || 0;
    const gap = parseFloat(getComputedStyle(productListHomeRef.current).gap) || 0;
    const widthProdsLine =
      quantProdsInLine * widthProductItem +
      (quantProdsInLine > 0 ? (quantProdsInLine - 1) * gap : 0);
    const widthPaiAll = paiAllProductsRef.current.offsetWidth;
    const marginleft = parseFloat(getComputedStyle(paiAllProductsRef.current).marginLeft);
    const calculatedLimit = widthPaiAll - widthProdsLine - marginleft;
    const calculatedLimit2 = calculatedLimit + marginleft;
    window.innerWidth < 1201
      ? setLimitProductList(calculatedLimit)
      : setLimitProductList(calculatedLimit2);
  }, [currentCategory, allProductsInCat]);

  useEffect(() => {
    calcLimit();
    return () => {
      isDraggingRef.current = false;
    };
  }, []);

  useEffect(() => {
    calcLimit();
  }, [wasResize]);

  useEffect(() => {
    productListHomeRef.current.scrollLeft = 0;
  }, [currentCategory]);

  return (
    <ContainerStyled ref={paiAllProductsRef}>
      <ProductList categoryKey={categoryKey} ref={productListHomeRef} />
    </ContainerStyled>
  );
}

export default ProductListHome;
