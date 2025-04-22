import React, { useState } from 'react';
import { PaiProdStyled, PpesoStyled, PoffStyled } from './ComponentsStyled';
//img produto
import {DivOfertaStyled, PaiImgOfertaStyled, ImgOfertaStyed, DivPesoStyled, DivOffStyled} from './ComponentsStyled';
//botao de preco e botao de quantidade
import { PaiPrecoStyled, DivPrecoStyled, PprecoStyled, DivMaisStyled, PmaisStyled} from './ComponentsStyled';
import { DivQuantStyled, BotoesStyled, PQuantStyled, QuantStyled} from './ComponentsStyled';
//nome do produto
import { DescOfertaStyled, DivNomeStyled, PnomeStyled } from './ComponentsStyled';
import {products} from '../../../data/data';

const Oferta = ({products})=>(
  <DivOfertaStyled>
      <PaiImgOfertaStyled>
        <DivOffStyled>
          <PoffStyled> -{products.discount}%</PoffStyled>
        </DivOffStyled>

        <ImgOfertaStyed src={products.url}></ImgOfertaStyed>

        <DivPesoStyled>
          <PpesoStyled>{products.weight}</PpesoStyled>
        </DivPesoStyled>
      </PaiImgOfertaStyled>
  </DivOfertaStyled>
)

const Botoes = ({ quantity, onMore, onFewer }) => {
  return (
    <DivQuantStyled>
      <BotoesStyled onClick={onFewer}><PQuantStyled>-</PQuantStyled></BotoesStyled>
      <BotoesStyled><QuantStyled>{quantity}</QuantStyled></BotoesStyled>
      <BotoesStyled onClick={onMore}><PQuantStyled>+</PQuantStyled></BotoesStyled>
    </DivQuantStyled>
  );
}

const Preco = ({ price, quantity, onQuantityChange }) => {
  const [mostrarBotoes, setMostrarBotoes] = React.useState(false);

  const handleMore = () => onQuantityChange(quantity + 1);

  const handleFewer = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    } else {
      onQuantityChange(0);
      setMostrarBotoes(false);
    }
  };

  return (
    <>
      {mostrarBotoes ? (
        <Botoes 
          quantity={quantity}
          onMore={handleMore}
          onFewer={handleFewer}
        />
      ) : (
        <PaiPrecoStyled>
          <DivPrecoStyled>
            <PprecoStyled>R$ {price}</PprecoStyled>
          </DivPrecoStyled>
          <DivMaisStyled onClick={() => { 
              setMostrarBotoes(true); 
              onQuantityChange(1);
            }}>
            <PmaisStyled>+</PmaisStyled>
          </DivMaisStyled>
        </PaiPrecoStyled>
      )}
    </>
  );
}


const DescOferta = ({ products, quantity, onQuantityChange }) => {
  return (
    <DescOfertaStyled>
      <DivNomeStyled>
        <PnomeStyled>{products.name}</PnomeStyled>
      </DivNomeStyled>
      <Preco price={products.price} quantity={quantity} onQuantityChange={onQuantityChange}></Preco>
    </DescOfertaStyled>
  );
}


function ProductItem({ products, quantity, onQuantityChange }) {
  return (
    <PaiProdStyled>
      <Oferta products={products}></Oferta>
      <DescOferta products={products} quantity={quantity} onQuantityChange={onQuantityChange}></DescOferta>
    </PaiProdStyled>
  );
}


export default ProductItem;