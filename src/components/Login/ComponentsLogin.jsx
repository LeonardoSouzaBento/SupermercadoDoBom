import { useContext } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithCustomToken,
} from "firebase/auth";
import { auth } from "../../main";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import {
  ButtonLoginStyled,
  DivSpanPStyled,
  PLoginStyled,
  ImgGoogleStyled,
  DivSpanStyled,
  SpanButtonStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
} from "./StylizedTagsLogin";
import {
  DivApiReturnStyled,
  SpanApiReturnStyled,
} from "../MyAccountPage/RegisterAddress/StylizedTags";

const provider = new GoogleAuthProvider();

export const ButtonLoginGoogle = ({ setLoginState, setLoginSucess }) => {
  const { setIdToken, setUserContact } = useContext(VisibilityContext);

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
    }
  }
  return (
    <ButtonLoginStyled onClick={handleGoogleLogin}>
      <DivSpanPStyled>
        <PLoginStyled $google={true}>Login com o Google</PLoginStyled>
        <ImgGoogleStyled src="/login/Google-Logo.png" />
      </DivSpanPStyled>
    </ButtonLoginStyled>
  );
};

export const ButtonLoginEmail = ({ setSeeEmailForm }) => {
  return (
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
  );
};

export const ButtonLoginAnonymous = ({
  setLoginSucess,
  setLoginState,
  onMyAccount,
}) => {
  const { setIdToken } = useContext(VisibilityContext);

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
      console.error(error);
    }
  }

  return (
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
  );
};

export const ButtonClose = ({ setSeeLogin }) => {
  return (
    <DivSpanCloseStyled
      // $onMyAccount={onMyAccount}
      onClick={() => {
        setSeeLogin(false);
      }}
    >
      <SpanCloseStyled className="material-symbols-rounded">
        close
      </SpanCloseStyled>
    </DivSpanCloseStyled>
  );
};

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
            {loginState === "pending" ? "Fazendo Login..." : "Sucesso! Usuário logado."}
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