import styled from 'styled-components';

export const WrapperStyled = styled.div`
  & > div:first-child {
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    height: 56px;
    background-color: hsla(var(--primary-50), 0.66);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.4rem;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 4;

    @media screen and (max-width: 576px) {
      justify-content: center;
    }
    /* wrapper buttons */
    & > div:first-child {
      width: 100%;
      height: 56px;
      display: flex;
      padding: 0 8px;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      border-radius: 0.9rem;
      overflow: hidden;
      @media screen and (min-width: 577px) {
        margin-right: 0.6rem;
      }
    }
  }
  /* feedback cart */
  & #cart-feedback {
    height: 48px;
    width: max-content;
    padding: 0 1.2rem;
    margin-left: -4px;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--white-foreground);
    border-radius: 6px;
    background-color: var(--red-brand);

    &:hover {
      background-color: var(--red-brand-hover);
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
      font-weight: 500;
      font-size: var(--text-button);
    }
  }
  /* espaço para o navbar */
  & > div:last-child {
    height: 7.2rem;
    width: 100%;
    position: relative;
  }
`;
