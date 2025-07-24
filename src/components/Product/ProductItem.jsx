import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../../contexts/CartContext";
import { VisibilityContext } from "../../contexts/VisibilityContext";
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
  PaiPrecoStyled,
  DivPrecoStyled,
  PprecoStyled,
  PSifraStyled,
  DivAddStyled,
  DivQuantStyled,
  DivButtonsStyled,
  PQuantStyled,
  SpanMoreStyled,
  SpanFewerStyled,
  DescOfertaStyled,
  DivNomeStyled,
  PnomeStyled,
} from "./ComponentsProductItem";

const Oferta = ({ product, quantity, setQuantity, variant }) => {
  const { setDataProductFull, viewProductInFull, setViewProductInFull } =
    useContext(VisibilityContext);
  const { handleQuantityChange, isDraggingRef } = useContext(CartContext);

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
    <DivOfertaStyled>
      <PaiImgOfertaStyled onPointerDown={handlePointerUpOpen}>
        {product.discount != "" && product.discount != null && (
          <DivOffStyled>
            <POffStyled>-{product.discount}%</POffStyled>
          </DivOffStyled>
        )}
        {product.weight != "" && product.weight != null && (
          <PPeso2Styled>{product.weight}</PPeso2Styled>
        )}
        <ImgOfertaStyed src={product.url}></ImgOfertaStyed>

        {/*Botão de adicionar*/}
        {quantity == 0 && (
          <DivAddStyled onPointerUp={handlePointerUpAdd} $variant={variant}>
            <SpanMoreStyled className="material-symbols-rounded">
              add
            </SpanMoreStyled>
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

const Preco = ({ product }) => {
  const existWeight = product.weight != "" && product.weight != null;
  return (
    <PaiPrecoStyled>
      {product.weight != "" && product.weight != null && (
        <DivPesoStyled $exist={existWeight}>
          <PpesoStyled>{product.weight}</PpesoStyled>
        </DivPesoStyled>
      )}

      <DivPrecoStyled>
        <PSifraStyled>R$</PSifraStyled>
        <PprecoStyled>{product.price}</PprecoStyled>
      </DivPrecoStyled>
    </PaiPrecoStyled>
  );
};

const DescOferta = ({ product }) => {
  return (
    <DescOfertaStyled>
      <DivNomeStyled>
        <PnomeStyled>{product.name}</PnomeStyled>
      </DivNomeStyled>
      <Preco price={product.price} product={product}></Preco>
    </DescOfertaStyled>
  );
};

function ProductItem({ product, variant }) {
  const { totalAddedValue, cartProducts, updateProduct, isDraggingRef } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const { seeFeedback } = useContext(VisibilityContext);

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
    cartProducts.map((item) => {
      if (item.id == product.id) {
        setQuantity(item.quant);
      }
    });
  }, [updateProduct]);

  // useEffect(() => {
  //   if (updateProduct?.id === product.id) {
  //     setQuantity(updateProduct.quant);
  //   }
  // }, [updateProduct]);

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product} />
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
