import { UserDataContext } from '@contexts/UserDataContext';
import { Button } from '@ui/button';
import { signInWithCustomToken } from 'firebase/auth';
import { useContext } from 'react';
import { auth } from '@/main';
import styled from 'styled-components';

const VisitorBoxStyled = styled.div`
  text-align: center;
  padding: 8px;
  background: var(--background);
  border-radius: 12px;
  margin-bottom: 16px;

  & p {
    color: var(--red-brand-hover);
    scale: 0.95;
    text-align: left;
  }
`;

const VisitorSection = ({ setLoginType, setLoginSucess, setLoginState }) => {
  const { setIdToken } = useContext(UserDataContext);

  async function handleAnonymousLogin() {
    setLoginState('pending');
    try {
      const response = await fetch(
        'https://us-central1-api-supermercado-do-bom.cloudfunctions.net/api/auth-login-anonymous',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        setLoginState('error');
        throw new Error('Erro no login anônimo');
      }

      const { token } = await response.json();
      const userCredential = await signInWithCustomToken(auth, token);
      const idToken = await userCredential.user.getIdToken();

      setIdToken(idToken);
      setLoginSucess();
      console.log('Login bem-sucedido!');
    } catch (error) {
      setLoginState('error');
      console.error(error);
    }
  }

  return (
    <>
      <VisitorBoxStyled>
        <p>
          <strong>Comunicado: </strong>
          para registrar sua compra será necessário criar uma conta.
        </p>
      </VisitorBoxStyled>

      <Button variant="primary" onClick={handleAnonymousLogin}>
        Continuar
      </Button>
      <Button
        type="button"
        variant="ghost"
        onClick={() => {
          setLoginType(null);
        }}>
        Voltar
      </Button>
    </>
  );
};

export default VisitorSection;

