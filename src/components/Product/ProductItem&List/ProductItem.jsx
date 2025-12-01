import { useState, useEffect, useContext } from "react";
import { CartContext } from "@contexts/CartContext";
import { VisibilityContext } from "@contexts/VisibilityContext";
import {
  PaiProdStyled,
  PpesoStyled,
  PPeso2Styled,
  POffStyled,
  DivOfertaStyled,
  PaiImgOfertaStyled,
  ImgOfertaStyed,
  DivPesoStyled,
  DivOffStyled,
  PriceWrapperStyled,
  PriceDivStyled,
  PricePStyled,
  PSifraStyled,
  DivAddStyled,
  DivQuantStyled,
  DivButtonsStyled,
  PQuantStyled,
  SpanMoreStyled,
  SpanFewerStyled,
  DescOfertaStyled,
  DivNomeStyled,
  NamePStyled,
} from "./StylizedTags";

import { HomeDivsContext } from "@contexts/HomeDivsContext";

const Oferta = ({ product, quantity, setQuantity, variant }) => {
  const { setDataProductFull, viewProductInFull, setViewProductInFull } =
    useContext(VisibilityContext);
  const { handleQuantityChange } = useContext(CartContext);
  const { isDraggingRef } = useContext(HomeDivsContext);
  function handlePointerUpOpen(e) {
    if (e.button === 2) {
      return;
    }
    if (!viewProductInFull && !isDraggingRef.current) {
      setDataProductFull({ ...product, quantity: quantity });
      setViewProductInFull(true);
    }
    isDraggingRef.current = false;
  }

  //adicionar
  function handlePointerUpAdd(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    if (!isDraggingRef.current) {
      setQuantity(1);
      handleQuantityChange(product, true);
      isDraggingRef.current = false;
    }
  }

  //botões de mais e de menos
  function changeQuantity(newQty, isIncrement) {
    setQuantity(newQty);
    handleQuantityChange(product, isIncrement);
  }

  function handlePointerUpButtons(e, action) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    if (!isDraggingRef.current) {
      if (action == "fewer") {
        changeQuantity(Math.max(0, quantity - 1), false);
      } else {
        changeQuantity(quantity + 1, true);
      }
      isDraggingRef.current = false;
    }
  }

  return (
    <DivOfertaStyled $variant={variant}>
      <PaiImgOfertaStyled onPointerUp={handlePointerUpOpen} $variant={variant}>
        {product.discount != "" && product.discount != null && (
          <DivOffStyled>
            <POffStyled>-{product.discount}%</POffStyled>
          </DivOffStyled>
        )}
        {product.weight != "" && product.weight != null && (
          <PPeso2Styled>{product.weight}</PPeso2Styled>
        )}
        <ImgOfertaStyed src={product.url} $variant={variant}></ImgOfertaStyed>

        {/*Botão de adicionar*/}

        <DivAddStyled
          onPointerUp={handlePointerUpAdd}
          $variant={variant}
          $displayNone={quantity >= 1}
        >
          <SpanMoreStyled className="material-symbols-rounded">
            add
          </SpanMoreStyled>
        </DivAddStyled>

        {variant == "cart" && (
          <DivAddStyled>
            <PQuantStyled>{quantity}</PQuantStyled>
          </DivAddStyled>
        )}

        {/*Botões de mais e menos*/}
        <DivQuantStyled $display={quantity > 0} $variant={variant}>
          <DivButtonsStyled
            onPointerUp={(e) => {
              handlePointerUpButtons(e, "fewer");
            }}
          >
            <SpanFewerStyled className="material-symbols-rounded">
              remove
            </SpanFewerStyled>
          </DivButtonsStyled>

          <DivButtonsStyled>
            <PQuantStyled>{quantity}</PQuantStyled>
          </DivButtonsStyled>

          <DivButtonsStyled onPointerUp={handlePointerUpButtons}>
            <SpanMoreStyled className="material-symbols-rounded">
              add
            </SpanMoreStyled>
          </DivButtonsStyled>
        </DivQuantStyled>
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
  );
};

function ProductItem({ product, variant }) {
  const { totalAddedValue, cartProducts } = useContext(CartContext);
  const { seeFeedback } = useContext(VisibilityContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    cartProducts.map((item) => {
      if (item.id == product.id) {
        setQuantity(item.quant);
      }
    });
    if (totalAddedValue == 0) {
      setQuantity(0);
    }
  }, []);

  useEffect(() => {
    if (seeFeedback == true) {
      setQuantity(0);
    }
  }, [seeFeedback]);

  useEffect(() => {
    const cartItem = cartProducts.find((item) => item.id === product.id);
    if (cartItem) {
      setQuantity(cartItem.quant);
    } else {
      setQuantity(0);
    }
  }, [cartProducts, product.id]);

  return (
    <PaiProdStyled $variant={variant}>
      <DescOfertaStyled $variant={variant}>
        <DivNomeStyled>
          <NamePStyled>{product.name}</NamePStyled>
        </DivNomeStyled>

        <PriceWrapperStyled>
          {product.weight != "" && product.weight != null && (
            <DivPesoStyled>
              <PpesoStyled>{product.weight}</PpesoStyled>
            </DivPesoStyled>
          )}
          <PriceDivStyled>
            <PSifraStyled>R$</PSifraStyled>
            <PricePStyled>{product.price}</PricePStyled>
          </PriceDivStyled>
        </PriceWrapperStyled>
      </DescOfertaStyled>

      <Oferta
        product={product}
        setQuantity={setQuantity}
        quantity={quantity}
        variant={variant}
      />
    </PaiProdStyled>
  );
}

export default ProductItem;


