import styled, { css } from 'styled-components';

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
    height: 48px;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 999rem;
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-sm);

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
      right: 4px;
      bottom: 4px;
      color: var(--primary);
      border-radius: 999rem;

      &>svg {
       margin-bottom: 2px; 
      }
    }
  }
`;