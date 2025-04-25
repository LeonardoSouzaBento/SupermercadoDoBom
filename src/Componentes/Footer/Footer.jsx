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
  flex: 1 0;
  background-color:  #FC6B4C;
  /* #FC6B4C, fc8a4c */
  border-radius: 24px 0px 0px 24px;
  justify-content: space-between;
  padding-right: 12px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.44);
`;
const PCartStyled = styled.p`
 font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
 padding-bottom: 3px;
 color: white;
`;

const DivSpan2Styled = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivSpan1Styled= styled(DivSpan2Styled)`
  height: 42px;
  width: 42px;
  border: 2px solid red;
  background-color: rgb(255, 255, 255);
  margin-left: 2px;
`;

const SpanCartStyled = styled.span`
   color: white;
   font-weight: 200;
   font-size: 2.1em;
   /* font-variation-settings:
   'FILL' 1; */
   justify-self: flex-start;
`;

const SpanCart1Styled = styled(SpanCartStyled)`
  color: rgb(189, 56, 61);
  font-size: 1.7em;
  font-weight: 300;
`;

function Footer() {
  const { totalQuantity } = useContext(CartContext);
  const {totalValueFormatted} = useContext(CartContext);
  
  if (totalQuantity <= 0) return null;

  return(
  <FooterStyled>
    {totalQuantity > 0 && 
      <CartDescStyled>
        <DivSpan1Styled> {/*Essa div tem de ter a função*/}
          <SpanCart1Styled className='material-symbols-rounded'>close</SpanCart1Styled>
        </DivSpan1Styled>

        <DivSpan2Styled>
          <SpanCartStyled className='material-symbols-rounded'>shopping_cart_checkout</SpanCartStyled>
        </DivSpan2Styled>

        <PCartStyled>R$ {totalValueFormatted}</PCartStyled>
        <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>

      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;