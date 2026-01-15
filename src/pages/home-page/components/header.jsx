import { HeaderStyled } from '@pages/home-page/ui/header';
import SearchBar from '@components/search-bar';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { Button } from '@ui/button';
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
    <div style={{ backgroundColor: 'var(--primary)' }}>
      <HeaderStyled>
        <div id="logo-name">
          <div id="logo">
            <Icon LucideIcon={HeartHandshake} size="3.4rem" strokeValue={2.5} />
          </div>
          <div id="nome">
            <h1>{supermarketName}</h1>
            <p>Compre com comodidade, compre online</p>
          </div>
        </div>
        <SearchBar onHome={true} />
        <Button onPointerDown={handleClick} variant="red" size="icon">
          <Icon LucideIcon={Menu} size="h5" />
          <p>Mais opções</p>
        </Button>
      </HeaderStyled>
    </div>
  );
};

export default Header;
