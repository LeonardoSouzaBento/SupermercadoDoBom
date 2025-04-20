import React from 'react';
import styled from 'styled-components';
import ProductList from './Produto/ProductList';

const PaiAllProductsStyled = styled.div`
   overflow-x: hidden;
`;

function PromoSection() {
  return (
    <PaiAllProductsStyled>
      <ProductList></ProductList>
      <ProductList></ProductList>
      <ProductList></ProductList>
    </PaiAllProductsStyled>
  );
}

export default PromoSection;