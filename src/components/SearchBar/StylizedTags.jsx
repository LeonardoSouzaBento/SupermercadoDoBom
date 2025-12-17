import styled, { css } from "styled-components";
import { CentralizeDiv } from "../GenericStylizedTags";

export const ContainerForFormStyled = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 2px;
  padding-bottom: 14px;
  position: relative;
  z-index: 4;
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
      padding-top: 16px;
      padding-bottom: 16px;
      margin-bottom: 12px;
      position: sticky;
      top: 0;
      left: 0;
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
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-sm);
  border: none;

  ${(props) =>
    props.$copy &&
    css`
      width: 91.5%;
      max-width: 684px;
      margin: 0;
      border-radius: 8px;
      box-shadow: var(--shadow-sm);
    `}
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding-bottom: 2px;
  touch-action: auto;
  text-indent: 16px;
  font-weight: 400;
  letter-spacing: 0.71px;
  color: var(--black-foreground);
  font-family: var(--font-body);
  font-weight: 500;
  border: none;

  ${(props) =>
    props.$copy === false &&
    css`
      text-indent: 20px;
    `}

  &:focus {
    outline: none;
    background-color: var(--white-foreground);
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  
  
  
  
  
  
`;

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 100%;
  width: 48px;
  padding-bottom: 2px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  right: 0;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.$copy === false &&
    css`
      height: 40px;
      width: 40px;
      box-sizing: border-box;
      padding-left: 2px;
      margin-bottom: 4px;
      margin-right: 8px;
      border-radius: 50%;
      color: var(--primary);
      &:hover {
        background-color: #ecf0f5;
      }
    `}

  ${(props) =>
    props.$copy &&
    css`
      background-color: var(--primary);
      color: var(--white-foreground);
      border-radius: 0;
    `}
`;

export const SpanSearchStyled = styled.span`
  
  font-weight: 600;
`;

export const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 7px;
  padding: 0 16px;
  position: absolute;
  bottom: -32px;
  left: 4%;
  z-index: 4;

  @media screen and (max-width: 375px) {
    max-width: 260px;
  }
  @media screen and (max-width: 768px) {
    max-width: 308px;
  }
  @media screen and (min-width: 993px) {
    left: 4.2%;
  }
`;

export const PointedShapeStyed = styled.div`
  height: 10px;
  width: 10px;
  background-color: blue;
  rotate: 45deg;
  border: 4px;
  position: absolute;
  top: -5px;
  left: 16px;
`;

export const PMsgStyled = styled.p`
  color: var(--white-foreground);
  padding: 6px 0px;
  padding-bottom: 8px;

  
  
  
  
  
`;

export const CompletionsDivStyled = styled.div`
  width: 100%;
  height: auto;
  padding-right: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 72px;
  ${(props) => props.$copy == true && "top: 82px;"}
  left: 0%;
  align-items: center;
  gap: 8px;
  flex-flow: row wrap;
  background-color: var(--white-foreground);
  background-color: transparent;

  @media screen and (max-width: 375px) {
    gap: 4px;
    padding-right: 8px;
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.$copy == false && "top:62px;"};
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    ${(props) => props.$copy && "padding-right: 28px;"};
  }
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    ${(props) => props.$copy && "padding: 0 0px 0px 20px;"};
  }
  @media screen and (min-width: 1201px) {
    left: 4.5%;
  }
`;

export const DivOnePStyled = styled(CentralizeDiv)`
  width: max-content;
  height: 48px;
  padding: 0 16px;
  flex: none;
  border-radius: 24px;
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-sm);
  color: var(--white-foreground);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 375px) {
    padding: 0 12px;
  }
`;

export const InputForFocusStyled = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  z-index: 2;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const PStyled = styled.p`
  text-transform: uppercase;
  font-weight: 600;

  @media screen and (max-width: 375px) {
    
    letter-spacing: 1.01px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    
    letter-spacing: 1.05px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px) {
    
    letter-spacing: 1.06px;
  }
`;


