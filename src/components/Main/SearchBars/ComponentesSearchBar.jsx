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
      padding-bottom: 24px;
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
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  box-shadow: -5px 5px 10px -9.2px rgb(41, 46, 117);
  border: none;
  
  ${(props) =>
    props.$copy &&
    css`
      width: 95%;
      max-width: 684px;
      margin: 0;
      box-shadow: 0px 3px 7px rgba(41, 46, 117, 0.28);
    `}
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding-bottom: 2px;
  touch-action: auto;
  text-indent: 10px;
  font-weight: 400;
  letter-spacing: 0.71px;
  color: black;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  border: none;

  &:focus {
    outline: none;
    background-color: white;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.01em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.04em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.07em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.08em;
  }
`;

export const DivSpanStyled = styled.div`
  height: 100%;
  width: 40px;
  padding-bottom: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0px;
  user-select: none;
  cursor: pointer;
  background-color: #383D6A;
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
  background-color: #281f42;
  color: white;
  flex: none;
  cursor: pointer;

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
