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
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  transition: opacity 0.4s ease;
  opacity: ${(props) => props.$opacity};

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 416px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  padding: 28px;
  padding-bottom: 36px;
  padding-top: 26px;
  margin-bottom: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 5px 10px -8px rgba(41, 46, 117, 0.6);
  transition: transform 0.2s ease;

  @media screen and (max-width: 374px) {
    padding: 18px;
    padding-bottom: 24px;
    padding-top: 20px;
  }
  @media screen and (min-width: 374px) and (max-width: 577px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    padding-bottom: 44px;
  }
  /* @media screen and (max-width: 420px) {
    border-radius: 0px 0px 24px 24px;
    padding-bottom: 32px;
    padding-top: 24px;
  }
  @media screen and (min-width: 420px) and (max-width: 768px) {
    margin-top: 12px;
  } */
`;

export const SubDivStyled = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const DivSpanCloseStyled = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.7em;
  font-weight: 500;
  color: #292e4e;
`;

// Título

export const DivTitleStyled = styled.div`
  height: 44px;
  width: 100%;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

// Botão de localização
export const LocationButtonStyled = styled.button`
  width: 100%;
  display: block;
  max-width: 400px;
  margin: auto;
  height: 44px;
  padding: 0px 16px;
  padding-bottom: 2px;
  box-sizing: border-box;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a8234;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: #146528;
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

// Estilo dos inputs
export const InputStyled = styled.input`
  width: 100%;
  display: block;
  max-width: 400px;
  height: 46px;
  margin: auto;
  padding-left: 12px;
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

// Botão de envio
export const RegisterButtonStyled = styled(LocationButtonStyled)`
  height: 48px;
  margin-bottom: 0px;
  background-color: #db2c32ff;
  &:hover {
    background-color: #d12429ff;
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
