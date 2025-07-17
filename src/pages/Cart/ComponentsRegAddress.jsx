import styled from "styled-components";

export const DivBodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.15);
  transition: opacity 0.4s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    background-color: hsla(213, 29%, 94%, 1.00);

    &::after {
      content: "";
      width: 100%;
      height: 180px;
      position: absolute;
      top: 56px;
      left: 0;
      background: linear-gradient(to bottom, #383d6a, #ebeff4);
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      z-index: -1;
    }
    &::before {
      content: "";
      width: 100%;
      height: 56px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #383d6a;
      z-index: -1;
    }
  }
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 416px;
  margin-bottom: 4px;
  padding-bottom: 25px;
  box-sizing: border-box;
  border-radius: 0 0 8px 8px;
  background-color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 8px 20px -8px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease;

  @media screen and (max-width: 768px) {
    border-radius: 0 0 12px 12px;
  }

  @media screen and (min-width: 374px) and (max-width: 577px) {
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
`;

export const H1Styled = styled.h1`
  text-align: center;
  font-size: 24px;
  user-select: none;
  font-family: "Lato", sans-serif;
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
  &:hover {
    background-color: hsl(234, 30.9%, 28%);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.7em;
  font-weight: 400;
`;

// Botão de localização
export const LocationButtonStyled = styled.button`
  width: calc(100% - 48px);
  margin: auto;
  height: 48px;
  padding: 0px 16px;
  padding-bottom: 2px;
  box-sizing: border-box;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 400;
  text-align: center;
  background-color: #e9eff5;
  color: black;
  /* box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13); */

  &:hover {
    background-color: #e9eff5;
  }

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

export const SubDivStyled = styled.div`
  width: calc(100% - 48px);
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

// Estilo dos inputs
export const InputStyled = styled.input`
  width: 100%;
  display: block;
  height: 46px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #e9eff5;
  font-size: 1.06em;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: black;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const CepInputStyled = styled(InputStyled)`
  width: calc(100% - 48px);
  margin: auto;
  padding-left: 16px;
  background-color: #e9eff5;
  border-bottom: none;
  margin-bottom: 12px;
  border-radius: 4px;
`;

// Botão de envio
export const RegisterButtonStyled = styled(LocationButtonStyled)`
  border-radius: 8px;
  margin-bottom: 0px;
  background-color: #db2c32;
  color: white;
  &:hover {
    background-color: hsla(234, 31%, 24%, 1);
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
