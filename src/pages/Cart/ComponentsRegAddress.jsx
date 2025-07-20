import styled from "styled-components";

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
  /* background-color: rgba(0, 0, 0, 0.1); */
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
  padding-bottom: 25px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 3px 3px -2px rgba(41, 46, 117, 0.35),
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
`;

export const H1Styled = styled.h1`
  text-align: center;
  font-size: 24px;
  user-select: none;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.34em;
  ${(props) => props.$alert && "margin-top: 12px;"}
  ${(props) => props.$alert && "color: rgba(191, 28, 28, 1);"}

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
  font-size: 28px;
  font-weight: 300;
`;

// Botão de localização
export const LocationButtonStyled = styled.button`
  width: calc(100% - 48px);
  margin: auto;
  height: 48px;
  padding: 0px 16px;
  padding-bottom: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 400;
  text-align: center;
  background-color: #4b6b39;
  color: white;

  &:hover {
    background-color: #456334;
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

export const DivOrStyled = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const POrStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;

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
  padding-bottom: 2px;
  border: none;
  border-bottom: 1px solid #e9eff5;
  font-size: 1.06em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: black;
  background-color: transparent;
  &:focus {
    outline: none;
  }

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

export const CepInputStyled = styled(InputStyled)`
  width: calc(100% - 48px);
  height: 48px;
  margin: auto;
  padding-bottom: 0px;
  padding-left: 16px;
  background-color: #e9eff5;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
`;

export const DivCityStyled = styled.div`
  height: 48px;
  width: calc(100% - 48px);
  box-sizing: border-box;
  padding-left: 16px;
  margin: auto;
  margin-bottom: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #e9eff5;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid rgba(41, 46, 117, 0.3);
`;

export const PCityStyled = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  /* text-transform: uppercase; */

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
export const RegisterButtonStyled = styled(LocationButtonStyled)`
  border-radius: 8px;
  margin-bottom: 0px;
  background-color: #383d6a;
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
