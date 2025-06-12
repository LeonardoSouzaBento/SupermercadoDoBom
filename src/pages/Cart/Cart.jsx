import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { ProductListHome } from "../../components/Main/ProductSection/ProductListHome.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivHeadStyled,
  PHeadStyled,
  ContainerProductList,
  ShadowStyled,
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
  PContinueStyled,
  BlurDivStyled,
  DivMsgVoidCart,
  ImgVoidCartStyled
} from "./ComponentsCart.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue } = useContext(CartContext);

  useEffect(() => {
    if(totalAddedValue == 0){
      setTimeout(() => {
        navigate('/');
      }, 500);
    }
  }, [totalAddedValue])
  
  const totalValue = totalAddedValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const falta = 40 - totalAddedValue > 0 ? 40 - totalAddedValue : 0;
  const faltaFormatada = falta.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalNumerico = totalAddedValue + 4;
  const totalFormatted = totalNumerico.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if(totalAddedValue!=0){
  return (
    <MainStyled>
      <div style={{ position: "relative", height:'max-content'}}>
        <CartSectionStyed>
          <DivHeadStyled>
            <PHeadStyled>Sua Compra</PHeadStyled>
          </DivHeadStyled>

          <ContainerProductList>
            <ProductListHome
              variant={"cart"}
              categoryKey={12}
            ></ProductListHome>
          </ContainerProductList>
        </CartSectionStyed>
        <ShadowStyled />
      </div>

      <FinishSectionStyled>
        <DivAddStyled>
          <PAddStyled>
            {falta == 40 ? "Adicionar produtos" : "Adicionar mais produtos"}
          </PAddStyled>
        </DivAddStyled>

        <ContainerStyled>
          {falta > 0 && (
            <DivAvisoStyled>
              <PAvisoStyled>
                Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00
              </PAvisoStyled>
            </DivAvisoStyled>
          )}

          <DivValueStyled>
            <DivStyled>
              <PValueStyled>Valor da compra:</PValueStyled>
              <PValueStyled>R$ {totalValue}</PValueStyled>
            </DivStyled>

            <DivStyled>
              <PValueStyled>Valor da entrega:</PValueStyled>
              <PValueStyled>4,00</PValueStyled>
            </DivStyled>

            <DivStyled>
              <PValueStyled>
                <strong>Valor total:</strong>
              </PValueStyled>
              <PValueStyled>
                <strong>{totalFormatted}</strong>
              </PValueStyled>
            </DivStyled>
          </DivValueStyled>

          <DivContinueStyled $nocontinue={falta > 0}>
            <PContinueStyled>Continuar</PContinueStyled>
          </DivContinueStyled>
        </ContainerStyled>

      </FinishSectionStyled>
    </MainStyled>
  )}
  else{
    return (
      <div style={{
        minHeight:'100vh', 
        minWidth:'100vw', 
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'rgb(220, 220, 220)'}}>
        <DivMsgVoidCart>
          <BlurDivStyled>
            <ImgVoidCartStyled src="/void-cart-background.png"></ImgVoidCartStyled>
          </BlurDivStyled>
          <PHeadStyled><strong>COMPRA DESFEITA</strong></PHeadStyled>
        </DivMsgVoidCart>
      </div>
    )
  }
};

export default Cart;
