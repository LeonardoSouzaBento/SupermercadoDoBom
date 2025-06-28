import styled, { css } from "styled-components";

export const PaiProdStyled = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.37);

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
    justify-content: space-between;
    min-width: 170px;
    max-width: 170px;
    min-height: 296px;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    flex-direction: row;
    min-width: 270px;
    max-width: 270px;
    height: 180px;
  }

  ${(props) =>
    props.$variant === "cart" &&
    css`
      border-radius: 0px;
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
  @media screen and (max-width: 375px) {
    height: 100%;
    width: 52%;
    padding-right: 0px;
  }
  @media screen and (min-width: 375px) {
    padding: 8px;
  }
  @media screen and (min-width: 375px) and (max-width: 992px) {
    height: 127px;
    width: 100%;
    order: 2;
    gap: 4px;
  }
  @media screen and (min-width: 993px) {
    width: 52%;
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
    (props.$variant === "home" || props.$variant === "inSearch") &&
    "border-radius: 4px;"};
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 375px) and (max-width: 992px) {
        align-items: center;
      }
    `}
  ${(props) => props.$exist == false && "display: none;"}
`;
export const PpesoStyled = styled.p`
  font-size: 0.845em;
  letter-spacing: 0.5px;
  font-family: "Roboto", Arial, sans-serif;
  background-color: rgb(232, 232, 232);
  padding: 3px 10px;
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
    font-size: 1.03em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.035em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.045;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.048;
  }
`;

export const PSifraStyled = styled(PprecoStyled)`
  width: max-content;
`;

// Oferta
//desconto
export const DivOffStyled = styled.div`
  position: absolute;
  top: 5.5px;
  right: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 0px 6px;
  padding-bottom: 2px;
  background-color: #cdd4ae;
  border-radius: 4px;

  ${(props) => props.$variant === "cart" && css`
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

export const DivOfertaStyled = styled.div`
  height: 100%;
  width: 150px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 375px) and (max-width: 992px) {
    height: 170px;
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

export const DivResizeStyled = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  position: absolute;
  top: 1px;
  right: 1px;
  border-radius: 6px;
  /* border-radius: 6px; */
`;

export const SpanResizeStyled = styled.span`
  font-weight: 300;
  font-size: 1.4em;
  color: rgb(133, 133, 133);
`;

//botão de mais
export const DivMaisStyled = styled.div`
  width: 34px;
  height: 34px;
  position: absolute;
  bottom: 5.5px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #DC2C32;
  border-radius: 18px;
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
  width: 128px;
  height: 34px;
  background-color: #DB2C32;
  /* background-color: #C6383D; */
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 5.5px;
  right: 6px;

  ${(props) =>
    (props.$variant == "cart" || props.$variant == "inSearch") &&
    css`
      @media screen and (min-width: 375px) and (max-width: 992px) {
        width: 148px;
        right: 10px;
      }
    `}
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
