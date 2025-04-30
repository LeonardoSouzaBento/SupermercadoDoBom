import React from 'react';
import { useContext} from 'react';
import { CartContext } from '../CartContext';
import { products } from '../../data/data';
import ConfirmDialog from './ConfirmDialog';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    height: fit-content;
    width: 100%;
    background-color: transparent;
    margin: auto;
    position: fixed;
    bottom: 7px;
    z-index: 4;
    border-radius: 5px;

    @media screen and (min-width: 993px){
      bottom: 9px;
    }
`;

const CartDescStyled = styled.div`
  display: flex;
  width: 90%;
  max-width: 400px;
  height: 45px;
  background-color:rgb(230, 104, 76);
  border-radius: 14px 0px 0px 14px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const DivCancelECart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 100%;
  gap: 10px;
`;

const DivCartStyled = styled.div`
  border-radius: 50%;
  height: 100%;
  width:38px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivCancelStyled= styled(DivCartStyled)`
  height: 95%;
  width: 42px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.15);
  display: none;
`;

const SpanCancelStyled = styled.div`
  font-variation-settings:
  'FILL' 1;
  color: #fc6b4c;
  font-size: 1.45em;
  font-weight: 600;
`;

const DivSetaStyled = styled(DivCartStyled)`
  width: fit-content;
  margin-left: -4px;
`;

const DivCartSetaStyled = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  gap: 0px;
`;

const SpanCartStyled = styled.span`
   color: white;
   font-size: 1.74em;
   font-weight: 300;
   font-variation-settings:
    'FILL' 1;

  @media screen and (min-width: 320px) and (max-width: 375px){
    font-size: 1.6em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    font-size: 1.7em;
  }
`;

const SpanSetaStyled = styled(SpanCartStyled)`
  @media screen and (min-width: 320px) and (max-width: 375px){
    font-size: 1.5em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    font-size: 1.6em;
  }
  @media screen and (min-width: 577px){
    font-size: 1.7em;
  }
`;

//Divs dos ps
const DivPStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 30px;
`;

const PPrecoStyled = styled.p`
 font-family: "Lato", Arial, Helvetica, sans-serif;
 font-weight: 300;
 color: white;
 letter-spacing: 0.71px;

 @media screen and (min-width: 320px) and (max-width: 375px){
    font-size: 1.06em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    font-size: 1.12em;
  }
  @media screen and (min-width: 577px){
    font-size: 1.14em;
  }
`;

const PItensStyled = styled(PPrecoStyled)`
`;

function Footer() {
  const { totalQuantity, totalValueFormatted, setViewConfirm, viewConfirm, setShoppingCart, setQuantities} = useContext(CartContext);
  const navigate = useNavigate();

  if (totalQuantity <= 0) return null;

  function callCalcel() {
    if (totalQuantity==1){
      setQuantities(products.map(() => 0));
      setShoppingCart([]);
      setViewConfirm(false)
    }else{setViewConfirm(true);}
  }

  return(
  <FooterStyled>
    {totalQuantity > 0 && 
      <CartDescStyled  
        onPointerDown={() => {
        window.startClickTime = Date.now();
        }}
        onPointerUp={(e) => {
        const duration = Date.now() - window.startClickTime;
        if (duration < 300) {
          navigate('/Cart');
        }
        }}>
        
          <DivCancelECart>
            <DivCartSetaStyled>
              <DivCartStyled>
                <SpanCartStyled className='material-symbols-rounded'>shopping_cart</SpanCartStyled>
              </DivCartStyled>
              <DivSetaStyled>
                <SpanSetaStyled className='material-symbols-rounded'>chevron_right</SpanSetaStyled>
              </DivSetaStyled>
            </DivCartSetaStyled>
          </DivCancelECart>

          <DivPStyled>
            <PPrecoStyled>R$ {totalValueFormatted}</PPrecoStyled>
            <PItensStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PItensStyled>
          </DivPStyled>
      </CartDescStyled>
    }
  </FooterStyled>
  )
}

export default Footer;