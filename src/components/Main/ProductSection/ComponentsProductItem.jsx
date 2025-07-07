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
  border-radius: 7px;

  //paisagem
  @media screen and (max-width: 385px) {
    flex-direction: row;
    height: 180px;
    min-width: 270px;
    max-width: 270px;
  }
  //retrato
  @media screen and (min-width: 385px) and (max-width: 414px) {
    gap: 0px;
    ${(props) => props.$variant == "cart" && "margin-bottom: 12px;"};
  }
  @media screen and (min-width: 385px) and (max-width: 992px) {
    flex-direction: column;
    min-width: 170px;
    max-width: 170px;
    min-height: 286px;
    max-height: 286px;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    flex-direction: row;
    min-width: 275px;
    max-width: 275px;
    height: 177px;
    border-radius: 7px;
  }
`;

//Descrição da Oferta: nome, desconto e peso
export const DescOfertaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  //paisagem
  @media screen and (max-width: 385px) {
    height: 100%;
    width: 48%;
    padding: 11px;
    padding-right: 0px;
  }
  //retrato
  @media screen and (min-width: 385px) {
    padding: 8px;
  }
  @media screen and (min-width: 385px) and (max-width: 992px) {
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
  max-height: 76px;
  display: flex;
  justify-items: center;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 12px;
`;
export const PnomeStyled = styled.p`
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  margin: auto;
  padding-left: 4px;
  font-weight: 600;
  line-height: 1.2;

  @media screen and (max-width: 385px) {
    font-size: 0.86em;
    letter-spacing: 1.01px;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 0.89em;
    letter-spacing: 1.05px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9em;
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px) {
    font-size: 0.91em;
    letter-spacing: 1.06px;
  }
`;
//peso
export const DivPesoStyled = styled.div`
  height: auto;
  width: max-content;
  ${(props) => props.$exist === false && "display: none;"}

  //retrato
  @media screen and (min-width: 385px) and (max-width: 992px) {
    display: none;
  }
`;

export const PpesoStyled = styled.p`
  font-size: 0.845em;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: "Open Sans", Arial, sans-serif;
  background-color: #ebeff4;
  color: rgb(50, 50, 50);
  padding: 0px 10px;
  padding-bottom: 2px;
  border-radius: 11px;
  @media screen and (max-width: 385px) {
    font-size: 0.87em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 0.89em;
  }
  @media screen and (min-width: 577px) {
    font-size: 0.9em;
  }
`;

export const PPeso2Styled = styled(PpesoStyled)`
  position: absolute;
  bottom: 38px;
  right: 7px;
  background-color: hsl(213, 29%, 95.9%);
  color: rgb(50, 50, 50);
  @media screen and (max-width: 385px) {
    display: none;
  }
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

// Preco e peso
export const PaiPrecoStyled = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const DivPrecoStyled = styled.div`
  height: auto;
  display: flex;
  align-items: center;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    padding-right: 4px;
    box-sizing: border-box;
    order: 1;
    padding-right: 4px;
  }
`;

export const PprecoStyled = styled.p`
  width: max-content;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  text-indent: 4px;
  padding: 2px 0px;
  @media screen and (max-width: 385px) {
    font-size: 0.96em;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
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

  @media screen and (min-width: 385px) and (max-width: 992px) {
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
  width: max-content;
  height: 20px;
  position: absolute;
  top: 7px;
  right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  padding-bottom: 1px;
  background-color: #db2c32;
  border-radius: 10px;

  /* @media screen and (min-width: 375px) and (max-width: 992px) {
    position: absolute;
    top: 7px;
    left: 7px;
  } */
`;

export const PoffStyled = styled.p`
  color: white;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

  @media screen and (max-width: 385px) {
    font-size: 0.87em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 0.89em;
  }
  @media screen and (min-width: 577px) {
    font-size: 0.9em;
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

  @media screen and (min-width: 385px) and (max-width: 992px) {
    right: 12px;
    bottom: 0px;
  }
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
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: space-between;
  border-radius: 7.5px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 8px;
  right: 5%;
  z-index: 2;
  @media screen and (min-width: 385px) and (max-width: 992px) {
    width: 85%;
    right: 12px;
    bottom: 0px;
  }
  transition: opacity 0.4s ease;
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
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-bottom: 2px;
  color: white;
`;
