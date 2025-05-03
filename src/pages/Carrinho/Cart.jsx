import { useContext, useState } from 'react'
import { CartContext } from '../../Componentes/CartContext';
import {ProductListHome} from '../../Componentes/Main/Produto/ProductListHome.jsx';
import {
  BodyStyled,
  MainStyled,
  CartSectionStyed,
  DivHeadStyled,
  PHeadStyled,
  ContainerOfListStyled,
  DivAddStyled,
  PAddStyled,
  FinishSectionStyled,
  ContainerStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivValueStyled,
  DivStyled,
  PValueStyled,
  DivContinueStyled,
  PContinueStyled
} from './ComponentsCart.jsx';


//padding: ${(props) => props.$variant === "cart" ? "8px" : "0px"};
// background-color: ${({ $variant }) => $variant === 'promo' ? 'lightblue' : 'white'};


const Cart = () => {
  const{totalAddedValue} = useContext(CartContext);

  /*Variaveis do total*/
  const totalValue = totalAddedValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const falta = 40 - totalAddedValue>0? 40 - totalAddedValue: 0;
  const faltaFormatada = falta.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });;

  const totalNumerico = falta > 0 ? 0 : totalAddedValue + 4;
  const totalFormatted = totalNumerico.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <BodyStyled>
      <MainStyled>
        <CartSectionStyed>
          <DivHeadStyled>
            <PHeadStyled>Sua Compra</PHeadStyled>
          </DivHeadStyled>
         
          <ContainerOfListStyled>
            <ProductListHome variant={'cart'} categoryKey={12}></ProductListHome>
          </ContainerOfListStyled>
        </CartSectionStyed>

        <DivAddStyled>
          <PAddStyled>{falta==40?'Adicionar produtos':'Adicionar mais produtos'}</PAddStyled>
        </DivAddStyled>
        {falta!=40 &&
        <FinishSectionStyled>
          <ContainerStyled>

            {falta>0 &&  
              <DivAvisoStyled>
                <PAvisoStyled>Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00</PAvisoStyled>
              </DivAvisoStyled>
            }

            <DivValueStyled>
              <DivStyled>
                <PValueStyled>Valor da compra:</PValueStyled>
                <PValueStyled>R$ {totalValue}</PValueStyled>
              </DivStyled>

              <DivStyled>
                <PValueStyled><strong>Total (com entrega):</strong></PValueStyled>
                <PValueStyled><strong>{totalNumerico>0? 'R$ '+ totalFormatted:'+ 4,00'}</strong></PValueStyled>
              </DivStyled>
            </DivValueStyled>
            
            <DivContinueStyled  $nocontinue={falta>0}>
              <PContinueStyled>Continuar</PContinueStyled>
            </DivContinueStyled>

          </ContainerStyled>
        </FinishSectionStyled>
        }
      </MainStyled>
    </BodyStyled>
  )
}

export default Cart