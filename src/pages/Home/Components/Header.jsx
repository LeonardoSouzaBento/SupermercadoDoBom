import { BrandContainerStyled, HeaderStyled } from '@/pages/Home/ui/header/index';
import { mdIcon } from '@/styles/lucideIcons';
import SearchBar from '@components/SearchBar';
import { VisibilityContext } from '@contexts/VisibilityContext';
import { Menu } from 'lucide-react';
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
      <BrandContainerStyled>
        <div>
          <div>
            <span className="material-symbols-rounded">handshake</span>
          </div>
          <div>
            <h1>{supermarketName}</h1>
            <p> Seja bem-vindo!</p>
          </div>
        </div>
        <div />
      </BrandContainerStyled>

      <SearchBar copy={false} onHome={true} />

      <button onPointerDown={handleClick}>
        <Menu {...mdIcon} />
        <p>Mais opções</p>
      </button>
    </HeaderStyled>
  );
};

export default Header;
