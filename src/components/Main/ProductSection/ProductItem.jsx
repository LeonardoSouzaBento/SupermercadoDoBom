import { useState, useEffect, useContext, useRef } from "react";
import { CartContext } from "../../CartContext";
import { ViewContext } from "../../viewContext";
import {
  PaiProdStyled,
  PpesoStyled,
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

const Oferta = ({
  product,
  quantity,
  setQuantity,
  handleQuantityChange,
  variant,
}) => {
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
        product.quant = 1;
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
      product.quant = 1;
      handleQuantityChange(product, true);
    }
  };

  return (
    <DivOfertaStyled $variant={variant}>
      <PaiImgOfertaStyled>
        {product.discount != "" && product.discount != null && (
          <DivOffStyled $variant={variant}>
            <PoffStyled>-{product.discount}%</PoffStyled>
          </DivOffStyled>
        )}
        <ImgOfertaStyed src={product.url} $variant={variant}></ImgOfertaStyed>

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
            variant={variant}
          />
        )}
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
  );
};

const Botoes = ({
  quantity,
  product,
  setQuantity,
  handleQuantityChange,
  variant,
}) => {
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
    <DivQuantStyled $variant={variant}>
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

const Preco = ({ product, variant }) => {
  const existWeight = product.weight != "" && product.weight != null;
  return (
    <PaiPrecoStyled $variant={variant}>
      <DivPesoStyled $exist={existWeight} $variant={variant}>
        <PpesoStyled>{product.weight}</PpesoStyled>
      </DivPesoStyled>

      <DivPrecoStyled $variant={variant}>
        <PSifraStyled>R$</PSifraStyled>
        <PprecoStyled>{product.price}</PprecoStyled>
      </DivPrecoStyled>
    </PaiPrecoStyled>
  );
};

const DescOferta = ({ product, variant }) => {
  return (
    <DescOfertaStyled $variant={variant}>
      <DivNomeStyled>
        <PnomeStyled>{product.name}</PnomeStyled>
      </DivNomeStyled>
      <Preco price={product.price} variant={variant} product={product}></Preco>
    </DescOfertaStyled>
  );
};

function ProductItem({ product, handleQuantityChange, variant }) {
  const { cartProducts, totalAddedValue } = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quant);
  const { viewFeedback } = useContext(ViewContext);

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
    if (viewFeedback == true) {
      setQuantity(0);
    }
  }, [viewFeedback]);

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product} variant={variant} />
      <Oferta
        product={product}
        setQuantity={setQuantity}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        variant={variant}
      />
    </PaiProdStyled>
  );
}

export default ProductItem;
