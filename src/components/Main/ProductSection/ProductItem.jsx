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

const Oferta = ({ product, quantity, setQuantity, handleQuantityChange }) => {
  const divMaisRef = useRef(null);
  let toqueInicio = null;

  useEffect(() => {
    const element = divMaisRef.current;

    const handleTouchStart = (e) => {
      toqueInicio = Date.now();
    };

    const handleTouchEnd = (e) => {
      const duracao = Date.now() - toqueInicio;
      if (duracao < 100) {
        setQuantity(1);
        handleQuantityChange(product, true);
      }
      toqueInicio = null;
    };

    if (element) {
      element.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      element.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (element) {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, []);

  const handleClick = (e) => {
    if (e.type === "click") {
      setQuantity(1);
      handleQuantityChange(product, true);
    }
  };

  return (
    <DivOfertaStyled>
      <PaiImgOfertaStyled>
        {product.discount != "" && product.discount != null && (
          <DivOffStyled>
            <PoffStyled>-{product.discount}%</PoffStyled>
          </DivOffStyled>
        )}
        {product.weight != "" && product.weight != null && (
          <PPeso2Styled>{product.weight}</PPeso2Styled>
        )}
        <ImgOfertaStyed src={product.url}></ImgOfertaStyed>

        {quantity === 0 && (
          <DivMaisStyled onClick={handleClick} ref={divMaisRef}>
            <PMaisStyled>+</PMaisStyled>
          </DivMaisStyled>
        )}
        {quantity >= 1 && (
          <Botoes
            quantity={quantity}
            setQuantity={setQuantity}
            handleQuantityChange={handleQuantityChange}
            product={product}
          />
        )}
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
  );
};

const Botoes = ({ quantity, product, setQuantity, handleQuantityChange }) => {
  function handleMore() {
    setQuantity(quantity + 1);
    handleQuantityChange(product, true);
  }

  function handleFewer() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      handleQuantityChange(product, false);
    } else {
      setQuantity(0);
      handleQuantityChange(product, false);
    }
  }

  return (
    <DivQuantStyled>
      <DivPStyled onPointerDown={handleFewer}>
        <PMenosStyled>-</PMenosStyled>
      </DivPStyled>
      <DivPStyled>
        <PQuantStyled>{quantity}</PQuantStyled>
      </DivPStyled>
      <DivPStyled onPointerDown={handleMore}>
        <PMaisStyled>+</PMaisStyled>
      </DivPStyled>
    </DivQuantStyled>
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

function ProductItem({ product, handleQuantityChange, variant }) {
  const { totalAddedValue, cartProducts } = useContext(CartContext);
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

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product} />
      <Oferta
        product={product}
        setQuantity={setQuantity}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
      />
    </PaiProdStyled>
  );
}

export default ProductItem;
