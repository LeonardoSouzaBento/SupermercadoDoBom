import { ButtonGroup, ProductData, Subtotal } from '@components/product-full/index.js';
import { ContainerStyled, SimilarSectionStyled } from '@components/ui/product-full/index.js';
import { CartContext } from '@contexts/CartContext.js';
import { HomeDivsContext } from '@contexts/HomeDivsContext.js';
import { VisibilityContext } from '@contexts/VisibilityContext.js';
import { CardHeader } from '@ui/card.jsx';
import { useContext, useEffect, useRef, useState } from 'react';
import { ButtonClose } from './Components.jsx';
import { ProductSectionStyled } from './StylizedTags.jsx';

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
    <ContainerStyled
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
        <ButtonClose handleClickClose={handleClickClose} seeSpanClose={seeSpanClose} />

        <ProductSectionStyled>
          <ProductData dataProductFull={dataProductFull} />

          <div>
            <Subtotal subtotal={subtotal} />

            <ButtonGroup
              quantity={quantity}
              handlePointerDownDiv={handlePointerDownDiv}
              handlePointerMoveDiv={handlePointerMoveDiv}
              handlePointerUpAdd={handlePointerUpAdd}
              handlePointerUpButtons={handlePointerUpButtons}
            />
          </div>
        </ProductSectionStyled>

        <SimilarSectionStyled>
          <CardHeader title="Produtos Similares" separator={false} />
          <p id="warning">*Essa parte ainda será desenvolvida*</p>

          <div>
            <div></div>
            <div></div>
          </div>
        </SimilarSectionStyled>
      </div>
    </ContainerStyled>
  );
};

export default ProductInFull;
