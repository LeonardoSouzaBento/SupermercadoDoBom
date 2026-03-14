import { useCartContext, useVisibilityContext } from "@/contexts";
import { WrapperSc } from "@components/product/index";
import { useEffect, useState } from "react";
import { css } from "styled-components";
import InfoWrapper from "./info-wrapper";
import ProductImage from "./product-image";

export const weightStyles = css`
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.5px;
  background-color: hsla(var(--primary-50), 0.88);
  color: var(--muted-foreground);
  padding: 0 8.5px;
  border-radius: 999px;
`;

export default function ProductItem({ product, variant }) {
  const { totalAddedValue, cartProducts } = useCartContext();
  const { seeFeedback } = useVisibilityContext ();
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
    <WrapperSc $variant={variant}>
      <InfoWrapper product={product} variant={variant} />
      <ProductImage
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        variant={variant}
      />
    </WrapperSc>
  );
}
