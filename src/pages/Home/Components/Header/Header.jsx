import {
  HeaderStyled,
  DivForLogoStyled,
  LogoDivStyled,
  DivPsStyled,
  SpaceButtonStyed,
  ButtonMoreOptionsStyled,
} from "./StylizedTags";
import SearchBar from "@components/SearchBar/SearchBar";
import { VisibilityContext } from "@contexts/VisibilityContext";
import { useContext } from "react";

const Header = ({ setViewOptions }) => {
  function handleClick(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setViewOptions(true);
  }
  const {supermarketName} = useContext(VisibilityContext);
  
  return (
    <HeaderStyled>
      <DivForLogoStyled $external={true}>
        <DivForLogoStyled>
          <LogoDivStyled>
            <span className="material-symbols-rounded">handshake</span>
          </LogoDivStyled>
          <DivPsStyled>
            <p>{supermarketName}</p>
            <p> Seja bem-vindo!</p>
          </DivPsStyled>
        </DivForLogoStyled>
        <SpaceButtonStyed />
      </DivForLogoStyled>

      <SearchBar copy={false} onHome={true}/>

      <ButtonMoreOptionsStyled onPointerDown={handleClick}>
        <span className="material-symbols-rounded">menu</span>
        <p>Mais opções</p>
      </ButtonMoreOptionsStyled>
    </HeaderStyled>
  );
};

export default Header;

