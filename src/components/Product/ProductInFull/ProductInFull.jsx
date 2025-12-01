import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "@contexts/CartContext.js";
import { VisibilityContext } from "@contexts/VisibilityContext.js";
import {
  BodyDivStyled,
  MainDivStyled,
  ProductSectionStyled,
  ContainerQuantStyled,
  SimilarSectionStyled,
  DivTitleStyled,
  H1Styled,
  ContainerListStyled,
  DivHalfList,
} from "./StylizedTags.jsx";
import {
  ButtonAdd,
  ButtonClose,
  ProductData,
  Subtotal,
} from "./Components.jsx";
import { PValueStyled } from "@pages/Cart/StylizedTags.jsx";
import { HomeDivsContext } from "@contexts/HomeDivsContext.js";

const ProductInFull = () => {
  const [translateYState, setTranslateYState] = useState("100%");
  const [seeSpanClose, setSeeSpanClose] = useState(false);
  const { dataProductFull, setViewProductInFull } =
    useContext(VisibilityContext);
  const { handleQuantityChange } = useContext(CartContext);
  const { isDraggingRef } = useContext(HomeDivsContext);
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
          ? "rgba(0, 0, 0, 0.3)"
          : "rgba(0, 0, 0, 0)",
        transition: "background-color 0.3s ease",
      }}
      onPointerUp={handleClickClose}
    >
      <MainDivStyled
        $translate={translateYState}
        ref={MainDivRef}
        onPointerUp={(e) => {
          e.stopPropagation();
        }}
      >
        <ButtonClose
          handleClickClose={handleClickClose}
          seeSpanClose={seeSpanClose}
        />

        <ProductSectionStyled>
          <ProductData dataProductFull={dataProductFull} />

          <ContainerQuantStyled>
            <Subtotal subtotal={subtotal} />

            <ButtonAdd
              quantity={quantity}
              handlePointerDownDiv={handlePointerDownDiv}
              handlePointerMoveDiv={handlePointerMoveDiv}
              handlePointerUpAdd={handlePointerUpAdd}
              handlePointerUpButtons={handlePointerUpButtons}
            />
          </ContainerQuantStyled>
        </ProductSectionStyled>

        <SimilarSectionStyled>
          <DivTitleStyled>
            <H1Styled>Produtos Similares</H1Styled>
          </DivTitleStyled>

          <PValueStyled
            style={{
              color: "var(--dark-red)",
              width: "calc(100% - 40px)",
              margin: "auto",
              textAlign: "center",
            }}
          >
            *Essa parte ainda não foi desenvolvida*
          </PValueStyled>

          <ContainerListStyled>
            <DivHalfList></DivHalfList>
            <DivHalfList></DivHalfList>
          </ContainerListStyled>
        </SimilarSectionStyled>
      </MainDivStyled>
    </BodyDivStyled>
  );
};

export default ProductInFull;


