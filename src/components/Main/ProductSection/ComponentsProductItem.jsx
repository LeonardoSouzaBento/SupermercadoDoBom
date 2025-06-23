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
  border-radius: 7px;
  
  ${(props) =>
    props.$variant === "home" &&
    css`
      flex-direction: row;
      min-width: 260px;
      height: 180px;

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
       @media screen and (min-width: 993px) {
        max-width: 305px;
        height: 170px;
      }
    `}

  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      box-shadow: none;

      @media screen and (max-width: 431.99px) {
        flex-direction: row;
        height: 175px;
      }
      @media screen and (min-width: 320px) and (max-width: 374px) {
        max-width: 100%;
        height: 170px;
      }
      @media screen and (min-width: 375px) and (max-width: 431.99px) {
        max-width: 300px;
        height: 170px;
      }

      @media screen and (min-width: 432px) and (max-width: 992px) {
        flex-direction: column;
        justify-content: space-between;
        max-width: 180px;
        min-height: 285px;
      }
      @media screen and (min-width: 993px) {
        flex-direction: row;
        max-width: 295px;
        height: 170px;
      }
      @media screen and (min-width: 1201px) {
        max-width: 305px;
      }
    `}
`;

//Descrição da Oferta: nome, desconto e peso
export const DescOfertaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.$variant === "home" &&
    css`
      height: 100%;
      width: 52%;
    `}
  ${(props) =>
    (props.$variant === "cart" || props.$variant === "inSearch") &&
    css`
      @media screen and (max-width: 432px) {
        height: 100%;
        width: 52%;
      }
      @media screen and (min-width: 432px) and (max-width: 992px) {
        height: 42%;
        width: 100%;
        order: 2;
        gap: 4px;
      }
    `}
  @media screen and (min-width: 320px) and (max-width: 374px) {
    padding: 0px 11px;
    padding-bottom: 11px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    padding:0px 9px;
    padding-bottom: 9px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    padding: 0px 8px;
    padding-bottom: 8px;
  }
  @media screen and (min-width: 769px) {
    padding:0px 7px;
    padding-bottom: 7px;
  }
  @media screen and (min-width: 993px) {
    width: 52%;
  }
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
  top: 5.5px;
  right: 5px;
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
      @media screen and (min-width: 432px) and (max-width: 992px) {
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
      @media screen and (min-width: 432px) and (max-width: 992px) {
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
      @media screen and (min-width: 432px) and (max-width: 992px) {
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
      @media screen and (min-width: 432px) and (max-width: 992px) {
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

//botão de mais
export const DivMaisStyled = styled.div`
  width: 34px;
  height: 34px;
  position: absolute;
  bottom: 6px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E6684C;
  border-radius: 50%;
  cursor: pointer;
`;

export const PMaisStyled = styled.p`
  font-size: 1.75em;
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  color: white;
  padding-bottom: 3.6px;
  padding-left: 1px;
  user-select: none;
`;

//Botão p selecionar a quantidade
export const DivQuantStyled = styled.div`
  width: 128px;
  height: 34px;
  background-color: #E6684C;
  display: flex;
  justify-content: space-between;
  border-radius: 18px;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  bottom: 7px;
  right: 6px;

  ${(props) =>
    (props.$variant == "cart" || props.$variant == "inSearch") &&
    css`
      @media screen and (min-width: 432px) and (max-width: 992px) {
        width: 132px;
        right: 50%;
        transform: translateX(50%);
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
  font-family: "Quicksand", Arial, Helvetica, sans-serif;
  font-weight: 600;
  padding-bottom: 2px;
  color: white;
`;
