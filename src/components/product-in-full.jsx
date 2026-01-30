import { ButtonGroup, ContainerSc, ProductData } from '@components/product-full/index';
import { CartContext } from '@contexts/CartContext';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { Button } from '@ui/button';
import { Icon } from '@ui/index';
import { X } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';

const ProductInFull = () => {
  const [translateYState, setTranslateYState] = useState('100%');
  const [seeSpanClose, setSeeSpanClose] = useState(false);
  const { dataProductFull, setViewProductInFull } = useContext(VisibilityContext);
  const { handleQuantityChange } = useContext(CartContext);
  const { isDraggingRef } = useContext(HomeDivsContext);
  const initialQuant = dataProductFull.quantity;
  const [quantity, setQuantity] = useState(initialQuant);
  const isDragging = useRef(false);
  const initialPointerPosition = useRef(null);
  const rawPrice = dataProductFull.price || '0';
  const priceNumber = parseFloat(rawPrice.replace(',', '.')) || 0;
  const subtotal = (priceNumber * quantity).toFixed(2).replace('.', ',');
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
      if (action === 'fewer') {
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
    setTranslateYState('100%');
    setTimeout(() => {
      setViewProductInFull(false);
    }, 300);
  }

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    setTimeout(() => {
      setTranslateYState('0%');
    }, 200);
    setTimeout(() => {
      setSeeSpanClose(true);
    }, 550);

    return () => {
      document.body.style.overflowY = 'auto';
      isDraggingRef.current = false;
    };
  }, []);

  // const middleIndex = Math.ceil(exampleProducts.length / 2);
  // const firstHalf = exampleProducts.slice(0, middleIndex);
  // const secondHalf = exampleProducts.slice(middleIndex);

  return (
    <ContainerSc
      $translate={translateYState}
      style={{
        backgroundColor: seeSpanClose ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)',
        transition: 'background-color 0.3s ease',
      }}
      onPointerUp={handleClickClose}>
      <div
        ref={MainDivRef}
        onPointerUp={(e) => {
          e.stopPropagation();
        }}>
        <Button
          className="close-button"
          size="icon-sm"
          variant="secondary"
          onClick={handleClickClose}>
          <Icon LucideIcon={X} size="xl" />
        </Button>

        <div id="product-full-section">
          <ProductData dataProductFull={dataProductFull} />

          <div id="subtotal-and-button">
            <p className='subtotal'>
              {subtotal == '0,00' ? (
                <strong>Subtotal:</strong>
              ) : (
                <>
                  <strong>Subtotal:</strong>
                  <strong>R$ {subtotal}</strong>
                </>
              )}
            </p>

            <ButtonGroup
              quantity={quantity}
              handlePointerDownDiv={handlePointerDownDiv}
              handlePointerMoveDiv={handlePointerMoveDiv}
              handlePointerUpAdd={handlePointerUpAdd}
              handlePointerUpButtons={handlePointerUpButtons}
            />
          </div>
        </div>

        <div id="similar-products-section">
          <h3>Produtos Similares</h3>
          <p id="warning">*Essa parte ainda será desenvolvida*</p>
        </div>
      </div>
    </ContainerSc>
  );
};

export default ProductInFull;
