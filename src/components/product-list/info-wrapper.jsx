import { InfoWrapperStyled } from '@components/product/index';
import { weightStyles } from '@components/product-list/product-item';

const InfoWrapper = ({ product, variant }) => {
  return (
    <InfoWrapperStyled $variant={variant} $weightStyles={weightStyles}>
      <div>
        <p>{product.name}</p>
      </div>

      <div>
        {product.weight != '' && product.weight != null && <div id="weight">{product.weight}</div>}
        <div id="price">
          <p>R$</p>
          <p>{product.price}</p>
        </div>
      </div>
    </InfoWrapperStyled>
  );
};

export default InfoWrapper;
