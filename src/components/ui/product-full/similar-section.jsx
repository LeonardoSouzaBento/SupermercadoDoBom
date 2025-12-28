import styled from 'styled-components';

export const SimilarSectionStyled = styled.section`
  width: 100%;
  height: max-content;
  background-color: var(--background);
  position: relative;
  pointer-events: none;
  touch-action: none;
  @media screen and (min-width: 578px) {
    order: 1;
    overflow-y: scroll;
    border-radius: 0.7rem;
    height: 100%;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div:first-child {
    width: 100%;
    min-height: 5.6rem;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--background);
    z-index: 1;

    @media screen and (min-width: 577px) {
      margin-bottom: 1.2rem;
    }
  }

  & #warning {
    width: calc(100% - 32px);
    max-width: max-content;
    color: var(--secondary-hover);
    margin: auto;
    text-align: center;
    font-weight: 600;
    background-color: var(--white-foreground);
    padding: 12px;
    border-radius: 999px;
    box-shadow: var(--shadow-sm);
  }

  & > div:last-child {
    overflow-x: scroll;
    padding-left: 2rem;

    @media screen and (max-width: 375px) {
      padding-left: 1.5rem;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (min-width: 577px) and (max-width: 720px) {
      padding-left: 0;
      max-height: 100%;
      overflow: scroll;
    }

    & > div {
      height: auto;
      width: auto;
      display: flex;
      gap: 1.2rem;
      margin-bottom: 1.2rem;
      justify-items: flex-start;
      padding-right: 1.2rem;

      @media screen and (min-width: 577px) and (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        padding-right: 0;
        margin: auto;
        margin-bottom: 1.2rem;
      }
    }
  }
`;
