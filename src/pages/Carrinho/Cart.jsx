import { useContext } from 'react'
import { CartContext } from '../../Componentes/CartContext';
import {
  BodyStyled,
  MainStyled,
  CartSectionStyed,
  DivHeadStyled,
  PHeadStyled,
  DivSeeAllStyled,
  PSeeAll,
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
  const{shoppingCart} = useContext(CartContext);
  const{setCartProducts} = useContext(CartContext);

  /*Variaveis do total*/
  const {totalAddedValue} = useContext(CartContext);
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


          <DivSeeAllStyled>
            <PSeeAll>Ver Todos</PSeeAll>
          </DivSeeAllStyled>
        </CartSectionStyed>

        <DivAddStyled>
          <PAddStyled>Adicionar mais produtos</PAddStyled>
        </DivAddStyled>

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

      </MainStyled>
    </BodyStyled>
  )
}

export default Cart