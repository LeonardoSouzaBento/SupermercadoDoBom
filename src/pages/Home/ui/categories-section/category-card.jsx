import styled, { css } from "styled-components";

export const CategoryCardStyled = styled.div`
  min-width: 116px;
  width: 116px;
  max-height: 124px;
  padding: 12px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  flex: auto;
  border-radius: 16px;
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
    height: 44px;
    width: 44px;
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
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & p {
    font-family: var(--font-header);
    text-align: center;
    letter-spacing: 0.05rem;
    line-height: 1.1;
    font-size: var(--text-xs);
    margin: 0;
    color: var(--dark-primary);
  }
`;