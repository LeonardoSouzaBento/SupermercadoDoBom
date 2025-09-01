import {
  ContainerStyled,
  DivSideStyled,
  H1Styled,
  DivTitleStyed,
  DivNameSpanStyled,
  POptionStyled,
  DivSpanStyled,
  SpanOptionsStyled,
} from "./StylizedTagsOptions";
import {
  DivSpanCloseStyled,
  SpanCloseStyled,
} from "../../MyAccountPage/RegisterAddress/StylizedTagsRegisterAddress";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import { getAuth, signOut } from "firebase/auth";

const contents = [
  { p: "Minha conta", icon: "person_edit", navigateTo: "/minha-conta" },
  { p: "Meus pedidos", icon: "local_mall", navigateTo: "/meus-pedidos" },
  {
    p: "Sobre o Site",
    icon: "description",
    navigateTo: "/sobre?option=sobre-o-site",
  },
  {
    p: "Sobre o Autor",
    icon: "person_search",
    navigateTo: "/sobre?option=sobre-mim",
  },
  {
    p: "Deixar comentário",
    icon: "add_comment",
    navigateTo: "/sobre?option=comentar",
  },
  { p: "Sair do site", icon: "logout" },
];

const OptionsMenu = ({ setViewOptions }) => {
  const [transform, setTransform] = useState("100%");
  const [option, setOption] = useState("");
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();
  const { seeLogin, setSeeLogin } =
    useContext(VisibilityContext);

  function handleClickClose(e) {
    e.stopPropagation();
    if (e.button === 2 ) {
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
      setOption(contents[index].navigateTo);
    } else {
      handleLogout();
    }
  }

  useEffect(() => {
    if (option !== "") {
      navigate(option);
    }
    return () => {
      setTransform("0%");
    };
  }, [option, navigate]);

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
          <H1Styled
            style={{
              color: "white",
              textAlign: "left",
              paddingLeft: "24px",
              scale: 0.965,
            }}
          >
            Mais Opções
          </H1Styled>
          <DivSpanCloseStyled onPointerDown={handleClickClose}>
            <SpanCloseStyled
              className="material-symbols-rounded"
              style={{ scale: 0.96 }}
            >
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
