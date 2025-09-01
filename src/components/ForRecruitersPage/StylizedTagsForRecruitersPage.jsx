import styled from "styled-components";

export const BodyStyled = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 0;
  padding-bottom: 8px;
  box-sizing: border-box;

  @media screen and (max-width: 470px) {
    padding: 0;
  }
  @media screen and (min-width: 577px) {
    padding-bottom: 0px;
  }
`;

export const WrapperStyled = styled.div`
  width: 100%;
  max-width: 470px;
  height: 88vh;
  overflow-y: scroll;
  padding: 36px;
  padding-bottom: 37px;
  border-radius: 12px;
  background-color: white;
    box-shadow: 0px 3px 3px -1.2px rgba(41, 46, 117, 0.5),
    3px 0px 3px -2px rgba(41, 46, 117, 0.13),
    -3px 0px 3px -2px rgba(41, 46, 117, 0.13);
  position: relative;
  z-index: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media screen and (max-width: 577px) {
    height: auto;
    overflow-y: visible;
    box-sizing: border-box;
  }
  @media screen and (max-width: 470px) {
    border-radius: 0px;
  }
  @media screen and (min-width: 577px) {
    padding-top: 24px;
  }
  @media screen and (max-width: 470px) {
    border-radius: 0px;
  }

  &::-webkit-scrollbar {
    display: none;
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
  color: white;
  background-color: var(--purple);
  ${(props) => props.$buttonSelected && "background-color: #d5343a;"};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 480px) {
    max-width: 48%;
  }
`;

export const POptionStyled = styled.p`
  font-family: var(--bt-font);
  font-weight: 550;
  cursor: pointer;
  user-select: none;
  scale: 1.02;

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
  color: white;
  font-size: ${(props) => (props.$buttonSelected ? "1.45em" : "1.38em")};
  font-weight: 500;
  font-variation-settings: "FILL" 1;
  user-select: none;
`;

export const DivContentStyled = styled.div``;

export const PStyled = styled.p`
  width: 100%;
  max-width: 400px;
  font-family: var(--p-font);
  font-weight: 400;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 1.27;

  @media screen and (max-width: 375px) {
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
  font-family: var(--h-font);
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 375px) {
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
  font-family: var(--h-font);
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 375px) {
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
