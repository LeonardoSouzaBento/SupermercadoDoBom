import { useState, useContext } from "react";
import {
  ContainerStyled,
  DivMainStyled,
  DivSpanCloseStyled,
  SpanCloseStyled,
  H1LoginStyled,
  DivEmailStyled,
  PEmailStyled,
  InputEmailStyled,
  DivLoginGoogle,
  PLoginGoogleStyled,
  ImgGoogleStyled,
} from "./ComponentsLogin";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChgbs_mPSRjQSm8FdxGxVwZkKwotHq648",
  authDomain: "api-supermercado-do-bom.firebaseapp.com",
  projectId: "api-supermercado-do-bom",
  storageBucket: "api-supermercado-do-bom.firebasestorage.app",
  messagingSenderId: "981543642842",
  appId: "1:981543642842:web:9b8ac9f046e796d2b367e3",
  measurementId: "G-SYCDGMXT6G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = ({ setSeeLogin }) => {
  const [opacity, setOpacity] = useState(1);
  const { setNoSkipLogin } = useContext(VisibilityContext);

  function handleClickClose() {
    setOpacity(0);
    setTimeout(() => {
      setSeeLogin(false);
      setNoSkipLogin(true);
    }, 800);
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider); // Abre tela pop-up
      const user = result.user;
      
      const idToken = await user.getIdToken();
      setNoSkipLogin(false);
      setSeeLogin(false);
      fetch(
        "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth/login-google",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro no login: " + response.statusText);
          } else {
            setNoSkipLogin(false);
            setSeeLogin(false);
          }
          return response.json();
        })
        .then((data) => console.log("Resposta do backend:", data))
        .catch((error) => {
          console.error("Erro ao enviar token para o backend:", error);
        });
    } catch (error) {
      // Tratar erros (por exemplo, se o usuário fechar o pop-up)
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro no login com Google:", errorCode, errorMessage);
    }
  }

  return (
    <ContainerStyled $opacity={opacity}>
      <DivMainStyled>
        <DivSpanCloseStyled onClick={handleClickClose}>
          <SpanCloseStyled className="material-symbols-rounded">
            close
          </SpanCloseStyled>
        </DivSpanCloseStyled>

        <H1LoginStyled>Cadastre-se</H1LoginStyled>
        <DivEmailStyled>
          <PEmailStyled>E-mail:</PEmailStyled>
          <InputEmailStyled></InputEmailStyled>
        </DivEmailStyled>
        <DivLoginGoogle onClick={handleGoogleLogin}>
          <PLoginGoogleStyled>Entre com o Google</PLoginGoogleStyled>
          <ImgGoogleStyled src="/login/Google-Logo.png" />
        </DivLoginGoogle>
        <DivLoginGoogle $whatsapp={true}>
          <PLoginGoogleStyled $whatsapp={true}>
            Entre com Whatsapp
          </PLoginGoogleStyled>
          <ImgGoogleStyled $whatsapp={true} src="/login/whatsapp-logo.png" />
        </DivLoginGoogle>
      </DivMainStyled>
    </ContainerStyled>
  );
};

export default Login;

