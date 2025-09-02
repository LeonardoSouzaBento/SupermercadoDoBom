import {
  HeaderStyled,
  DivForLogoStyled,
  LogoDivStyled,
  SpanLogoStyled,
  DivPsStyled,
  PNomeSupStyled,
  PBemVindoStyled,
  SpaceSearchBar,
  DivMoreOptionsStyled,
  SpanStyled,
  PStyled,
} from "./StylizedTags";
import SearchBar from "../../../components/SearchBar/SearchBar";

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
            <SpanLogoStyled className="material-symbols-outlined">
              handshake
            </SpanLogoStyled>
          </LogoDivStyled>
          <DivPsStyled>
            <PNomeSupStyled>SUPERMERCADO UNIÃO</PNomeSupStyled>
            <PBemVindoStyled> Seja bem vindo!</PBemVindoStyled>
          </DivPsStyled>
        </DivForLogoStyled>
        <SpaceSearchBar />
      </DivForLogoStyled>

      <SearchBar copy={false} onHome={onHome}></SearchBar>

      <DivMoreOptionsStyled onPointerDown={handleClick}>
        <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
        <PStyled>Mais opções</PStyled>
      </DivMoreOptionsStyled>
    </HeaderStyled>
  );
};

export default Header;
