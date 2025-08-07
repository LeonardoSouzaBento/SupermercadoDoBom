import { useState, useEffect, useContext, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import { getAuth, signOut } from "firebase/auth";

export const ContainerStyled = styled.div`
  width: auto;
  height: auto;
  position: fixed;
  right: 4.7%;
  top: 130px;
  background-color: transparent;
  z-index: 6;

  @media screen and (min-width: 768px) {
    top: 126px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    right: 3.4%;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    right: 4.9%;
    top: 120px;
  }
  @media screen and (min-width: 1201px) {
    top: 112px;
    right: 5.5%;
  }
`;

export const DivNameSpanStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 18px;
  cursor: pointer;
`;

const ContainerPStyled = styled.div`
  background-color: #db2c32;
  display: flex;
  border-radius: 28px 0px 0px 28px;
  padding-right: 18px;
  margin-right: -28px;
`;

const DivPStyled = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: 56px;
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
  padding-right: 28px;
  padding-left: 24px;
  user-select: none;

  @media screen and (max-width: 375px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.08em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.09em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.1em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.11em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.13em;
  }
`;

export const DivSpanStyled = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  background-color: #db2c32;
  flex: none;
  cursor: pointer;
`;

export const SpanOptionsStyled = styled.span`
  font-weight: 300;
  font-size: 1.7em;
  color: rgb(255, 255, 255);
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 12, "opsz" 30;
  user-select: none;
`;

const contents = [
  { p: "Sobre o site", icon: "description", navigateTo: "sobre-o-site" },
  { p: "Sobre o autor", icon: "person_search", navigateTo: "sobre-mim" },
  { p: "Deixar Comentário", icon: "add_comment", navigateTo: "comentar" },
  { p: "Sair do site", icon: "logout" },
];
// const loginContent = { p: "Fazer login no site", icon: "login" };

const Options = ({ setOpacityState, setViewOptions }) => {
  const navigate = useNavigate();
  const { noSkipLogin, setNoSkipLogin, setSeeLogin } =
    useContext(VisibilityContext);

  const updateLogoutIcon = useCallback(() => {
    if (noSkipLogin === true) {
      contents[3].p = "Fazer login no site";
      contents[3].icon = "login";
    } else {
      contents[3].p = "Sair do site";
      contents[3].icon = "logout";
    }
  }, [noSkipLogin]);

  function handleLoginOrLogout() {
    function operation() {
      setNoSkipLogin(true);
      setSeeLogin(true);
      setViewOptions(false);
    }

    if (noSkipLogin === false) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          console.log("Usuário deslogado com sucesso");
          operation();
          // Aqui você pode, por exemplo:
          // - limpar estados globais
          // - redirecionar para a tela de login
          // - esconder seções privadas
        })
        .catch((error) => {
          console.error("Erro ao deslogar:", error);
        });
    } else {
      operation();
    }
  }

  const [viewNameOption, setViewNameOption] = useState(null);
  const [numberClicks, setNumberClicks] = useState([0, 0, 0]);

  function openContent(e, index) {
    if (e.button === 2) {
      return;
    }
    if (e.pointerType !== "touch") {
      if (index !== 3) {
        const option = contents[index].navigateTo;
        setOpacityState(0);
        setTimeout(() => {
          navigate(`/secao-mais-opcoes?option=${option}`);
        }, 200);
      } else {
        handleLoginOrLogout();
      }
    } else {
      if (index !== 3) {
        setViewNameOption(index);
        setNumberClicks(
          numberClicks.map((_, i) => {
            return index == i ? numberClicks[index] + 1 : 0;
          })
        );
      } else {
        handleLoginOrLogout();
      }
    }
  }

  useEffect(() => {
    const index = numberClicks.findIndex((count) => count == 2);
    if (index != -1) {
      const option = contents[index].navigateTo;
      setNumberClicks([0, 0, 0]);
      setOpacityState(0);
      setTimeout(() => {
        navigate(`/secao-mais-opcoes?option=${option}`);
      }, 200);
    }
  }, [numberClicks, navigate, setOpacityState]);

  useEffect(() => {
    updateLogoutIcon();
  }, [updateLogoutIcon]);

  return (
    <ContainerStyled>
      {contents.map((content, i) => (
        <DivNameSpanStyled
          key={i}
          onMouseEnter={() => {
            setViewNameOption(i);
          }}
          onMouseLeave={() => {
            setViewNameOption(null);
          }}
          onPointerDown={(e) => openContent(e, i)}
          data-ignore-click
        >
          {viewNameOption == i && (
            <ContainerPStyled>
              <DivPStyled>
                <POptionStyled>{content.p}</POptionStyled>
              </DivPStyled>
            </ContainerPStyled>
          )}

          <DivSpanStyled>
            <SpanOptionsStyled className="material-symbols-rounded">
              {content.icon}
            </SpanOptionsStyled>
          </DivSpanStyled>
        </DivNameSpanStyled>
      ))}
    </ContainerStyled>
  );
};

export default Options;
