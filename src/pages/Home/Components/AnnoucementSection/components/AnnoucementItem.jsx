import {
  ItenSectionStyled,
  DivTitleStyled,
  DivImgStyled,
  DivPrice,
} from "./StylizedTags";

const AnnoucementItem = ({ product, index }) => {
  const discount = product.discount / 100;
  const price = parseFloat(product.discount);
  const oldPriceNumber = (1 + discount) * price;
  const oldPrice = oldPriceNumber.toFixed(2).replace(".", ",");

  return (
    <ItenSectionStyled id={`anun ${index}`}>
      <DivTitleStyled>
        <h2>{product.name}</h2>
      </DivTitleStyled>

      <DivImgStyled>
        <img src={product.url} alt={`Imagem de anúncio: ${product.name}`} />
      </DivImgStyled>

      <DivPrice>
        <div>
          <p id="oldPrice">R$ {oldPrice}</p>
          <p id="price">R$ {product.price}</p>
          <p id="discount">-{product.discount}%</p>
        </div>
      </DivPrice>
    </ItenSectionStyled>
  );
};

export default AnnoucementItem;

//style={{fontFamily: "var(--p-font)", fontWeight: 700}}

