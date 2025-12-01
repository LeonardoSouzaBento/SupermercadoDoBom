import styled, { css } from "styled-components";
import { CentralizeDiv } from "../../GenericStylizedTags";

export const PaiProdStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;

  ${(props) =>
    props.$variant !== "cart" &&
    css`
      &:hover {
        box-shadow: 0 4px 8px hsla(0, 0%, 0%, 0.12),
          2px 0 4px -2px hsla(0, 0%, 0%, 0.03),
          -2px 0 4px -2px hsla(0, 0%, 0%, 0.03);
      }
    `}
  // box-shadow: 0 4px 8px hsla(236, 8%, 31%, 0.24);
  
  ${(props) =>
    props.$variant == "cart" &&
    css`
      border: 1px solid var(--light-border);
      border-radius: 0px !important;
    `};

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
  }

  ${(props) =>
    props.$variant === "announcement" &&
    css`
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 2;

      @media screen and (max-width: 385px) {
        max-width: none;
        max-height: none;
      }
      @media screen and (min-width: 385px) and (max-width: 992px) {
        max-width: none;
        max-height: none;
        min-height: none;
        max-height: none;
      }
      //paisagem
      @media screen and (min-width: 993px) {
        min-width: none;
        max-width: none;
        height: 100%;
      }
    `}
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
  ${(props) =>
    props.$variant === "announcement" && "display: none !important;"};
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
export const NamePStyled = styled.p`
  text-transform: uppercase;
  margin: auto;
  padding-left: 4px;
  font-weight: 500;
  line-height: 1.2;
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
  background-color: var(--back-color);
  color: rgb(50, 50, 50);
  padding: 0px 10px;
  padding-bottom: 2px;
  border-radius: 11px;
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
export const PriceWrapperStyled = styled.div`
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

export const PriceDivStyled = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  /* color: #221B39; */

  @media screen and (min-width: 385px) and (max-width: 992px) {
    padding-right: 4px;
    box-sizing: border-box;
    order: 1;
    padding-right: 4px;
  }
`;

export const PricePStyled = styled.p`
  width: max-content;
  font-weight: 600;
  text-indent: 4px;
  padding: 2px 0px;
  @media screen and (max-width: 385px) {
    font-size: 0.96em;
    letter-spacing: 1px;
  }
  
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.046;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.049;
  }
`;

export const PSifraStyled = styled(PricePStyled)`
  width: max-content;
`;

// Oferta
//desconto
export const DivOfertaStyled = styled.div`
  height: 100%;
  width: 52%;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    height: 54%;
    width: 100%;
  }

  ${(props) =>
    props.$variant === "announcement" &&
    css`
      width: 100%;
      height: 100%;
      @media screen and (min-width: 385px) and (max-width: 992px) {
        width: 100%;
        height: 100%;
      }
    `}
`;

export const PaiImgOfertaStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  -webkit-user-select: none;
  user-select: none;
  position: relative;

  @media screen and (min-width: 993px) {
    display: flex;
    align-items: center;
  }

  ${(props) =>
    props.$variant === "announcement" &&
    css`
      @media screen and (min-width: 993px) {
        display: block;
      }
    `}
`;

export const ImgOfertaStyed = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 8px;
  box-sizing: border-box;
  -webkit-user-select: none;
  user-select: none;

  @media screen and (min-width: 993px) {
    height: auto;
    padding: 4px;
  }

  ${(props) =>
    props.$variant === "announcement" &&
    css`
      object-fit: cover;
      height: 100%;
      width: 100%;

      @media screen and (min-width: 993px) {
        height: 100%;
      }
    `}
`;

export const DivOffStyled = styled(CentralizeDiv)`
  width: max-content;
  height: 20px;
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 0px 8px;
  padding-bottom: 1px;
  background-color: var(--red);
  border-radius: 12px;

  ${(props) => props.$variant === "announcement" && "display: none;"};
`;

export const POffStyled = styled.p`
  color: white;
  font-weight: 250;
  
  
  
`;

//botão de mais
export const DivAddStyled = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  bottom: 8px;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--red);
  border-radius: 16px;
  cursor: pointer;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    right: 12px;
    bottom: 0px;
  }
  ${(props) =>
    (props.$variant === "similarList" ||
      props.$variant === "announcement" ||
      props.$variant === "cart" ||
      props.$displayNone) &&
    "display: none;"}
`;

export const SpanMoreStyled = styled.span`
  font-size: 1.48em;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
`;

export const SpanFewerStyled = styled(SpanMoreStyled)`
  font-size: 1.37em;
  font-weight: 500;
`;

//Botão p selecionar a quantidade
export const DivQuantStyled = styled.div`
  width: 90%;
  height: 32px;
  background-color: var(--red);
  display: ${(props) => (props.$display ? "flex" : "none")};
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 8px;
  right: 5%;
  z-index: 1;

  @media screen and (min-width: 385px) and (max-width: 992px) {
    width: 85%;
    right: 12px;
    bottom: 0px;
  }
  transition: opacity 0.4s ease;
  ${(props) =>
    (props.$variant === "similarList" ||
      props.$variant === "announcement" ||
      props.$variant === "cart") &&
    "display: none;"}
`;

export const DivButtonsStyled = styled.div`
  height: 100%;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--p-font);
`;

export const PQuantStyled = styled.p`
  font-size: 1.3em;
  font-weight: 500;
  padding-bottom: 2px;
  color: white;
`;

