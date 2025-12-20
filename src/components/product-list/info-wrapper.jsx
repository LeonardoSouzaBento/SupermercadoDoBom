import { InfoWrapperStyled } from "@components/ui/product/index";

const InfoWrapper = ({ product, variant }) => {
  return (
    <InfoWrapperStyled $variant={variant}>
      <div>
        <p>{product.name}</p>
      </div>

      <div>
        {product.weight != '' && product.weight != null && (
          <div id="weight">
            <p>{product.weight}</p>
          </div>
        )}
        <div id="price">
          <p>R$</p>
          <p>{product.price}</p>
        </div>
      </div>
    </InfoWrapperStyled>
  );
};

export default InfoWrapper;
