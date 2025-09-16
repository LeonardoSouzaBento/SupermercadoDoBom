import { useState, useEffect, useContext } from "react";
import {
  ContainerStyled,
  DivMainStyled,
  DivButtonsStyled,
  DivH1Styled,
  ButtonCloseStyled
} from "./StylizedTags";
import { H1Styled } from "../../pages/Cart/StylizedTags";
import EmailForm from "./Components/EmailForm";
import LoginReturn from "./Components/LoginReturn";
import ButtonLoginAnonymous from "./Components/ButtonLoginAnonymous";
import ButtonLoginEmail from "./Components/ButtonLoginEmail";
import ButtonLoginGoogle from "./Components/ButtonLoginGoogle";
import { VisibilityContext } from "../../contexts/VisibilityContext";

const Login = ({ setSeeLogin, onMyAccount }) => {
  const [opacity, setOpacity] = useState(0);
  const [loginState, setLoginState] = useState("");
  const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
  const [seeEmailForm, setSeeEmailForm] = useState(false);
  const { setUserDisconnected } = useContext(VisibilityContext);

  function setLoginSucess() {
    setHasSuccessMessage(true);
    setLoginState("completed");
  }

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 200);
  }, []);

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
      }, 1800);
    }
  }, [loginState, hasSuccessMessage, setSeeLogin, setUserDisconnected]);

  return (
    <ContainerStyled $opacity={opacity}>
      <DivMainStyled>
        {loginState !== "" && <LoginReturn loginState={loginState} />}
        {seeEmailForm ? (
          <EmailForm
            loginState={loginState}
            setLoginState={setLoginState}
            setSeeEmailForm={setSeeEmailForm}
            setLoginSucess={setLoginSucess}
          />
        ) : (
          <>
            <DivH1Styled>
              <H1Styled $login={true}>Fazer Login</H1Styled>
              <ButtonCloseStyled
                onClick={() => {
                  setSeeLogin(false);
                }}
              >
                <span className="material-symbols-rounded">close</span>
              </ButtonCloseStyled>
            </DivH1Styled>

            <DivButtonsStyled>
              <ButtonLoginAnonymous
                setLoginSucess={setLoginSucess}
                setLoginState={setLoginState}
                onMyAccount={onMyAccount}
              />
              <ButtonLoginEmail setSeeEmailForm={setSeeEmailForm} />
              <ButtonLoginGoogle
                setLoginState={setLoginState}
                setLoginSucess={setLoginSucess}
              />
            </DivButtonsStyled>
          </>
        )}
      </DivMainStyled>
    </ContainerStyled>
  );
};

export default Login;
