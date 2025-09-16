import { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, User } from "lucide-react";
import {
  PageWrapperStyled,
  ContainerStyled,
  LogoWrapperStyled,
  LogoCircleStyled,
  TitleStyled,
  SubtitleStyled,
  CardStyled,
  CardHeaderStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  ButtonStyled,
  SmallTextStyled,
} from "./StylizedTags";
import { EmailForm } from "./Components/EmailForm";
import { VisitorSection } from "./Components/VisitorSection";
import LoginReturn from "./Components/LoginReturn";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { ButtonLoginGoogle } from "./Components/ButtonLoginGoogle";
import { ResetSection } from "./Components/ResetSection";

const LoginPage = () => {
  const [loginType, setLoginType] = useState(null);
  const [loginState, setLoginState] = useState("");
  const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
  const { setUserDisconnected, setSeeLogin } = useContext(VisibilityContext);
  const navigate = useNavigate();
  const loginTexts = {
    null: {
      title: "Como você quer continuar?",
      description: "Para acessar nosso sistema escolha uma das opções",
    },
    email: {
      title: "Login com Email",
      description: "Digite suas credenciais",
    },
    visitor: {
      title: "Acesso como visitante",
      description: "Navegue sem e-mail",
    },
    resetPassword: {
      title: "Registrar nova senha",
      description: "Digite seu e-mail",
    },
  };
  const currentLoginType = loginType || "null";

  const emailWrapperRef = useRef(null);

  function setLoginSucess() {
    setHasSuccessMessage(true);
    setLoginState("completed");
  }

  useEffect(() => {
    if (loginState === "error" && !hasSuccessMessage) {
      setTimeout(() => {
        setLoginState("");
      }, 4200);
    }
    if (loginState === "completed") {
      setUserDisconnected(false);
      setTimeout(() => {
        setSeeLogin(false);
        navigate("/");
      }, 1800);
    }
  }, [loginState, hasSuccessMessage, setSeeLogin, setUserDisconnected]);

  useEffect(() => {
    if (loginType === "email" && emailWrapperRef.current) {
      setTimeout(() => {
        emailWrapperRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", // faz o topo do elemento alinhar com o topo da tela
        });
      }, 400);
    }
  }, [loginType]);

  return (
    <PageWrapperStyled>
      <ContainerStyled>
        {/* Logo */}
        <LogoWrapperStyled>
          <LogoCircleStyled>
            <span className="material-symbols-outlined">handshake</span>
          </LogoCircleStyled>
          <TitleStyled>Supermercado União</TitleStyled>
          <SubtitleStyled>Compre com comodidade e praticidade</SubtitleStyled>
        </LogoWrapperStyled>

        <CardStyled>
          {loginState !== "" && <LoginReturn loginState={loginState} />}
          <CardHeaderStyled $inEmail={loginType === "email"}>
            <CardTitleStyled>
              {loginTexts[currentLoginType].title}
            </CardTitleStyled>

            <CardDescriptionStyled>
              {loginTexts[currentLoginType].description}
            </CardDescriptionStyled>
          </CardHeaderStyled>

          {/* Opções iniciais */}
          {loginType === null && (
            <>
              <ButtonLoginGoogle
                setLoginState={setLoginState}
                setLoginSucess={setLoginSucess}
              />

              <ButtonStyled
                $variant="visitor"
                onClick={() => setLoginType("visitor")}
              >
                <User size={20} /> Continuar como Visitante
              </ButtonStyled>
              <ButtonStyled
                $variant="market"
                $last={true}
                onClick={() => setLoginType("email")}
              >
                <Mail size={20} /> Login com Email
              </ButtonStyled>
            </>
          )}

          {loginType === "email" && (
            <EmailForm
              setLoginType={setLoginType}
              setLoginSucess={setLoginSucess}
              setLoginState={setLoginState}
              emailWrapperRef={emailWrapperRef}
            />
          )}

          {loginType === "visitor" && (
            <VisitorSection
              setLoginType={setLoginType}
              setLoginSucess={setLoginSucess}
              setLoginState={setLoginState}
            />
          )}

          {loginType === "resetPassword" && (
            <ResetSection setLoginType={setLoginType} />
          )}
        </CardStyled>

        <SmallTextStyled>
          Ao continuar, você concorda com nossos <a href="#">Termos de Uso</a> e{" "}
          <a href="#">Política de Privacidade</a>
        </SmallTextStyled>
      </ContainerStyled>
    </PageWrapperStyled>
  );
};

export default LoginPage;
