import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { ViewContext } from "../../components/viewContext.jsx";
import { ProductList } from "../../components/Main/ProductSection/ProductList.jsx";
import {
  MainStyled,
  CartSectionStyed,
  ShadowStyled,
  DivSpanStyled,
  SpanStyled,
  BoxConfirmCancel,
  PConfirmCancelStyled,
  DivSpanStyled2,
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
  const [translateState, setTranslateState] = useState(100);
  const [opacityState, setOpacityState] = useState(0.03);
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { setCartProducts } = useContext(CartContext);
  const { viewFeedback, setViewFeedback } = useContext(ViewContext);
  const [seeAddressForm, setSeeAddressForm] = useState(false);
  const [viewButtonSeeAll, setViewButtonsetSeeAll] = useState(true);

  //estados para botão ver todos
  const [newHeight, setNewHeight] = useState(0);
  const [applyNewHeight, setApplyNewHeight] = useState(true);
  const [heightWasAlter, setHeightWasAlter] = useState(false);

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
      setHeightWasAlter(true);
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
    setTimeout(() => {
      setTranslateState(0);
      setOpacityState(1);
    }, 300);
    // Espera a próxima pintura do navegador (após o layout completo)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
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

        if (heightWasAlter) {
          if (window.innerWidth >= 769) {
            CartSectionRef.current.style.height = "calc(100vh - 48px)";
          } else {
            CartSectionRef.current.style.height = "460px";
          }
          setHeightWasAlter(false);
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
          backgroundColor: "rgb(235, 235, 235)",
        }}
      >
        <MainStyled
          $seeAddressForm={seeAddressForm}
          $translate={translateState}
          $opacity={opacityState}
        >
          <div style={{ position: "relative" }}>
            <CartSectionStyed ref={CartSectionRef}>
              <DivHeadStyled>
                <DivSpanStyled
                  onClick={() => {
                    setSeeCancelDialog(true);
                  }}
                >
                  <SpanStyled className="material-symbols-outlined">
                    delete
                  </SpanStyled>
                </DivSpanStyled>

                {seeCancelDialog && (
                  <BoxConfirmCancel>
                    <PConfirmCancelStyled>
                      Cancelar a compra?
                    </PConfirmCancelStyled>

                    <DivSpanStyled2 onClick={handleConfirmCancel} $uniqueBorderRadius={true}>
                      <SpanStyled className="material-symbols-outlined">
                        check
                      </SpanStyled>
                    </DivSpanStyled2>

                    <DivSpanStyled2
                      onClick={() => {
                        setSeeCancelDialog(false);
                      }}
                    >
                      <SpanStyled className="material-symbols-outlined">
                        close
                      </SpanStyled>
                    </DivSpanStyled2>
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
                <ProductList
                  variant={"cart"}
                  categoryKey={12}
                  ref={ProductListRef}
                ></ProductList>
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
                    setSeeAddressForm(true);
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

        {seeAddressForm && (
          <RegisterAddress setSeeAddressForm={setSeeAddressForm} />
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
          backgroundColor: "rgb(235, 235, 235)",
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
