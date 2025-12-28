import { UserDataContext } from '@contexts/UserDataContext';
import { VisibilityContext } from '@contexts/VisibilityContext';
import Button from '@ui/button';
import { HeartHandshake, Mail, User } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ButtonLoginGoogle,
  EmailForm,
  LoginReturn,
  ResetSection,
  VisitorSection,
} from '@/pages/LoginPage/components/index';
import { CardStyled } from '@/pages/LoginPage/StylizedTags';
import { ContainerStyled } from '@/pages/LoginPage/ui/index';

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
    <ContainerStyled style={loginType == 'email' ? { padding: '12px 0' } : {}}>
      <div>
        {/* Logo */}
        <div id="header">
          <div id="logo">
            <HeartHandshake size={32} color="var(--primary-foreground)" strokeWidth={2.4} />
          </div>

          <div id="title">
            <h1>{supermarketName}</h1>
            <p>Compre com comodidade e praticidade</p>
          </div>
        </div>

        <CardStyled $inEmail={loginType === 'email'}>
          {loginState !== '' && <LoginReturn loginState={loginState} />}
          <div>
            <h3>{loginTexts[currentLoginType].title}</h3>

            <p>{loginTexts[currentLoginType].description}</p>
          </div>

          {/* Opções iniciais */}
          {loginType === null && (
            <>
              <ButtonLoginGoogle setLoginState={setLoginState} setLoginSucess={setLoginSucess} />

              {!onMyAccount && (
                <Button variant="outline" onClick={() => setLoginType('visitor')}>
                  <User size={20} /> Continuar como Visitante
                </Button>
              )}

              <Button variant="outline" onClick={() => setLoginType('email')}>
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
        </CardStyled>

        <div>
          <p>
            Ao continuar, você concorda com nossos <a href="#">Termos de Uso</a> e{' '}
            <a href="#">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </ContainerStyled>
  );
};

export default LoginPage;
