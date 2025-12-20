import styled from 'styled-components';

export const WrapperStyled = styled.div`
  & > div:first-child {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    background-color: transparent;
    position: fixed;
    left: 0;
    bottom: 0.6rem;
    z-index: 4;

    @media screen and (max-width: 576px) {
      justify-content: center;
    }
    & > div:first-child {
      width: calc(100% - 16px);
      max-width: 42rem;
      height: 56px;
      display: flex;
      padding: 0 8px;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 0.9rem;
      background: var(--primary);
      box-shadow: var(--shadow-md);
      overflow: hidden;
      @media screen and (min-width: 577px) {
        margin-right: 0.6rem;
      }
    }
  }
  & #cart-feedback {
    height: 100%;
    width: max-content;
    padding: 0 1.2rem;
    margin-left: -8px;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--white-foreground);
    background-color: var(--secondary);

    &:hover {
      background-color: var(--secondary-hover);
    }

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & span {
      font-variation-settings: 'FILL' 1, 'wght' 350, 'GRAD' 12, 'opsz' 30;

      padding-top: 0.2rem;
    }
    & > p {
      scale: 1.03;
      padding-bottom: 0.2rem;
      letter-spacing: 0.75px;
      font-weight: 450;
    }
  }
  /* espaço para o navbar */
  & > div:last-child {
    height: 7.2rem;
    width: 100%;
    position: relative;
  }
`;
