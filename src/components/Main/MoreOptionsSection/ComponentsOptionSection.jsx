import styled, { css } from "styled-components";

export const BodyStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  background-color: rgba(0, 0, 0, 0.58);

  @media screen and (min-width: 320px) and (max-width: 576px) {
    padding-top: 0px;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
    opacity: 0.8;

    @media screen and (min-width: 320px) and (max-width: 576px) {
      background-color: rgb(172, 172, 172);
      mix-blend-mode: normal;
      padding-top: 0px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px) {
      background: url(screenshot-backgrounds/background577.jpeg);
      background-size: 100%, auto;
    }
    @media screen and (min-width: 769px) and (max-width: 992px) {
      background: url(screenshot-backgrounds/background769.jpeg);
      background-size: 100%, auto;
    }
    @media screen and (min-width: 993px) and (max-width: 1200px) {
      background: url(screenshot-backgrounds/background993.jpeg);
      background-size: 100%, auto;
    }
    @media screen and (min-width: 1201px) {
      background: url(screenshot-backgrounds/background1200.jpeg);
      background-size: 100%, auto;
    }
  }
`;

export const WrapperStyled = styled.div`
  width: 80%;
  max-width: 700px;
  padding: 30px 28px;
  padding-top: 24px;
  padding-bottom: 36px;
  border-radius: 8px;
  background-color: rgb(237, 237, 237);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.43);
  margin-bottom: 24px;
  position: relative;
  z-index: 1;

  @media screen and (min-width: 320px) and (max-width: 576px) {
    width: 100%;
    box-sizing: border-box;
    border-radius: 0px;
  }
  @media screen and (max-width: 577px) {
    padding: 24px 20px;
    padding-bottom: 28px;
  }
`;

export const NavOptionsStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 320px) and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const DivNameSpanStyled = styled.div`
  height: 40px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 5px;
  flex: 1 0 auto;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(182, 182, 182);

  background-color: ${(props) =>
    props.$buttonSelected ? "#D1CDEB" : "rgb(255, 255, 255)"};
  ${(props) => props.$buttonSelected && "border: 2px solid rgb(0, 24, 177);"};
  ${(props) => props.$buttonSelected && "box-shadow: none;"};
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (min-width: 430px) and (max-width: 671px) {
    max-width: 50%;
  }
  @media screen and (min-width: 577px) {
    padding-left: 8px;
  }
`;

export const DivNameSpanFalseStyled = styled.div`
  visibility: hidden;
  height: 40px;
  min-width: calc(50% - 14px);

  @media screen and (max-width: 426px) {
    display: none;
  }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 500;
  padding-right: 19px;
  cursor: pointer;
  user-select: none;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.065em;
  }
`;

export const DivSpanStyled = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanStyled = styled.span`
  font-size: ${(props) => (props.$buttonSelected ? "1.7em" : "1.5em")};
  font-weight: 300;
  font-variation-settings: "FILL" 1;
`;

export const DivContentStyled = styled.div``;

export const PStyled = styled.p`
  max-width: max-content;
  font-family: "Roboto";
  font-weight: 400;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.13em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.13em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.15em;
    line-height: 1.405em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.155em;
    line-height: 1.41em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.158em;
    line-height: 1.415em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.16em;
    line-height: 1.42em;
  }
  //destacar tecnologias
  ${(props) => props.$monospace && 'font-family: "Roboto Mono", monospace;'}
  ${(props) =>
    props.$monospace &&
    css`
      color: rgb(7, 0, 106);
      @media screen and (min-width: 320px) and (max-width: 374px) {
        font-size: 1.12em;
      }
      @media screen and (min-width: 375px) and (max-width: 576px) {
        font-size: 1.11em;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        font-size: 1.12em;
      }
      @media screen and (min-width: 769px) and (max-width: 992px) {
        font-size: 1.13em;
      }
      @media screen and (min-width: 993px) and (max-width: 1200px) {
        font-size: 1.14em;
      }
      @media screen and (min-width: 1201px) {
        font-size: 1.15em;
      }
      ${(props) => props.$mb && "margin-bottom: 20px;"}
    `}
`;

export const PButtonStyled = styled(PStyled)`
  max-width: 350px;
  height: max-content;
  padding: 5px 16px;
  background-color: rgb(216, 216, 216);
  border: 1px solid rgb(155, 155, 155);
  margin-bottom: 0px;
  border-radius: 4px;
  letter-spacing: 0.7px;
  user-select: none;
  cursor: pointer;
  flex: auto;
  box-sizing: border-box;

  @media screen and (max-width: 740px) {
    min-width: 100%;
    ${(props) => props.$variant && "min-width: max-content;"}
  }
  ${(props) =>
    props.$buttonSelected &&
    css`
      background-color: rgb(209, 205, 235);
      border: 1px solid rgb(0, 24, 177);
    `}

  ${(props) =>
    props.$variant &&
    css`
      max-width: max-content;
      padding: 2px 12px;
      flex: none;
      color: black;
    `}
`;

export const H1Styled = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  margin-bottom: 20px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.75em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.8em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.85em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.9em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 2em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 2.05em;
  }
`;

export const H2Styled = styled.h2`
  font-size: 1.1em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-bottom: 12px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.25em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.35em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.4em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.45em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.5em;
  }
`;
