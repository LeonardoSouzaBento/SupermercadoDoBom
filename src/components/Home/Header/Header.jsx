import {
  HeaderStyled,
  ContainerStyled,
  LogoDivStyled,
  SpanLogoStyled,
  DivPsStyled,
  PNomeSupStyled,
  PBemVindoStyled,
  SpaceSearchBar,
  ContainerOptionsStyled,
  DivMoreOptionsStyled,
  SpanStyled,
  PStyled,
} from "./StylizedTagsHeader";
import SearchBar from "../../SearchBar/SearchBar";

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
      <ContainerStyled $external={true}>
        <ContainerStyled>
          <LogoDivStyled>
            <SpanLogoStyled className="material-symbols-rounded">
              handshake
            </SpanLogoStyled>
          </LogoDivStyled>
          <DivPsStyled>
            <PNomeSupStyled>SUPERMERCADO UNIÃO</PNomeSupStyled>
            <PBemVindoStyled> Seja bem vindo!</PBemVindoStyled>
          </DivPsStyled>
        </ContainerStyled>
        <SpaceSearchBar />
      </ContainerStyled>

      <SearchBar copy={false} onHome={onHome}></SearchBar>

      <ContainerOptionsStyled>
        <DivMoreOptionsStyled
          onPointerDown={handleClick}
        >
          <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
          <PStyled>Mais opções</PStyled>
        </DivMoreOptionsStyled>
      </ContainerOptionsStyled>
    </HeaderStyled>
  );
};

export default Header;
