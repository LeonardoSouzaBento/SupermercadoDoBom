import { useState } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: -12px;
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
  border-radius: 8px;
  background-color: #ECF0F5;
  border: none;
  /* border: 1px solid rgba(41, 46, 117, 0.4); */
  font-family: var(--font-body);
  overflow-wrap: break-word;
  line-height: 1.24;
  
  &:focus {
    outline: none;
  }
    
  
  
  
  
  
`;

const InputSubmitStyled = styled.input`
  height: 44px;
  width: 200px;
  margin-right: 0px;
  font-family: var(--font-button);
  font-weight: 600;
  border-radius: 8px;
  background-color: #545126;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: white;
  border: none;
  letter-spacing: 0.72px;

  ${(props) => props.$sent && "background-color: rgb(76, 156, 34);"};
  
  
  
`;

const InsertComment = () => {
  // const [sent, setSent] = useState(false);
  // const [maxComments, setMaxComments] = useState(0);
  // const [stateName, setStateName] = useState("Enviar");

  // function handleClickSent() {
  //   if (maxComments < 3 && sent === false) {
  //     setSent(true);
  //     setStateName("Enviado");
  //     setTimeout(() => {
  //       setSent(false);
  //       setStateName("Enviar");
  //     }, 1300);
  //     setMaxComments(maxComments + 1);
  //   }
  // }
  const [message, setMessage] = useState("");

  const sendToWhatsApp = () => {
    const numero = "5534984125832";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <ContainerStyled>
      <InputTextStyled
        placeholder="Digite sua mensagem"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ContainerStyled2>
        <InputSubmitStyled
          // value={stateName}
          type="submit"
          value={"Abrir Whatsapp"}
          onClick={sendToWhatsApp}
        />
      </ContainerStyled2>
    </ContainerStyled>
  );
};

export default InsertComment;


