import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 63px;
    width: 100%;
    position: sticky;
    bottom: 0;
    z-index: 4;
    box-shadow: 0px -2px 5px #00000032;
    padding: 0px 15px;
    box-sizing: border-box;

    @media screen and (min-width: 993px){
      display: none;
    }
`;

const DivInicioStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 40px;
    min-width: 130px;
    max-width: 330px;
    justify-content: center;
    align-items: center;
    flex: 1 0;
`;

const DivPStyed = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 3px;
`;

const PFooterStyled = styled.p`
    font-family: "Fira Sans", serif;
    font-weight: 400;
    width: max-content;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9em;
`;
const SpanStyled = styled.span`
  font-size: 1.3em;
`;

const CartDescStyled = styled(DivInicioStyled)`
  background-color: #C54B4B;
  color: white;
  border-radius: 7px;
`;
const PCartStyled = styled.p`
 font-family: "Open Sans", Arial, Helvetica, sans-serif;
`;
const SpanCartStyled = styled.span`
  
`;

function Footer() {

  const { totalQuantity } = useContext(CartContext);

  return (
    <FooterStyled>
      <DivInicioStyled>
       <DivPStyed>
          <SpanStyled className="material-symbols-rounded">home</SpanStyled>
          <PFooterStyled>Inicio</PFooterStyled>
        </DivPStyed>
     </DivInicioStyled>

      {totalQuantity == 0 && 
        <DivPStyed>
          <SpanStyled className="material-symbols-rounded"> shopping_cart</SpanStyled>
          <PFooterStyled>Meus Pedidos</PFooterStyled>
        </DivPStyed>
      }

      {totalQuantity > 0 && 
        <CartDescStyled>
          <SpanCartStyled></SpanCartStyled>
          <PCartStyled></PCartStyled>
          <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>
        </CartDescStyled>
      }
    </FooterStyled>
  );
}

export default Footer;