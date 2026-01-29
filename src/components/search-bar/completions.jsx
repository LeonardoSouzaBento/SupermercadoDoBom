import styled, { css } from 'styled-components';

export const CompletionsStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 48px;
  left: 0%;
  ${(props) => props.$copy == true && 'top: 64px;'}
  align-items: center;
  gap: 8px;
  flex-flow: row wrap;
  border-radius: 16px;

  @media screen and (max-width: 375px) {
    gap: 4px;
    padding-right: 8px;
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.$copy == false && 'top:62px;'};
  }
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
  }
  @media screen and (min-width: 1201px) {
    left: 4.5%;
  }

  & > div {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    padding: 0 1.1em;
    flex: none;
    border-radius: 999px;
    background-color: hsla(var(--white-value), 0.96);
    ${(props) => props.$copy && 'border: 1px solid hsla(var(--primary-300));'}
    color: var(--black-foreground);
    box-shadow: var(--shadow-md);
    cursor: pointer;
    position: relative;
    overflow: hidden;

    & > input {
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
    }

    & > p {
      text-transform: uppercase;
      font-size: var(--text-xs);
      font-weight: 600;

      @media screen and (max-width: 375px) {
        letter-spacing: 0.1px;
      }
      @media screen and (min-width: 375px) and (max-width: 576px) {
        letter-spacing: 0.11px;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        letter-spacing: 0.11px;
      }
      @media screen and (min-width: 769px) {
        letter-spacing: 0.11px;
      }
    }
  }
`;

