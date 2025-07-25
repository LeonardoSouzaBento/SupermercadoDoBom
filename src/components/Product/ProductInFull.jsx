import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import { VisibilityContext } from "../../contexts/VisibilityContext.jsx";

import {
  BodyDivStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  SpanDropDownStyled,
  MainDivStyled,
  ProductDivStyled,
  DivImgStyled,
  ImgStyled,
  DivWeightStyled,
  PWeightStyled,
  DivDiscountStyled,
  DivNameProdStyled,
  PNameProdStyled,
  DivPriceStyled,
  PPriceStyled,
  ContainerQuantStyled,
  DivQuantFullStyled,
  DivButtonsStyled,
  SpanButtonsStyled,
  PQuantFullStyled,
  PAddStyled,
  DivSubStyled,
  DivCoverSubStyled,
  PSubStyled,
  SimilarSectionDivStyled,
  DivTitleStyled,
  H1Styled,
  ContainerListStyled,
  DivHalfList,
} from "./ComponentsProductInFull.jsx";

const ProductInFull = () => {
  const [translateYState, setTranslateYState] = useState("100%");
  const [seeSpanClose, setSeeSpanClose] = useState(false);
  const { dataProductFull, setViewProductInFull } =
    useContext(VisibilityContext);
  const { handleQuantityChange, setUpdateProduct, isDraggingRef } =
    useContext(CartContext);
  const initialQuant = dataProductFull.quantity;
  const [quantity, setQuantity] = useState(initialQuant);
  const isDragging = useRef(false);
  const initialPointerPosition = useRef(null);
  const rawPrice = dataProductFull.price || "0";
  const priceNumber = parseFloat(rawPrice.replace(",", ".")) || 0;
  const subtotal = (priceNumber * quantity).toFixed(2).replace(".", ",");
  const MainDivRef = useRef(null);

  function handlePointerDownDiv(e) {
    if (e.button === 2) {
      return;
    }
    isDragging.current = false;
    initialPointerPosition.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerMoveDiv(e) {
    if (initialPointerPosition.current === null) return;
    const deltaX = Math.abs(e.clientX - initialPointerPosition.current.x);
    const deltaY = Math.abs(e.clientY - initialPointerPosition.current.y);

    if (deltaX > 5 || deltaY > 5) {
      isDragging.current = true;
    } else {
      isDragging.current = false;
    }
  }

  function changeQuantity(newQty, isIncrement) {
    setQuantity(newQty);
    handleQuantityChange(dataProductFull, isIncrement);
  }

  function handlePointerUpAdd(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    if (!isDragging.current) {
      changeQuantity(quantity + 1, true);
    }
    isDragging.current = false;
  }

  function handlePointerUpButtons(e, action) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    if (!isDragging.current) {
      if (action === "fewer") {
        changeQuantity(Math.max(0, quantity - 1), false);
      } else {
        changeQuantity(quantity + 1, true);
      }
      isDragging.current = false;
    }
  }

  function handleClickClose(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setSeeSpanClose(false);
    setTranslateYState("100%");
    setUpdateProduct({ id: dataProductFull.id, quant: quantity });
    setTimeout(() => {
      setViewProductInFull(false);
    }, 300);
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    setTimeout(() => {
      setTranslateYState("0%");
    }, 200);
    setTimeout(() => {
      setSeeSpanClose(true);
    }, 550);

    return () => {
      document.body.style.overflowY = "auto";
      isDraggingRef.current = false;
    };
  }, []);

  // const middleIndex = Math.ceil(exampleProducts.length / 2);
  // const firstHalf = exampleProducts.slice(0, middleIndex);
  // const secondHalf = exampleProducts.slice(middleIndex);

  return (
    <BodyDivStyled
      style={{
        backgroundColor: seeSpanClose
          ? "rgba(0, 0, 0, 0.15)"
          : "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      }}
      onPointerUp={handleClickClose}
    >
      <MainDivStyled $translate={translateYState} ref={MainDivRef} onPointerUp={(e)=>{e.stopPropagation()}}>
        <DivSpanCloseStyled
          onPointerUp={handleClickClose}
          style={{ display: seeSpanClose ? "flex" : "none" }}
        >
          <SpanCloseStyled className="material-symbols-rounded">
            close
          </SpanCloseStyled>

          <SpanDropDownStyled />
        </DivSpanCloseStyled>

        <ProductDivStyled>
          <DivImgStyled>
            <ImgStyled src={dataProductFull.url} alt="Imagem do Produto" />

            {dataProductFull.weight != "" && dataProductFull.weight != null && (
              <DivWeightStyled>
                <PWeightStyled>{dataProductFull.weight}</PWeightStyled>
              </DivWeightStyled>
            )}

            {dataProductFull.discount != "" &&
              dataProductFull.discount != null && (
                <DivDiscountStyled>
                  <PWeightStyled style={{ color: "white" }}>
                    -{dataProductFull.discount}%
                  </PWeightStyled>
                </DivDiscountStyled>
              )}
          </DivImgStyled>

          <DivNameProdStyled>
            <PNameProdStyled>{dataProductFull.name}</PNameProdStyled>
          </DivNameProdStyled>

          <DivPriceStyled>
            <PPriceStyled>R$ {dataProductFull.price}</PPriceStyled>
          </DivPriceStyled>

          <ContainerQuantStyled>
            <DivSubStyled>
              {(subtotal == "0,00") && (
                <DivCoverSubStyled>
                  <PSubStyled>Subtotal:</PSubStyled>
                </DivCoverSubStyled>
              )}
              <PSubStyled>Subtotal:</PSubStyled>
              <PSubStyled>R$ {subtotal}</PSubStyled>
            </DivSubStyled>

            <DivQuantFullStyled
              onPointerDown={handlePointerDownDiv}
              onPointerMove={handlePointerMoveDiv}
            >
              {quantity > 0 && (
                <>
                  <DivButtonsStyled
                    onPointerUp={(e) => {
                      handlePointerUpButtons(e, "fewer");
                    }}
                  >
                    <SpanButtonsStyled className="material-symbols-rounded">
                      remove
                    </SpanButtonsStyled>
                  </DivButtonsStyled>

                  <DivButtonsStyled>
                    <PQuantFullStyled>{quantity}</PQuantFullStyled>
                  </DivButtonsStyled>

                  <DivButtonsStyled onPointerUp={handlePointerUpButtons}>
                    <SpanButtonsStyled className="material-symbols-rounded">
                      add
                    </SpanButtonsStyled>
                  </DivButtonsStyled>
                </>
              )}
              {quantity == 0 && (
                <DivButtonsStyled
                  style={{ width: "100%" }}
                  onPointerUp={handlePointerUpAdd}
                >
                  <SpanButtonsStyled
                    className="material-symbols-rounded"
                    $add={true}
                  >
                    add
                  </SpanButtonsStyled>
                  <PAddStyled>Adicionar</PAddStyled>
                </DivButtonsStyled>
              )}
            </DivQuantFullStyled>
          </ContainerQuantStyled>
        </ProductDivStyled>

        <SimilarSectionDivStyled>
          <DivTitleStyled>
            <H1Styled>Produtos Similares (Essa parte ainda será desenvolvida)</H1Styled>
          </DivTitleStyled>

          <ContainerListStyled>
            <DivHalfList></DivHalfList>
            <DivHalfList></DivHalfList>
          </ContainerListStyled>
        </SimilarSectionDivStyled>
      </MainDivStyled>
    </BodyDivStyled>
  );
};

export default ProductInFull;
