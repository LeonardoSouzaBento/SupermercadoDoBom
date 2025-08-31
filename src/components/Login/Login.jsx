import { useState, useEffect } from "react";
import {
  ContainerStyled,
  DivMainStyled,
  DivButtonsStyled,
  DivH1Styled,
} from "./StylizedTagsLogin";
import { H1Styled } from "../../pages/Cart/StylizedTagsCart";
import EmailForm from "./EmailForm";
import {
  LoginReturn,
  ButtonClose,
  ButtonLoginAnonymous,
  ButtonLoginEmail,
  ButtonLoginGoogle,
} from "./ComponentsLogin";

const Login = ({ setSeeLogin, onMyAccount }) => {
  const [opacity, setOpacity] = useState(0);
  const [loginState, setLoginState] = useState("");
  const [seeEmailForm, setSeeEmailForm] = useState(false);
  const [hasSuccessMessage, setHasSuccessMessage] = useState(false);

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
        setSeeLogin(false);
      }, 4200);
    }
    if (loginState === "completed") {
      setTimeout(() => {
        setLoginState("");
        setSeeLogin(false);
      }, 2100);
    }
  }, [loginState, hasSuccessMessage, setSeeLogin]);

  return (
    <ContainerStyled $opacity={opacity}>
      <DivMainStyled>
        {loginState !== "" && <LoginReturn loginState={loginState} />}

        {seeEmailForm ? (
          <EmailForm
            loginState={loginState}
            setLoginState={setLoginState}
            setSeeEmailForm={setSeeEmailForm}
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
