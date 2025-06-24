import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { ViewContext } from "../../components/viewContext.jsx";
import { ProductListHome } from "../../components/Main/ProductSection/ProductListHome.jsx";
import {
  MainStyled,
  CartSectionStyed,
  CornerStyled,
  MiniCircleStyled,
  ShadowStyled,
  DivSpanCancelCart,
  SpanCancelCart,
  BoxConfirmCancel,
  PConfirmCancelStyled,
  DivSpanConfirmCancel,
  DivHeadStyled,
  PHeadStyled,
  ContainerProductList,
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
  ImgVoidCartStyled,
  DivSeeMoreStyled,
  PSeeMoreStyled,
  SpanSeeAllStyled,
  DivAddStyled,
  PAddStyled,
} from "./ComponentsCart.jsx";
import RegisterAddress from "../../components/RegisterAddress/RegisterAddress.jsx";

//altura - o cabeçalho 'sua compra'
const heightCartSection = 398;
const totalHeightCartSection = 460;

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue } = useContext(CartContext);
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { setCartProducts } = useContext(CartContext);
  const { viewFeedback, setViewFeedback } = useContext(ViewContext);
  const [seeAdressForm, setSeeAdressForm] = useState(false);
  const [viewButtonSeeAll, setViewButtonsetSeeAll] = useState(true);
  const [newHeight, setNewHeight] = useState(0);
  const [applyNewHeight, setApplyNewHeight] = useState(true);
  const resizeDowntime = useRef(null);
  const ProductListRef = useRef(null);
  const CartSectionRef = useRef(null);

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
    if (ProductListRef.current) {
      checkHiddenProducts();
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

  // função para ver todos
  function handleClickSeeAll() {
    if (applyNewHeight) {
      setApplyNewHeight(false);
      CartSectionRef.current.style.height = `${newHeight}px`;
    } else {
      setApplyNewHeight(true);
      CartSectionRef.current.style.height = `${totalHeightCartSection}px`;
    }
  }

  // decide se mostra o botão 'ver todos'
  function checkHiddenProducts() {
    const productListHeight = ProductListRef.current.offsetHeight;

    if (heightCartSection - productListHeight < 0) {
      setViewButtonsetSeeAll(true);
      setNewHeight(productListHeight + 124);
    } else {
      setViewButtonsetSeeAll(false);
    }
  }

  // resize p reamostrar botão 'ver todos'
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    if (ProductListRef.current) {
      checkHiddenProducts();
    }

    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
      resizeDowntime.current = setTimeout(() => {
        checkHiddenProducts();
        if (window.innerWidth >= 769 && viewButtonSeeAll) {
          CartSectionRef.current.style.height = "calc(100vh - 48px)";
        }
      }, 300);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, []);

  if (totalAddedValue != 0) {
    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          backgroundColor: "rgb(245, 245, 245)",
        }}
      >
        <MainStyled $seeAdressForm={seeAdressForm}>
          <div style={{ position: "relative", marginBottom:"24px" }}>
            <CartSectionStyed ref={CartSectionRef}>
              <DivHeadStyled>
                <CornerStyled>
                  <MiniCircleStyled />
                </CornerStyled>
                <DivSpanCancelCart
                  onClick={() => {
                    setSeeCancelDialog(true);
                  }}
                >
                  <SpanCancelCart className="material-symbols-outlined">
                    delete
                  </SpanCancelCart>
                </DivSpanCancelCart>

                {seeCancelDialog && (
                  <BoxConfirmCancel>
                    <PConfirmCancelStyled>
                      Cancelar a compra?
                    </PConfirmCancelStyled>

                    <DivSpanConfirmCancel onClick={handleConfirmCancel}>
                      <SpanCancelCart className="material-symbols-outlined">
                        check
                      </SpanCancelCart>
                    </DivSpanConfirmCancel>

                    <DivSpanConfirmCancel
                      onClick={() => {
                        setSeeCancelDialog(false);
                      }}
                    >
                      <SpanCancelCart className="material-symbols-outlined">
                        close
                      </SpanCancelCart>
                    </DivSpanConfirmCancel>
                  </BoxConfirmCancel>
                )}
                {viewFeedback && (
                  <BoxConfirmCancel $viewFeedback={viewFeedback}>
                    <PConfirmCancelStyled>
                      Compra Cancelada!
                    </PConfirmCancelStyled>
                  </BoxConfirmCancel>
                )}

                <PHeadStyled>Sua Compra</PHeadStyled>
              </DivHeadStyled>

              <ContainerProductList>
                <ProductListHome
                  variant={"cart"}
                  categoryKey={12}
                  ref={ProductListRef}
                ></ProductListHome>
              </ContainerProductList>
              {viewButtonSeeAll && (
                <DivSeeMoreStyled onClick={handleClickSeeAll}>
                  <PSeeMoreStyled>
                    {applyNewHeight ? "Ver todos" : "Ver menos"}
                  </PSeeMoreStyled>
                  <SpanSeeAllStyled className="material-symbols-rounded">
                    keyboard_arrow_down
                  </SpanSeeAllStyled>
                </DivSeeMoreStyled>
              )}
            </CartSectionStyed>
            <ShadowStyled />
          </div>

          <FinishSectionStyled>
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
                    <strong>Total </strong>(com entrega):
                  </PValueStyled>
                  <PValueStyled>
                    <strong>R$ {totalFormatted}</strong>
                  </PValueStyled>
                </DivStyled>
              </DivValueStyled>

              <DivContinueStyled
                $nocontinue={falta > 0}
                onClick={() => {
                  if (falta <= 0) {
                    setSeeAdressForm(true);
                  }
                }}
              >
                <PContinueStyled>Continuar</PContinueStyled>
              </DivContinueStyled>
            </ContainerStyled>

            <DivAddStyled>
              <PAddStyled>
                {falta == 40 ? "Adicionar produtos" : "Adicionar mais produtos"}
              </PAddStyled>
            </DivAddStyled>
          </FinishSectionStyled>
        </MainStyled>

        {seeAdressForm && (
          <RegisterAddress setSeeAdressForm={setSeeAdressForm} />
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(220, 220, 220)",
        }}
      >
        <DivMsgVoidCart>
          <BlurDivStyled>
            <ImgVoidCartStyled src="/void-cart-background.png"></ImgVoidCartStyled>
          </BlurDivStyled>
          <PHeadStyled>
            <strong>Carrinho vazio!</strong>
          </PHeadStyled>
        </DivMsgVoidCart>
      </div>
    );
  }
};

export default Cart;
