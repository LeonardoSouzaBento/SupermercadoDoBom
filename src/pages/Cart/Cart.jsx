import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.jsx";
import { VisibilityContext } from "../../contexts/VisibilityContext.jsx";
import { ProductList } from "../../components/Product/ProductList.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivHeaderMainStyled,
  HHeaderMainStyled,
  DivSpanDeleteStyled,
  SpanStyled,
  DivHeaderCartStyled,
  ContinueSectionStyled,
  DivStyled,
  ContainerStyled,
  DivAvisoStyled,
  PAvisoStyled,
  DivAllValuesStyled,
  DivOneValueStyled,
  PValueStyled,
  DivPContinueStyled,
  PContinueStyled,
  DivSeeAllStyled,
  PSeeAllStyled,
  SpanSeeAllStyled,
  DivAddStyled,
  PAddStyled,
  ContainerDialogStyled,
  DivDialogStyled,
  SpanDialogStyled,
  DivQuestionStyled,
  PQuestionStyled,
  PYesNoStyled,
  DivPYesNoStyled,
  DivToCoverStyled,
  H2Styled,
  ReceiptOptionStyled,
  SpanReceiptStyled,
  DivHeaderStyled,
} from "./ComponentsCart.jsx";
// import { DivAlertStyled } from "../../components/Login/ComponentsLogin";
import ProductInFull from "../../components/Product/ProductInFull.jsx";
import RegisterAddress from "./RegisterAddress.jsx";

//altura - o cabeçalho 'sua compra'
const heightCartSection = 393; //para comparar

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue, cartProducts, setCartProducts, setOrderInfo } =
    useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.03); //opacidade do main ao entrar
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { seeFeedback, setSeeFeedback, viewProductInFull } =
    useContext(VisibilityContext);
  const [seeAddressForm, setSeeAddressForm] = useState(false);
  const [scaleWarnnig, setScaleWarnnig] = useState(1);
  const [selected, setSelected] = useState("entregar");

  //estados para botão ver todos
  const [viewButtonSeeAll, setViewButtonsetSeeAll] = useState(true);
  const currentWindowWidthRef = useRef(0);
  const [newHeight, setNewHeight] = useState(0);
  const [applyNewHeight, setApplyNewHeight] = useState(true);
  const [wasClicked, setwasClicked] = useState(false);
  const resizeDowntime = useRef(null);
  const ProductListRef = useRef(null);
  const CartSectionRef = useRef(null);
  const initialTotalValue = useRef(0);

  // funções para o botão ver todos
  function handleClickSeeAll() {
    if (applyNewHeight) {
      setApplyNewHeight(false);
      setViewButtonsetSeeAll(false);
      setwasClicked(true);
      CartSectionRef.current.style.height = `${newHeight}px`;
      setTimeout(() => {
        CartSectionRef.current.style.height = "auto";
      }, 160);
    }
  }

  // decide se mostra o botão
  function checkHiddenProducts() {
    const productListHeight = ProductListRef.current.offsetHeight;

    if (heightCartSection - productListHeight < 0) {
      setViewButtonsetSeeAll(true);
      setNewHeight(productListHeight + 120);
      setApplyNewHeight(true);
      setwasClicked(false);
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
    initialTotalValue.current = totalAddedValue;
    currentWindowWidthRef.current = window.innerWidth;
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
        let quantProducts = cartProducts.length;
        if (widthOfWindow !== currentWindowWidthRef.current) {
          currentWindowWidthRef.current = widthOfWindow;
          checkHiddenProducts();
          const div = CartSectionRef.current;
          if (widthOfWindow >= 769) {
            const newHeight = "500px";
            if (div.style.height !== newHeight) {
              div.style.height = newHeight;
            }
          } else {
            const newHeight = "460px";
            if (quantProducts >= 3) {
              if (div.style.height !== newHeight) {
                div.style.height = newHeight;
              }
            } else {
              div.style.height = "auto";
            }
          }
        }
      }, 300);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      setSeeFeedback(false);
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, []);

  //
  useEffect(() => {
    if (totalAddedValue == 0) {
      setOrderInfo({ time: "", status: "canceled" });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    const shouldCheckHiddenProducts =
      totalAddedValue !== 0 &&
      totalAddedValue < initialTotalValue.current &&
      wasClicked === false;

    if (shouldCheckHiddenProducts) {
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

  function handleClickContinue() {
    if (falta <= 0) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const currentTime = `${hours}:${minutes}:${seconds}`;
      setSeeAddressForm(true);
      setOrderInfo({ time: currentTime, status: "pending" });
    } else {
      setScaleWarnnig(1.045);
      setTimeout(() => {
        setScaleWarnnig(1);
      }, 350);
    }
  }

  return (
    <>
      <DivHeaderMainStyled>
        <HHeaderMainStyled>Sua compra</HHeaderMainStyled>
      </DivHeaderMainStyled>

      <MainStyled $seeAddressForm={seeAddressForm} $opacity={opacityState}>
        <CartSectionStyed ref={CartSectionRef}>
          <DivHeaderCartStyled>
            <DivSpanDeleteStyled
              onClick={() => {
                setSeeCancelDialog(true);
                document.body.style.overflow = "hidden";
              }}
            >
              <SpanStyled className="material-symbols-rounded">
                delete
              </SpanStyled>
            </DivSpanDeleteStyled>
            <H2Styled $products={true}>Produtos</H2Styled>
          </DivHeaderCartStyled>

          <ProductList
            variant={"cart"}
            categoryKey={12}
            ref={ProductListRef}
          ></ProductList>

          {viewButtonSeeAll && (
            <DivSeeAllStyled onClick={handleClickSeeAll}>
              <PSeeAllStyled>Ver Tudo</PSeeAllStyled>
              <SpanSeeAllStyled className="material-symbols-rounded">
                keyboard_arrow_down
              </SpanSeeAllStyled>
            </DivSeeAllStyled>
          )}

          {seeCancelDialog && (
            <>
              <DivToCoverStyled
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  height: "100%",
                  overflow: "auto",
                }}
              />
              <DivCancelDialog
                seeFeedback={seeFeedback}
                setSeeFeedback={setSeeFeedback}
                setSeeCancelDialog={setSeeCancelDialog}
                setCartProducts={setCartProducts}
              />
            </>
          )}
        </CartSectionStyed>

        <ContinueSectionStyled>
          <ContainerStyled>
            <DivStyled>
              <DivHeaderStyled>
                <H2Styled>Detalhes</H2Styled>
              </DivHeaderStyled>

              <DivAllValuesStyled>
                {falta > 0 && totalAddedValue != 0 && (
                  <DivAvisoStyled $scale={scaleWarnnig}>
                    <PAvisoStyled>
                      Faltam R$ {faltaFormatada} para o valor mínimo de R$ 40,00
                    </PAvisoStyled>
                  </DivAvisoStyled>
                )}
                <DivOneValueStyled $first={true}>
                  <PValueStyled>Compra:</PValueStyled>
                  <PValueStyled>R$ {totalValue}</PValueStyled>
                </DivOneValueStyled>

                <DivOneValueStyled>
                  <PValueStyled>Taxa de Entrega:</PValueStyled>
                  <PValueStyled>R$ 4,00</PValueStyled>
                </DivOneValueStyled>

                <DivOneValueStyled style={{ borderBottom: "none" }}>
                  <PValueStyled>
                    <strong>Total:</strong>
                  </PValueStyled>
                  <PValueStyled>
                    <strong>R$ {totalFormatted}</strong>
                  </PValueStyled>
                </DivOneValueStyled>
              </DivAllValuesStyled>
            </DivStyled>

            <DivAddStyled
              onClick={() => {
                navigate("/buscar-produtos");
              }}
            >
              <PAddStyled>Adicionar mais produtos</PAddStyled>
            </DivAddStyled>
          </ContainerStyled>
          <ContainerStyled>
            <DivStyled>
              {/* <DivAlertStyled>
              <PAddStyled $warn={true}>
                <strong style={{fontWeight: 600}}>Complete suas informações </strong>
                para continuar a compra.
              </PAddStyled>
            </DivAlertStyled> */}
              <DivHeaderStyled>
                <H2Styled>Recebimento</H2Styled>
              </DivHeaderStyled>

              <ReceiptOptionStyled
                $variant={"retirar"}
                $selected={selected == "retirar"}
                onClick={() => {
                  setSelected("retirar");
                }}
              >
                <PValueStyled $selected={selected == "retirar"}>
                  Retirar no estabelecimento
                </PValueStyled>
                <SpanReceiptStyled
                  className="material-symbols-rounded"
                  $selected={selected == "retirar"}
                >
                  {selected === "retirar"
                    ? "check_box"
                    : "check_box_outline_blank"}
                </SpanReceiptStyled>
              </ReceiptOptionStyled>

              <ReceiptOptionStyled
                $variant={"entregar"}
                $selected={selected == "entregar"}
                onClick={() => {
                  setSelected("entregar");
                }}
              >
                <PValueStyled $selected={selected == "entregar"}>
                  Entregar
                </PValueStyled>
                <SpanReceiptStyled
                  className="material-symbols-rounded"
                  $selected={selected == "entregar"}
                >
                  {selected === "entregar"
                    ? "check_box"
                    : "check_box_outline_blank"}
                </SpanReceiptStyled>
              </ReceiptOptionStyled>
            </DivStyled>

            <DivPContinueStyled
              $nocontinue={falta > 0}
              onClick={handleClickContinue}
            >
              <PContinueStyled>Continuar</PContinueStyled>
            </DivPContinueStyled>
          </ContainerStyled>
        </ContinueSectionStyled>
      </MainStyled>

      {seeFeedback && <DivToCoverStyled />}
      {viewProductInFull && <ProductInFull />}
      {seeAddressForm && (
        <RegisterAddress setSeeAddressForm={setSeeAddressForm} />
      )}
    </>
  );
};

export default Cart;

const DivCancelDialog = ({
  seeFeedback,
  setSeeFeedback,
  setSeeCancelDialog,
  setCartProducts,
}) => {
  const [opacityDialog, setOpacityDialog] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpacityDialog(true);
    }, 200);
  }, []);

  function handleClickClose() {
    setOpacityDialog(false);
    setTimeout(() => {
      setSeeCancelDialog(false);
      document.body.style.overflow = "auto";
    }, 300);
  }

  return (
    <ContainerDialogStyled
      style={{
        opacity: opacityDialog ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <DivDialogStyled $feedback={seeFeedback}>
        <DivQuestionStyled
          style={{ backgroundColor: seeFeedback ? "#488658" : "#ECF0F5" }}
        >
          <PQuestionStyled style={{ color: seeFeedback ? "white" : "black" }}>
            {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
          </PQuestionStyled>
        </DivQuestionStyled>

        {/*Botoes de sim ou não*/}
        {seeFeedback === false ? (
          <>
            <DivPYesNoStyled
              onClick={() => {
                setSeeFeedback(true);
                setTimeout(() => {
                  setCartProducts([]);
                }, 700);
              }}
            >
              <PYesNoStyled>Sim, cancelar</PYesNoStyled>
            </DivPYesNoStyled>

            <DivPYesNoStyled $voltar={true} onClick={handleClickClose}>
              <PYesNoStyled>Voltar</PYesNoStyled>
            </DivPYesNoStyled>
          </>
        ) : (
          <SpanDialogStyled className="material-symbols-rounded">
            check
          </SpanDialogStyled>
        )}
      </DivDialogStyled>
    </ContainerDialogStyled>
  );
};
