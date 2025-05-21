import { useContext, useState} from 'react';
import { CartContext } from '../CartContext';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import ConfirmDialog from './ConfirmDialog';

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    height: 45px;
    width: 100%;
    background-color: transparent;
    position: fixed;
    bottom: 7px;
    z-index: 2;
    border-radius: 5px;
    @media screen and (min-width: 993px){
      bottom: 9px;
    }
`;

const CartDescStyled = styled.div`
  display: flex;
  width: 90%;
  max-width: 400px;
  height: 40px;
  border: 4px solid rgb(230, 104, 76);
  background-color:rgb(230, 104, 76);
  border-radius: 23px 0px 0px 23px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
`;

const DivCancelECart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
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
  height: 100%;
  width: 42px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.16);
`;

const SpanCancelStyled = styled.div`
  font-variation-settings:
  'FILL' 1;
  color: rgb(69, 44, 44);
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

export default function Footer() {
  const { totalQuantity, totalValueFormatted} = useContext(CartContext);
  const navigate = useNavigate();
  const [viewConfirm, setViewConfirm] = useState(false);
  const [isOnTheCart, setIsOnTheCart] = useState(false);

  if (totalQuantity <= 0 && viewConfirm===false) {return null}

  if(viewConfirm===false){
  return(
  <FooterStyled>
    <CartDescStyled  
      onPointerDown={() => {
      window.startClickTime = Date.now();
      }}
      onPointerUp={(e) => {
      const duration = Date.now() - window.startClickTime;
      if (duration < 300) {
        setIsOnTheCart(true);
        navigate('/Cart');
      }
      }}>
      
        <DivCancelECart>
          <DivCancelStyled onPointerDown={(e)=>{e.stopPropagation(e); setViewConfirm(true)}}>
            <SpanCancelStyled className='material-symbols-outlined'>
              delete
            </SpanCancelStyled>
          </DivCancelStyled>

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
  </FooterStyled>
  )}
  if(viewConfirm){
    return(
      <ConfirmDialog setViewConfirm={setViewConfirm}></ConfirmDialog>
    )
  }
}