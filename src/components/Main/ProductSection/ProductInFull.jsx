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
  PAlertStyled,
} from "./ComponentsProductInFull.jsx";
import ProductItem from "./ProductItem.jsx";

const exampleProducts = [
  {
    id: 1,
    discount: 28,
    url: "https://i.pinimg.com/736x/d6/68/01/d668015898a52f2390f8f52837f7b60a.jpg",
    weight: "50 g",
    name: "Bolinho Bauduco Sabor Duplo chocolate",
    price: "1,70",
  },
  {
    id: 2,
    discount: 20,
    url: "https://i.pinimg.com/736x/d1/73/4c/d1734c8aab4b0b07b6b1474757db5954.jpg",
    weight: "100 g",
    name: "Biscoito recheado sabor chocolate nestle passatempo " /*Nome grande inverte a ordem*/,
    price: "3,00",
  },
  {
    id: 5,
    discount: 12,
    url: "https://i.pinimg.com/736x/82/8c/9d/828c9df9391929f798d8e4ecdc02f327.jpg",
    weight: "",
    name: "Bandeja com 30 ovos de galinha vermelhos",
    price: "17,00",
  },
  {
    id: 3,
    discount: 10,
    url: "https://i.pinimg.com/736x/6b/09/35/6b09351ec3178f69e2663b6569a4b69d.jpg",
    weight: "1 L",
    name: "Leite uth integral piracanjuba",
    price: "7,00",
  },
];

const ProductInFull = () => {
  const [translateYState, setTranslateYState] = useState("100%");
  const [seeSpanClose, setSeeSpanClose] = useState(false);
  const { dataProductFull, setViewProductInFull, setApplyBlur } =
    useContext(ViewContext);
  const { handleQuantityChange, updateProduct, setUpdateProduct } =
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

  function handleClickClose() {
    setSeeSpanClose(false);
    setTranslateYState("100%");
    setApplyBlur(false);
    setUpdateProduct({ id: dataProductFull.id, quant: quantity });
    setTimeout(() => {
      setViewProductInFull(false);
    }, 300);
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
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      }}
    >
      <MainDivStyled $translate={translateYState} ref={MainDivRef}>
        <DivSpanCloseStyled
          onClick={handleClickClose}
          style={{ display: seeSpanClose ? "flex" : "none" }}
        >
          <SpanCloseStyled className="material-symbols-outlined">
            close
          </SpanCloseStyled>

          <SpanDropDownStyled />
        </DivSpanCloseStyled>

        <ProductDivStyled>
          <DivImgStyled>
            <PAlertStyled>Atenção: função em desenvolvimento</PAlertStyled>
            <ImgStyled src={dataProductFull.url} alt="Imagem do Produto" />

            {dataProductFull.weight != "" && (
              <DivWeightStyled>
                <PWeightStyled style={{color: '#292e4e', fontWeight: '500'}}>{dataProductFull.weight}</PWeightStyled>
              </DivWeightStyled>
            )}

            {dataProductFull.weight != " " && (
              <DivDiscountStyled>
                <PWeightStyled style={{fontWeight: '400'}}>-{dataProductFull.discount}%</PWeightStyled>
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
              <PSubStyled>Subtotal:</PSubStyled>
              <PSubStyled>
                {subtotal === "0,00" ? "" : `R$ ${subtotal}`}
              </PSubStyled>
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
          </ContainerQuantStyled>
        </ProductDivStyled>

        <SimilarDivStyled>
          <DivTitleStyled>
            <H1Styled>Produtos Similares</H1Styled>
          </DivTitleStyled>

          <ListSimilarProductsStyled>
            {exampleProducts.map((product) => (
              <ProductItem
                variant={"similarList"}
                key={`${product.id}-${product.cat_id}`}
                product={product}
              />
            ))}
          </ListSimilarProductsStyled>
        </SimilarDivStyled>
      </MainDivStyled>
    </BodyDivStyled>
  );
};

export default ProductInFull;
