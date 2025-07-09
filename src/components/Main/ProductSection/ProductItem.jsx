import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../../CartContext";
import { ViewContext } from "../../viewContext";
import {
  PaiProdStyled,
  PpesoStyled,
  PPeso2Styled,
  PoffStyled,
  DivOfertaStyled,
  PaiImgOfertaStyled,
  ImgOfertaStyed,
  DivPesoStyled,
  DivOffStyled,
  PaiPrecoStyled,
  DivPrecoStyled,
  PprecoStyled,
  PSifraStyled,
  DivMaisStyled,
  DivQuantStyled,
  DivPStyled,
  PQuantStyled,
  PMenosStyled,
  PMaisStyled,
  DescOfertaStyled,
  DivNomeStyled,
  PnomeStyled,
} from "./ComponentsProductItem";

const Oferta = ({ product, quantity, setQuantity }) => {
  const {
    setDataProductFull,
    viewProductInFull,
    setViewProductInFull,
    setApplyBlur,
  } = useContext(ViewContext);
  const { handleQuantityChange, isDraggingRef } = useContext(CartContext);

  function handlePointerUpOpen(e) {
    if (!viewProductInFull && !isDraggingRef.current) {
      setDataProductFull({ ...product, quantity: quantity });
      setViewProductInFull(true);
    }
    isDraggingRef.current = false;
  }

  //adicionar
  function handlePointerUpAdd(e) {
    e.stopPropagation();
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
      <PaiImgOfertaStyled onPointerUp={handlePointerUpOpen}>
        {product.discount != "" && product.discount != null && (
          <DivOffStyled>
            <PoffStyled>-{product.discount}%</PoffStyled>
          </DivOffStyled>
        )}
        {product.weight != "" && product.weight != null && (
          <PPeso2Styled>{product.weight}</PPeso2Styled>
        )}
        <ImgOfertaStyed src={product.url}></ImgOfertaStyed>

        {/*Botão de adicionar*/}
        {quantity == 0 && (
          <DivMaisStyled onPointerUp={handlePointerUpAdd}>
            <PMaisStyled>+</PMaisStyled>
          </DivMaisStyled>
        )}

        {/*Botões de mais e menos*/}
        <DivQuantStyled $display={quantity > 0}>
          <DivPStyled
            onPointerUp={(e) => {
              handlePointerUpButtons(e, "fewer");
            }}
          >
            <PMenosStyled>-</PMenosStyled>
          </DivPStyled>
          <DivPStyled>
            <PQuantStyled>{quantity}</PQuantStyled>
          </DivPStyled>
          <DivPStyled onPointerUp={handlePointerUpButtons}>
            <PMaisStyled>+</PMaisStyled>
          </DivPStyled>
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
  const { totalAddedValue, cartProducts, updateProduct } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const { seeFeedback } = useContext(ViewContext);

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

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product} />
      <Oferta product={product} setQuantity={setQuantity} quantity={quantity} />
    </PaiProdStyled>
  );
}

export default ProductItem;
