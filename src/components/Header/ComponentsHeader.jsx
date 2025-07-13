import styled from "styled-components";

const ContainerStyled = styled.div`
  height: 150px;
  width: ${(props) => (props.$external ? "90%" : "max-content")};
  ${(props) => props.$external && "margin: auto;"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  @media (max-width: 375px) {
    gap: 12px;
  }
  @media (min-width: 769px) {
    height: 132px;
    max-width: 340px;
  }
`;

const LogoDivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  transform: scaleX(-1);
  box-sizing: border-box;
  padding-top: 1px;
  box-shadow: 0px 4px 10px -8px rgb(41, 46, 117);
  @media (max-width: 375px) {
    height: 70px;
    width: 0px;
    margin-right: -9px;
    visibility: hidden;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    height: 70px;
    width: 70px;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    height: 73px;
    width: 73px;
  }
  @media (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`;

const SpanLogoStyled = styled.span`
  color: #d00c13;
  font-size: 2.06em;
  font-weight: 600;

  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 2.12em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 2.14em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 2.16em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 2.18em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 2.2em;
  }
`;

const DivPsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PNomeSupStyled = styled.p`
  font-family: "Montserrat", serif;
  font-weight: 700;
  color: #d00c13;

  @media (max-width: 375px) {
    font-size: 1.05em;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    font-size: 1.1em;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.11em;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.12em;
  }
  @media (min-width: 993px) {
    font-size: 1.14em;
  }
`;

const PBemVindoStyled = styled(PNomeSupStyled)`
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #d00c13;

  @media (max-width: 375px) {
    font-size: 1.12em;
  }
  @media (min-width: 375px) and (max-width: 576px) {
    font-size: 1.16em;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.19em;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 1.22em;
  }
  @media (min-width: 993px) {
    font-size: 1.25em;
  }
`;

const SpaceSearchBar = styled.div`
  width: 44px;
  height: 44px;

  @media screen and (max-width: 375px) {
    width: 42px;
    height: 42px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 47px;
    height: 47px;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Divlogo = () => {
  return (
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
  );
};

//botão de mais opções
//div para ajuste de padding
const ContainerOptionsStyled = styled.div`
  z-index: 3;
  @media screen and (min-width: 769px) {
    padding-left: 5px;
  }
`;

const DivMoreOptionsStyled = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  background-color: #292e4e;
  transition: all 100ms linear;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 45px;
    right: 5%;
  }
  @media screen and (max-width: 375px) {
    top: 45px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    top: 44px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    top: 44px;
  }
  @media screen and (min-width: 769px) {
    position: relative;
  }

  @media screen and (min-width: 1201px) {
    width: max-content;
    padding: 0px 16px;
    gap: 4px;
  }
`;

const PStyled = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  letter-spacing: 0.8px;
  margin: 0px;
  @media (max-width: 1201px) {
    display: none;
  }
  user-select: none;
  cursor: pointer;
`;

const SpanStyled = styled.span`
  font-size: 1.45em;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.6em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.65em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.7em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.45em;
    padding-right: 4px;
  }
`;

export const MoreOptionsButton = ({ setViewOptions, viewOptions }) => {
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
  );
};
