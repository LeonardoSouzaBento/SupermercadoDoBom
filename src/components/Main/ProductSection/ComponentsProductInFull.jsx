import styled from "styled-components";

export const BodyDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const MainDivStyled = styled.div`
  width: 100%;
  height: 85%;
  box-sizing: border-box;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: #ebeff4;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0px -4px 8px -4px rgba(41, 46, 117, 0.3);
  transform: translateY(${(props) => props.$translate});
  transition: transform 0.3s ease;

  @media screen and (max-width: 577px) {
    padding-bottom: 60px;
  }

  @media screen and (min-width: 578px) {
    display: flex;
    overflow-y: hidden;
  }
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

export const DivSpanCloseStyled = styled.div`
  width: 36px;
  height: 36px;
  margin-left: calc(100% - 42px);
  margin-bottom: -36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 6px;
  right: 6px;
  cursor: pointer;
  z-index: 3;
  color: #292e4e;
  border-radius: 50%;
  background-color: #ebeff4;

  @media screen and (min-width: 578px) {
    width: auto;
    height: 24px;
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translateX(50%);
    background-color: transparent;
    box-shadow: none;
    border-radius: 0px;
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.45em;
  font-weight: 800;
  cursor: pointer;
  /* color: white; */

  @media screen and (min-width: 578px) {
    display: none;
  }
`;

export const SpanDropDownStyled = styled.span`
  display: none;
  @media screen and (min-width: 578px) {
    display: block;
    width: 64px;
    height: 4px;
    box-shadow: 0px 2px 2px rgba(41, 46, 117, 0.2);
    border-radius: 3px;
    background-color: #292e4e;
    border-bottom: 1px solid rgb(0, 0, 0);
  }
`;

export const ProductDivStyled = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  padding-left: 16px;
  padding-right: 16px;
  z-index: 2;

  @media screen and (min-width: 430px) and (max-width: 577px) {
    padding: 0px;
  }
  @media screen and (max-width: 577px) {
    padding-bottom: 38px;
  }
  @media screen and (min-width: 577px) {
    min-width: 320px;
    max-width: 430px;
    padding-bottom: 60px;
    box-sizing: content-box;
    overflow-y: scroll;
    box-shadow: 2px 0px 2px 0px rgba(41, 46, 117, 0.1);
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivImgStyled = styled.div`
  display: block;
  margin: auto;
  width: 100%;
  height: 340px;
  position: relative;
  padding: 16px;
  margin-bottom: 8px;
  box-sizing: border-box;
  overflow: hidden;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */
  @media screen and (max-width: 374px) {
    height: auto;
  }

  @media screen and (max-width: 577px) {
    max-width: 340px;
  }
  @media screen and (min-width: 577px) {
    height: 320px;
    width: 320px;
  }
`;

export const ImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  height: auto;
  box-sizing: border-box;
`;

export const DivDiscountStyled = styled.div`
  position: absolute;
  bottom: 4px;
  right: 0px;
  background-color: #db2c32;
  padding: 0px 14px;
  padding-bottom: 2.5px;
  color: white;
  border-radius: 16px;
`;

export const DivWeightStyled = styled(DivDiscountStyled)`
  position: absolute;
  bottom: 36px;
  background-color: #ebeff4;
  color: black;
`;

export const PWeightStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 374px) {
    font-size: 1.01em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.025em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.06em;
  }
`;

export const DivNameProdStyled = styled.div`
  padding: 16px 0px;
  padding-bottom: 20px;
  border-top: 1px solid rgb(227, 227, 227);
  border-bottom: 1px solid rgb(227, 227, 227);
  display: flex;
  justify-content: center;
`;

export const PNameProdStyled = styled.p`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  line-height: 1.4;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 577px) {
    max-width: 350px;
  }
  @media screen and (min-width: 577px) {
    max-width: 330px;
  }

  @media screen and (max-width: 374px) {
    font-size: 1.02em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.035em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.045em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.055em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.06em;
  }
`;

export const DivPriceStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin-bottom: 8px;
`;

export const PPriceStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 374px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.145em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.15em;
  }
`;

export const PAlertStyled = styled(PPriceStyled)`
  width: 100%;
  position: absolute;
  top: 8px;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  color: #db2c32;
`;

export const ContainerQuantStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media screen and (max-width: 577px) {
    max-width: 350px;
  }
  @media screen and (min-width: 577px) {
    max-width: 330px;
  }
`;

export const DivQuantFullStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37.5%;
  background-color: #db2c32;
  border-radius: 8px;
  cursor: pointer;
`;

export const DivButtonsStyled = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PButtonsStyed = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: white;
  padding-bottom: 3px;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 375px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.65em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.68em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.7em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.72em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.74em;
  }
`;

export const PQuantFullStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  width: 100%;
  text-align: center;
  font-weight: 600;
  color: white;
  padding-bottom: 1px;
  -webkit-user-select: none; /* Safari, Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  user-select: none; /* Padrão */

  @media screen and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.167em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.168em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.17em;
  }
`;

export const DivSubStyled = styled.div`
  height: 42px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #ebeff4;
  border-radius: 8px;
  cursor: default;
`;

export const PSubStyled = styled(PNameProdStyled)`
  font-weight: 700;
  letter-spacing: 0.35px;
  color: #292e4e;
  text-transform: none;
  width: max-content;

  @media screen and (max-width: 374px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.08em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.085em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.095em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.1em;
  }
`;

export const SimilarDivStyled = styled.div`
  width: 100%;
  @media screen and (min-width: 578px) {
    order: 1;
    overflow-y: scroll;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DivTitleStyled = styled.div`
  width: 100%;
  height: 54px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #ebeff4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1Styled = styled.h1`
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-align: center;
  color: #292e4e;

  @media screen and (max-width: 374px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.29em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.32em;
  }
`;

export const ListSimilarProductsStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;