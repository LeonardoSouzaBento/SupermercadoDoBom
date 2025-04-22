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

const DivDoFooter = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 40px;
    width: 28.5%;
    justify-content: center;
    align-items: center;
 
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

const Pfooter = styled.p`
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

const DivClassStyled = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: white;

    ${props => props.$selected && 
    `background-color: red;`}
`;

function Footer() {

  const { totalQuantity } = useContext(CartContext);

  return (
    <FooterStyled>
      <DivDoFooter>
        <DivPStyed>
          <SpanStyled className="material-symbols-rounded">home</SpanStyled>
          <Pfooter>Inicio</Pfooter>
        </DivPStyed>
        <DivClassStyled $selected={true}></DivClassStyled>
      </DivDoFooter>

      <DivDoFooter>
        <DivPStyed>
          <SpanStyled className="material-symbols-rounded"> shopping_cart</SpanStyled>
          <Pfooter>Carrinho{totalQuantity}</Pfooter>
        </DivPStyed>
        <DivClassStyled></DivClassStyled>
      </DivDoFooter>

      {/* <DivDoFooter>
        <DivPStyed>
          <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
          <Pfooter>Mais</Pfooter>
        </DivPStyed>
        <DivClassStyled></DivClassStyled>
      </DivDoFooter> */}
    </FooterStyled>
  );
}

export default Footer;