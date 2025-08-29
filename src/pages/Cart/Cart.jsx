import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.js";
import { VisibilityContext } from "../../contexts/VisibilityContext.js";
import { ProductList } from "../../components/Product/ProductList.jsx";
import {
  MainStyled,
  CartSectionStyed,
  DivHeaderMainStyled,
  H1Styled,
  ContinueSectionStyled,
  DivToCoverStyled,
} from "./StylizedTagsCart.jsx";
import {
  CancelDialog,
  ReceiptAndContinue,
  ButtonSeeAll,
  HeaderCart,
  DetailAndButtonAdd,
} from "./ComponentsCart.jsx";
import ProductInFull from "../../components/Product/ProductInFull.jsx";

//altura - o cabeçalho 'sua compra'
const heightCartSection = 393; //para comparar

const Cart = () => {
  const navigate = useNavigate();
  const { totalAddedValue, cartProducts, setCartProducts, setOrderInfo } =
    useContext(CartContext);
  const [opacityState, setOpacityState] = useState(0.03); //opacidade do main ao entrar
  const [seeCancelDialog, setSeeCancelDialog] = useState(false);
  const { seeFeedback, setSeeFeedback, viewProductInFull, isDataComplete } =
    useContext(VisibilityContext);
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
  }, [setSeeFeedback]);

  //
  const shouldCheckHiddenProducts =
    totalAddedValue !== 0 &&
    totalAddedValue < initialTotalValue.current &&
    wasClicked === false;

  useEffect(() => {
    if (totalAddedValue == 0) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    if (shouldCheckHiddenProducts) {
      checkHiddenProducts();
    }
  }, [
    totalAddedValue,
    setOrderInfo,
    navigate,
  ]);

  useEffect(() => {
    if (seeCancelDialog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [seeCancelDialog]);

  return (
    <>
      <DivHeaderMainStyled>
        <H1Styled>Sua compra</H1Styled>
      </DivHeaderMainStyled>

      <MainStyled $opacity={opacityState}>
        <CartSectionStyed ref={CartSectionRef}>
          <HeaderCart setSeeCancelDialog={setSeeCancelDialog} />

          <ProductList
            variant={"cart"}
            categoryKey={12}
            ref={ProductListRef}
          ></ProductList>

          {viewButtonSeeAll && (
            <ButtonSeeAll
              applyNewHeight={applyNewHeight}
              setApplyNewHeight={setApplyNewHeight}
              setViewButtonsetSeeAll={setViewButtonsetSeeAll}
              setwasClicked={setwasClicked}
              CartSectionRef={CartSectionRef}
              newHeight={newHeight}
            />
          )}

          {seeCancelDialog && (
            <CancelDialog
              seeFeedback={seeFeedback}
              setSeeFeedback={setSeeFeedback}
              setSeeCancelDialog={setSeeCancelDialog}
              setCartProducts={setCartProducts}
            />
          )}
        </CartSectionStyed>

        <ContinueSectionStyled>
          <DetailAndButtonAdd
            falta={falta}
            totalAddedValue={totalAddedValue}
            scaleWarnnig={scaleWarnnig}
            faltaFormatada={faltaFormatada}
            totalValue={totalValue}
            totalFormatted={totalFormatted}
          />
          <ReceiptAndContinue
            falta={falta}
            isDataComplete={isDataComplete}
            setOrderInfo={setOrderInfo}
            setScaleWarnnig={setScaleWarnnig}
          />
        </ContinueSectionStyled>
      </MainStyled>
      {seeFeedback && <DivToCoverStyled />}
      {viewProductInFull && <ProductInFull />}
    </>
  );
};

export default Cart;
