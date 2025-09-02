import {
  ContainerStyled,
  DivSideStyled,
  H1Styled,
  DivTitleStyed,
  DivNameSpanStyled,
  POptionStyled,
  DivSpanStyled,
  SpanOptionsStyled,
} from "./StylizedTags";
import {
  DivSpanCloseStyled,
  SpanCloseStyled,
} from "../../../pages/MyAccount/RegisterAddress/StylizedTags";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import { getAuth, signOut } from "firebase/auth";

const contents = [
  { p: "Minha conta", icon: "person_edit", navigateTo: "/minha-conta" },
  { p: "Meus pedidos", icon: "local_mall", navigateTo: "/meus-pedidos" },
  {
    p: "Sobre o Autor / Sobre o Site",
    icon: "description",
    navigateTo: "/sobre",
  },
  { p: "Sair do site", icon: "logout" },
];

const OptionsMenu = ({ setViewOptions }) => {
  const [transform, setTransform] = useState("100%");
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();
  const { seeLogin, setSeeLogin } = useContext(VisibilityContext);

  function handleClickClose(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setTransform("100%");
    setTimeout(() => {
      setViewOptions(false);
    }, 450);
  }

  async function handleLogout() {
    if (!seeLogin) {
      try {
        const auth = getAuth();
        await signOut(auth);

        localStorage.clear();
        sessionStorage.clear();

        console.log("Usuário deslogado e cache limpo");
        setSeeLogin(true);
        setViewOptions(false);
      } catch (error) {
        console.error("Erro ao deslogar:", error);
      }
    }
  }

  function handleOpenContent(e, index, p) {
    if (e.button === 2) {
      return;
    }
    if (p !== "Sair do site" && canClick) {
      navigate(contents[index].navigateTo);
    } else {
      handleLogout();
    }
  }

  useEffect(() => {
    return () => {
      setTransform("0%");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTransform("0%");
    }, 200);
    setTimeout(() => {
      setCanClick(true);
    }, 400);
  }, []);

  return (
    <ContainerStyled onPointerDown={handleClickClose}>
      <DivSideStyled $transform={transform}>
        <DivTitleStyed>
          <H1Styled>Mais Opções</H1Styled>
          <DivSpanCloseStyled onPointerDown={handleClickClose} $moreOptions={true}>
            <SpanCloseStyled className="material-symbols-rounded">
              close
            </SpanCloseStyled>
          </DivSpanCloseStyled>
        </DivTitleStyed>
        {contents.map((content, index) => (
          <DivNameSpanStyled
            key={index}
            onPointerDown={(e) => {
              e.stopPropagation();
              handleOpenContent(e, index, content.p);
            }}
            $logout={content.p == "Sair do site"}
          >
            <DivSpanStyled>
              <SpanOptionsStyled
                className="material-symbols-rounded"
                $logout={content.p == "Sair do site"}
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

export default OptionsMenu;
