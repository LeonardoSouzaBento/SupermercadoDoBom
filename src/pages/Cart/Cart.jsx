import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext";
import { ViewContext } from "../../components/viewContext.jsx";
import { ProductList } from "../../components/Main/ProductSection/ProductList.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivToCoverStyled,
  DivSpanStyled,
  SpanStyled,
  DivCancelDialog,
  PConfirmCancelStyled,
  DivSpanStyled2,
  DivHeadStyled,
  PHeadStyled,
  ContainerProductList,
  FinishSectionStyled,
  DivContinueStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivValueStyled,
  DivStyled,
  PValueStyled,
  DivPContinueStyled,
  PContinueStyled,
  DivSeeAllStyled,
  PSeeAllStyled,
  SpanSeeAllStyled,
  DivAddStyled,
  PAddStyled,
} from "./ComponentsCart.jsx";
import RegisterAddress from "../../components/RegisterAddress/RegisterAddress.jsx";

//altura - o cabeçalho 'sua compra'
const heightCartSection = 393; //para comparar

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.03);

  const [opacityCancel, setOpacityCancel] = useState(0);
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { seeFeedback, setSeeFeedback } = useContext(ViewContext);

  const { setCartProducts } = useContext(CartContext);
  const [seeAddressForm, setSeeAddressForm] = useState(false);
  const [applyBlur, setApplyBlur] = useState(0);
  const [scaleWarnnig, setScaleWarnnig] = useState(1);

  //estados para botão ver todos
  const [viewButtonSeeAll, setViewButtonsetSeeAll] = useState(true);
  const windowWidthRef = useRef(0);
  const [newHeight, setNewHeight] = useState(0);
  const [applyNewHeight, setApplyNewHeight] = useState(true);

  const resizeDowntime = useRef(null);
  const ProductListRef = useRef(null);
  const CartSectionRef = useRef(null);

  // funções para o botão ver todos
  function handleClickSeeAll() {
    if (applyNewHeight) {
      setApplyNewHeight(false);
      setViewButtonsetSeeAll(false);
      CartSectionRef.current.style.height = `${newHeight}px`;
    }
  }

  // decide se mostra o botão
  function checkHiddenProducts() {
    const productListHeight = ProductListRef.current.offsetHeight;

    if (heightCartSection - productListHeight < 0) {
      setViewButtonsetSeeAll(true);
      setNewHeight(productListHeight + 120);
      setApplyNewHeight(true);
    } else {
      setViewButtonsetSeeAll(false);
      setApplyNewHeight(false);
    }
  }

  // resize p reamostrar botão
  useEffect(() => {
    setTimeout(() => {
      setOpacityState(1);
    }, 300);
    windowWidthRef.current = window.innerWidth;
    // Espera a próxima pintura do navegador (após o layout completo)
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    checkHiddenProducts();

    function handleResize() {
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
      resizeDowntime.current = setTimeout(() => {
        let widthOfWindow = window.innerWidth;

        if (widthOfWindow !== windowWidthRef.current) {
          checkHiddenProducts();
          const div = CartSectionRef.current;
          if (widthOfWindow >= 769) {
            const newHeight = "calc(100vh - 48px)";
            if (div.style.height !== newHeight) {
              div.style.height = newHeight;
            }
          } else {
            const newHeight = "460px";
            if (div.style.height !== newHeight) {
              div.style.height = newHeight;
            }
          }
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

  //funções para quantidade de produtos
  const handleConfirmCancel = () => {
    setSeeFeedback(true);
    setTimeout(() => {
      setCartProducts([]);
      setSeeFeedback(false);
      setSeeCancelDialog(false);
    }, 1400);
  };

  useEffect(() => {
    if (totalAddedValue == 0) {
      setTimeout(() => {
        navigate("/");
      }, 1100);
    }
    if (totalAddedValue !== 0) {
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

  function handleClickContinue(params) {
    if (falta <= 0) {
      setSeeAddressForm(true);
      setApplyBlur(true);
    } else {
      setScaleWarnnig(1.045);
      setTimeout(() => {
        setScaleWarnnig(1);
      }, 350);
    }
  }

  return (
    <>
      <MainStyled
        $seeAddressForm={seeAddressForm}
        $opacity={opacityState}
        $applyBlur={applyBlur}
      >
        <div style={{ position: "relative" }}>
          <CartSectionStyed ref={CartSectionRef}>
            <DivToCoverStyled style={{ display: seeFeedback ? "block" : "none" }} />
            <DivHeadStyled>
              <DivSpanStyled
                onClick={() => {
                  setSeeCancelDialog(true);
                  setTimeout(() => {
                    setOpacityCancel(1);
                  }, 50);
                }}
              >
                <SpanStyled className="material-symbols-outlined">
                  delete
                </SpanStyled>
              </DivSpanStyled>

              {seeCancelDialog && (
                <DivCancelDialog $opacity={opacityCancel}>
                  <PConfirmCancelStyled>
                    {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
                  </PConfirmCancelStyled>

                  <DivSpanStyled2
                    onClick={handleConfirmCancel}
                    $uniqueBorderRadius={true}
                  >
                    <SpanStyled className="material-symbols-outlined">
                      check
                    </SpanStyled>
                  </DivSpanStyled2>

                  <DivSpanStyled2
                    onClick={() => {
                      setOpacityCancel(0);
                      setTimeout(() => {
                        setSeeCancelDialog(false);
                      }, 360);
                    }}
                  >
                    <SpanStyled className="material-symbols-outlined">
                      close
                    </SpanStyled>
                  </DivSpanStyled2>
                </DivCancelDialog>
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
              <DivSeeAllStyled onClick={handleClickSeeAll}>
                <PSeeAllStyled>Ver Todos</PSeeAllStyled>
                <SpanSeeAllStyled className="material-symbols-rounded">
                  keyboard_arrow_down
                </SpanSeeAllStyled>
              </DivSeeAllStyled>
            )}
          </CartSectionStyed>
        </div>

        <FinishSectionStyled>
          <DivContinueStyled>
            {falta > 0 && (
              <DivAvisoStyled $scale={scaleWarnnig}>
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

            <DivPContinueStyled
              $nocontinue={falta > 0}
              onClick={handleClickContinue}
            >
              <PContinueStyled>Continuar</PContinueStyled>
            </DivPContinueStyled>
          </DivContinueStyled>

          <DivAddStyled
            onClick={() => {
              navigate("/buscar-produtos");
            }}
          >
            <PAddStyled>Adicionar mais produtos</PAddStyled>
          </DivAddStyled>
        </FinishSectionStyled>
      </MainStyled>

      {seeAddressForm && (
        <RegisterAddress
          setSeeAddressForm={setSeeAddressForm}
          applyBlur={applyBlur}
          setApplyBlur={setApplyBlur}
        />
      )}
    </>
  );
};

export default Cart;
