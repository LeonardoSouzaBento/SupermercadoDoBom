import { InfoWrapperSc } from '@components/product/index';
import { weightStyles } from '@components/product-list/product-item';

const InfoWrapper = ({ product, variant }) => {
  return (
    <InfoWrapperSc $variant={variant} $weightStyles={weightStyles}>
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
    </InfoWrapperSc>
  );
};

export default InfoWrapper;
