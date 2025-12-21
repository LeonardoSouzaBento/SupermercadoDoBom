import { UserDataContext } from "@contexts/UserDataContext";
import axios from "axios";
import {
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../../main";
import {
  ButtonStyled,
  InputStyled,
  InputWrapperStyled,
  LabelStyled,
  PasswordWrapperStyled,
  TogglePasswordStyled,
} from "../StylizedTags";
import PasswordValidationReturn from "./PasswordValidationReturn";

function validatePassword(senha) {
  const requisitos = {
    tamanhoMinimo: senha.length >= 8,
    temMaiuscula: /[A-Z]/.test(senha),
    temMinuscula: /[a-z]/.test(senha),
    temNumero: /[0-9]/.test(senha),
    temSimbolo: /[!@#$%^&*]/.test(senha),
  };
  const valida = Object.values(requisitos).every(Boolean);
  const excecao = senha === "J@iro450Love";

  return {
    ...requisitos,
    excecao,
    valida: valida && !excecao,
  };
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const EmailForm = ({
  setLoginType,
  setLoginSucess,
  setLoginState,
  emailWrapperRef,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { setIdToken, userContact, setUserContact } =
    useContext(UserDataContext);
  const [emailForm, setEmailForm] = useState({
    email: "",
    senha: "",
  });
  const [emailPassed, setEmailPassed] = useState(null);
  const [invalidEmailWarn, setInvalidEmailWarn] = useState(false);
  const [validacao, setValidacao] = useState({
    tamanhoMinimo: false,
    temMaiuscula: false,
    temMinuscula: false,
    temNumero: false,
    temSimbolo: false,
    valida: false,
  });

  const [exceptionalPasswordAlert, setExceptionalPasswordAlert] =
    useState(false);

  function showExceptionalPasswordAlert() {
    setExceptionalPasswordAlert(true);
    setTimeout(() => {
      setExceptionalPasswordAlert(false);
    }, 3300);
  }

  function showInvalidEmailWarn() {
    setInvalidEmailWarn(true);
    setTimeout(() => {
      setInvalidEmailWarn(false);
    }, 3000);
  }

  function handleTyping(e) {
    const { name, value } = e.target;
    /*
    OU
    const name = e.target.name;
    const value = e.target.value;
    */
    setEmailForm({
      ...emailForm,
      [name]: value,
    });
  }

  function checkEmailAndPassword() {
    const resultEmail = validateEmail(emailForm.email);
    setEmailPassed(resultEmail);
    const resultPassword = validatePassword(emailForm.senha);

    if (resultPassword.excecao) {
      showExceptionalPasswordAlert();
      return;
    }
    if (validacao.valida && resultEmail) {
      handleEmailLogin();
    }
    if (!resultEmail) {
      showInvalidEmailWarn();
    }
  }

  async function handleEmailLogin() {
    setLoginState("pending");
    setUserContact({
      ...userContact,
      email: emailForm.email,
    });
    try {
      // 1. Tenta login normal
      setLoginState("checking");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailForm.email,
        emailForm.senha
      );
      const idToken = await userCredential.user.getIdToken();

      setIdToken(idToken);
      setLoginSucess();
      console.log("Login bem-sucedido!");
    } catch (error) {
      // 2. Se usuário não existir → chama backend
      setLoginState("pending");
      if (error.code === "auth/user-not-found") {
        try {
          const response = await axios.post(
            "https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth-login-email",
            {
              email: emailForm.email,
              senha: emailForm.senha,
            }
          );

          const { token: customToken } = await response.data; // do backend
          const userCredential = await signInWithCustomToken(auth, customToken);
          const idToken = await userCredential.user.getIdToken();

          setIdToken(idToken);
          setLoginSucess();
          console.log("Login bem-sucedido!");
        } catch (backendError) {
          setLoginState("error");
          console.error("Erro no backend:", backendError);
        }
      } else if (error.code === "auth/wrong-password") {
        setLoginState("error");
        console.error("Senha incorreta");
      } else {
        setLoginState("error");
        console.error("Erro desconhecido:", error);
      }
    }
  }

  useEffect(() => {
    const resultadoValidacao = validatePassword(emailForm.senha);
    setValidacao(resultadoValidacao);
  }, [emailForm.senha]);

  return (
    <form>
      <InputWrapperStyled ref={emailWrapperRef} $email={true}>
        <LabelStyled htmlFor="email">E-mail</LabelStyled>
        <InputStyled
          name="email"
          type="email"
          placeholder="seu@email.com"
          onChange={handleTyping}
          required
        />
        {invalidEmailWarn && <p>Email Inválido!</p>}
      </InputWrapperStyled>

      <InputWrapperStyled $password={true}>
        <LabelStyled>Senha</LabelStyled>
        <PasswordWrapperStyled>
          <InputStyled
            name="senha"
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            onChange={handleTyping}
            required
          />
          <TogglePasswordStyled
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </TogglePasswordStyled>
        </PasswordWrapperStyled>
        <a
          onClick={() => {
            setLoginType("resetPassword");
          }}
        >
          Esqueci Minha Senha
        </a>
        {exceptionalPasswordAlert && <p>A senha de exemplo não é permitida!</p>}
      </InputWrapperStyled>

      <p style={{ marginBottom: "1.6rem" }}>
        Exemplo de senha recomendada:{" "}
        <strong style={{ fontWeight: 600, marginBottom: "1.6rem" }}>
          J@iro450Love
        </strong>
      </p>
      <PasswordValidationReturn validacao={validacao} />

      <ButtonStyled
        $variant="market"
        $disable={!emailPassed || !validacao.valida}
        onClick={(e) => {
          e.preventDefault();
          checkEmailAndPassword();
        }}
      >
        Entrar
      </ButtonStyled>
      <ButtonStyled
        type="button"
        $variant="ghost"
        onClick={() => {
          setLoginType(null);
        }}
      >
        Voltar
      </ButtonStyled>
    </form>
  );
};

export default EmailForm;


