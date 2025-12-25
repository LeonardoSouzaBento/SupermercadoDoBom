import styled, { css } from 'styled-components';

export const CategoryCardStyled = styled.div`
  min-width: 12rem;
  padding: 9px 15px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5ex;
  flex: auto;
  cursor: pointer;
  position: relative;
  border-radius: 9px;

  ${(props) =>
    props.$selected &&
    css`
      z-index: 1;
      background-color: var(--white-foreground);
      
    `}
  ${(props) =>
    !props.$selected &&
    css`
      &:hover {
        box-shadow: var(--shadow-xs);
      }
    `}

  & > div:first-child {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 999px;
    background-color: ${(props) => (props.$selected ? "var(--primary)" : "var(--white-foreground)")};
    color: ${(props) => (props.$selected ? "var(--white-foreground)" : "var(--primary)")};
    border: 1.5px solid hsla(var(--primary-value), 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease;
    /* box-shadow: var(--shadow-xs); */
    ${(props) =>
      props.$selected &&
      css`
        scale: 1.05;
      `}
  }
  & > div:last-child {
    height: 4.8rem;
    width: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & p {
    font-family: var(--font-header);
    text-align: center;
    letter-spacing: 0.05rem;
    font-weight: 500;
    line-height: 1.2;
    /* color: var(--primary); */
    font-size: var(--text-sm-button);
    margin: 0;
  }
`;
