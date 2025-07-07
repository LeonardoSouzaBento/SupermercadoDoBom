import styled from "styled-components";

const BodyDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const MainDivStyled = styled.div`
  width: 100%;
  height: 80%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: #ebeff4;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px -4px 10px 0px rgba(41, 46, 117, 0.15);

  @media screen and (min-width: 578px) {
    display: flex;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const ProductDivStyled = styled.div`
  width: 100%;
  background-color: white;
  max-width: 380px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
`;

const DivImgStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 330px;
  position: relative;
`;

const ImgStyled = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
`;

const DivDiscountStyled = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0px;
  background-color: rgb(192, 17, 17);
  padding: 0px 14px;
  padding-bottom: 2.5px;
  color: white;
  border-radius: 16px;
`;

const PWeightStyled = styled.p`
  font-family: "Open Sans", sans-serif;
`;

const DivWeightStyled = styled.div`
  position: absolute;
  bottom: 40px;
  left: 12px;
  background-color: #ebeff4;
  padding: 0px 12px;
  border-radius: 4px;
`;

const DivDescOffer = styled.div`
  width: 100%;
  height: auto;
`;

const DivNameProdStyled = styled.div`
  padding: 16px 0px;
`;

const PNameProdStyled = styled.p`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const DivPriceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PPriceStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
`;

const ContainerQuantStyled = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const DivQuantStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38%;
  background-color: #db2c32;
  border-radius: 8px;
`;

const DivButtonsStyled = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PMoreStyled = styled.p`
  width: 100%;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
`;

const PButtonsStyed = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: white;
`;

const DivSubStyled = styled.div`
  height: 42px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: rgb(229, 229, 229);
  border-radius: 8px;
`;

const PSubStyled = styled(PNameProdStyled)`
  font: 700;
  color: rgb(91, 91, 91);
  text-transform: none;
  width: max-content;
`;

const SimilarDivStyled = styled.div`
  width: 100%;
  @media screen and (min-width: 578px) {
    order: 1;
  }
`;

const DivTitleStyled = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ebeff4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1Styled = styled.h1`
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 1.5em;
  color: #292E4E;
`;

const ProductInFull = () => {
  return (
    <BodyDivStyled>
      <MainDivStyled>
        <ProductDivStyled>
          <DivImgStyled>
            <ImgStyled></ImgStyled>

            <DivWeightStyled>
              <PWeightStyled>130 g</PWeightStyled>
            </DivWeightStyled>

            <DivDiscountStyled>
              <PWeightStyled>20%</PWeightStyled>
            </DivDiscountStyled>
          </DivImgStyled>

          <DivNameProdStyled>
            <PNameProdStyled>
              Biscoito Recheado Bauducco Sabor chocolate com baunilha e coco e
              leite condensado
            </PNameProdStyled>
          </DivNameProdStyled>

          <DivPriceStyled>
            <PPriceStyled>R$</PPriceStyled>
            <PPriceStyled>3,99</PPriceStyled>
          </DivPriceStyled>

          <ContainerQuantStyled>
            <DivQuantStyled>
              <DivButtonsStyled>
                <PButtonsStyed>-</PButtonsStyed>
              </DivButtonsStyled>
              <DivButtonsStyled>
                <PButtonsStyed>1</PButtonsStyed>
              </DivButtonsStyled>
              <DivButtonsStyled>
                <PButtonsStyed>+</PButtonsStyed>
              </DivButtonsStyled>
            </DivQuantStyled>

            <DivSubStyled>
              <PSubStyled>Subtotal:</PSubStyled>
              <PSubStyled>4,29</PSubStyled>
            </DivSubStyled>
          </ContainerQuantStyled>
        </ProductDivStyled>

        <SimilarDivStyled>
          <DivTitleStyled>
            <H1Styled>Produtos Similares</H1Styled>
          </DivTitleStyled>
        </SimilarDivStyled>
      </MainDivStyled>
    </BodyDivStyled>
  );
};

export default ProductInFull;
