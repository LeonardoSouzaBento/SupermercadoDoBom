import styled from "styled-components";

// Caixa central onde ficam os inputs
export const BoxStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 380px;
  box-sizing: border-box;
  margin: auto;
  border-radius: 8px;
  background-color: white;
  border: 1px solid rgb(180, 180, 180);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  padding: 12px 20px;
  padding-top: 16px;
  padding-bottom: 4px;
  position: sticky;
  top: -8px;
  left: 50%;
  transform: translate(-50%, 0%);

  @media screen and (min-width: 769px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.29);
    border: 1px solid rgb(136, 136, 136);
  }
`;

export const SpanCloseStyled = styled.span`
  font-size: 1.75em;
  color: red;
  font-weight: 400;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
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
  height: 40px;
  padding: 0px 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(68, 41, 246);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Roboto Flex", sans-serif;
  font-size: 1.12em;
  text-align: center;
  border: 1px solid rgb(59, 10, 206);

  &:hover {
    background-color: rgb(22, 40, 230);
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
    font-size: 1.15em;
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
  border: 1px solid rgb(201, 201, 201);
  border-radius: 6px;
  font-size: 1.025em;

  &:focus {
    outline: 1px solid rgb(56, 56, 56);
  }
`;

// Botão de envio
export const SubmitButtonStyled = styled(LocationButtonStyled)`
  width: 100%;
  height: 44px;
  background-color: #007bff;
  border-radius: 0px 0px 6px 6px;
  border: 1px solid rgb(113, 120, 255);

  &:hover {
    background-color: #0069d9;
  }
`;
