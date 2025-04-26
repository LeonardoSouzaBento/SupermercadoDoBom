import React from 'react';
import { useContext} from 'react';
import { CartContext } from '../CartContext';
import { products } from '../../data/data';
import ConfirmDialog from './ConfirmDialog';
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
  width: 90%;
  max-width: 400px;
  height: 42px;
  background-color:rgb(230, 104, 76);
  border-radius: 27px 0px 0px 27px;
  justify-content: space-between;
  align-items: center;
  box-shadow: -2px 1px 5px rgba(0, 0, 0, 0.34);
  border: 3px solid #D25F45;

  
  @media screen and (min-width: 320px) and (max-width: 375px){
    min-width: 95%;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    
  }
  @media screen and (min-width: 577px){
    
  }
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
  height: 42px;
  width: 42px;
  background-color: rgb(255, 255, 255);
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
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Container2 = styled(ContainerStyled)`
  gap: 0px;
`;

function Footer() {
  const { totalQuantity, totalValueFormatted, setViewConfirm, viewConfirm, setClickHistory, setQuantities} = useContext(CartContext);

  if (totalQuantity <= 0) return null;

  function callCalcel() {
    if (totalQuantity==1){
      setQuantities(products.map(() => 0));
      setClickHistory([]);
      setViewConfirm(false)
    }else{setViewConfirm(true);}
  }

  return(
  <FooterStyled>
    {totalQuantity > 0 && 
      <CartDescStyled>
        <ContainerStyled>
          {!viewConfirm && (<>
          <DivSpanCloseStyled onClick={callCalcel}>
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
        
          <PPrecoStyled>R$ {totalValueFormatted}</PPrecoStyled>
          <PItensStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PItensStyled>
          </>)}
          {viewConfirm && <ConfirmDialog></ConfirmDialog>}
        </ContainerStyled>
      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;