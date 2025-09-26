import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../main";
import { VisibilityContext } from "@contexts/VisibilityContext";
import { ButtonStyled } from "../StylizedTags";

const provider = new GoogleAuthProvider();

const ButtonLoginGoogle = ({ setLoginState, setLoginSucess }) => {
  const { setIdToken, userContact, setUserContact } =
    useContext(VisibilityContext);

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
    <ButtonStyled $variant="google" onClick={handleGoogleLogin}>
      {/* Logo Google */}
      <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Login com Google">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57 c2.08-1.92 
          3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77 c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84 
          C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18 C1.43 8.55 1 10.22 1 
          12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15 C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84
          c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Login com Google
    </ButtonStyled>
  );
};

export default ButtonLoginGoogle;