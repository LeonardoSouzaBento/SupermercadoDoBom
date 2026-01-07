import { HeaderStyled } from '@/pages/Home/ui/header';
import SearchBar from '@components/SearchBar';
import { VisibilityContext } from '@contexts/VisibilityContext';
import Button from '@ui/button';
import { Icon } from '@ui/icon';
import { HeartHandshake, Menu } from 'lucide-react';
import { useContext } from 'react';

const Header = ({ setViewOptions }) => {
  function handleClick(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setViewOptions(true);
  }
  const { supermarketName } = useContext(VisibilityContext);

  return (
    <HeaderStyled>
      <div id="logo-name">
        <div>
          <div id="logo">
            <Icon icon={<HeartHandshake />} size="h3" />
          </div>
          <div id="nome">
            <h1>{supermarketName}</h1>
            <p> Seja bem-vindo!</p>
          </div>
        </div>
      </div>

      <SearchBar copy={false} onHome={true} />

      <Button onPointerDown={handleClick}>
        <Icon icon={<Menu />} size="lg" />
        <p>Mais opções</p>
      </Button>
    </HeaderStyled>
  );
};

export default Header;
