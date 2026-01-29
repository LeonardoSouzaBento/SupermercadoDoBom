import { ButtonGroupStyled, ImageWrapperStyled } from '@components/product/index';
import { CartContext } from '@contexts/CartContext';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { useContext } from 'react';
import ButtonAdd from './button-add';
import { Icon } from '@ui/icon';
import { Plus, Minus } from 'lucide-react';
import { weightStyles } from './product-item';
import { Button } from '@ui/button';

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
        <Icon size="sm" LucideIcon={Minus} />
      </div>

      <p>{quantity}</p>

      <div onPointerUp={handlePointerUpButtons}>
        <Icon size="sm" LucideIcon={Plus} />
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
    <ImageWrapperStyled $variant={variant} $weightStyles={weightStyles}>
      <div onPointerUp={handlePointerUpOpen}>
        {product.discount != '' && product.discount != null && (
          <p id="discount">-{product.discount}%</p>
        )}
        {product.weight != '' && product.weight != null && <p id="weight">{product.weight}</p>}
        <img src={product.url}></img>

        {quantity == 0 && <ButtonAdd product={product} setQuantity={setQuantity} />}

        {variant == 'cart' && (
          <Button id="quantity-in-cart" variant="primary" size="icon">
            {quantity}
          </Button>
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

