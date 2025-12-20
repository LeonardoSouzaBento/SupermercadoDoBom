import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: 140rem;
  height: max-content;
  position: relative;
  background-color: var(--primary);
  @media screen and (max-width: 768px) {
    padding-bottom: 2.4rem;
  }
  //modo paisagem
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 0 3.5%;
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 0 5%;
  }
  @media screen and (min-width: 1201px) {
    padding: 0 8.1%;
  }

  & > button {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    color: var(--white-foreground);
    background-color: var(--secondary);
    transition: all 100ms linear;
    &:hover {
      background-color: var(--secondary-hover);
    }

    & > p {
      font-family: var(--font-button);
      font-weight: 600;
      font-size: var(--text-button);
      color: var(--white-foreground);
      @media screen and (max-width: 1201px) {
        display: none;
      }
    }
    & > svg {
      margin-top: 2px;
      margin-left: 1px;
    }

    @media screen and (max-width: 375px) {
      position: absolute;
      top: 4.4rem;
      right: 4.5%;
    }
    @media screen and (min-width: 375px) and (max-width: 768px) {
      position: absolute;
      top: 4.4rem;
      right: 5%;
    }
    @media screen and (min-width: 768px) {
      position: relative;
      min-width: 4.8rem;
    }
    @media screen and (min-width: 1201px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      min-width: max-content;
      padding-right: 18px !important;
      padding: 0 1.6rem;
      gap: 0.8rem;
      border-radius: 8px;
      & > svg {
        margin-bottom: 3px;
      }
    }
  }
`;
