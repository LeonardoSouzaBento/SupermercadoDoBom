import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: transparent;
    margin: auto;
    position: sticky;
    bottom: 12px;
    z-index: 4;
    border-radius: 5px;
`;

const CartDescStyled = styled.div`
  display: flex;
  width: 250px;
  max-width: 340px;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex: 1 0;
  /* background-color:rgba(120, 46, 46, 0.91); */
  background-color:rgb(177, 28, 28); 
  border-radius: 24px 0px 0px 24px;
  justify-content: space-between;
  padding-right: 12px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.41);
`;
const PCartStyled = styled.p`
 font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
 padding-bottom: 3px;
 color: white;
`;

const DivSpanCartStyled = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpanCartStyled = styled.span`
   color: white;
   font-variation-settings:
    'FILL' 0,
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
          <SpanCartStyled className='material-symbols-rounded'>cancel</SpanCartStyled>
        </DivSpanCartStyled>
        <DivSpanCartStyled>
          <SpanCartStyled className='material-symbols-rounded'>shopping_cart</SpanCartStyled>
        </DivSpanCartStyled>
        <PCartStyled>R$ {totalValueFormatted}</PCartStyled>
        <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>
      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;