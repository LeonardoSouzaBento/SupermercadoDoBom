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

const Oferta = ({ product, quantity, setMostrarBotoes, mostrarBotoes, onQuantityChange, variant})=>{
  return(
    <DivOfertaStyled>
      <PaiImgOfertaStyled>
        {(product.discount!=''&& product.discount!=null) &&
        <DivOffStyled>
          <PoffStyled>-{product.discount}%</PoffStyled>
        </DivOffStyled>}
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
          variant={variant}
        />}
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
)}

const Botoes = ({ quantity, onQuantityChange, setMostrarBotoes, variant}) => {

  const handleMore = () =>
    onQuantityChange(quantity + 1, true );

  const handleFewer = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1, false);
    } else if (variant === 'cart') {
      onQuantityChange(0, false);
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

const Preco = ({price}) => {
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


function ProductItem({product, quantity, onQuantityChange, variant}) {

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
      <DescOferta product={product} $variant={variant}></DescOferta>

      <Oferta product={product}
      quantity={quantity}
      setMostrarBotoes={setMostrarBotoes}
      mostrarBotoes={mostrarBotoes}
      onQuantityChange={onQuantityChange}
      variant={variant}
      >
      </Oferta>
    </PaiProdStyled>
  );
}


export default ProductItem;