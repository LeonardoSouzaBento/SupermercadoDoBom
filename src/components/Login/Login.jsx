import { useState, useContext, useEffect } from "react";
import {
  ContainerStyled,
  DivMainStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  DivButtonsStyled,
  ButtonLoginStyled,
  PLoginStyled,
  ImgGoogleStyled,
  SpanButtonStyled,
  DivSpanStyled,
  DivH1Styled,
  DivSpanPStyled,
} from "./StylizedTagsLogin";
import {
  DivApiReturnStyled,
  SpanApiReturnStyled,
} from "../MyAccountPage/RegisterAddress/StylizedTags";
import { H1Styled, PValueStyled } from "../../pages/Cart/StylizedTagsCart";
import EmailForm from "./EmailForm";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
} from "firebase/auth";
import { auth } from "../../main";

const provider = new GoogleAuthProvider();

const Login = ({ setSeeLogin, onMyAccount }) => {
  const [opacity, setOpacity] = useState(0);
  const [loginState, setLoginState] = useState("");
  const { setIdToken, userContact, setUserContact } =
    useContext(VisibilityContext);
  const [seeEmailForm, setSeeEmailForm] = useState(false);

  function setLoginSucess() {
    setLoginState("completed");
    setSeeLogin(false);
  }

  async function handleAnonymousLogin() {
    setLoginState("pending");
    try {
      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth/login-anonymous",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro no login anônimo");
      }

      const { token } = await response.json();
      const userCredential = await signInWithCustomToken(auth, token);
      const idToken = await userCredential.user.getIdToken();

      setIdToken(idToken);
      setLoginSucess();
      console.log("Login bem-sucedido!");
    } catch (error) {
      setLoginState("error");
      console.error(error);
    }
  }

  async function handleGoogleLogin() {
    setLoginState("pending");
    try {
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserContact({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      });

      const idToken = await user.getIdToken();
      setIdToken(idToken);

      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth/login-google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        }
      );

      if (!response.ok) {
        setLoginState("Error");
        throw new Error("Erro no login: " + response.statusText);
      }

      setLoginSucess();
      const data = await response.json();
      console.log("Resposta do backend:", data);
    } catch (error) {
      console.log(error);
      setLoginState("error");
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 200);
  }, []);

  useEffect(() => {
    if (loginState === "error" || loginState === "completed") {
      setTimeout(() => {
        setLoginState("");
      }, 4200);
    }
  }, [loginState]);

  return (
    <ContainerStyled $opacity={opacity}>
      <DivMainStyled>
        {loginState !== "" && <LoginReturn loginState={loginState} />}

        {seeEmailForm ? (
          <EmailForm
            loginState={loginState}
            setLoginState={setLoginState}
            userContact={userContact}
            setUserContact={setUserContact}
            setIdToken={setIdToken}
            setSeeEmailForm={setSeeEmailForm}
          />
        ) : (
          <>
            <DivSpanCloseStyled
              $onMyAccount={onMyAccount}
              onClick={() => {
                setSeeLogin(false);
              }}
            >
              <SpanCloseStyled className="material-symbols-rounded">
                close
              </SpanCloseStyled>
            </DivSpanCloseStyled>

            <DivH1Styled>
              <H1Styled $login={true}>Fazer Login</H1Styled>
            </DivH1Styled>

            <DivButtonsStyled>
              <ButtonLoginStyled
                onClick={handleAnonymousLogin}
                $onMyAccount={onMyAccount}
              >
                <DivSpanPStyled>
                  <PLoginStyled>Visitante</PLoginStyled>
                  <DivSpanStyled>
                    <SpanButtonStyled className="material-symbols-outlined">
                      mail_off
                    </SpanButtonStyled>
                  </DivSpanStyled>
                </DivSpanPStyled>
              </ButtonLoginStyled>

              <ButtonLoginStyled
                onClick={() => {
                  setSeeEmailForm(true);
                }}
              >
                <DivSpanPStyled>
                  <PLoginStyled>Login com E-mail</PLoginStyled>
                  <DivSpanStyled>
                    <SpanButtonStyled className="material-symbols-rounded">
                      mail
                    </SpanButtonStyled>
                  </DivSpanStyled>
                </DivSpanPStyled>
              </ButtonLoginStyled>

              <ButtonLoginStyled onClick={handleGoogleLogin}>
                <DivSpanPStyled>
                  <PLoginStyled $google={true}>Login com o Google</PLoginStyled>
                  <ImgGoogleStyled src="/login/Google-Logo.png" />
                </DivSpanPStyled>
              </ButtonLoginStyled>
            </DivButtonsStyled>
          </>
        )}
      </DivMainStyled>
    </ContainerStyled>
  );
};

export default Login;

export const LoginReturn = ({ loginState }) => {
  return (
    <>
      {(loginState === "pending" || loginState === "completed") && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $wait={loginState === "pending"}
          >
            {loginState === "pending" ? "progress_activity" : "check"}
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            {loginState === "pending" ? "Fazendo Login..." : "Sucesso!"}
          </PValueStyled>
        </DivApiReturnStyled>
      )}

      {loginState === "error" && (
        <DivApiReturnStyled>
          <SpanApiReturnStyled
            className="material-symbols-outlined"
            $error={true}
          >
            exclamation
          </SpanApiReturnStyled>

          <PValueStyled style={{ width: "80%", textAlign: "center" }}>
            <strong>Erro: </strong> o login falhou, tente novamente ou tente de
            outro modo.
          </PValueStyled>
        </DivApiReturnStyled>
      )}
    </>
  );
};
