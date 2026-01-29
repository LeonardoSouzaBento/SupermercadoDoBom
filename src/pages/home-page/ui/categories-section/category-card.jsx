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
  border-radius: 16px;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
  border: 1.5px solid transparent;
  outline: 2.5px solid transparent;

  ${(props) =>
    props.$selected
      ? css`
          z-index: 1;
          background-color: hsla(var(--selected), 0.1);
          border: 1.5px solid hsla(var(--primary-value), 0.8);
          outline: 2.5px solid hsl(var(--selected));
          box-shadow: var(--shadow-selected-button);
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
  & > div#wrapper-cat-icon {
    width: 48px;
    height: max-content;
    border-radius: 12px;
    color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease;
    background-color: transparent;
  }
  & > div#wrapper-cat-label {
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
    font-weight: 500;
    line-height: 1.2;
    color: var(--primary);
    font-size: var(--text-sm-button);
    margin: 0;
  }
`;
