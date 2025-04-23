import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { FooterStyled, DivInicioStyled, DivPStyed, PFooterStyled,
  SpanStyled, CartDescStyled, PCartStyled, DivSpanCartStyled,SpanCartStyled, MyCartStyled} from './ComponentesFooter';

function Footer() {

  const { totalQuantity } = useContext(CartContext);
  const {totalValueFormatted} = useContext(CartContext);

  return (
    <FooterStyled>
      <DivInicioStyled>
       <DivPStyed>
          <SpanStyled className="material-symbols-rounded">home</SpanStyled>
          <PFooterStyled>Inicio</PFooterStyled>
        </DivPStyed>
     </DivInicioStyled>

      {totalQuantity == 0 &&
        <MyCartStyled>
          <DivPStyed>
           <SpanStyled className="material-symbols-rounded"> shopping_cart</SpanStyled>
            <PFooterStyled>Meus Pedidos</PFooterStyled>
          </DivPStyed>
        </MyCartStyled>
      }

      {totalQuantity > 0 && 
        <CartDescStyled>
          <DivSpanCartStyled>
            <SpanCartStyled className='material-symbols-rounded'>shopping_cart</SpanCartStyled>
          </DivSpanCartStyled>
          <PCartStyled>R$ {totalValueFormatted}</PCartStyled>
          <PCartStyled>{totalQuantity} {totalQuantity==1?'item':'itens'}</PCartStyled>
        </CartDescStyled>
      }
    </FooterStyled>
  );
}

export default Footer;