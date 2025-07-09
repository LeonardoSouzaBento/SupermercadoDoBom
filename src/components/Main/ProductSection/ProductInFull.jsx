import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../../CartContext.jsx";
import { ViewContext } from "../../viewContext";

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
  PButtonsStyed,
  PQuantFullStyled,
  DivSubStyled,
  PSubStyled,
  SimilarDivStyled,
  DivTitleStyled,
  H1Styled,
  ListSimilarProductsStyled,
  PAlertStyled
} from "./ComponentsProductInFull.jsx";

const ProductInFull = () => {
  const [translateYState, setTranslateYState] = useState("100%");
  const [seeSpanClose, setSeeSpanClose] = useState(false);
  const { dataProductFull, setViewProductInFull, setApplyBlur } =
    useContext(ViewContext);
  const { handleQuantityChange, updateProduct, setUpdateProduct } = useContext(CartContext);
  const initialQuant = dataProductFull.quantity;
  const [quantity, setQuantity] = useState(initialQuant);
  const isDragging = useRef(false);
  const initialPointerPosition = useRef(null);
  const rawPrice = dataProductFull.price || "0";
  const priceNumber = parseFloat(rawPrice.replace(",", ".")) || 0;
  const subtotal = (priceNumber * quantity).toFixed(2).replace(".", ",");

  function handlePointerDownDiv(e) {
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

  function handlePointerUpAdd() {
    if (!isDragging.current) {
      changeQuantity(quantity + 1, true);
    }
    isDragging.current = false;
  }

  function handlePointerUpButtons(e, action) {
    if (!isDragging.current) {
      if (action === "fewer") {
        changeQuantity(Math.max(0, quantity - 1), false);
      } else {
        changeQuantity(quantity + 1, true);
      }
      isDragging.current = false;
    }
  }

  useEffect(() => {
    setApplyBlur(true);
    setTimeout(() => {
      setTranslateYState("0%");
    }, 200);
    setTimeout(() => {
      setSeeSpanClose(true);
    }, 550);
  }, []);

  return (
    <BodyDivStyled
      style={{
        backgroundColor: seeSpanClose
          ? "rgba(0, 0, 0, 0.15)"
          : "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      }}
    >
      <DivSpanCloseStyled
        onClick={() => {
          setSeeSpanClose(false);
          setTranslateYState("100%");
          setApplyBlur(false);
          setUpdateProduct(updateProduct + 1);
          setTimeout(() => {
            setViewProductInFull(false);
          }, 300);
        }}
        style={{ display: seeSpanClose ? "flex" : "none" }}
      >
        <SpanCloseStyled className="material-symbols-outlined">
          close
        </SpanCloseStyled>

        <SpanDropDownStyled />
      </DivSpanCloseStyled>

      <MainDivStyled $translate={translateYState}>
        <ProductDivStyled>
          <DivImgStyled>
            <PAlertStyled>Atenção: função em fase de implementação</PAlertStyled>
            <ImgStyled src={dataProductFull.url} alt="Imagem do Produto" />

            {dataProductFull.weight != "" && (
              <DivWeightStyled>
                <PWeightStyled>{dataProductFull.weight}</PWeightStyled>
              </DivWeightStyled>
            )}

            {dataProductFull.weight != " " && (
              <DivDiscountStyled>
                <PWeightStyled>-{dataProductFull.discount}%</PWeightStyled>
              </DivDiscountStyled>
            )}
          </DivImgStyled>

          <DivNameProdStyled>
            <PNameProdStyled>{dataProductFull.name}</PNameProdStyled>
          </DivNameProdStyled>

          <DivPriceStyled>
            <PPriceStyled>R$ </PPriceStyled>
            <PPriceStyled>{dataProductFull.price}</PPriceStyled>
          </DivPriceStyled>

          <ContainerQuantStyled>
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
                    <PButtonsStyed style={{ paddingBottom: "8px" }}>
                      -
                    </PButtonsStyed>
                  </DivButtonsStyled>
                  <DivButtonsStyled>
                    <PQuantFullStyled>{quantity}</PQuantFullStyled>
                  </DivButtonsStyled>
                  <DivButtonsStyled onPointerUp={handlePointerUpButtons}>
                    <PButtonsStyed>+</PButtonsStyed>
                  </DivButtonsStyled>
                </>
              )}
              {quantity == 0 && (
                <DivButtonsStyled
                  style={{ width: "100%" }}
                  onPointerUp={handlePointerUpAdd}
                >
                  <PButtonsStyed style={{ scale: 1.07 }}>+</PButtonsStyed>
                </DivButtonsStyled>
              )}
            </DivQuantFullStyled>

            <DivSubStyled>
              <PSubStyled>Subtotal:</PSubStyled>
              <PSubStyled>
                {subtotal === "0,00" ? "" : `R$ ${subtotal}`}
              </PSubStyled>
            </DivSubStyled>
          </ContainerQuantStyled>
        </ProductDivStyled>

        <SimilarDivStyled>
          <DivTitleStyled>
            <H1Styled>Produtos Similares</H1Styled>
          </DivTitleStyled>

          <ListSimilarProductsStyled></ListSimilarProductsStyled>
        </SimilarDivStyled>
      </MainDivStyled>
    </BodyDivStyled>
  );
};

export default ProductInFull;
