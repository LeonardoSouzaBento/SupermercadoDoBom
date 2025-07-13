import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 4;
  transition: filter 0.8s ease;
  ${(props) => props.$opacity !== 1 && "filter: opacity(0);"};
`;

const DivMainStyled = styled.div`
  width: 100%;
  max-width: 380px;
  padding: 18px;
  padding-top: 16px;
  padding-bottom: 24px;
  box-sizing: border-box;
  background-color: #dc2c32;
  overflow: hidden;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 375px) {
    width: calc(100% - 8px);
    padding: 16px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 375px) and (max-width: 577px) {
    width: calc(100% - 20px);
    top: 43%;
  }
`;

const DivSpanCloseStyled = styled.div`
  height: 36px;
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D32A30;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 4px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: background-color 0.05s linear;
  &:hover {
    background-color: rgb(177, 0, 6);
  }
`;

const SpanCloseStyled = styled.span`
  font-weight: 600;
  color: white;

  @media screen and (max-width: 374px) {
    font-size: 1.45em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.48em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.51em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.5em;
  }
`;

const H1LoginStyled = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  text-align: center;
  color: white;
  width: 100%;
  margin-bottom: 16px;
  @media screen and (max-width: 374px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.35em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.45em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.55em;
  }
`;

const DivEmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 18px;
`;

const PEmailStyled = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: white;
  letter-spacing: 0.65px;
  @media screen and (max-width: 374px) {
    font-size: 1.155em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
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

const InputEmailStyled = styled.input`
  width: 100%;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 8px;
  text-indent: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 1.1em;

  &:focus {
    outline: 1px solid #B12328;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
     font-size: 1.11em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.117em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
     font-size: 1.135em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.139em;
  }
`;

const DivLoginGoogle = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover{
    background-color:rgb(245, 249, 255);
  }
`;

const PLoginGoogleStyled = styled.p`
  width: 100%;
  padding-left: 18px;
  padding-bottom: 1px;
  text-align: center;
  color: #2C3EDB;
  ${(props) => props.$whatsapp && "color: #294E33;"}
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  user-select: none;

  @media screen and (max-width: 375px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
     font-size: 1.1em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.115em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
     font-size: 1.128em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.13em;
  }
`;

const ImgGoogleStyled = styled.img`
  height: 100%;
  width: auto;
  padding: 2px;
  padding-left: 4px;
  ${(props) => props.$whatsapp && "padding: 4px 4px 4px 7px;"};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  filter: contrast(1.3) brightness(0.99);
  mix-blend-mode: multiply;
`;

const Login = ({ noSkipLogin, setNoSkipLogin }) => {
  const [opacity, setOpacity] = useState(1);

  function handleClickClose() {
    setOpacity(0);
    setTimeout(() => {
      setNoSkipLogin(false);
    }, 800);
  }

  useEffect(() => {
    if (noSkipLogin === false) {
      setTimeout(() => {
      }, 825);
    }
  }, [noSkipLogin]);

  return (
    <ContainerStyled $opacity={opacity}>
      <DivMainStyled>
        <DivSpanCloseStyled onClick={handleClickClose}>
          <SpanCloseStyled className="material-symbols-rounded">
            close
          </SpanCloseStyled>
        </DivSpanCloseStyled>

        <H1LoginStyled>Cadastre-se</H1LoginStyled>
        <DivEmailStyled>
          <PEmailStyled>E-mail:</PEmailStyled>
          <InputEmailStyled></InputEmailStyled>
        </DivEmailStyled>
        <DivLoginGoogle>
          <PLoginGoogleStyled $whatsapp={true}>
            Entrar com Whatsapp
          </PLoginGoogleStyled>
          <ImgGoogleStyled src="/login/whatsapp-logo.png" $whatsapp={true} />
        </DivLoginGoogle>
        <DivLoginGoogle>
          <PLoginGoogleStyled>Entrar com o Google</PLoginGoogleStyled>
          <ImgGoogleStyled src="/login/Google-Logo.png" />
        </DivLoginGoogle>
      </DivMainStyled>
    </ContainerStyled>
  );
};

export default Login;
