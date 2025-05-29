import { useContext, useEffect } from 'react'
import { CartContext } from '../../components/CartContext';
import {ProductListHome} from '../../components/Main/ProductSection/ProductListHome.jsx';
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

const Cart = () => {
  const { totalAddedValue, setAllQuantities } = useContext(CartContext);

  useEffect(() => {
    if (totalAddedValue === 0) {
      setAllQuantities(prevQuantities => [
        Array(prevQuantities[0].length).fill(0),
        Array(prevQuantities[1].length).fill(0),
        Array(prevQuantities[2].length).fill(0),
        Array(prevQuantities[3].length).fill(0),
        Array(prevQuantities[4].length).fill(0),
        Array(prevQuantities[5].length).fill(0),
        Array(prevQuantities[6].length).fill(0),
        Array(prevQuantities[7].length).fill(0),
        Array(prevQuantities[8].length).fill(0),
        Array(prevQuantities[9].length).fill(0),
        Array(prevQuantities[10].length).fill(0),
        Array(prevQuantities[12].length).fill(0),
        Array(prevQuantities[13].length).fill(0)
      ]);
    }
  }, [totalAddedValue]);

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