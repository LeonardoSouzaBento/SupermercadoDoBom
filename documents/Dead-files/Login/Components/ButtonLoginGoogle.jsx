import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../src/main";
import { VisibilityContext } from "@contexts/VisibilityContext";
import { ButtonLoginStyled, DivSpanPStyled, PLoginStyled, ImgGoogleStyled } from "../StylizedTags";

const provider = new GoogleAuthProvider();

const ButtonLoginGoogle = ({ setLoginState, setLoginSucess }) => {
  const { setIdToken, userContact, setUserContact} = useContext(VisibilityContext);

  async function handleGoogleLogin() {
    setLoginState("pending");
    try {
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserContact({
        ...userContact,
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      });
      
      const idToken = await user.getIdToken();
      setIdToken(idToken);

      const response = await fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth-login-google",
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
      setLoginState("error");
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

export default ButtonLoginGoogle;