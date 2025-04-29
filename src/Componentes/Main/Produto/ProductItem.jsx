import React, { useState, useEffect } from 'react';
import {
  PaiProdStyled,
  PpesoStyled,
  PoffStyled,
  DivOfertaStyled,
  PaiImgOfertaStyled,
  ImgOfertaStyed,
  DivPesoStyled,
  DivOffStyled,
  PaiPrecoStyled,
  DivPrecoStyled,
  PprecoStyled,
  PSifraStyled,
  DivMaisStyled,
  DivQuantStyled,
  BotoesStyled,
  PQuantStyled,
  PMenosStyled,
  PMaisStyled,
  PMais2Styled,
  DescOfertaStyled,
  DivNomeStyled,
  PnomeStyled
} from './ComponentesProdutos';

const Oferta = ({ product, discount, quantity, setMostrarBotoes, mostrarBotoes, onQuantityChange })=>{
  return(
    <DivOfertaStyled>
      <PaiImgOfertaStyled>
        <DivOffStyled>
          <PoffStyled>-{discount}%</PoffStyled>
        </DivOffStyled>
        <ImgOfertaStyed src={product.url}></ImgOfertaStyed>

        {!mostrarBotoes &&
          <DivMaisStyled onClick={() => {
              setMostrarBotoes(true);
              onQuantityChange(1, true);
            }}>
            <PMaisStyled>+</PMaisStyled>
          </DivMaisStyled>
        }
        {mostrarBotoes &&
        <Botoes
          quantity={quantity}
          onQuantityChange={onQuantityChange}
          setMostrarBotoes={setMostrarBotoes}
        />}
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
)}

const Botoes = ({ quantity, onQuantityChange, setMostrarBotoes }) => {

  const handleMore = () =>
    onQuantityChange(quantity + 1, true );

  const handleFewer = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1, false);
    } else {
      onQuantityChange(0, false);
      setMostrarBotoes(false);
    }
  };

  return (
    <DivQuantStyled>
      <BotoesStyled onClick={handleFewer}><PMenosStyled>-</PMenosStyled></BotoesStyled>
      <BotoesStyled><PQuantStyled>{quantity}</PQuantStyled></BotoesStyled>
      <BotoesStyled onClick={handleMore}><PMais2Styled>+</PMais2Styled></BotoesStyled>
    </DivQuantStyled>
  );
}

const Preco = ({ price, discount}) => {
  return (
        <PaiPrecoStyled>

          <DivPrecoStyled>
            <PSifraStyled>R$</PSifraStyled>
            <PprecoStyled>{price}</PprecoStyled>
          </DivPrecoStyled>

        </PaiPrecoStyled>
)};

const DescOferta = ({product}) => {
  return (
    <DescOfertaStyled>
      <Preco
      discount={product.discount}
      price={product.price}>
      </Preco>
      <DivNomeStyled>
        <PnomeStyled>{product.name}</PnomeStyled>
      </DivNomeStyled>
      <DivPesoStyled>
          <PpesoStyled>{product.weight}</PpesoStyled>
      </DivPesoStyled>
    </DescOfertaStyled>
  );
}


function ProductItem({ product, quantity, onQuantityChange, variant}) {

  const [mostrarBotoes, setMostrarBotoes] = useState(false);

  // toda vez que quantity mudar, ajusta a visibilidade dos botões
  useEffect(() => {
    if (quantity > 0) {
      setMostrarBotoes(true);
    } else {
      setMostrarBotoes(false);
    }
  }, [quantity]);

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product}></DescOferta>

      <Oferta product={product}
      quantity={quantity}
      setMostrarBotoes={setMostrarBotoes}
      mostrarBotoes={mostrarBotoes}
      onQuantityChange={onQuantityChange}
      discount={product.discount}
      >
      </Oferta>
    </PaiProdStyled>
  );
}


export default ProductItem;