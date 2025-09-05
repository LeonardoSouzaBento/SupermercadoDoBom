import { useContext } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../../main";
import { VisibilityContext } from "../../../contexts/VisibilityContext";
import { ButtonLoginStyled, DivSpanPStyled, PLoginStyled, DivSpanStyled, SpanButtonStyled } from "../StylizedTags";

const ButtonLoginAnonymous = ({ setLoginSucess, setLoginState, onMyAccount }) => {
  const { setIdToken } = useContext(VisibilityContext);

  async function handleAnonymousLogin() {
    setLoginState("pending");
    try {
      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth-login-anonymous",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setLoginState("error");
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

  return (
    <ButtonLoginStyled onClick={handleAnonymousLogin} $onMyAccount={onMyAccount}>
      <DivSpanPStyled>
        <PLoginStyled>Visitante</PLoginStyled>
        <DivSpanStyled>
          <SpanButtonStyled className="material-symbols-outlined">mail_off</SpanButtonStyled>
        </DivSpanStyled>
      </DivSpanPStyled>
    </ButtonLoginStyled>
  );
};

export default ButtonLoginAnonymous;