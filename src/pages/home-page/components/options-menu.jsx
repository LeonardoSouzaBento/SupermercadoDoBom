import { ContainerStyled } from '@pages/home-page/ui/more-options-menu/container';
import { UserDataContext } from '@contexts/UserDataContext';
import { Button, MuiIcon, Separator, WrapperButtons } from '@ui/index';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

const contents = [
  { p: 'Minha conta', icon: 'person_edit', navigateTo: '/minha-conta' },
  { p: 'Meus pedidos', icon: 'local_mall', navigateTo: '/meus-pedidos' },
];

const OptionsMenu = ({ setViewOptions, idToken }) => {
  const [transform, setTransform] = useState('100%');
  const [canClick, setCanClick] = useState(false);
  const navigate = useNavigate();
  const { setUserDisconnected } = useContext(UserDataContext);

  function handleClickClose(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setTransform('100%');
    setTimeout(() => {
      setViewOptions(false);
    }, 450);
  }

  async function handleLogout() {
    if (idToken) {
      try {
        const auth = getAuth();
        await signOut(auth);
        localStorage.clear();
        sessionStorage.clear();
        setUserDisconnected(true);
        window.location.reload();
      } catch (error) {
        console.error('Erro ao deslogar:', error);
      }
    }
  }

  function handleOpenContent(e, index, p) {
    if (e.button === 2) {
      return;
    }
    if (p !== 'Sair do site' && canClick) {
      navigate(contents[index].navigateTo);
    } else {
      handleLogout();
    }
  }

  useEffect(() => {
    return () => {
      setTransform('0%');
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTransform('0%');
    }, 200);
    setTimeout(() => {
      setCanClick(true);
    }, 400);
  }, []);

  return (
    <ContainerStyled onPointerDown={handleClickClose} $transform={transform}>
      <div id="side-div">
        <div id="options-header">
          <h4>Mais Opções</h4>
          <Button onPointerDown={handleClickClose} size="icon-sm">
            <MuiIcon icon="close" size="3xl" weight={400} />
          </Button>
        </div>
        <div id="options-content">
          {contents.map((content, index) => (
            <Button
              key={index}
              fullWidth={true}
              variant="transparent"
              size="lg"
              onPointerDown={(e) => {
                e.stopPropagation();
                handleOpenContent(e, index, content.p);
              }}>
              <MuiIcon icon={content.icon} size="xl" fill={1} />
              {content.p}
            </Button>
          ))}
          <div>
            <Separator />
            <Button
              fullWidth={true}
              variant="transparent"
              size="lg"
              onPointerDown={(e) => {
                e.stopPropagation();
                handleLogout();
              }}>
              <MuiIcon icon="logout" size="2xl" />
              Sair do site
            </Button>
          </div>
        </div>
      </div>
    </ContainerStyled>
  );
};

export default OptionsMenu;

