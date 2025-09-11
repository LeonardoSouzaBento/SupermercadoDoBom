import {
  HeaderStyled,
  DivForLogoStyled,
  LogoDivStyled,
  DivPsStyled,
  SpaceButtonStyed,
  ButtonMoreOptionsStyled,
} from "./StylizedTags";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { HeartHandshake } from "lucide-react";

const Header = ({ setViewOptions, onHome }) => {
  function handleClick(e) {
    e.stopPropagation();
    if (e.button === 2) {
      return;
    }
    setViewOptions(true);
  }

  return (
    <HeaderStyled>
      <DivForLogoStyled $external={true}>
        <DivForLogoStyled>
          <LogoDivStyled>
            <HeartHandshake color="white" size={38} strokeWidth={2.55}/>
          </LogoDivStyled>
          <DivPsStyled>
            <p>SUPERMERCADO UNIÃO</p>
            <p> Seja bem-vindo!</p>
          </DivPsStyled>
        </DivForLogoStyled>
        <SpaceButtonStyed />
      </DivForLogoStyled>

      <SearchBar copy={false} onHome={onHome}></SearchBar>

      <ButtonMoreOptionsStyled onPointerDown={handleClick}>
        <span className="material-symbols-rounded">menu</span>
        <p>Mais opções</p>
      </ButtonMoreOptionsStyled>
    </HeaderStyled>
  );
};

export default Header;
