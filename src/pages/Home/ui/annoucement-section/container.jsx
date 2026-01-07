import styled from 'styled-components';

export const ContainerStyled = styled.section`
  width: calc(100% - 2.4rem);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 3.2rem;
  margin: auto;
  margin-bottom: 2.4rem;
  border-radius: 2.4rem;
  @media screen and (max-width: 576px) {
    width: calc(100% - 1.6rem);
  }
  @media screen and (min-width: 1201px) {
    width: max-content;
    padding-bottom: 0;
  }

  &::before {
    content: '';
    width: 100%;
    height: calc(100% - 5.6rem);
    position: absolute;
    top: 5.6rem;
    left: 0;
    background-image: linear-gradient(to bottom, var(--primary), hsl(var(--primary-100)));
    z-index: 0;
  }

  /* header */
  & > div:first-child {
    width: 100%;
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    position: relative;
    z-index: 1;

    & > h2 {
      text-decoration-color: var(--primary);
      margin-bottom: 0;
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
