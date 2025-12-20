import { WrapperStyled } from '@components/ui/product/index';
import { CartContext } from '@contexts/CartContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { useContext, useEffect, useState } from 'react';
import InfoWrapper from './info-wrapper';
import ProductImage from './product-image';

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