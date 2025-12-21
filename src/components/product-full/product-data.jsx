import { WrapperImageStyled, WrapperInfoStyled } from '@components/ui/product-full/index';

export const ProductData = ({ dataProductFull }) => {
  return (
    <>
      <WrapperImageStyled>
        <img src={dataProductFull.url} alt="Imagem do Produto" />

        {dataProductFull.weight != '' && dataProductFull.weight != null && (
          <div id="weight">{dataProductFull.weight}</div>
        )}

        {dataProductFull.discount != '' && dataProductFull.discount != null && (
          <div id="discount">-{dataProductFull.discount}%</div>
        )}
      </WrapperImageStyled>

      <WrapperInfoStyled>
        <div id="name">
          <p>{dataProductFull.name}</p>
          <p id="price">R$ {dataProductFull.price}</p>
        </div>
      </WrapperInfoStyled>
    </>
  );
};
