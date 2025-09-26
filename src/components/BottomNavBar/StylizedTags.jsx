import styled from "styled-components";
import { CentralizeDiv } from "@components/GenericStylizedTags";

export const FooterStyled = styled.footer`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 6px;
  z-index: 2;

  @media screen and (max-width: 576px) {
    justify-content: center;
  }
`;

export const CartDescStyled = styled.div`
  width: calc(100% - 24px);
  max-width: 400px;
  height: 48px;
  margin-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--purple);
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #31365dff;
  }

  @media screen and (max-width: 576px) {
    margin-right: 0px;
  }
`;

export const DivDeleteAndCart = styled(CentralizeDiv)`
  height: 100%;
  width: auto;
  gap: 10px;
`;

export const DivCartStyled = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    color: white;
    font-size: 1.65em;
    font-weight: 300;
    font-variation-settings: "FILL" 1;
  }
`;

export const DivDeleteStyled = styled(DivCartStyled)`
  box-sizing: border-box;
  margin-left: 4px;
  background-color: #292d4e;

  &:hover {
    background-color: hsl(255, 35.5%, 18%);
  }

  & > span {
    font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 12, "opsz" 30;
    color: rgb(255, 255, 255);
    font-size: 1.43em;
    font-weight: 500;
  }
`;

//Divs dos ps
export const DivPStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;

  /* Estilos para PPrecoStyled */
  & > p:first-child {
    font-family: var(--bt-font);
    font-weight: 500;
    letter-spacing: 0.71px;
    padding-bottom: 2px;
    color: white;
    scale: 1.02;

    @media screen and (max-width: 375px) {
      font-size: 1.1em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.106em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.118em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.131em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.144em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.15em;
    }
  }

  /* Estilos para PItensStyled */
  & > p:last-child {
    font-family: var(--bt-font);
    font-weight: 500;
    letter-spacing: 0.71px;
    padding-bottom: 2px;
    color: white;
    scale: 1.02;
    padding-right: 18px;

    @media screen and (max-width: 375px) {
      font-size: 1.1em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.106em;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      font-size: 1.118em;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      font-size: 1.131em;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      font-size: 1.144em;
    }
    @media screen and (min-width: 1201px) {
      font-size: 1.15em;
    }
  }
`;

export const ContainerStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const DivStyled = styled.div`
  width: calc(100% - 16px);
  max-width: 400px;
  height: ${(props) => props.$heightDiv};
  padding: 24px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  position: absolute;
  right: 8px;
  bottom: 8px;
  background-color: #db2c32;
  /* box-shadow: 0px -10px 30px rgba(41, 46, 117, 0.24); */
  transition: height 0.15s ease;
  ${(props) => props.$feedback && "background-size: 0% 0%;"};

  @media screen and (max-width: 450px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

export const DivSpanStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
  position: relative;

  & > span {
    font-size: 3.7em;
    padding: 5px;
    color: #c2272c;
    font-weight: 700;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: 0px 15px 30px rgba(41, 46, 117, 0.09);
    position: absolute;
    transform: translateY(-85%);
    z-index: 1;
    ${(props) => props.$feedback && "color: rgb(99, 154, 48);"};
    ${(props) => props.$feedback && "scale: 0.9;"};
  }
`;

export const PQuestionStyled = styled.p`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 14px;
  margin-top: 10px;
  border-radius: 5px;
  font-family: var(--h-font);
  font-weight: 400;
  text-align: center;
  color: white;

  @media screen and (max-width: 375px) {
    font-size: 1.35em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.37em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.38em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.39em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.41em;
  }
`;

export const DivSimNaoStyled = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 12px;
  background-color: transparent;

  /* Estilos para PSimStyled */
  & p {
    width: 100%;
    font-family: var(--bt-font);
    font-weight: 500;
    padding: 12.5px 0px;
    padding-bottom: 14.5px;
    box-sizing: border-box;
    text-align: center;
    letter-spacing: 0.72px;
    border-radius: 8px;
    background-color: #8f1d20;
    color: white;

    &:hover {
      background-color: #75171b;
    }
    transition: background-color 0.1s ease;
    @media screen and (max-width: 375px) {
      font-size: 1.05em;
    }
    @media screen and (min-width: 375px) and (max-width: 576px) {
      font-size: 1.06em;
    }
    @media screen and (min-width: 577px) {
      font-size: 1.07em;
    }
  }

  /* Estilos para PVoltarStyled */
  &>p:last-child {
    color: black;
    background-color: rgb(255, 255, 255);
    &:hover {
      background-color: #ebeff4;
    }
    text-shadow: 0.2px 0.2px 0px black;
  }
`;

export const PSimStyled = styled.p`
  width: 100%;
  font-family: var(--bt-font);
  font-weight: 500;
  padding: 12.5px 0px;
  padding-bottom: 14.5px;
  box-sizing: border-box;
  text-align: center;
  letter-spacing: 0.72px;
  border-radius: 8px;
  background-color: #8f1d20;
  color: white;

  &:hover {
    background-color: #75171b;
  }
  transition: background-color 0.1s ease;
  @media screen and (max-width: 375px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.07em;
  }
`;

export const PVoltarStyled = styled(PSimStyled)`
  color: black;
  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: #ebeff4;
  }
  text-shadow: 0.2px 0.2px 0px black;
`;

export const DivFeedBackStyled = styled(CentralizeDiv)`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const PFeedBackStyled = styled(PQuestionStyled)`
  color: white;
  scale: 1.19;
  padding: 6px 0px;
  padding-top: 8px;
`;
