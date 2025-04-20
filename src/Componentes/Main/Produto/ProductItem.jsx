import React, { useState } from 'react';
import { PaiProdStyled, PpesoStyled, PoffStyled } from './ComponentsStyled';
//img produto
import {DivOfertaStyled, PaiImgOfertaStyled, ImgOfertaStyed, DivPesoStyled, DivOffStyled} from './ComponentsStyled';
//botao de preco e botao de quantidade
import { PaiPrecoStyled, DivPrecoStyled, PprecoStyled, DivMaisStyled } from './ComponentsStyled';
import { DivQuantStyled, BotoesStyled, PQuantStyled } from './ComponentsStyled';
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
      <BotoesStyled onClick={onFewer}>-</BotoesStyled>
      <BotoesStyled><PQuantStyled>{quantity}</PQuantStyled></BotoesStyled>
      <BotoesStyled onClick={onMore}>+</BotoesStyled>
    </DivQuantStyled>
  );
}

const Preco = ({price}) => {
  const [mostrarBotoes, setMostrarBotoes] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMore = () => setQuantity(quantity + 1);

  const handleFewer = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
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
              setQuantity(1); 
          }}><p>+</p></DivMaisStyled>
        </PaiPrecoStyled>
      )}
    </>
  );
}

const DescOferta = ({products})=>{
  return (
  <DescOfertaStyled>
    <DivNomeStyled>
      <PnomeStyled>{products.name}</PnomeStyled>
    </DivNomeStyled>
    <Preco price={products.price}></Preco>
  </DescOfertaStyled>
  )
}

function ProductItem({products}) {
  return (
    <PaiProdStyled>
      <Oferta products={products}></Oferta>
      <DescOferta products={products}></DescOferta>
    </PaiProdStyled>
  );
}

export default ProductItem;