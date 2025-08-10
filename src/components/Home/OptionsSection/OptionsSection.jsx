import {
  ContainerStyled,
  DivSideStyled,
  DivTitleStyed,
  DivNameSpanStyled,
  POptionStyled,
  DivSpanStyled,
  SpanOptionsStyled,
} from "./ComponentsOptions";
import {
  DivSpanCloseStyled,
  SpanCloseStyled,
} from "../../../pages/Cart/ComponentsRegAddress";
import { HHeadStyled } from "../../../pages/Cart/ComponentsCart";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import { getAuth, signOut } from "firebase/auth";

const contents = [
  { p: "Sobre o site", icon: "description", navigateTo: "sobre-o-site" },
  { p: "Sobre o autor", icon: "person_search", navigateTo: "sobre-mim" },
  { p: "Deixar Comentário", icon: "add_comment", navigateTo: "comentar" },
  { p: "Sair do site", icon: "logout" },
];

const OptionsSection = ({ setViewOptions }) => {
  const [transform, setTransform] = useState("100%");
  const [option, setOption] = useState("");
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();
  const { noSkipLogin, setNoSkipLogin, setSeeLogin } =
    useContext(VisibilityContext);

  useEffect(() => {
    setTimeout(() => {
      setTransform("0%");
    }, 200);
    setTimeout(() => {
      setCanClick(true);
    }, 400);
  }, []);

  function handleClickClose(e) {
    if (e.button === 2) {
      return;
    }
    if (canClick) {
      setTransform("100%");
      setTimeout(() => {
        setViewOptions(false);
      }, 400);
    }
  }

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

  function handleOpenContent(e, index) {
    if (e.button === 2) {
      return;
    }
    if (index !== 3 && canClick) {
      setOption(contents[index].navigateTo);
    } else {
      handleLoginOrLogout();
    }
  }

  useEffect(() => {
    if (option !== "") {
      navigate(`/secao-mais-opcoes?option=${option}`);
    }
    return()=>{
      setTransform("0%");
    }
  }, [option]);

  return (
    <ContainerStyled onPointerDown={handleClickClose}>
      <DivSideStyled $transform={transform}>
        <DivTitleStyed>
          <HHeadStyled
            style={{
              color: "white",
              textAlign: "left",
              paddingLeft: "24px",
              scale: 0.965,
            }}
          >
            Mais Opções
          </HHeadStyled>
          <DivSpanCloseStyled onPointerDown={handleClickClose}>
            <SpanCloseStyled
              className="material-symbols-rounded"
              style={{ scale: 0.96 }}
            >
              close
            </SpanCloseStyled>
          </DivSpanCloseStyled>
        </DivTitleStyed>
        {contents.map((content, i) => (
          <DivNameSpanStyled
            key={i}
            onPointerDown={(e) => handleOpenContent(e, i)}
            data-ignore-click
            $login={i == 3}
          >
            <DivSpanStyled>
              <SpanOptionsStyled
                className="material-symbols-rounded"
                $login={i == 3}
              >
                {content.icon}
              </SpanOptionsStyled>
            </DivSpanStyled>
            <POptionStyled>{content.p}</POptionStyled>
          </DivNameSpanStyled>
        ))}
      </DivSideStyled>
    </ContainerStyled>
  );
};

export default OptionsSection;
