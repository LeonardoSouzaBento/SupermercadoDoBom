import {
  HeaderStyled,
  BrandContainerStyled,
  ButtonMoreOptionsStyled,
} from '@/pages/Home/ui/header/index';
import SearchBar from '@components/SearchBar/SearchBar';
import { VisibilityContext } from '@contexts/VisibilityContext';
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

      <ButtonMoreOptionsStyled onPointerDown={handleClick}>
        <span className="material-symbols-rounded">menu</span>
        <p>Mais opções</p>
      </ButtonMoreOptionsStyled>
    </HeaderStyled>
  );
};

export default Header;
