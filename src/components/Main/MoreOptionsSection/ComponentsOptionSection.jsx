import styled, { css } from "styled-components";

export const BodyStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 577px) {
    padding-top: 8px;
  }
`;

export const WrapperStyled = styled.div`
  width: calc(100% - 30px);
  max-width: 470px;
  padding: 35px 36px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 4px -3px rgba(41, 46, 117, 0.6),
    3px 0px 3px -1.5px rgba(41, 46, 117, 0.12),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.12);
  position: relative;
  z-index: 1;

  @media screen and (max-width: 450px) {
    padding: 30px 31px;
    padding-bottom: 36px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    box-sizing: border-box;
    border-radius: 0px;
  }
  @media screen and (min-width: 577px) {
    margin-bottom: 24px;
  }
`;

export const NavOptionsStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 12px;
  margin-bottom: 28px;

  @media screen and (max-width: 430px) {
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
  background-color: #dbfff4;

  ${(props) =>
    props.$buttonSelected &&
    css`
      background-color: #342654;
      color: white;
    `}

  cursor: pointer;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (min-width: 430px) {
    max-width: 48%;
  }
  @media screen and (min-width: 577px) {
    padding-left: 8px;
  }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
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
  color: ${(props) => (props.$buttonSelected ? "white" : "#3f0404")};
  font-size: ${(props) => (props.$buttonSelected ? "1.6em" : "1.5em")};
  font-weight: 300;
  font-variation-settings: "FILL" 1;
`;

export const DivContentStyled = styled.div``;

export const PStyled = styled.p`
  width: 100%;
  max-width: 400px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 10px;
  @media screen and (max-width: 374px) {
    font-size: 1.13em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.11em;
    line-height: 1.4em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.13em;
    line-height: 1.405em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.135em;
    line-height: 1.39em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.138em;
    line-height: 1.415em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.14em;
    line-height: 1.42em;
  }
  ${(props) => props.$mb && "margin-bottom: 13px;"};
  ${(props) => props.$moreWidth && "max-width: 100%;"};
`;

export const PButtonStyled = styled(PStyled)`
  min-width: 100%;
  height: max-content;
  padding: 6px 14px;
  background-color: #dbfff4;
  margin-bottom: 0px;
  border-radius: 5px;
  letter-spacing: 0.7px;
  user-select: none;
  cursor: pointer;
  flex: auto;
  box-sizing: border-box;

  ${(props) =>
    props.$buttonSelected &&
    css`
      background-color: #342654;
      color: white;
      box-shadow: none;
    `}
`;

export const H1Styled = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (max-width: 374px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.55em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.57em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.585em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.6em;
  }
`;

export const H2Styled = styled.h2`
  font-size: 1.1em;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  margin-bottom: 15px;

  @media screen and (max-width: 374px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.32em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.33em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.34em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.345em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.35em;
  }
`;
