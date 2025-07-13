import styled, { css } from "styled-components";

export const BodyStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 0px;
  padding-bottom: 24px;

  @media screen and (max-width: 375px) {
    padding: 10px 0px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    padding: 12px 0px;
    padding-bottom: 22px;
  }
`;

export const WrapperStyled = styled.div`
  width: calc(100% - 30px);
  max-width: 470px;
  padding: 36px;
  padding-bottom: 40px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0px 4px 4px -2.5px rgba(41, 46, 117, 0.53),
    3px 0px 3px -1.5px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  position: relative;
  z-index: 1;

  @media screen and (max-width: 375px) {
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    width: calc(100% - 24px);
  }
  @media screen and (max-width: 576px) {
    box-sizing: border-box;
  }
`;

export const NavOptionsStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 12px;
  margin-bottom: 32px;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const DivNameSpanStyled = styled.div`
  height: 48px;
  width: max-content;
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  flex: 1 0 auto;
  background-color: #dbfff4;

  ${(props) =>
    props.$buttonSelected &&
    css`
      background-color: #383d6a;
      color: white;
    `}

  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 480px) {
    max-width: 48%;
  }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: 600;
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
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanStyled = styled.span`
  color: ${(props) => (props.$buttonSelected ? "white" : "#3f0404")};
  font-size: ${(props) => (props.$buttonSelected ? "1.5em" : "1.4em")};
  font-weight: 400;
  font-variation-settings: "FILL" 1;
  user-select: none;
`;

export const DivContentStyled = styled.div``;

export const PStyled = styled.p`
  width: 100%;
  max-width: 400px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 1.27;

  @media screen and (max-width: 374px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.11em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.135em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.138em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.14em;
  }
  ${(props) => props.$mb && "margin-bottom: 13px;"};
  ${(props) => props.$moreWidth && "max-width: 100%;"};
`;

export const H1Styled = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
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
  font-weight: 500;
  margin-bottom: 16px;

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
