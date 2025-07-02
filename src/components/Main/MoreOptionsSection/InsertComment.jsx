import { useState } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContainerStyled2 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InputTextStyled = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 220px;
  max-height: 400px;
  padding: 0px 12px;
  padding-top: 12px;
  box-sizing: border-box;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", sans-serif;
  overflow-wrap: break-word;
  
  &:focus {
    outline: none;
  }
    @media screen and (max-width: 374px) {
    font-size: 1.13em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.1em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.12em;
    line-height: 1.405em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.152em;
    line-height: 1.41em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.155em;
    line-height: 1.415em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.157em;
    line-height: 1.42em;
  }
`;

const InputSubmitStyled = styled.input`
  height: 37px;
  width: 200px;
  margin-right: 0px;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
  border-radius: 4px;
  background-color: #545126;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  border: none;
  letter-spacing: 0.72px;

  ${(props) => props.$sent && "background-color: rgb(76, 156, 34);"};
  @media screen and (max-width: 768px) {
    font-size: 1.055em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.065em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.15em;
  }
`;

const InsertComment = () => {
  const [sent, setSent] = useState(false);
  const [maxComments, setMaxComments] = useState(0);
  const [stateName, setStateName] = useState("Enviar");

  function handleClickSent() {
    if (maxComments < 3 && sent === false) {
      setSent(true);
      setStateName("Enviado");
      setTimeout(() => {
        setSent(false);
        setStateName("Enviar");
      }, 1300);
      setMaxComments(maxComments + 1);
    }
  }

  return (
    <ContainerStyled>
      <InputTextStyled
        placeholder="Seu comentário vai cair no meu whatsapp"
        type="text"
      />
      <ContainerStyled2>
        <InputSubmitStyled
          type="submit"
          value={stateName}
          $sent={sent}
          onClick={handleClickSent}
        />
      </ContainerStyled2>
    </ContainerStyled>
  );
};

export default InsertComment;
