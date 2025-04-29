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
  const{clickHistory} = useContext(CartContext);

  const {totalAddedValue} = useContext(CartContext);
  const totalValue = totalAddedValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const falta = 40 - totalAddedValue;

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
            <SpanSeeAllStyled className="material-symbols-rounded">keyboard_arrow_down</SpanSeeAllStyled>
          </DivSeeAllStyled>
        </CartSectionStyed>

        <DivAddStyled>
          <PAddStyled>Adicionar mais produtos</PAddStyled>
        </DivAddStyled>

        <FinishSectionStyled>
          <ContainerStyled>
            {falta>0 &&  
            <DivAvisoStyled>
              <PAvisoStyled>Faltam {falta} para o valor minimo de R$ 40,00</PAvisoStyled>
            </DivAvisoStyled>
            }
           
            <DivCupomStyled>
              <PCupomStyled>Insira um cupom</PCupomStyled>
              <InputCupomStyled></InputCupomStyled>
            </DivCupomStyled>
          </ContainerStyled>

          <ContainerStyled>
            <DivValueStyled>
              <DivStyled>
                <PValueStyled>Valor da compra</PValueStyled>
                <PValueStyled>R$ {totalValue}</PValueStyled>
              </DivStyled>

              <DivStyled>
                <PValueStyled><strong>Total (com entrega)</strong></PValueStyled>
                <PValueStyled><strong>R$ {totalFormatted}</strong></PValueStyled>
              </DivStyled>
            </DivValueStyled>
            <DivAdd2Styled><PAddStyled>Adicionar mais produtos</PAddStyled></DivAdd2Styled>
            <DivContinueStyled>
              <PContinueStyled>Continuar</PContinueStyled>
            </DivContinueStyled>

          </ContainerStyled>
        </FinishSectionStyled>

      </MainStyled>
    </BodyStyled>
  )
}

export default Cart