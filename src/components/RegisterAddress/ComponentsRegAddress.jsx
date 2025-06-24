import styled from "styled-components";

export const Box0Styled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.24);

  @media screen and (max-width: 768px) {
    background-color: rgb(235, 235, 235);
  }
  /* &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    filter: saturate(1);
  } */
`;

// Caixa central onde ficam os inputs
export const BoxStyled = styled.div`
  height: auto;
  width: calc(100% - 30px);
  max-width: 400px;
  box-sizing: border-box;
  border-radius: 14px;
  background-color: white;
  padding: 12px 20px;
  padding-top: 16px;
  padding-bottom: 4px;
  position: relative;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: 320px) and (max-width: 374px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 375px) and (max-width: 400px) {
    width: calc(100% - 20px);
    border-radius: 12px;
    box-shadow: none;
  }
  @media screen and (min-width: 401px) and (max-width: 768px) {
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.14);
  }
  @media screen and (min-width: 769px) {
    margin-right: 10px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (min-width: 993px) {
    border-radius: 8px;
    margin-right: 32px;
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.65em;
  color: red;
  font-weight: 400;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background-color: rgb(236, 236, 236);
  border-radius: 6px;
  padding: 2px;
`;

// Título
export const TitleStyled = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  user-select: none;
  font-family: "Roboto Flex", sans-serif;
  font-weight: 300;
  font-size: 1.34em;

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
  margin-bottom: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16814D;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Roboto Flex", sans-serif;
  font-size: 1.12em;
  font-weight: 300;
  text-align: center;

  &:hover {
    background-color:rgb(20, 117, 70);
  }

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.145em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.22em;
  }
`;

export const NoKnowMyCEP = styled(LocationButtonStyled)`
  height: 38px;
  background-color: rgb(223, 114, 18);
  &:hover {
    background-color: rgb(213, 109, 17);
  }
  margin-bottom: 24px;
  border: none;
`;

// Estilo dos inputs
export const InputStyled = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 14px;
  border: none;
  border-radius: 6px;
  font-size: 1.025em;
  color: black;
  
  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  }
`;

// Botão de envio
export const SubmitButtonStyled = styled(LocationButtonStyled)`
  background-color: #4429f6;
  border-radius: 0px 0px 6px 6px;
  font-weight: 400;

  &:hover {
    background-color:rgb(57, 34, 204);
  }
`;
