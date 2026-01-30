import { UserDataContext } from '@contexts/UserDataContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import {
  ButtonLoginGoogle,
  EmailForm,
  LoginReturn,
  ResetSection,
  VisitorSection,
} from '@pages/login-page/components/index';
import { ContainerSc } from '@pages/login-page/ui/index';
import { Button } from '@ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@ui/index';
import { HeartHandshake, Mail, User } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

const LoginPage = () => {
  const [loginType, setLoginType] = useState(null);
  const [loginState, setLoginState] = useState('');
  const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
  const { onMyAccount, supermarketName } = useContext(VisibilityContext);
  const { setUserDisconnected } = useContext(UserDataContext);
  const navigate = useNavigate();
  const loginTexts = {
    null: {
      title: 'Como quer continuar?',
      description: 'Escolha uma opção de login',
    },
    email: {
      title: 'Login com Email',
      description: 'Digite suas credenciais',
    },
    visitor: {
      title: 'Acesso como visitante',
      description: 'Navegue sem e-mail',
    },
    resetPassword: {
      title: 'Registrar nova senha',
      description: 'Digite seu e-mail',
    },
  };
  const currentLoginType = loginType || 'null';

  const emailWrapperRef = useRef(null);

  function setLoginSucess() {
    setHasSuccessMessage(true);
    setLoginState('completed');
  }

  useEffect(() => {
    if (loginState === 'error' && !hasSuccessMessage) {
      setTimeout(() => {
        setLoginState('');
      }, 4200);
    }
    if (loginState === 'completed') {
      setUserDisconnected(false);
      setTimeout(() => {
        navigate('/');
      }, 1800);
    }
  }, [loginState, hasSuccessMessage, setUserDisconnected]);

  useEffect(() => {
    if (loginType === 'email' && emailWrapperRef.current) {
      setTimeout(() => {
        emailWrapperRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // faz o topo do elemento alinhar com o topo da tela
        });
      }, 400);
    }
  }, [loginType]);

  return (
    <ContainerSc style={loginType == 'email' ? { padding: '12px 0' } : {}}>
      <div>
        {/* Logo */}
        <div id="header">
          <div id="logo">
            <HeartHandshake size={32} color="rgba(255, 255, 255, 0.97)" strokeWidth={2.5} />
          </div>

          <div id="title">
            <h1>{supermarketName}</h1>
            <p>Compre com comodidade e praticidade</p>
          </div>
        </div>

        <Card
          styles={css`
            padding-top: 24px;
            padding-bottom: 36px;
            box-shadow: var(--shadow-lg);
          `}>
          {loginState !== '' && <LoginReturn loginState={loginState} />}
          <CardHeader>
            <CardTitle>
              <h3>{loginTexts[currentLoginType].title}</h3>
            </CardTitle>
            <CardDescription>
              <p>{loginTexts[currentLoginType].description}</p>
            </CardDescription>
          </CardHeader>

          {/* Opções iniciais */}
          {loginType === null && (
            <>
              <ButtonLoginGoogle setLoginState={setLoginState} setLoginSucess={setLoginSucess} />

              {!onMyAccount && (
                <Button variant="outline" onClick={() => setLoginType('visitor')} wFull>
                  <User size={20} /> Continuar como Visitante
                </Button>
              )}

              <Button variant="outline" onClick={() => setLoginType('email')} wFull>
                <Mail size={20} /> Login com Email
              </Button>
            </>
          )}

          {loginType === 'email' && (
            <EmailForm
              setLoginType={setLoginType}
              setLoginSucess={setLoginSucess}
              setLoginState={setLoginState}
              emailWrapperRef={emailWrapperRef}
            />
          )}

          {loginType === 'visitor' && (
            <VisitorSection
              setLoginType={setLoginType}
              setLoginSucess={setLoginSucess}
              setLoginState={setLoginState}
            />
          )}

          {loginType === 'resetPassword' && <ResetSection setLoginType={setLoginType} />}
        </Card>

        <div>
          <p>
            Ao continuar, você concorda com nossos <a href="#">Termos de Uso</a> e{' '}
            <a href="#">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </ContainerSc>
  );
};

export default LoginPage;
