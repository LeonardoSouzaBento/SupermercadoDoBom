import { ButtonGroupStyled, ImageWrapperStyled } from '@components/ui/product/index';
import { CartContext } from '@contexts/CartContext';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { useContext } from 'react';
import { ButtonAdd } from './button-add';

const ButtonGroup = ({ quantity, setQuantity, variant, product, isDraggingRef }) => {
  const { handleQuantityChange } = useContext(CartContext);

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
      if (action == 'fewer') {
        changeQuantity(Math.max(0, quantity - 1), false);
      } else {
        changeQuantity(quantity + 1, true);
      }
      isDraggingRef.current = false;
    }
  }

  return (
    <ButtonGroupStyled $display={quantity > 0} $variant={variant}>
      <div
        onPointerUp={(e) => {
          handlePointerUpButtons(e, 'fewer');
        }}>
        <span className="material-symbols-rounded">remove</span>
      </div>

      <p>{quantity}</p>

      <div onPointerUp={handlePointerUpButtons}>
        <span className="material-symbols-rounded">add</span>
      </div>
    </ButtonGroupStyled>
  );
};

const ProductImage = ({ product, quantity, setQuantity, variant }) => {
  const { setDataProductFull, viewProductInFull, setViewProductInFull } =
    useContext(VisibilityContext);
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

  return (
    <ImageWrapperStyled $variant={variant}>
      <div onPointerUp={handlePointerUpOpen}>
        {product.discount != '' && product.discount != null && (
          <p id="discount">-{product.discount}%</p>
        )}
        {product.weight != '' && product.weight != null && <p id="weight">{product.weight}</p>}
        <img src={product.url}></img>

        {quantity == 0 && <ButtonAdd product={product} setQuantity={setQuantity} />}

        {variant == 'cart' && (
          <div id="quantity-in-cart">
            <p>{quantity}</p>
          </div>
        )}

        <ButtonGroup
          quantity={quantity}
          setQuantity={setQuantity}
          variant={variant}
          product={product}
          isDraggingRef={isDraggingRef}
        />
      </div>
    </ImageWrapperStyled>
  );
};

export default ProductImage;
