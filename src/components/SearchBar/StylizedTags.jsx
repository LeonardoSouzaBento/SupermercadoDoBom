import styled, { css } from 'styled-components';
import { CentralizeDiv } from '../GenericStylizedTags';

export const ContainerStyled = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 0.2rem;
  padding-bottom: 1.4rem;
  position: relative;
  z-index: 4;
  box-sizing: border-box;

  ${(props) =>
    props.$copy === false &&
    css`
      @media screen and (min-width: 769px) {
        padding-top: 1.3rem;
      }
    `}

  ${(props) =>
    props.$copy &&
    css`
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      margin-bottom: 1.2rem;
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;

      @media screen and (min-width: 769px) {
        justify-content: flex-start;
        padding-left: 2.4rem;
      }
    `}
  &>form {
    width: 90%;
    height: auto;
    margin: auto;
    align-items: center;
    border-radius: 999rem;
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-sm);
    border: none;

    ${(props) =>
      props.$copy &&
      css`
        width: 91.5%;
        max-width: 68.4rem;
        margin: 0;
        border-radius: 0.8rem;
        box-shadow: var(--shadow-sm);
      `}
    & > input {
      width: 100%;
      height: 4.8rem;
      box-sizing: border-box;
      padding-bottom: 0.2rem;
      touch-action: auto;
      text-indent: 1.6rem;
      font-weight: 400;
      letter-spacing: 0.71px;
      color: var(--black-foreground);
      font-family: var(--font-body);
      font-weight: 500;
      border: none;

      ${(props) =>
        props.$copy === false &&
        css`
          text-indent: 2rem;
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
    }
    & > button {
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: var(--white-foreground);
      color: var(--primary);
      height: 100%;
      width: 56px;
      border-radius: 999rem;

      &>svg {
       margin-bottom: 2px; 
      }
    }
  }
`;

export const DivSpanStyled = styled(CentralizeDiv)`
  height: 100%;
  width: 4.8rem;
  padding-bottom: 0.2rem;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  right: 0;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.$copy === false &&
    css`
      height: 4rem;
      width: 4rem;
      box-sizing: border-box;
      padding-left: 0.2rem;
      margin-bottom: 0.4rem;
      margin-right: 0.8rem;
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
  border-radius: 0.7rem;
  padding: 0 1.6rem;
  position: absolute;
  bottom: -3.2rem;
  left: 4%;
  z-index: 4;

  @media screen and (max-width: 375px) {
    max-width: 26rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 30.8rem;
  }
  @media screen and (min-width: 993px) {
    left: 4.2%;
  }
`;

export const PointedShapeStyed = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: blue;
  rotate: 45deg;
  border: 0.4rem;
  position: absolute;
  top: -0.5rem;
  left: 1.6rem;
`;

export const PMsgStyled = styled.p`
  color: var(--white-foreground);
  padding: 0.6rem 0px;
  padding-bottom: 0.8rem;
`;

export const CompletionsDivStyled = styled.div`
  width: 100%;
  height: auto;
  padding-right: 1.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 7.2rem;
  ${(props) => props.$copy == true && 'top: 8.2rem;'}
  left: 0%;
  align-items: center;
  gap: 0.8rem;
  flex-flow: row wrap;
  background-color: var(--white-foreground);
  background-color: transparent;

  @media screen and (max-width: 375px) {
    gap: 0.4rem;
    padding-right: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.$copy == false && 'top:6.2rem;'};
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    ${(props) => props.$copy && 'padding-right: 2.8rem;'};
  }
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    ${(props) => props.$copy && 'padding: 0 0px 0px 2rem;'};
  }
  @media screen and (min-width: 1201px) {
    left: 4.5%;
  }
`;

export const DivOnePStyled = styled(CentralizeDiv)`
  width: max-content;
  height: 4.8rem;
  padding: 0 1.6rem;
  flex: none;
  border-radius: 2.4rem;
  background-color: var(--primary-hover);
  box-shadow: var(--shadow-sm);
  color: var(--white-foreground);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 375px) {
    padding: 0 1.2rem;
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
    letter-spacing: 0.1rem;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    letter-spacing: 0.11rem;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    letter-spacing: 0.11rem;
  }
  @media screen and (min-width: 769px) {
    letter-spacing: 0.11rem;
  }
`;
