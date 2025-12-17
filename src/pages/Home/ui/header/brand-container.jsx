import styled, { css } from 'styled-components';

export const BrandContainerStyled = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  gap: 1.4rem;
  @media (max-width: 375px) {
    gap: 1.6rem;
  }
  @media (min-width: 769px) {
    max-width: 34rem;
    margin-left: 0;
  }

  /* espaco para botão */
  & > div:last-child {
    width: 4.8rem;
    height: 4.8rem;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  /*container logo e nome*/
  & > div:first-child {
    width: 90%;
    height: 13.6rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;
    @media (max-width: 375px) {
      gap: 0;
    }
    @media (min-width: 769px) {
      width: max-content;
      height: 14.4rem;
    }

    /*wrapper logo*/
    & > div:first-child {
      height: 6rem;
      width: 6rem;
      background-color: var(--secondary);
      border-radius: 50%;
      transform: scaleX(-1);
      box-sizing: border-box;
      padding-right: 2.2px;
      box-shadow: 0 4px 10px 0px rgba(11, 0, 65, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 375px) {
        margin-right: -9px;
      }
      & > span {
        color: var(--white-foreground);
        font-weight: 600;
        font-size: 3.6rem;
        padding-top: 1px;
        padding-left: 1px;
      }
    }

    /*wrapper do nome do supermercado*/
    & > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 4px;

      p {
        color: var(--white-foreground);
        letter-spacing: 0.45px;
      }

      p:first-child {
        font-family: var(--font-button);
        font-weight: 800;

        @media (max-width: 375px) {
          max-width: 200px;
        }
      }

      p:last-child {
        font-family: var(h-font);
        font-weight: 400;
        letter-spacing: auto;
      }
    }
  }
`;
