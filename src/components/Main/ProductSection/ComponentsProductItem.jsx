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
  padding-right: 5px;

  ${(props) =>
    props.$variant === "home" &&
    css`
      flex-direction: row;
      min-width: 260px;
      height: 180px;
      border-radius: 9px 9px 15px 9px;
      border: 1px solid rgb(175, 175, 175);

      @media screen and (min-width: 320px) and (max-width: 374px) {
        max-width: 260px;
      }
      @media screen and (min-width: 375px) and (max-width: 576px) {
        max-width: 285px;
        height: 185px;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        max-width: 290px;
      }
      @media screen and (min-width: 769px) and (max-width: 992px) {
        max-width: 300px;
      }
    `}

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      border-radius: 9px;
      border-radius: 9p;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.13);

      @media screen and (max-width: 430px) {
        flex-direction: row;
        min-width: 260px;
        height: 175px;
        border-radius: 9px 9px 15px 9px;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.18);
      }
      @media screen and (min-width: 320px) and (max-width: 374px) {
        max-width: 100%;
        height: 170px;
      }
      @media screen and (min-width: 375px) and (max-width: 430px) {
        max-width: 300px;
      }

      @media screen and (min-width: 431px) and (max-width: 992px) {
        flex-direction: column;
        justify-content: space-between;
        max-width: 180px;
        min-height: 285px;
      }
    `}

    @media screen and (min-width: 993px) {
      flex-direction: row;
      max-width: 305px;
      height: 170px;
    }
`;

//Descrição da Oferta: nome, desconto e peso
export const DescOfertaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;

  ${(props) =>
    props.$variant === "home" &&
    css`
      height: 100%;
      width: 52%;
    `}
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (max-width: 430px) {
        height: 100%;
        width: 52%;
      }
      @media screen and (min-width: 431px) and (max-width: 992px) {
        height: 42%;
        width: 100%;
        order: 2;
        gap: 4px;
      }
    `}
  @media screen and (min-width: 320px) and (max-width: 374px) {
    padding-left: 11px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    padding-left: 9px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    padding-left: 8px;
  }
  @media screen and (min-width: 769px) {
    padding-left: 7px;
  }
  @media screen and (min-width: 993px) {
    width: 52%;
  }
  padding-right: 0px;
  box-sizing: border-box;
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
  font-family: "Quicksand", Arial, sans-serif;
  margin: auto;
  padding-left: 4px;
  font-weight: 600;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 0.86em;
    line-height: 18px;
    letter-spacing: 1.01px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.89em;
    line-height: 18px;
    letter-spacing: 1.05px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9em;
    line-height: 19px;
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px) {
    font-size: 0.91em;
    line-height: 20px;
    letter-spacing: 1.06px;
  }
`;
//desconto
export const DivOffStyled = styled.div`
  position: absolute;
  top: 5px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 0px 8px;
  background-color: #cdd4ae;
  border-radius: 5px;
`;

export const PoffStyled = styled.p`
  color: #13450a;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 500;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 0.87em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.94em;
  }
  @media screen and (min-width: 577px) {
    font-size: 0.96em;
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

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 431px) and (max-width: 992px) {
        align-items: center;
      }
    `}
  ${(props) => props.$exist == false && "display: none;"}
`;
export const PpesoStyled = styled.p`
  font-size: 0.845em;
  letter-spacing: 0.5px;
  font-family: "Roboto Flex", Arial, sans-serif;
  background-color: rgb(232, 232, 232);
  padding: 3px 15px;
  padding-bottom: 4px;
  border-radius: 12px;
  @media screen and (min-width: 320px) and (max-width: 374px) {
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
  padding-bottom: 5px;
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 431px) and (max-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `}
`;

export const DivPrecoStyled = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 431px) and (max-width: 992px) {
        padding-right: 4px;
        box-sizing: border-box;
        order: 1;
        padding-right: 8px;
      }
    `}
`;

export const PprecoStyled = styled.p`
  width: max-content;
  font-family: "Lato", Arial, sans-serif;
  font-weight: 600;
  text-indent: 4px;
  padding: 2px 0px;
  @media screen and (min-width: 320px) and (max-width: 374px) {
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
export const DivOfertaStyled = styled.div`
  height: 100%;
  width: 150px;
  padding: 4px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (min-width: 431px) and (max-width: 992px) {
        height: 170px;
        width: 100%;
      }
    `}
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
  padding: 4px;
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;
  border-radius: 6px 6px 18px 6px;
  background-color: rgb(255, 255, 255);
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

export const DivMaisStyled = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 6px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgb(227, 97, 64);
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
`;

export const PMaisStyled = styled.p`
  font-size: 1.65em;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  color: rgb(227, 97, 64);
  padding-bottom: 4px;
  padding-left: 1px;
  user-select: none;
`;

//Selecionar a quantidade, + 1 e -
export const DivQuantStyled = styled.div`
  width: 128px;
  height: 32px;
  border: 4px solid rgb(227, 97, 64);
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 5px;
  right: 0px;
  background-color: rgba(255, 255, 255, 0.9);

  ${(props) =>
    (props.$variant == "cart" || props.$variant == "inSearch") &&
    css`
      @media screen and (min-width: 430px) and (max-width: 992px) {
        width: 162px;
      }
    `}
`;

export const PMais2Styled = styled(PMaisStyled)`
  color: rgb(213, 94, 64);
`;

export const BotoesStyled = styled.div`
  height: 100%;
  width: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
`;

export const PMenosStyled = styled(PMais2Styled)`
  padding-bottom: 5px;
  font-size: 1.9em;
`;
export const PQuantStyled = styled.p`
  font-size: 1.25em;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  font-weight: 700;
  padding-bottom: 2px;
  color: rgb(213, 94, 64);
`;
