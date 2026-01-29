import { Button } from '@ui/button';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../../../main';
import LoginReturn from './login-feedback';

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const ResetSection = ({ setLoginType }) => {
  const [email, setEmail] = useState('');
  const [emailPassed, setEmailPassed] = useState(false);
  const [invalidEmailWarn, setInvalidEmailWarn] = useState(false);
  const [resetProcessState, setResetProcessState] = useState('');

  function showInvalidEmailAlert() {
    setInvalidEmailWarn(true);
    setTimeout(() => {
      setInvalidEmailWarn(false);
    }, 3000);
  }

  function typeMessageAlert(text, updateCallback) {
    let charIndex = 0;
    let typingSpeed = 70;
    let pauseAfterTyping = 1000 + text.length * 20;

    function type() {
      if (charIndex <= text.length) {
        const currentText = text.slice(0, charIndex);
        updateCallback(currentText);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, pauseAfterTyping);
      }
    }

    function erase() {
      updateCallback('');
    }

    type();
  }

  function handleClickReset() {
    if (email.length === 0) {
      const message = 'Digite seu e-mail.';
      typeMessageAlert(message, (currentText) => {
        setEmail(currentText);
      });
    } else {
      const isValidEmail = validateEmail(email);
      if (isValidEmail) {
        recoverPassword();
      } else {
        showInvalidEmailAlert();
      }
    }
  }

  async function recoverPassword(email) {
    setResetProcessState('resetPending');
    try {
      await sendPasswordResetEmail(auth, email);
      console.log('E-mail de recuperação enviado com sucesso!');
      alert('Verifique seu e-mail para redefinir a senha.');
      setResetProcessState('resetSuccess');
    } catch (error) {
      setResetProcessState('resetError');
      if (error.code === 'auth/user-not-found') {
        console.error('Usuário não encontrado');
        alert('Não existe usuário cadastrado com esse e-mail.');
      } else {
        console.error('Erro desconhecido:', error);
        alert('Ocorreu um erro ao enviar o e-mail de recuperação.');
      }
    }
  }

  useEffect(() => {
    if (email.length >= 5) {
      setEmailPassed(validateEmail(email));
    }
  }, [email]);

  useEffect(() => {
    if (resetProcessState == 'resetError') {
      setTimeout(() => {
        setResetProcessState('');
      }, 3400);
    } else if (resetProcessState == 'resetSucess') {
      setTimeout(() => {
        setResetProcessState('');
      }, 2500);
    }
  }, [resetProcessState, setResetProcessState]);

  return (
    <>
      <div>
        <LabelStyled htmlFor="email">E-mail</LabelStyled>
        <InputStyled
          name="email"
          type="email"
          value={email}
          placeholder="seu@email.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        {invalidEmailWarn && <p>O e-mail digitado é inválido!</p>}
      </div>

      <Button variant="primary" disabled={!emailPassed} onClick={handleClickReset}>
        Enviar e-mail de redefinição
      </Button>

      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          setLoginType(null);
        }}>
        Voltar
      </Button>

      {resetProcessState !== '' && <LoginReturn loginState={resetProcessState} />}
    </>
  );
};

export default ResetSection;

