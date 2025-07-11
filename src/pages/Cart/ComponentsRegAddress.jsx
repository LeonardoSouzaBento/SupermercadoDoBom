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
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: calc(100% - 16px);
  max-width: 416px;
  box-sizing: border-box;
  border-radius: 13px;
  background-color: white;
  padding: 24px 20px;
  padding-top: 12px;
  margin-bottom: 4px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px -2.5px rgba(41, 46, 117, 0.45),
    3px 0px 3px -1.5px rgba(41, 46, 117, 0.15),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.15);
  transition: transform 0.2s ease;
  
  @media screen and (max-width: 374px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: calc(100% - 24px);
  }
`;

export const SubDivStyled = styled.div`
  width: calc(100% - 8px);
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const DivSpanCloseStyled = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.7em;
  font-weight: 600;
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
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1.34em;
  color: #292e4e;

   @media screen and (max-width: 385px) {
    font-size: 1.27em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.296em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.31em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.32em;
  }
`;

// Botão de localização
export const LocationButtonStyled = styled.button`
  width: 100%;
  height: 44px;
  padding: 0px 16px;
  padding-bottom: 2px;
  box-sizing: border-box;
  margin-bottom: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16814d;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: rgb(20, 117, 70);
  }

  @media screen and (max-width: 385px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
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
  height: 44px;
  padding-left: 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.06em;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: black;
  background-color: transparent;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
  }
`;

// Botão de envio
export const RegisterButtonStyled = styled(LocationButtonStyled)`
  height: 48px;
  margin-bottom: 0px;
  background-color:hsl(358, 70.90%, 51.60%);
  &:hover {
    background-color:hsl(358, 70.90%, 48%);
  }
  @media screen and (max-width: 385px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 385px) and (max-width: 576px) {
    font-size: 1.19em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
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
