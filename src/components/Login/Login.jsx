import { useState, useContext, useEffect } from "react";
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
  DivAlertStyled,
} from "./ComponentsLogin";
import {
  DivGPSResultStyled,
  SpanGpsReturnStyled,
} from "../../pages/Cart/ComponentsRegAddress";
import { PValueStyled } from "../../pages/Cart/ComponentsCart";
import { VisibilityContext } from "../../contexts/VisibilityContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../main";

const provider = new GoogleAuthProvider();

const Login = ({ setSeeLogin, onRegisterAddress }) => {
  const [opacity, setOpacity] = useState(1);
  const [showAlert, setShowAlert] = useState(false);
  const { setNoSkipLogin } = useContext(VisibilityContext);
  const [inLoginProcess, setInLoginProcess] = useState(false);
  const { setToken } = useContext(VisibilityContext);

  function handleClickClose() {
    if (onRegisterAddress !== true) {
      setOpacity(0);
      setTimeout(() => {
        setSeeLogin(false);
        setNoSkipLogin(true);
      }, 800);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider); // Abre tela pop-up
      const user = result.user;

      const idToken = await user.getIdToken();
      setToken(idToken);

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
            setNoSkipLogin(false);
            setSeeLogin(false);
            setInLoginProcess(false);
            throw new Error("Erro no login: " + response.statusText);
          } else {
            setInLoginProcess(true);
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

  useEffect(() => {}, []);

  return (
    <ContainerStyled $opacity={opacity} $onRegisterAddress={onRegisterAddress}>
      <DivMainStyled $onRegisterAddress={onRegisterAddress}>
        {showAlert && (
          <DivAlertStyled>
            <PEmailStyled
              style={{
                width: "80%",
                paddingBottom: "2px",
                scale: 1.01,
                fontWeight: 600,
                color: "#d5343a",
              }}
            >
              <strong>Entre com google </strong>e teste a api de geolocoding,
              seja paciente, pois o backend ainda está sendo feito.
            </PEmailStyled>
          </DivAlertStyled>
        )}

        {inLoginProcess && (
          <DivGPSResultStyled>
            <SpanGpsReturnStyled
              className="material-symbols-outlined"
              $errorLocationButton={false}
            >
              progress_activity
            </SpanGpsReturnStyled>

            <PValueStyled style={{ width: "80%", textAlign: "center" }}>
              Entrando na sua conta
            </PValueStyled>
          </DivGPSResultStyled>
        )}

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
