import { useState, useEffect, useContext} from 'react';
import { CartContext } from '../../CartContext';
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

const Oferta = ({ product, quantity, setQuantity, handleQuantityChange, })=>{
  let toqueInicio = null;
  const iniciarToque = () => {
    toqueInicio = Date.now();
  };

  const finalizarToque = () => {
    const duracao = Date.now() - toqueInicio;
    if (duracao < 100) { 
      setQuantity(1);
      product.quant = 1;
      handleQuantityChange(product, true);
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
        
        {quantity===0 &&
          <DivMaisStyled 
            onPointerDown={iniciarToque}
            onPointerUp={finalizarToque}>
            <PMaisStyled>+</PMaisStyled>
          </DivMaisStyled>
        }
        {quantity>=1 &&
        <Botoes
          quantity={quantity}
          setQuantity={setQuantity}
          handleQuantityChange={handleQuantityChange}
          product={product}
        />}
      </PaiImgOfertaStyled>
    </DivOfertaStyled>
)}

const Botoes = ({ quantity, product, setQuantity, handleQuantityChange}) => {

  function handleMore(){
    setQuantity(quantity+1);
    handleQuantityChange(product, true);
  } 

  function handleFewer (){
    if (quantity > 1) {
      setQuantity(quantity-1)
      handleQuantityChange(product, false);
    }
    else {
      setQuantity(0)
      handleQuantityChange(product, false);
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

function ProductItem({product, handleQuantityChange, variant}) {
  const {cartProducts, totalAddedValue} = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quant);

  useEffect(() => {
    cartProducts.map((item)=>{
      if(item.id == product.id){
        setQuantity(item.quant);
      }
    })
    if (totalAddedValue==0) {
      setQuantity(0)
    }
  },[])

  return (
    <PaiProdStyled $variant={variant}>
      <DescOferta product={product} $variant={variant}/>
      <Oferta
        product={product}
        setQuantity={setQuantity}
        quantity={quantity}
        handleQuantityChange={handleQuantityChange}
        variant={variant}
      />
    </PaiProdStyled>
  );
}

export default ProductItem;