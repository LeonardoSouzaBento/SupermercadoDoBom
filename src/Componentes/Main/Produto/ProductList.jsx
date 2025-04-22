import React from 'react';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { products } from '../../../data/data';
import { CartContext } from '../../CartContext';

const DivStyled = styled.div`
    width: 100%;
    height: 534px;
    padding: 5px;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 12px;

    @media screen and (min-width: 320px) and (max-width: 375px){
      gap: 8px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      gap: 14px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
      gap: 17px;
    }
    @media screen and (min-width: 769px){
      gap: 18px;
    }
    @media screen and (min-width: 993px){
      padding-bottom: 5px;
    }
`;

function ProductList() {
  //solucao com context api
  const { quantities, setQuantities, handleQuantityChange } = useContext(CartContext);

  useEffect(() => {
    setQuantities(products.map(() => 0));
  }, [setQuantities]);

  //solução com subida de props
  // const [quantities, setQuantities] = React.useState(
  //   products.map(() => 0)  // começa tudo em 0
  // );

  // const handleQuantityChange = (index, newQuantity) => {
  //   setQuantities(prev => {
  //     const updated = [...prev];
  //     updated[index] = newQuantity;
  //     return updated;
  //   });
  // };

  // const totalQuantity = quantities.reduce((sum, q) => sum + q, 0);

  return (
    <DivStyled>
      {products.map((product, index) => (
        <ProductItem 
          key={product.id} 
          products={product}
          quantity={quantities[index] || 0}
          onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
        />
      ))}
    </DivStyled>
  );
}


export default ProductList;
