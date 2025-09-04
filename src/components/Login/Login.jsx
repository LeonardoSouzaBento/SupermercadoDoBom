import { useState, useEffect, useContext } from "react";
import {
  ContainerStyled,
  DivMainStyled,
  DivButtonsStyled,
  DivH1Styled,
} from "./StylizedTags";
import { H1Styled } from "../../pages/Cart/StylizedTags";
import EmailForm from "./EmailForm";
import {
  LoginReturn,
  ButtonClose,
  ButtonLoginAnonymous,
  ButtonLoginEmail,
  ButtonLoginGoogle,
} from "./Components";
import { VisibilityContext } from "../../contexts/VisibilityContext";

const Login = ({ setSeeLogin, onMyAccount }) => {
  const [opacity, setOpacity] = useState(0);
  const [loginState, setLoginState] = useState("");
  const [seeEmailForm, setSeeEmailForm] = useState(false);
  const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
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
        setSeeLogin(false);
      }, 4200);
    }
    if (loginState === "completed") {
      setUserDisconnected(false);
      setTimeout(() => {
        setSeeLogin(false);
      }, 2000);
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
            <ButtonClose setSeeLogin={setSeeLogin} />

            <DivH1Styled>
              <H1Styled $login={true}>Fazer Login</H1Styled>
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
