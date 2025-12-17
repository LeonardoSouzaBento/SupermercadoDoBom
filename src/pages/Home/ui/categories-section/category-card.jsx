import styled, { css } from "styled-components";

export const CategoryCardStyled = styled.div`
  min-width: 11.6rem;
  width: 11.6rem;
  max-height: 12.4rem;
  padding: 1.2rem 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
  flex: auto;
  border-radius: 1.6rem;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$selected &&
    css`
      z-index: 1;
      background-color: var(--white-foreground);
      box-shadow: var(--shadow-xs);
    `}
  ${(props) =>
    !props.$selected &&
    css`
      &:hover {
        box-shadow: var(--shadow-sm);
      }
    `}

  & > div:first-child {
    height: 4.4rem;
    width: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary);
    border-radius: 50%;
    transition: all 0.15s ease;

    ${(props) =>
      props.$selected &&
      css`
        scale: 1.05;
        box-shadow: var(--shadow-md);
      `}
  }
  & >div:last-child {
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
    font-size: var(--text-sm-button);
    margin: 0;
    color: var(--dark-primary);
  }
`;