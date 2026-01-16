import { WrapperStyled } from '@components/product/index';
import { CartContext } from '@contexts/CartContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { useContext, useEffect, useState } from 'react';
import InfoWrapper from './info-wrapper';
import ProductImage from './product-image';
import { css } from 'styled-components';

export const weightStyles = css`
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.5px;
  background-color: hsla(var(--primary-50), 0.88);
  color: var(--muted-foreground);
  padding: 0 0.85rem;
  border-radius: 999rem;
`;

export default function ProductItem({ product, variant }) {
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
    <WrapperStyled $variant={variant}>
      <InfoWrapper product={product} variant={variant} />
      <ProductImage
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        variant={variant}
      />
    </WrapperStyled>
  );
}
