import styled, { css } from "styled-components";

export const PaiProdStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(197, 202, 205, 0.57);

  border-radius: 7px;

  //paisagem
  @media screen and (max-width: 375px) {
    flex-direction: row;
    height: 170px;
    min-width: 295px;
    max-width: 295px;
  }
  //retrato
  @media screen and (min-width: 375px) and (max-width: 992px) {
    flex-direction: column;
    min-width: 170px;
    max-width: 170px;
    min-height: 296px;
  }
  /* ${(props) =>
    props.$variant === "home" &&
    css`
      @media screen and (min-width: 375px) and (max-width: 992px) {
        min-width: 180px;
        max-width: 180px;
        min-height: 270px;
        max-height: 270px;
      }
    `} */

  //paisagem
  @media screen and (min-width: 993px) {
    flex-direction: row;
    min-width: 280px;
    max-width: 280px;
    height: 180px;
    border-radius: 7px;

    /* ${(props) =>
      props.$variant === "home" &&
      css`
        min-width: 280px;
        max-width: 280px;
      `} */
  }

  ${(props) =>
    props.$variant === "cart" &&
    css`
      border-radius: 0px !important;
      box-shadow: none;
      border: 1px solid rgba(0, 0, 0, 0.2);
    `}
`;

//Descrição da Oferta: nome, desconto e peso
export const DescOfertaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 374px) {
    padding: 11px;
  }
  //paisagem
  @media screen and (max-width: 375px) {
    height: 100%;
    width: 48%;
    padding-right: 0px;
    box-shadow: inset -4px 0px 10px -4px rgba(0, 0, 0, 0.04);
  }
  @media screen and (min-width: 375px) {
    padding: 8px;
  }
  //retrato
  @media screen and (min-width: 375px) and (max-width: 992px) {
    height: 46%;
    width: 100%;
    order: 2;
    gap: 4px;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    width: 130px;
    padding-right: 0px;
  }
`;

export const DivNomeStyled = styled.div`
  max-height: 80px;
  display: flex;
  justify-items: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 12px;
`;
export const PnomeStyled = styled.p`
  text-transform: uppercase;
  font-family: "Roboto", Arial, sans-serif;
  margin: auto;
  padding-left: 4px;
  font-weight: 500;

  @media screen and (max-width: 374px) {
    font-size: 0.86em;
    line-height: 16px;
    letter-spacing: 1.01px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.89em;
    line-height: 17px;
    letter-spacing: 1.05px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9em;
    line-height: 18px;
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px) {
    font-size: 0.91em;
    line-height: 19px;
    letter-spacing: 1.06px;
  }
`;
//peso
export const DivPesoStyled = styled.div`
  min-width: 52px;
  height: auto;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 375px) and (max-width: 992px) {
        align-items: center;
      }
    `}
  ${(props) => props.$exist === false && "display: none;"}
`;
export const PpesoStyled = styled.p`
  font-size: 0.845em;
  letter-spacing: 0.5px;
  font-family: "Roboto", Arial, sans-serif;
  background-color: rgb(232, 232, 232);
  padding: 0px 10px;
  padding-bottom: 4px;
  @media screen and (max-width: 374px) {
    font-size: 0.87em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.94em;
  }
  @media screen and (min-width: 577px) {
    font-size: 0.96em;
  }
`;

// Preco
export const PaiPrecoStyled = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 375px) and (max-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DivPrecoStyled = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 375px) and (max-width: 992px) {
        padding-right: 4px;
        box-sizing: border-box;
        order: 1;
        padding-right: 8px;
      }
    `}
`;

export const PprecoStyled = styled.p`
  width: max-content;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 700;
  text-indent: 4px;
  padding: 2px 0px;
  @media screen and (max-width: 374px) {
    font-size: 0.96em;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.031em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.036em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.041em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.046;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.049;
  }
`;

export const PSifraStyled = styled(PprecoStyled)`
  width: max-content;
`;

// Oferta
//desconto
export const DivOfertaStyled = styled.div`
  height: 100%;
  width: 52%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 375px) and (max-width: 992px) {
    height: 54%;
    width: 100%;
  }
`;
export const PaiImgOfertaStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  -webkit-user-select: none;
  user-select: none;
`;
export const ImgOfertaStyed = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 8px;
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;
`;

export const DivOffStyled = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 0px 8px;
  padding-bottom: 2px;
  background-color: #cdd4ae;
  border-radius: 0px 0px 0px 4px;

  ${(props) =>
    props.$variant === "cart" &&
    css`
      border-radius: 0px;
      position: absolute;
      top: 0;
      right: 0;
    `}
`;

export const PoffStyled = styled.p`
  color: #13450a;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 400;

  @media screen and (max-width: 374px) {
    font-size: 0.87em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.94em;
  }
  @media screen and (min-width: 577px) {
    font-size: 0.96em;
  }
`;

//botão de mais
export const DivMaisStyled = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 8px;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dc2c32;
  border-radius: 16px;
  cursor: pointer;
`;

export const PMaisStyled = styled.p`
  font-size: 1.75em;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  color: white;
  padding-bottom: 1.6px;
  user-select: none;
`;

//Botão p selecionar a quantidade
export const DivQuantStyled = styled.div`
  width: 90%;
  height: 32px;
  background-color: #db2c32;
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 8px;
  right: 5%;

  /* ${(props) =>
    props.$variant === "home" &&
    css`
      //retrato
      @media screen and (min-width: 375px) and (max-width: 992px) {
        width: 70%;
        /* right: 4px; */
      }
    `} */
`;

export const DivPStyled = styled.div`
  height: 100%;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
`;

export const PMenosStyled = styled(PMaisStyled)`
  padding-bottom: 5px;
  font-size: 1.9em;
`;

export const PQuantStyled = styled.p`
  font-size: 1.3em;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;
  color: white;
`;
