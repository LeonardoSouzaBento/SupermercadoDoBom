import { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.58);
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 4;
  transition: filter 0.8s ease;
  ${(props) => props.$opacity !== 1 && "filter: opacity(0);"};
`;

const BoxLoginStyled = styled.div`
  width: 380px;
  max-width: 380px;
  padding: 18px;
  padding-top: 16px;
  padding-bottom: 20px;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom,
    rgb(217, 85, 14),
    rgb(255, 89, 0)
  );
  border-top: none;
  border-bottom: 1px solid rgb(69, 69, 69);
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.12), -3px 0px 6px rgba(0, 0, 0, 0.12);
  border-radius: 7px 9px 7px 7px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 374px) {
    width: 100%;
  }
  @media screen and(min-width: 375px) and (max-width: 577px) {
    width: calc(100% - 8px);
    max-width: 380px;
    top: 43%;
  }
`;

const DivSpanCloseStyled = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(208, 0, 7);
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  transition: background-color 0.05s linear;
  &:hover {
    background-color: rgb(177, 0, 6);
  }
`;

const SpanCloseStyled = styled.span`
  font-weight: 400;
  color: white;

  @media screen and (min-width: 320px) and (max-width: 374px) {
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
    font-size: 1.58em;
  }
`;

const H1LoginStyled = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 1.3em;
  text-align: center;
  color: white;
  width: 100%;
  margin-bottom: 16px;
  @media screen and (min-width: 320px) and (max-width: 374px) {
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

const BoxEmailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  margin-bottom: 24px;
`;

const PEmailStyled = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.16em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.165em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.17em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.175em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.18em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.185em;
  }
`;

const InputEmailStyled = styled.input`
  width: 100%;
  min-height: 37px;
  background-color: white;
  border: none;
  border-radius: 4px;
  text-indent: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 1.1em;

  &:focus {
    outline: 1px solid rgb(167, 12, 12);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.125em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.145em;
  }
`;

const BoxLoginGoogle = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid rgb(202, 9, 9);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:focus {
    outline: 1px solid rgb(167, 12, 12);
  }
`;

const PLoginGoogleStyled = styled(PEmailStyled)`
  width: 100%;
  padding-right: 12px;
  text-align: center;
  color: rgb(55, 0, 255);
  ${(props) => props.$whatsapp && "color:rgb(37, 113, 4);"}
  font-weight: 500;
  font-family: "Roboto Flex", sans-serif;
  user-select: none;
`;

const ImgGoogleStyled = styled.img`
  height: 100%;
  width: auto;
  padding: 2px;
  ${(props) => props.$whatsapp && "padding: 4px;"};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
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
      <BoxLoginStyled>
        <DivSpanCloseStyled onClick={handleClickClose}>
          <SpanCloseStyled className="material-symbols-rounded">
            close
          </SpanCloseStyled>
        </DivSpanCloseStyled>

        <H1LoginStyled>Cadastre-se</H1LoginStyled>
        <BoxEmailStyled>
          <PEmailStyled>E-mail:</PEmailStyled>
          <InputEmailStyled></InputEmailStyled>
        </BoxEmailStyled>
        <BoxLoginGoogle>
          <PLoginGoogleStyled $whatsapp={true}>
            Entrar com Whatsapp
          </PLoginGoogleStyled>
          <ImgGoogleStyled src="/login/whatsapp-logo.png" $whatsapp={true} />
        </BoxLoginGoogle>
        <BoxLoginGoogle>
          <PLoginGoogleStyled>Entrar com o Google</PLoginGoogleStyled>
          <ImgGoogleStyled src="/login/Google-Logo.png" />
        </BoxLoginGoogle>
      </BoxLoginStyled>
    </ContainerStyled>
  );
};

export default Login;
