import styled, { css, keyframes } from "styled-components";
import { H1BaseStyled } from "../../../components/GenericStylizedTags";

export const DivBodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  /* background-color: hsla(213, 29%, 94%, 1); */
  background-color: hsla(213, 29%, 94%, 0.95);
  transition: opacity 0.3s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 993px) {
    justify-content: ${(props) => (props.$up ? "flex-start" : "center")};
  }
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: calc(100% - 24px);
  max-width: 400px;
  margin-bottom: 4px;
  padding-top: 10px;
  padding-bottom: 25px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 3px 6px -3px rgba(41, 46, 117, 0.5),
    4px 0px 4px -3px rgba(41, 46, 117, 0.1),
    -4px 0px 4px -3px rgba(41, 46, 117, 0.1);
  transition: transform 0.2s ease;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }

  @media screen and (min-width: 375px) and (max-width: 577px) {
    margin-bottom: 0px;
  }
`;

// Título
export const DivTitleStyled = styled.div`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--purple);
  position: relative;
  border-bottom: 1px solid var(--border);
  z-index: 3;
`;

export const H1Styled = styled(H1BaseStyled)`
  color: var(--purple);
`;

export const DivSpanCloseStyled = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 20px;
  background-color: var(--back-color);
  color: var(--purple);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: var(--back-hover);
  }

  ${(props) =>
    props.$moreOptions &&
    css`
      height: 40px;
      width: 40px;
      background-color: var(--purple);
      color: white;
      &:hover {
        background-color: var(--purple-hover);
      }
    `}
`;

export const SpanCloseStyled = styled.span`
  font-size: 24px;
  font-weight: 500;
`;

// Botão de localização
export const ButtonStyled = styled.button`
  width: calc(100% - 48px);
  margin: auto;
  margin-bottom: 20px;
  height: 48px;
  padding: 0px 16px;
  padding-bottom: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: var(--bt-font);
  font-size: 1.12em;
  font-weight: 550;
  text-align: center;
  color: hsla(136, 57%, 89%, 1);
  transition: background-color 0.15s ease;

  background-color: var(--purple);
  &:hover {
    background-color: var(--purple-hover);
  }

  ${(props) =>
    props.$variant === "digitarTudo" &&
    css`
      margin-bottom: 0px;
      box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
        2px 0px 3px -2px rgba(41, 46, 117, 0.13),
        -2px 0px 3px -2px rgba(41, 46, 117, 0.13);
    `}

  ${(props) =>
    (props.$variant === "digitarTudo" || props.$variant === "voltar") &&
    css`
      background-color: var(--red);
      &:hover {
        background-color: var(--dark-red);
      }
    `};
  ${(props) =>
    props.$variant === "voltar" &&
    css`
      margin-bottom: 12.5px;
      background-color: var(--back-color);
      color: var(--purple);
      &:hover {
        background-color: var(--back-hover);
      }
    `};

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.205em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.206em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.207em;
  }
`;

export const DivApiReturnStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: white;
  z-index: 2;
  opacity: ${(props) => props.$opacityReturn};
  transition: opacity 0.2s ease;
  user-select: none;
`;

export const SpanApiReturnStyled = styled.span`
  user-select: none;
  font-weight: 550;

  ${(props) =>
    props.$error &&
    css`
      font-size: 3.2em;
      color: #d5343a;
      font-weight: 600;
      background-color: rgba(255, 0, 0, 0.1);
      border-radius: 50%;
      padding: 8px;
      padding-top: 5px;
    `}
  ${(props) =>
    props.$wait &&
    css`
      font-size: 2.5em;
      color: var(--purple);
      animation: ${rotate} 2s linear infinite;
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Estilo dos inputs
export const InputStyled = styled.input`
  width: calc(100% - 48px);
  height: 48px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-bottom: 2px;
  margin: auto;
  margin-bottom: 8px;
  display: block;
  border-radius: 8px;
  border: 1px solid var(--light-border);
  font-size: 1.06em;
  font-family: var(--p-font);
  font-weight: 400;
  color: black;
  background-color: transparent;
  box-shadow: 0px 2px 3px -2px rgba(41, 46, 117, 0.125);
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 375px) {
    width: calc(100% - 36px);
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.163em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.18em;
  }

  ${(props) =>
    props.$lastInput &&
    css`
      padding-bottom: 2px;
      margin-bottom: 20px;
    `}
`;

export const DivCepInputStyled = styled.div`
  width: calc(100% - 48px);
  height: 48px;
  box-sizing: border-box;
  padding: 0 16px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(230, 230, 230, 1);
  box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
    2px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -2px 0px 3px -2px rgba(41, 46, 117, 0.13);

  @media screen and (max-width: 385px) {
    width: calc(100% - 36px);
  }
`;

export const CepInputStyled = styled(InputStyled)`
  min-width: none;
  width: 150px;
  height: 100%;
  margin: 0;
  margin-bottom: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  background-color: white;
  font-family: var(--bt-font);
  font-weight: 400;
  box-shadow: none;
  border: none;
  
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
    width: 140px;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.205em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.206em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.207em;
  }
`;

export const PWarnCepStyled = styled.p`
  min-width: max-content;
  color: red;
  font-family: var(--p-font);
  font-weight: 400;
  padding-bottom: 1px;
  letter-spacing: 0.4px;
  visibility: ${(props) => (props.$noPassed ? "visibe" : "hidden")};
  @media screen and (max-width: 375px) {
    font-size: 1.12em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.2em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.23em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.25em;
  }
  /* transform: scaleY(1.1);
  padding-bottom: 2px; */
`;

export const DivCepErrorStyled = styled.div`
  min-height: 48px;
  height: auto;
  width: calc(100% - 48px);
  box-sizing: border-box;
  padding-left: 16px;
  margin: auto;
  margin-top: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px 0px #e9eff5;
`;

export const PCepErrorStyled = styled.p`
  font-family: var(--p-font);
  font-weight: 600;
  color: #d5343a;

  @media screen and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.163em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.18em;
  }
`;

// Botão de envio
export const RegisterButtonStyled = styled(ButtonStyled)`
  border-radius: 8px;
  margin-bottom: 0px;
  color: white;
  transition: all 0.15 ease;
  background-color: ${(props) =>
    props.$enable ? "var(--red)" : "var(--disable)"};
  &:hover {
    background-color: ${(props) =>
      props.$enable ? "var(--dark-red)" : "var(--disable-hover)"};
  }

  @media screen and (max-width: 385px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.225em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.227em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.23em;
  }
`;

export const GoBackButtonStyled = styled(ButtonStyled)`
  background-color: hsla(234, 31%, 45%, 1);
  &:hover {
    background-color: hsla(234, 31%, 40%, 1);
  }
`;
