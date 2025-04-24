import React, { useState } from 'react';
import { PaiProdStyled, PpesoStyled, PoffStyled } from './ComponentesProdutos';
//img produto
import {DivOfertaStyled, PaiImgOfertaStyled, ImgOfertaStyed, DivPesoStyled, DivOffStyled, DivResizeStyled, SpanResizeStyled} from './ComponentesProdutos';
//botao de preco e botao de quantidade
import { PaiPrecoStyled, DivPrecoStyled, PprecoStyled, DivMaisStyled} from './ComponentesProdutos';
import { DivQuantStyled,BotoesStyled, PQuantStyled, PMenosStyled, PMaisStyled, PMais2Styled} from './ComponentesProdutos';
//nome do produto
import { DescOfertaStyled, DivNomeStyled, PnomeStyled } from './ComponentesProdutos';
import {products} from '../../../data/data';

const Oferta = ({ products, discount, quantity, setMostrarBotoes, mostrarBotoes, onQuantityChange })=>{
  const handleMore = () => onQuantityChange(quantity + 1, true);

  const handleFewer = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1, false);
    } else {
      onQuantityChange(0, false);
      setMostrarBotoes(false);
    }
  };

  return(
  <DivOfertaStyled>
      <PaiImgOfertaStyled>
          <DivOffStyled>
              <PoffStyled>-{discount}%</PoffStyled>
          </DivOffStyled>
          <ImgOfertaStyed src={products.url}></ImgOfertaStyed>

          {!mostrarBotoes && 
            <DivMaisStyled onClick={() => { 
                setMostrarBotoes(true); 
                onQuantityChange(1, true);}}>
              <PMaisStyled>+</PMaisStyled>
            </DivMaisStyled>
          }  
          {mostrarBotoes &&
          <Botoes 
            quantity={quantity}
            onMore={handleMore}
            onFewer={handleFewer}
        />}
      </PaiImgOfertaStyled>
  </DivOfertaStyled>
)}

const Botoes = ({ quantity, onMore, onFewer }) => {
  return (
    <DivQuantStyled>
      <BotoesStyled onClick={onFewer}><PMenosStyled>-</PMenosStyled></BotoesStyled>
      <BotoesStyled><PQuantStyled>{quantity}</PQuantStyled></BotoesStyled>
      <BotoesStyled onClick={onMore}><PMais2Styled>+</PMais2Styled></BotoesStyled>
    </DivQuantStyled>
  );
}

const Preco = ({ price, discount}) => {
  return (
        <PaiPrecoStyled>
          <DivPrecoStyled>

            <PprecoStyled>R$ {price}</PprecoStyled>
            
          </DivPrecoStyled>
        </PaiPrecoStyled>
)};

const DescOferta = ({ products}) => {
  return (
    <DescOfertaStyled>
      <Preco 
      discount={products.discount}
      price={products.price}>
      </Preco>
      <DivNomeStyled>
        <PnomeStyled>{products.name}</PnomeStyled>
      </DivNomeStyled>
      <DivPesoStyled>
          <PpesoStyled>{products.weight}</PpesoStyled>
      </DivPesoStyled>
    </DescOfertaStyled>
  );
}


function ProductItem({ products, quantity, onQuantityChange }) {

  const [mostrarBotoes, setMostrarBotoes] = React.useState(false);

  const handleQuantityChange = (newQuantity, isAdding) => {
    onQuantityChange(newQuantity, products.id, products.price, isAdding);
  };

  return (
    <PaiProdStyled>
      <DescOferta products={products}></DescOferta>

      <Oferta products={products}
      quantity={quantity}
      setMostrarBotoes={setMostrarBotoes} 
      mostrarBotoes={mostrarBotoes}
      onQuantityChange={handleQuantityChange}
      discount={products.discount}
      >
      </Oferta>
    </PaiProdStyled>
  );
}


export default ProductItem;