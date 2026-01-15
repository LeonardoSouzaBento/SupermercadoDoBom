import { ListContainerStyled } from '@components/ui/product/index';
import { HomeDivsContext } from '@contexts/HomeDivsContext';
import React, { useContext, useEffect } from 'react';
import ProductItem from './product-list/product-item';

export const ProductList = React.forwardRef(({ variant, productList }, ref) => {
  const { isDraggingRef } = useContext(HomeDivsContext);

  useEffect(() => {
    return () => {
      isDraggingRef.current = false;
    };
  }, []);

  return (
    <ListContainerStyled $variant={variant} ref={ref}>
      {productList.map((product) => (
        <ProductItem variant={variant} key={`${product.id}-${product.cat_id}`} product={product} />
      ))}
    </ListContainerStyled>
  );
});
