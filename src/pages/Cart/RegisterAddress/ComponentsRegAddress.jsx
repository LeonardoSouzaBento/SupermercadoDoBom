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
  background-color: rgba(233, 238, 246, 0.96);
  transition: opacity 0.5s ease;
  opacity: ${(props) => props.$opacity};
`;

// Caixa central onde ficam os inputs
export const MainDivStyled = styled.div`
  height: auto;
  width: calc(100% - 30px);
  max-width: 400px;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: white;
  padding: 16px;
  padding-bottom: 28px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.7),
    3px 0px 3px -1.5px rgba(41, 46, 117, 0.14),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.14);
  transition: transform 0.2s ease;

  @media screen and (max-width: 768px) {
    transform: translateY(${(props)=> props.$translate});
  }
  @media screen and (max-width: 374px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: calc(100% - 24px);
  }
  @media screen and (min-width: 769px) {
    padding: 24px;
  }
`;

export const SubDivStyled = styled.div`
  overflow: hidden;
  margin-bottom: 18px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid rgba(41, 46, 117, 0.4);
`;

export const DivSpanCloseStyled = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-bottom-left-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.64em;
  font-weight: 700;
  color: #db2c32;
`;

// Título
export const H1Styled = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  user-select: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 1.34em;
  color: #383d6a;

  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.35em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.355em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.36em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.365em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.37em;
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
  border-radius: 5px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 1.12em;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: rgb(20, 117, 70);
  }

  @media screen and (max-width: 374px) {
    font-size: 1.15em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 577px) {
    font-size: 1.2em;
  }
`;

// Estilo dos inputs
export const InputStyled = styled.input`
  width: 100%;
  padding: 14px 10px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid rgba(41, 46, 117, 0.4);
  font-size: 1.06em;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: black;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
  }
`;

// Botão de envio
export const RegisterButtonStyled = styled(LocationButtonStyled)`
  height: 46px;
  margin-bottom: 0px;
  background-color:hsl(358, 70.90%, 51.60%);
  &:hover {
    background-color:hsl(358, 70.90%, 48%);
  }
`;
