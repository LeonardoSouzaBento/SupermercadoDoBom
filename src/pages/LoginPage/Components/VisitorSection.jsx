import { useContext } from "react";
import { UserDataContext } from "@contexts/UserDataContext";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../../main";
import { VisitorBoxStyled, ButtonStyled } from "../StylizedTags";
import { PValueStyled } from "../../Cart/StylizedTags";

const VisitorSection = ({
  setLoginType,
  setLoginSucess,
  setLoginState,
}) => {
  const { setIdToken } = useContext(UserDataContext);

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
    <>
      <VisitorBoxStyled>
        <PValueStyled>
          <strong>Comunicado: </strong>
          para registrar sua compra será necessário criar uma conta.
        </PValueStyled>
      </VisitorBoxStyled>

      <ButtonStyled $variant="market" onClick={handleAnonymousLogin}>
        Continuar
      </ButtonStyled>
      <ButtonStyled type="button" $variant="ghost" onClick={()=>{setLoginType(null)}}>
        Voltar
      </ButtonStyled>
    </>
  );
};

export default VisitorSection;

