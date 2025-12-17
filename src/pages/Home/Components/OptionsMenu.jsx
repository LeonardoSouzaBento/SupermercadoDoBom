import { UserDataContext } from '@contexts/UserDataContext';
import { DivSpanCloseStyled, SpanCloseStyled } from '@pages/MyAccount/RegisterAddress/StylizedTags';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ContainerStyled,
  DivNameSpanStyled,
  DivSpanStyled
} from '@/pages/Home/ui/more-options-menu/container';

const contents = [
  { p: 'Minha conta', icon: 'person_edit', navigateTo: '/minha-conta' },
  { p: 'Meus pedidos', icon: 'local_mall', navigateTo: '/meus-pedidos' },
  { p: 'Sair do site', icon: 'logout' },
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
      <div>
        <div>
          <h3>Mais Opções</h3>
          <DivSpanCloseStyled onPointerDown={handleClickClose} $moreOptions={true}>
            <SpanCloseStyled className="material-symbols-rounded">close</SpanCloseStyled>
          </DivSpanCloseStyled>
        </div>
        {contents.map((content, index) => (
          <DivNameSpanStyled
            key={index}
            onPointerDown={(e) => {
              e.stopPropagation();
              handleOpenContent(e, index, content.p);
            }}
            $logout={content.p == 'Sair do site'}>
            <DivSpanStyled $logout={content.p == 'Sair do site'}>
              <span className="material-symbols-rounded">{content.icon}</span>
            </DivSpanStyled>
            <p>{content.p}</p>
          </DivNameSpanStyled>
        ))}
      </div>
    </ContainerStyled>
  );
};

export default OptionsMenu;
