import styled, { css } from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  z-index: 4;
  box-sizing: border-box;

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
    width: 100%;
    height: 48px;
    margin: auto;
    display: flex;
    align-items: center;
    border-radius: 9999px;
    overflow: hidden;
    position: relative;
    box-shadow: var(--shadow-sm);

    ${(props) =>
      props.$copy &&
      css`
        max-width: 68.4rem;
        margin: 0;
        box-shadow: var(--shadow-md);
        border: 1px solid hsl(var(--primary-100));
      `}
    & > input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      touch-action: auto;
      text-indent: 1.6rem;
      letter-spacing: 0.71px;
      font-weight: 400;
      border: none;

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
      bottom: 2.5px;
      color: var(--primary);
      border-radius: 999rem;

      &>svg {
       margin-bottom: 2px; 
      }
    }
  }
`;
