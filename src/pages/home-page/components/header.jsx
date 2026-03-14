import { useVisibilityContext } from '@/contexts';
import SearchBar from '@components/search-bar';
import { HeaderSc } from '@pages/home-page/ui/header';
import { Button } from '@ui/button';
import { Icon } from '@ui/icon';
import { HeartHandshake, Menu } from 'lucide-react';

const Header = ({ setViewOptions }) => {
  function handleClick(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setViewOptions(true);
  }
  const { supermarketName } = useVisibilityContext ();

  return (
    <div style={{ backgroundColor: 'var(--primary)' }}>
      <HeaderSc>
        <div id="logo-name">
          <div id="logo">
            <Icon Icon={HeartHandshake} size="34px" strokeWidth={2.5} />
          </div>
          <div id="nome">
            <h1>{supermarketName}</h1>
            <p>Compre com comodidade, compre online</p>
          </div>
        </div>
        <SearchBar onHome={true} copy={false} />
        <Button onPointerDown={handleClick} variant="red" size="icon">
          <Icon Icon={Menu} size="h5" />
          <p>Mais opções</p>
        </Button>
      </HeaderSc>
    </div>
  );
};

export default Header;
