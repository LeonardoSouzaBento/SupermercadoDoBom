import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { ViewContext } from "../../components/viewContext.jsx";
import { ProductListHome } from "../../components/Main/ProductSection/ProductListHome.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivSpanCalcelCart,
  SpanCalcelCart,
  BoxConfirmCalcel,
  PConfirmCancelStyled,
  DivSpanConfirmCancel,
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
  DivMsgVoidCart,
  BlurDivStyled,
  ImgVoidCartStyled
} from "./ComponentsCart.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue } = useContext(CartContext);
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { setCartProducts } = useContext(CartContext);
  const {viewFeedback, setViewFeedback} = useContext(ViewContext);

  const handleConfirmCancel = () => { 
    setViewFeedback(true);
    setTimeout(() => {
      setCartProducts([]);
      setViewFeedback(false);
    }, 1400);
  };

  useEffect(() => {
    if (totalAddedValue == 0) {
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
  }, [totalAddedValue]);

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

  if (totalAddedValue != 0) {
    return (
      <MainStyled>
        <div style={{ position: "relative", height: "max-content" }}>
          <CartSectionStyed>
            <DivHeadStyled>
              <DivSpanCalcelCart onClick={()=>{setSeeCancelDialog(true)}}>
                <SpanCalcelCart className="material-symbols-outlined">
                  delete
                </SpanCalcelCart>
              </DivSpanCalcelCart>

              {seeCancelDialog && (
              <BoxConfirmCalcel>
                <PConfirmCancelStyled>Cancelar a compra?</PConfirmCancelStyled>

                <DivSpanConfirmCancel onClick={handleConfirmCancel}>
                  <SpanCalcelCart className="material-symbols-outlined">
                    check
                  </SpanCalcelCart>
                </DivSpanConfirmCancel>

                <DivSpanConfirmCancel onClick={()=>{setSeeCancelDialog(false)}}>
                  <SpanCalcelCart className="material-symbols-outlined">
                    close
                  </SpanCalcelCart>
                </DivSpanConfirmCancel>
              </BoxConfirmCalcel>
              )}
              {viewFeedback && (
                <BoxConfirmCalcel $viewFeedback={viewFeedback}>
                  <PConfirmCancelStyled>
                    Compra Cancelada!
                  </PConfirmCancelStyled>
                </BoxConfirmCalcel>
              )}

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
                <PValueStyled>R$ 4,00</PValueStyled>
              </DivStyled>

              <DivStyled>
                <PValueStyled>
                  <strong>Valor total:</strong>
                </PValueStyled>
                <PValueStyled>
                  <strong>R$ {totalFormatted}</strong>
                </PValueStyled>
              </DivStyled>
            </DivValueStyled>

            <DivContinueStyled $nocontinue={falta > 0}>
              <PContinueStyled>Continuar</PContinueStyled>
            </DivContinueStyled>
          </ContainerStyled>
        </FinishSectionStyled>
      </MainStyled>
    );
  }  else{
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
          <PHeadStyled><strong>Carrinho vazio!</strong></PHeadStyled>
        </DivMsgVoidCart>
      </div>
    )
  }
};

export default Cart;
