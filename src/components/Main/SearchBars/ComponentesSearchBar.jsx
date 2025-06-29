import styled, { css } from "styled-components";

export const ContainerForFormStyled = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 2px;
  padding-bottom: 14px;
  position: relative;
  z-index: 2;
  box-sizing: border-box;

  ${(props) =>
    props.$copy === false &&
    css`
      @media screen and (min-width: 769px) {
        padding-top: 13px;
      }
    `}

  ${(props) =>
    props.$copy &&
    css`
      padding-top: 18px;
      position: sticky;
      top: 0px;
      left: 0px;
      display: flex;
      justify-content: center;

      @media screen and (min-width: 769px) {
        justify-content: flex-start;
        padding-left: 24px;
      }
    `}
`;

export const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  position: relative;
  max-width: 1180px;

  ${(props) =>
    props.$copy &&
    css`
      width: 90%;
      max-width: 684px;
      margin: 0;
    `}
`;

export const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  touch-action: auto;
  border-radius: 7px;
  text-indent: 20px;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.71px;
  color: black;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  background-color: white;
  border: none;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.18);

  &:focus {
    outline: none;
    background-color: white;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.03em;
  }
  @media screen and (min-width: 769px) {
    font-size: 1.04em;
  }
`;

export const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  box-sizing: border-box;
  padding-bottom: 2px;
  user-select: none;
  cursor: pointer;
  background-color: #281f42;

  ${(props) =>
    props.$copy === false &&
    css`
      position: absolute;
      bottom: 5px;
      right: 5px;
    `}

  ${(props) =>
    props.$copy === true &&
    css`
      position: absolute;
      bottom: 5px;
      right: 5px;
    `}
`;

export const SpanSearchStyled = styled.span`
  color: white;
  font-size: 1.4em;
  font-weight: 500;
`;

export const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 6px;
  padding: 0px 16px;
  position: absolute;
  bottom: -52px;
  left: 0px;
  z-index: 4;

  @media screen and (max-width: 374px) {
    max-width: 260px;
    bottom: -72px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    max-width: 308px;
    bottom: -72px;
  }
`;

export const PointedShapeStyed = styled.div`
  height: 12px;
  width: 12px;
  background-color: blue;
  rotate: 45deg;
  border: 4px;
  position: absolute;
  top: -6px;
  left: 16px;
`;

export const PMsgStyled = styled.p`
  color: white;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  padding: 12px 0px;

  @media screen and (max-width: 374px) {
    font-size: 1.055em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.11em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.13em;
  }
  @media screen and (min-width: 993px) {
    font-size: 1.15em;
  }
`;

export const CompletionsDivStyled = styled.div`
  width: 90%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 79px;
  ${(props) => props.$copy == false && "top:68px;"}
  left: 5%;
  align-items: center;
  gap: 12px;
  flex-flow: row wrap;
  background-color: white;
  border-radius: 8px;
  background-color: transparent;

  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1201px) {
    left: 7.5%;
  }
`;

export const PStyled = styled.p`
  width: max-content;
  padding: 9px 16px;
  border-radius: 18px;
  text-transform: uppercase;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 600;
  background-color: hsl(255, 35.50%, 19%);
  color: white;

  flex: none;
  cursor: pointer;

  &:hover {
    background-color: #151023;
  }
  @media screen and (max-width: 374px) {
    font-size: 0.86em;
    line-height: 18px;
    letter-spacing: 1.01px;
    padding: 9px 12px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 0.89em;
    line-height: 18px;
    letter-spacing: 1.05px;
    padding: 9px 12px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 0.9em;
    line-height: 19px;
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px) {
    font-size: 0.91em;
    line-height: 20px;
    letter-spacing: 1.06px;
  }
`;
