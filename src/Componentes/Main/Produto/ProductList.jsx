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

function ProductList({variant, categoryKey}) {
  const { allQuantities, allProductsInCat, setAllQuantities, handleQuantityChange} = useContext(CartContext);

  const products = allProductsInCat[categoryKey];
  const quantities = allQuantities[categoryKey];

  useEffect(() => {
    setAllQuantities(prev => {
      const next = [...prev];
      if (!next[categoryKey] || next[categoryKey].length !== products.length) {
        next[categoryKey] = products.map(() => 0);
      }
      return next;
    });
  }, [categoryKey, products, setAllQuantities]);

  return (
    <DivStyled $variant={variant}>
      {products.map((product, index) => (
        <ProductItem 
          variant={variant}
          key={product.id} 
          id={product.id}
          $price={product.price}
          products={product}
          quantity={quantities[index] || 0}
          onQuantityChange={(newQuantity, id, price, isAdding) =>
            handleQuantityChange(categoryKey, index, newQuantity, id, price, isAdding)}
        />
      ))}
    </DivStyled>
  );
}


export default ProductList;
