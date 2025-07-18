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
} from "./ComponentsHeader";
import SearchBar from "../../SearchBar/SearchBar";
import Options from "./Options";

const Header = ({ viewOptions, setViewOptions, setOpacityState, onHome }) => {
  function handleClick(e) {
    if (e.button === 2) {
      return;
    }
    if (viewOptions === false) {
      setViewOptions(true);
    } else {
      setViewOptions(false);
    }
  }

  return (
    <HeaderStyled>
      <ContainerStyled $external={true}>
        <ContainerStyled>
          <LogoDivStyled>
            <SpanLogoStyled className="material-symbols-outlined">
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
          data-ignore-click
          onPointerDown={handleClick}
          onMouseEnter={() => {
            setViewOptions(true);
          }}
        >
          <SpanStyled className="material-symbols-rounded">menu</SpanStyled>
          <PStyled>Mais opções</PStyled>
        </DivMoreOptionsStyled>
      </ContainerOptionsStyled>

      {viewOptions && <Options setOpacityState={setOpacityState} />}
    </HeaderStyled>
  );
};

export default Header;
