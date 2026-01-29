import styled from 'styled-components';

const InfoWrapperStyled = styled.div`
  width: calc(100% - 24px);
  margin: 0 auto;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  & div {
    width: 100%;
  }
  & p {
    text-align: center;
    -webkit-user-select: none; /* Safari, Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Padrão */
  }
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 0;
    margin-bottom: 16px;
    min-height: 56px;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    & > p {
      text-align: center;
      line-height: 1.4;

      @media screen and (max-width: 577px) {
        max-width: 35rem;
      }
      @media screen and (min-width: 577px) {
        max-width: 33rem;
      }
    }
    & #price {
      font-size: var(--text-lg);
      font-weight: 600;
    }
  }
`;

const ImageWrapperStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 34rem;
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 375px) {
    height: auto;
  }

  @media screen and (max-width: 577px) {
    max-width: 34rem;
  }
  @media screen and (min-width: 577px) {
    height: 32rem;
    width: 32rem;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    height: auto;
    box-sizing: border-box;
  }

  /* peso e desconto */
  & div {
    -webkit-user-select: none; /* Safari, Chrome */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    user-select: none; /* Padrão */
  }

  & #weight {
    position: absolute;
    bottom: 38px;
    background-color: var(--background);
    color: #292e4e;
  }

  & #discount {
    position: absolute;
    bottom: 4px;
    right: 0;
    background-color: hsla(var(--red-brand-value), 0.03);
    padding: 0 12px;
    padding-bottom: 0.25rem;
    color: var(--red-brand);
    border-radius: 16px;
    font-size: var(--text-sm);
  }
`;

export const ProductData = ({ dataProductFull }) => {
  return (
    <>
      <ImageWrapperStyled>
        <img src={dataProductFull.url} alt="Imagem do Produto" />

        {dataProductFull.weight != '' && dataProductFull.weight != null && (
          <div id="weight">{dataProductFull.weight}</div>
        )}

        {dataProductFull.discount != '' && dataProductFull.discount != null && (
          <div id="discount">-{dataProductFull.discount}%</div>
        )}
      </ImageWrapperStyled>

      <InfoWrapperStyled>
        <div id="name">
          <p>{dataProductFull.name}</p>
          <p id="price">R$ {dataProductFull.price}</p>
        </div>
      </InfoWrapperStyled>
    </>
  );
};
