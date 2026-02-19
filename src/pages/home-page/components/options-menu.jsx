import { UserDataContext } from '@contexts/UserDataContext';
import { ContainerSc } from '@pages/home-page/ui/more-options-menu/container';
import { Button, Icon, MuiIcon, Separator } from '@ui/index';
import { getAuth, signOut } from 'firebase/auth';
import { X } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { TbReceiptFilled } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const links = [
  { p: 'Minha conta', icon: MdAccountCircle , navigateTo: '/minha-conta' },
  { p: 'Meus pedidos', icon: TbReceiptFilled, navigateTo: '/meus-pedidos' },
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
      navigate(links[index].navigateTo);
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
    <ContainerSc onPointerDown={handleClickClose} $transform={transform}>
      <div id="side-div">
        <div id="options-header">
          <h4>Mais Opções</h4>
          <Button onPointerDown={handleClickClose} size="icon-sm">
            <Icon Icon={X} size="3xl" strokeWidth={"thin"} />
          </Button>
        </div>
        <div id="options-content">
          {links.map((content, index) => (
            <Button
              key={index}
              wFull
              variant="transparent"
              size="lg"
              onPointerDown={(e) => {
                e.stopPropagation();
                handleOpenContent(e, index, content.p);
              }}>
              <Icon Icon={content.icon} size="h5" filledIcon marginValue='0 0 2px 0' />
              {content.p}
            </Button>
          ))}
          <div>
            <Separator />
            <Button
              wFull
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
    </ContainerSc>
  );
};

export default OptionsMenu;
