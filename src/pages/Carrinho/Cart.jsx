import { useContext } from 'react'
import { CartContext } from '../../Componentes/CartContext';
import {
  MainStyled,
  CartSectionStyed,
  DivHeadStyled,
  PHeadStyled,
  DivSeeAllStyled,
  PSeeAll,
  SpanSeeAllStyled,
  DivAddStyled,
  DivAdd2Styled,
  PAddStyled,
  FinishSectionStyled,
  ContainerStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivCupomStyled,
  PCupomStyled,
  InputCupomStyled,
  DivValueStyled,
  DivStyled,
  PValueStyled,
  DivContinueStyled,
  PContinueStyled
} from './ComponentsCart.jsx';


//padding: ${(props) => props.$variant === "cart" ? "8px" : "0px"};
// background-color: ${({ $variant }) => $variant === 'promo' ? 'lightblue' : 'white'};


const Cart = () => {

  // const{totalQuantity} = useContext(CartContext);
  const {totalValueFormatted} = useContext(CartContext);
  const {totalAddedValue} = useContext(CartContext);
  const{clickHistory} = useContext(CartContext);
  const falta = 40 - totalAddedValue;

  return (
    <MainStyled>
      <CartSectionStyed>
        <DivHeadStyled>
          <PHeadStyled>Sua Compra</PHeadStyled>
        </DivHeadStyled>




        <DivSeeAllStyled>
          <PSeeAll>Ver Todos</PSeeAll>
          <SpanSeeAllStyled className="material-symbols-rounded">keyboard_arrow_down</SpanSeeAllStyled>
        </DivSeeAllStyled>
      </CartSectionStyed>

      <DivAddStyled>
        <PAddStyled>Adicionar mais produtos</PAddStyled>
      </DivAddStyled>

      <FinishSectionStyled>
        <ContainerStyled>
          <DivAvisoStyled>
            <PAvisoStyled>Faltam {falta} para o valor minimo de R$ 40,00</PAvisoStyled>
          </DivAvisoStyled>

          <DivCupomStyled>
            <PCupomStyled>Insira um cupom</PCupomStyled>
            <InputCupomStyled></InputCupomStyled>
          </DivCupomStyled>
        </ContainerStyled>

        <ContainerStyled>
          <DivValueStyled>
            <DivStyled>
              <PValueStyled>Valor da compra</PValueStyled>
              <PValueStyled>{totalValueFormatted}</PValueStyled>
            </DivStyled>

            <DivStyled>
              <PValueStyled></PValueStyled>
              <PValueStyled></PValueStyled>
            </DivStyled>
          </DivValueStyled>

          <DivContinueStyled>
            <PContinueStyled>Continuar</PContinueStyled>
          </DivContinueStyled>
        </ContainerStyled>
      </FinishSectionStyled>

    </MainStyled>
  )
}

export default Cart