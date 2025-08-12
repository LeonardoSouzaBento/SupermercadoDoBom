import styled, { css, keyframes } from "styled-components";

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
  background-color: hsla(213, 29%, 94%, 1);
  transition: opacity 0.4s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 416px;
  margin-bottom: 4px;
  padding-bottom: 27px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  transition: transform 0.2s ease;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 16px 16px;
  }
  @media screen and (min-width: 375px) and (max-width: 577px) {
    margin-bottom: 0px;
  }
`;

// Título

export const DivTitleStyled = styled.div`
  height: 56px;
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #383d6a;
  color: white;
  position: relative;
  z-index: 3;
`;

export const H1Styled = styled.h1`
  text-align: center;
  font-family: "Lato", sans-serif;
  user-select: none;
  font-weight: 400;
  font-size: 1.34em;

  @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.285em;
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
    font-size: 1.33em;
  }
`;

export const DivSpanCloseStyled = styled.div`
  height: 100%;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: hsl(234, 30.9%, 28%);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 28px;
  font-weight: 300;
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
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 500;
  text-align: center;
  color: hsla(136, 57%, 89%, 1);
  transition: background-color 0.15s ease;

  background-color: #396b46;
  &:hover {
    background-color: hsla(136, 31%, 26%, 1);
  }
  box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
    2px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -2px 0px 3px -2px rgba(41, 46, 117, 0.13);

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
      background-color: hsla(210, 38%, 96%, 1);
      color: hsla(234, 31%, 12%, 1);
      &:hover {
        background-color: hsla(210, 38%, 91%, 1);
      }
    `};
  ${(props) => props.$variant === "voltar" && "margin-bottom: 12.5px;"};

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 385px) {
    font-size: 1.15em;
    width: calc(100% - 36px);
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

export const DivGPSResultStyled = styled.div`
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
  opacity: ${(props) => props.$opacityGpsResult};
  transition: opacity 0.2s ease;
  user-select: none;
`;

export const SpanGpsReturnStyled = styled.span`
  user-select: none;
  ${(props) =>
    props.$errorLocationButton &&
    css`
      font-size: 3.2em;
      color: #d5343a;
      font-weight: 400;
      background-color: rgba(255, 0, 0, 0.1);
      border-radius: 50%;
      padding: 8px;
      padding-top: 5px;
    `}
  ${(props) =>
    !props.$errorLocationButton &&
    css`
      font-size: 3.2em;
      color: #383d6a;
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
  margin: auto;
  display: block;
  height: 48px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-bottom: 2px;
  border: none;
  border-bottom: 1px solid hsla(210, 38%, 84%, 1);
  border-top: none;
  font-size: 1.06em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: black;
  background-color: transparent;
  box-shadow: 2px 0px 3px -2px rgba(41, 46, 117, 0.26),
    -2px 0px 3px -2px rgba(41, 46, 117, 0.26);
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
    props.$firstInput &&
    css`
      border-radius: 8px 8px 0 0;
      box-shadow: 0px -2px 4px -2px rgba(41, 46, 117, 0.26),
        2px 0px 3px -2px rgba(41, 46, 117, 0.13),
        -2px 0px 3px -2px rgba(41, 46, 117, 0.13);
    `}
  ${(props) =>
    props.$lastInput &&
    css`
      border-radius: 0 0 8px 8px;
      border-bottom: none;
      padding-bottom: 2px;
      margin-bottom: 18px;
      box-shadow: 0px 2px 4px -2px rgba(41, 46, 117, 0.5),
        2px 0px 3px -2px rgba(41, 46, 117, 0.13),
        -2px 0px 3px -2px rgba(41, 46, 117, 0.13);
    `}
`;

export const DivCepInputStyled = styled.div`
  width: calc(100% - 48px);
  height: 48px;
  box-sizing: border-box;
  padding: 0 16px;
  margin: auto;
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
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
  border: none;
  border-bottom: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  box-shadow: none;

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
  font-family: "Open Sans", sans-serif;
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
  font-family: "Open Sans", sans-serif;
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
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.9),
    2px 0px 3px -2px rgba(0, 0, 0, 0.6), -2px 0px 3px -2px rgba(0, 0, 0, 0.6);
  background-color: ${(props) =>
    props.$enable ? "#383d6a" : "hsla(210, 7%, 62%, 1.00)"};
  &:hover {
    background-color: ${(props) =>
      props.$enable ? "hsla(234, 31%, 28%, 1)" : "hsla(210, 7%, 56%, 1.00)"};
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

export const goBackButtonStyled = styled(ButtonStyled)`
  background-color: hsla(234, 31%, 45%, 1);
  &:hover {
    background-color: hsla(234, 31%, 40%, 1);
  }
`;
