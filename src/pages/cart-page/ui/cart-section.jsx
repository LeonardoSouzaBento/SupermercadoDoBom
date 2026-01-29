import styled from 'styled-components';

export const CartSectionStyed = styled.section`
  width: calc(100% - 28px);
  height: 46rem;
  padding: 2rem 0;
  padding-top: 10px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: var(--shadow-md);
  border: var(--card-border);
  position: relative;
  transition: height 0.15s ease;
  background-color: var(--white-foreground);
  overflow: hidden;
  transition: all 0.15s ease;

  @media screen and (max-width: 375px) {
    width: calc(100% - 16px);
  }
  @media screen and (max-width: 596px) {
    max-width: 40rem;
  }
  @media screen and (min-width: 596px) and (max-width: 768px) {
    max-width: 57.5rem;
  }

  @media screen and (min-width: 769px) {
    height: 50rem;
    width: 724px;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (min-width: 993px) {
    max-width: calc(100% - 64px);
  }

  & #delete-button {
    position: absolute;
    top: 6px;
    right: 6px;
  }

  & #see-all-button {
    width: 100%;
    height: 48px;
    gap: 2px;
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 2;
    cursor: pointer;
    box-shadow: var(--shadow-sm);
    @media screen and (min-width: 769px) {
      display: none;
    }

    & p {
      font-weight: 600;
      font-family: var(--font-button);
      text-transform: uppercase;
      user-select: none;
    }
  }
`;
