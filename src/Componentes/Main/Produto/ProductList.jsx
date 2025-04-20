import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const DivStyled = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 12px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 10px;
    box-sizing: border-box;
`;


function ProductList() {
  const products = [
    {
      id: 1,
      discount: 28,
      image: 'Imagens/33a4bcbab75e9ce724ca78e2f344944f.jpg',
      weight: '125 g',
      name: 'BISCOITO RECHEADO Bauduco SABOR CHOCOLATE COM BAUNILHA',
      price: '2,99'
    },
    {
      id: 2,
      discount: 28,
      image: 'Imagens/33a4bcbab75e9ce724ca78e2f344944f.jpg',
      weight: '',
      name: 'BISCOITO RECHEADO BONO SABOR CHOCOLATE COM BAUNILHA',
      price: '2,99'
    }
  ];

  return (
    <DivStyled>
       {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </DivStyled>
  );
}

export default ProductList;
