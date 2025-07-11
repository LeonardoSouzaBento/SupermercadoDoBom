import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartContext.jsx";
import { ViewContext } from "../../components/viewContext.jsx";
import { ProductList } from "../../components/Main/ProductSection/ProductList.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivSpanDeleteStyled,
  SpanStyled,
  DivHeadStyled,
  HHeadStyled,
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
  ContainerDialogStyled,
  DivDialogStyled,
  SpanDialogStyled,
  PQuestionStyled,
  PYesNoStyled,
  DivPYesNoStyled,
} from "./ComponentsCart.jsx";
import ProductInFull from "../../components/Main/ProductSection/ProductInFull.jsx";
import RegisterAddress from "./RegisterAddress.jsx";

//altura - o cabeçalho 'sua compra'
const heightCartSection = 393; //para comparar

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue, setCartProducts } = useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.03); //opacidade do main ao entrar
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { seeFeedback, setSeeFeedback, viewProductInFull } =
    useContext(ViewContext);
  const [seeAddressForm, setSeeAddressForm] = useState(false);
  const [scaleWarnnig, setScaleWarnnig] = useState(1);

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

        if (widthOfWindow !== currentWindowWidthRef.current) {
          currentWindowWidthRef.current = widthOfWindow;
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
      setSeeFeedback(false);
      window.removeEventListener("resize", handleResize);
      if (resizeDowntime.current) {
        clearTimeout(resizeDowntime.current);
      }
    };
  }, []);

  //
  useEffect(() => {
    if (totalAddedValue == 0) {
      setTimeout(() => {
        navigate("/");
      }, 1100);
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

  function handleClickContinue(params) {
    if (falta <= 0) {
      setSeeAddressForm(true);
    } else {
      setScaleWarnnig(1.045);
      setTimeout(() => {
        setScaleWarnnig(1);
      }, 350);
    }
  }

  return (
    <>
      <MainStyled $seeAddressForm={seeAddressForm} $opacity={opacityState}>
        <div style={{ position: "relative" }}>
          <CartSectionStyed ref={CartSectionRef}>
            <DivHeadStyled>
              <HHeadStyled>Sua compra</HHeadStyled>
              <DivSpanDeleteStyled
                onClick={(e) => {
                  setSeeCancelDialog(true);
                }}
              >
                <SpanStyled className="material-symbols-rounded">
                  delete
                </SpanStyled>
              </DivSpanDeleteStyled>
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
                <PSeeAllStyled>Ver Tudo</PSeeAllStyled>
                <SpanSeeAllStyled className="material-symbols-rounded">
                  keyboard_arrow_down
                </SpanSeeAllStyled>
              </DivSeeAllStyled>
            )}
          </CartSectionStyed>
        </div>

        <FinishSectionStyled>
          <DivContinueStyled>
            {falta > 0 && totalAddedValue != 0 && (
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

      {seeCancelDialog && (
        <DivCancelDialog
          seeFeedback={seeFeedback}
          setSeeFeedback={setSeeFeedback}
          setSeeCancelDialog={setSeeCancelDialog}
          setCartProducts={setCartProducts}
        />
      )}

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

  return (
    <ContainerDialogStyled
      style={{
        opacity: opacityDialog ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <DivDialogStyled $feedback={seeFeedback}>
        {/*Botoes de sim ou não*/}

        <SpanDialogStyled
          className="material-symbols-rounded"
          $feedback={seeFeedback}
        >
          {seeFeedback ? "check" : "exclamation"}
        </SpanDialogStyled>

        <PQuestionStyled>
          {seeFeedback ? "Compra Cancelada!" : "Cancelar a compra?"}
        </PQuestionStyled>

        {seeFeedback === false && (
          <>
            <DivPYesNoStyled
              onClick={() => {
                setSeeFeedback(true);
                setCartProducts([]);
              }}
            >
              <PYesNoStyled>Sim, cancelar</PYesNoStyled>
            </DivPYesNoStyled>

            <DivPYesNoStyled
              $voltar={true}
              onClick={() => {
                setOpacityDialog(false);
                setTimeout(() => {
                  setSeeCancelDialog(false);
                }, 300);
              }}
            >
              <PYesNoStyled>Voltar</PYesNoStyled>
            </DivPYesNoStyled>
          </>
        )}
      </DivDialogStyled>
    </ContainerDialogStyled>
  );
};
