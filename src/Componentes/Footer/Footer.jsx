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
  background-color:rgb(227, 65, 70);
  border-radius: 24px 0px 0px 24px;
  justify-content: space-between;
  padding-right: 12px;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.24);
`;
const PCartStyled = styled.p`
 font-family: "Roboto Flex", Arial, Helvetica, sans-serif;
 padding-bottom: 3px;
 color: white;
`;

const DivSpanStyled = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivSpan1Styled= styled(DivSpanStyled)`
  height: 42px;
  width: 42px;
  border: 2px solid red;
  /* background-color: rgb(181, 52, 56); */
  background-color: rgb(255, 255, 255);
  margin-left: 2px;
`;

const SpanCartStyled = styled.span`
   color: white;
`;

const SpanCart1Styled = styled(SpanCartStyled)`
  color: rgb(189, 56, 61);
  font-size: 1.9em;
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
        <DivSpan1Styled> {/*Essa div tem de ter a função*/}
          <SpanCart1Styled className='material-symbols-rounded'>cancel</SpanCart1Styled>
        </DivSpan1Styled>

        <DivSpanStyled>
          <SpanCartStyled className='material-symbols-rounded'>shopping_cart</SpanCartStyled>
        </DivSpanStyled>

        <PCartStyled>R$ {totalValueFormatted}</PCartStyled>
        <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>

      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;