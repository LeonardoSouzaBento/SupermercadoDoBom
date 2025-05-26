import React, { useState, useEffect} from 'react';
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
} from './ComponentsProductItem';

const Oferta = ({ product, quantity, setMostrarBotoes, mostrarBotoes, onQuantityChange, variant})=>{
  let toqueInicio = null;
  const iniciarToque = () => {
    toqueInicio = Date.now();
  };

  const finalizarToque = () => {
    const duracao = Date.now() - toqueInicio;
    if (duracao < 100) { // só considera toques curtos (menos de 200ms)
      setMostrarBotoes(true);
      onQuantityChange(1, true);
    }
  };

  return(
    <DivOfertaStyled>
      <PaiImgOfertaStyled>
        {(product.discount!=''&& product.discount!=null) &&
        <DivOffStyled>
          <PoffStyled>-{product.discount}%</PoffStyled>
        </DivOffStyled>}
        <ImgOfertaStyed src={product.url}></ImgOfertaStyed>
        
        {!mostrarBotoes &&
          <DivMaisStyled 
            onPointerDown={iniciarToque}
            onPointerUp={finalizarToque}>
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

  const handleMore = () => onQuantityChange(quantity + 1, true );

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
      <BotoesStyled onPointerDown={handleFewer}><PMenosStyled>-</PMenosStyled></BotoesStyled>
      <BotoesStyled><PQuantStyled>{quantity}</PQuantStyled></BotoesStyled>
      <BotoesStyled onPointerDown={handleMore}><PMais2Styled>+</PMais2Styled></BotoesStyled>
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
  
  const existWeight = product.weight!='' && product.weight!=null;

  return (
    <DescOfertaStyled>
      <DivNomeStyled>
        <PnomeStyled>{product.name}</PnomeStyled>
      </DivNomeStyled>
      <Preco
      price={product.price}>
      </Preco>

      <DivPesoStyled>
          <PpesoStyled $exist={existWeight}>{product.weight}</PpesoStyled>
      </DivPesoStyled>
    </DescOfertaStyled>
  );
}


function ProductItem({product, quantity, onQuantityChange, variant}) {
  const [mostrarBotoes, setMostrarBotoes] = useState(false);

  useEffect(() => {
    if (!mostrarBotoes && quantity > 0) {
      setMostrarBotoes(true);
    } else if(mostrarBotoes && quantity == 0){
      setMostrarBotoes(false);
    }
  }, [quantity, mostrarBotoes]);

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