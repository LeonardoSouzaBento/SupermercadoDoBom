import styled, { css } from 'styled-components';

export const CategoryCardStyled = styled.div`
  min-width: 12rem;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-end;
  flex: auto;
  cursor: pointer;
  position: relative;
  border-radius: 15px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-cat-card);
  border: 1.5px solid transparent;
  outline: 2.5px solid transparent;

  ${(props) =>
    props.$selected
      ? css`
          z-index: 1;
          background-color: hsla(var(--primary-50), 0.4);
          border: 1.5px solid hsla(var(--primary-value), 0.8);
          outline: 2.5px solid var(--selected);
          box-shadow: 0 3px 6px hsla(var(--primary-value), 0.2);
          &:hover {
            box-shadow: var(--shadow-xs);
          }
        `
      : css`
          background-color: hsla(var(--white-value), 0.66);
          &:hover {
            background-color: hsla(var(--white-value), 0.88);
          }
        `}
  & > div:first-child {
    width: 4.8rem;
    height: max-content;
    border-radius: 12px;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease;
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
    color: var(--primary);
    font-size: var(--text-sm-button);
    margin: 0;
  }
`;
