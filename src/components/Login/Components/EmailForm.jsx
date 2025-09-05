import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../../../main";
import {
  ContainerEmailStyled,
  LabelStyled,
  InputStyled,
  ButtonDivStyled,
} from "../StylizedTags";
import { PValueStyled, PContinueStyled } from "../../../pages/Cart/StylizedTags";
import LoginReturn from "./LoginReturn";
import PasswordValidationReturn from "./PasswordValidationReturn";
import { VisibilityContext } from "../../../contexts/VisibilityContext";

function validatePassword(senha) {
  const requisitos = {
    tamanhoMinimo: senha.length >= 8,
    temMaiuscula: /[A-Z]/.test(senha),
    temMinuscula: /[a-z]/.test(senha),
    temNumero: /[0-9]/.test(senha),
    temSimbolo: /[!@#$%^&*]/.test(senha),
  };

  return {
    ...requisitos,
    valida: Object.values(requisitos).every(Boolean),
  };
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const EmailForm = ({ loginState, setLoginState, setSeeEmailForm, setLoginSucess }) => {
  const { setIdToken, userContact, setUserContact } =
    useContext(VisibilityContext);
  const [emailForm, setEmailForm] = useState({
    email: "",
    senha: "",
  });
  const [emailPassed, setEmailPassed] = useState(false);
  const [validacao, setValidacao] = useState({
    tamanhoMinimo: false,
    temMaiuscula: false,
    temMinuscula: false,
    temNumero: false,
    temSimbolo: false,
    valida: false,
  });

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

  async function handleEmailLogin() {
    if (emailPassed && validacao.valida) {
      setLoginState("pending");
      setUserContact({
        ...userContact,
        email: emailForm.email,
      });
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
      } catch (error) {
        setLoginState("error");
        console.error("erro:", error);

        if (axios.isAxiosError(error) && error.response) {
          console.error("Mensagem de erro do servidor:", error.response.data);
        } else {
          console.error("Erro desconhecido:", error);
        }
      }
    }
  }

  useEffect(() => {
    setEmailPassed(validateEmail(emailForm.email));
  }, [emailForm.email]);

  useEffect(() => {
    const resultadoValidacao = validatePassword(emailForm.senha);
    setValidacao(resultadoValidacao);
  }, [emailForm.senha]);

  return (
    <ContainerEmailStyled>
      {loginState !== "" && <LoginReturn loginState={loginState} />}
      <LabelStyled htmlFor="email">E-mail</LabelStyled>
      <InputStyled
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        required
        onChange={handleTyping}
      />
      <LabelStyled htmlFor="senha">Senha</LabelStyled>
      <InputStyled
        type="password"
        id="senha"
        name="senha"
        placeholder="Digite sua senha"
        required
        onChange={handleTyping}
      />

      <PValueStyled $email={true}>
        Exemplo de senha recomendada:{" "}
        <strong style={{ fontWeight: 600 }}>J@iro450Love</strong>
      </PValueStyled>
      <PasswordValidationReturn validacao={validacao}/>

      <ButtonDivStyled
        $register={true}
        $enable={emailPassed && validacao.valida}
        onClick={handleEmailLogin}
      >
        <PContinueStyled>Entrar</PContinueStyled>
      </ButtonDivStyled>
      <ButtonDivStyled
        onClick={() => {
          setTimeout(() => {
            setSeeEmailForm(false);
          }, 330);
        }}
      >
        <PContinueStyled>Voltar</PContinueStyled>
      </ButtonDivStyled>
    </ContainerEmailStyled>
  );
};

export default EmailForm;
