import React from 'react';
import styled from 'styled-components';
import ProductListHome from './Produto/ProductListHome';

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
  return (
    <PaiAllProductsStyled>
      <ProductListHome categoryKey={categoryKey}  variant={variant}></ProductListHome>
    </PaiAllProductsStyled>
  );
}

export default PromoSection;