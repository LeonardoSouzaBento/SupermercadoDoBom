import styled from 'styled-components';

export const ContainerStyled = styled.section`
  width: calc(100% - 2.4rem);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 24px;
  margin: auto;
  margin-bottom: 2.4rem;
  border-radius: 2.4rem;
  border: 1.5px solid hsla(var(--primary-50), 0.12);
  @media screen and (max-width: 576px) {
    width: calc(100% - 1.6rem);
  }
  @media screen and (min-width: 1201px) {
    width: max-content;
    padding-bottom: 4px;
  }

  &::before {
    content: '';
    width: 100%;
    height: calc(100% - 56px);
    position: absolute;
    top: 56px;
    left: 0;
    background-image: linear-gradient(to bottom, var(--primary), hsla(var(--primary-50), 0.5));
    z-index: 0;
  }

  /* header */
  & > div:first-child {
    width: 100%;
    height: 56px;
    padding-top: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    position: relative;
    z-index: 1;

    & > h3 {
      color: hsla(var(--white-value), 0.95);
    }
  }

  /* div de paginação */
  & > div:last-child {
    height: max-content;
    width: 20rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    & > span {
      border-radius: 0.5rem;
      @media screen and (max-width: 375px) {
        height: 0.95rem;
        width: 0.95rem;
      }
      @media screen and (min-width: 375px) {
        height: 1rem;
        width: 1rem;
      }
    }
    @media screen and (min-width: 1201px) {
      display: none;
    }
  }
`;
