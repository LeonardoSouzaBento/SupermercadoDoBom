import styled from 'styled-components';

export const MainWrapperStyled = styled.div`
  width: 100%;
  max-width: 768px;
  min-height: 100%;
  margin-inline: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${(props) => props.$opacity};
  transition: opacity 0.5s ease;
  padding-bottom: 24px;
  box-sizing: border-box;
  margin-top: -6px;

  @media screen and (max-width: 640px) {
    width: calc(100% - 24px);
  }
  @media screen and (min-width: 640px) {
    width: calc(100% - 48px);
  }

  /* seção de produtos */
  & > div#products-card {
    width: 100%;
    padding: 2rem 0;
    padding-top: 10px;
    margin-inline: auto;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: var(--shadow-md);
    border: var(--card-border);
    position: relative;
    transition: height 0.15s ease;
    background-color: var(--white-foreground);
    overflow: hidden;
    transition: all 0.15s ease;

    @media screen and (min-width: 769px) {
      overflow: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    & #delete-button {
      position: absolute;
      top: 4.5px;
      right: 4.5px;
    }

    & #see-all-button {
      width: 100%;
      height: 48px;
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: 2;
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
  }

  /* detalhes e recibo */
  & > div#details-and-receipt {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > div#products-card > img {
    width: 100%;
    height: 226px;
    object-fit: contain;
    filter: grayscale(33%);
  }
`;
