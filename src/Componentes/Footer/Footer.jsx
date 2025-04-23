import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(255, 255, 255);
    /* background-color:rgba(0, 0, 0, 0.64); */
    height: 60px;
    width: calc(100% - 20px);
    margin: auto;
    position: sticky;
    bottom: 12px;
    z-index: 4;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
    box-sizing: border-box;
    border-radius: 5px;
    @media screen and (min-width: 993px){
     display: none;
    }
`;

const CartDescStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  background-color:rgb(228, 228, 228);
  border-radius: 7px;
  justify-content: space-between;
  padding-right: 12px;
`;
const PCartStyled = styled.p`
 font-family: "Open Sans", Arial, Helvetica, sans-serif;
 padding-bottom: 3px;
`;

const DivSpanCartStyled = styled.div`
  background-color: grey;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpanCartStyled = styled.span`
   font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;

function Footer() {
  const { totalQuantity } = useContext(CartContext);
  const {totalValueFormatted} = useContext(CartContext);
  
  if (totalQuantity <= 0) return null;

  return(
  <FooterStyled>
    {totalQuantity > 0 && 
      <CartDescStyled>
        <DivSpanCartStyled>
          <SpanCartStyled className='material-symbols-rounded'>shopping_basket</SpanCartStyled>
        </DivSpanCartStyled>
        <PCartStyled>R$ {totalValueFormatted}</PCartStyled>
        <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>
      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;