import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    height: fit-content;
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
  width: 80%;
  max-width: 400px;
  height: 46px;
  background-color:rgb(230, 104, 76);
  border-radius: 24px 0px 0px 24px;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.27);
`;

const DivSpanCartStyled = styled.div`
  border-radius: 50%;
  height: 45px;
  width:38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivSpanCloseStyled= styled(DivSpanCartStyled)`
  height: 40px;
  width: 40px;
  border: 2px solid rgb(213, 97, 77);
  background-color: rgb(255, 255, 255);
  margin-left: 2px;
  box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.15);
`;

const DivSetaStyled = styled(DivSpanCartStyled)`
  width: fit-content;
  margin-left: -4px;
`;

const SpanCartStyled = styled.span`
   color: white;
   font-size: 1.75em;
   font-weight: 300;
   font-variation-settings:
    'FILL' 1;
`;

const SpanCloseStyled = styled(SpanCartStyled)`
  color: #fc6b4c;
  font-size: 1.45em;
  font-weight: 600;
`;

const SpanSetaStyled = styled(SpanCartStyled)`
  font-size: 1.5em;
`;

const PPrecoStyled = styled.p`
 font-family: "Montserrat", Arial, Helvetica, sans-serif;
 font-weight: 300;
 padding-bottom: 3px;
 color: white;
 font-size: 1.1em;
`;

const PItensStyled = styled(PPrecoStyled)`
`;

const ContainerStyled = styled.div`
  width: max-content;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Container2 = styled(ContainerStyled)`
  gap: 0px;
`;

function Footer() {
  const { totalQuantity } = useContext(CartContext);
  const {totalValueFormatted} = useContext(CartContext);
  
  if (totalQuantity <= 0) return null;

  return(
  <FooterStyled>
    {totalQuantity > 0 && 
      <CartDescStyled>

      <ContainerStyled>
        <DivSpanCloseStyled> {/*Essa div tem de ter a função*/}
          <SpanCloseStyled className='material-symbols-rounded'>close</SpanCloseStyled>
        </DivSpanCloseStyled>

        <Container2>
          <DivSpanCartStyled>
            <SpanCartStyled className='material-symbols-rounded'>shopping_cart</SpanCartStyled>
          </DivSpanCartStyled>

          <DivSetaStyled>
            <SpanSetaStyled className='material-symbols-rounded'>chevron_right</SpanSetaStyled>
          </DivSetaStyled>
        </Container2>
       
      </ContainerStyled>
        

        <PPrecoStyled>R$ {totalValueFormatted}</PPrecoStyled>
        <PItensStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PItensStyled>

      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;