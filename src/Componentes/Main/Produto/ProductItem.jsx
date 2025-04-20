import React, { useState } from 'react';
import styled from 'styled-components';
//img produto
import { DivOfertaStyled, PaiImgOfertaStyled, ImgOfertaStyed, DivPesoStyled, DivOffStyled} from './ComponentsStyled';
//botao de preco e botao de quantidade
import { PaiPrecoStyled, DivPrecoStyled, PprecoStyled, DivMaisStyled } from './ComponentsStyled';
import { DivQuantStyled, BotoesStyled, PQuantStyled } from './ComponentsStyled';
//nome do produto
import { DescOfertaStyled, DivNomeStyled, PnomeStyled } from './ComponentsStyled';


const PaiProdStyled = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    min-width: 290px;
    max-width: 315px;
    height: 155px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid rgb(190, 190, 190);
    box-shadow: 0px 0px 3px rgb(171, 171, 171);
`;

const Oferta = ()=>{(
  <DivOfertaStyled>
      <PaiImgOfertaStyled>
        <DivPesoStyled></DivPesoStyled>
        <ImgOfertaStyed></ImgOfertaStyed>
        <DivOffStyled></DivOffStyled>
      </PaiImgOfertaStyled>
  </DivOfertaStyled>
)}

const Botoes = ({ quantity, onMore, onFewer }) => {
  return (
    <DivQuantStyled>
      <BotoesStyled onClick={onFewer}>-</BotoesStyled>
      <BotoesStyled><PQuantStyled>{quantity}</PQuantStyled></BotoesStyled>
      <BotoesStyled onClick={onMore}>+</BotoesStyled>
    </DivQuantStyled>
  );
}

const Preco = () => {
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
            <PprecoStyled></PprecoStyled>
            <DivMaisStyled onClick={() => { 
              setMostrarBotoes(true); 
              setQuantity(1); 
            }}></DivMaisStyled>
          </DivPrecoStyled>
        </PaiPrecoStyled>
      )}
    </>
  );
}

const DescOferta = ()=>{
  <DescOfertaStyled>
    <DivNomeStyled>
      <PnomeStyled></PnomeStyled>
    </DivNomeStyled>
    <Preco></Preco>
  </DescOfertaStyled>
}

function ProductItem({ product }) {
  return (
    <PaiProdStyled>
      <Oferta></Oferta>
      <DescOferta></DescOferta>
    </PaiProdStyled>
  );
}

export default ProductItem;