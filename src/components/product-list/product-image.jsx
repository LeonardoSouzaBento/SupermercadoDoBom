import { useCartContext, useVisibilityContext } from '@/contexts';
import { ButtonGroupSc, ImageWrapperSc } from '@components/product/index';
import { HomeDivsContext } from "@/contexts/index";
import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { Minus, Plus } from 'lucide-react';
import { useContext } from 'react';
import ButtonAdd from './button-add';
import { weightStyles } from './product-item';

const ButtonGroup = ({ quantity, setQuantity, variant, product, isDraggingRef }) => {
  const { handleQuantityChange } = useCartContext();

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
    <ButtonGroupSc $display={quantity > 0} $variant={variant}>
      <div
        onPointerUp={(e) => {
          handlePointerUpButtons(e, 'fewer');
        }}>
        <Icon size="sm" Icon={Minus} />
      </div>

      <p>{quantity}</p>

      <div onPointerUp={handlePointerUpButtons}>
        <Icon size="sm" Icon={Plus} />
      </div>
    </ButtonGroupSc>
  );
};

const ProductImage = ({ product, quantity, setQuantity, variant }) => {
  const { setDataProductFull, viewProductInFull, setViewProductInFull } =
    useVisibilityContext ();
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
    <ImageWrapperSc $variant={variant} $weightStyles={weightStyles}>
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
    </ImageWrapperSc>
  );
};

export default ProductImage;
