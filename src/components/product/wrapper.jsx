import styled, { css } from 'styled-components';

export const WrapperStyled = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  background-color: var(--white-foreground);
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: box-shadow 0.2s ease;

  ${(props) =>
    props.$variant !== 'cart' &&
    css`
      &:hover {
        box-shadow: var(--shadow-sm);
      }
    `}

  ${(props) =>
    props.$variant == 'cart' &&
    css`
      border: 1px solid var(--card-border);
      border-radius: 2px !important;
    `};

  //paisagem
  @media screen and (max-width: 385px) {
    flex-direction: row;
    height: 18rem;
    min-width: 27rem;
    max-width: 27rem;
  }
  //retrato
  @media screen and (min-width: 385px) and (max-width: 414px) {
    gap: 0;
  }
  @media screen and (min-width: 385px) and (max-width: 992px) {
    flex-direction: column;
    min-width: 17rem;
    max-width: 17rem;
    min-height: 28rem;
    max-height: 28rem;
  }
  //paisagem
  @media screen and (min-width: 993px) {
    flex-direction: row;
    min-width: 27.5rem;
    max-width: 27.5rem;
    height: 17.7rem;
  }

  ${(props) =>
    props.$variant === 'announcement' &&
    css`
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 2;

      @media screen and (max-width: 385px) {
        max-width: none;
        max-height: none;
      }
      @media screen and (min-width: 385px) and (max-width: 992px) {
        max-width: none;
        max-height: none;
        min-height: none;
        max-height: none;
      }
      //paisagem
      @media screen and (min-width: 993px) {
        min-width: none;
        max-width: none;
        height: 100%;
      }
    `}
`;
