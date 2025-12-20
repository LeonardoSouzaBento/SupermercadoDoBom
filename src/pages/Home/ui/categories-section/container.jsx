import styled from "styled-components";

export const ContainerStyled = styled.div`
  margin-bottom: 0.8rem;
  overflow-x: hidden;
  position: relative;
  z-index: 2;

  width: 100%;

  @media screen and (min-width: 1201px) {
    width: calc(100% - 52px);
    margin: auto;
    margin-bottom: 1rem;
  }
  /* header */
  & > div:first-child {
    width: 100%;
    box-sizing: border-box;
    padding-right: 2rem;
    margin-bottom: 3.2rem;
    position: relative;

    @media screen and (min-width: 1201px) {
      padding-right: 2.5rem;
    }

    & > h2 {
      color: var(--dark-primary);
      text-align: center;
    }
    & strong {
      font-weight: 500;
    }
  }
  /* wrapper rolável*/
  & > div:last-child {
    width: auto;
    margin: auto;
    padding: 0.8rem;
    padding-right: 2rem;
    padding-bottom: 2.4rem;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    gap: 1.5rem;
    position: relative;
    overflow-x: scroll;
    user-select: none;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (min-width: 1201px) {
      padding-right: 0.6rem;
      justify-content: space-between;
    }
    @media screen and (min-width: 375px) and (max-width: 1200px) {
      padding-right: 2rem;
    }
  }
`;