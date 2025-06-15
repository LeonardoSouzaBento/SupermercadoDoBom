import React from 'react';
import { useContext } from 'react';
import styled, {css} from 'styled-components';
import ProductItem from './ProductItem';
import { CartContext } from '../../CartContext';

const DivStyled = styled.div`
  will-change: transform;
  max-width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  position: relative;
  overflow-x: scroll;
  box-sizing: border-box;
  padding-right: 20px;
  padding-bottom: 4px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

   ${(props) =>
    props.$variant === 'home' &&
    css`
      @media screen and (min-width: 320px) and (max-width: 374px) {
        gap: 8px;
        height: 565px;
      }
      @media screen and (min-width: 375px) and (max-width: 576px) {
        height: 592px;
      }
      @media screen and (min-width: 577px){
        height: 577px;
      }
      @media screen and (min-width: 993px){
        padding-bottom: 5px;
        padding-right: 4px;
        height: 548px;
        gap: 11px;
      }
    `
  }
  ${props => props.$variant==='cart' && css`
    flex-direction: row;
    justify-content: center;
    padding-right: 0px;
  `}
  ${props => props.$variant==='inSearch' && css`
    height: auto;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 16px;

    @media screen and (min-width: 993px) {
      padding-left: 20px;
    }
  `}
`;

const NoProcutsStyed= styled.div`
  height: max-content;
  width: max-content;
  padding: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 16px;
  right: 50%;
  transform: translateX(50%);
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.14);
  border: 1px solid rgb(136, 136, 136);
  border-radius: 8px;
`;
const PNoneStyled = styled.p`
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;


export const ProductListHome = React.forwardRef (({variant, categoryKey }, ref)=>{
  const {allProductsInCat, handleQuantityChange} = useContext(CartContext);

  const products = allProductsInCat[categoryKey];
  
  return ( 
    <DivStyled $variant={variant} ref={ref}>
      {products.map((product) => (
        <ProductItem
          variant={variant}
          key={`${product.id}-${product.cat_id}`}
          product={product}
          handleQuantityChange={(product, isAdding) => handleQuantityChange(product, isAdding)}
        />
      ))}
      {products.length==0 &&
      (<NoProcutsStyed>
        <PNoneStyled>{categoryKey == 12 ? "Nenhum produto no seu carrinho" : 'Nenhum produto registrado'}</PNoneStyled>
      </NoProcutsStyed>
      )}
    </DivStyled>
  );
})

