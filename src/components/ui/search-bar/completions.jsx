import styled from "styled-components";

export const CompletionsStyled = styled.div`
  width: 100%;
  height: auto;
  padding-right: 1.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 7.2rem;
  ${(props) => props.$copy == true && 'top: 8.2rem;'}
  left: 0%;
  align-items: center;
  gap: 0.8rem;
  flex-flow: row wrap;
  background-color: var(--white-foreground);
  background-color: transparent;

  @media screen and (max-width: 375px) {
    gap: 0.4rem;
    padding-right: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    ${(props) => props.$copy == false && 'top:6.2rem;'};
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    ${(props) => props.$copy && 'padding-right: 2.8rem;'};
  }
  @media screen and (min-width: 769px) {
    justify-content: flex-start;
    ${(props) => props.$copy && 'padding: 0 0px 0px 2rem;'};
  }
  @media screen and (min-width: 1201px) {
    left: 4.5%;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: 4.8rem;
    padding: 0 1.6rem;
    flex: none;
    border-radius: 2.4rem;
    background-color: var(--primary-hover);
    box-shadow: var(--shadow-sm);
    color: var(--white-foreground);
    cursor: pointer;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 375px) {
      padding: 0 1.2rem;
    }

    & > input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border: none;
      outline: none;
      z-index: 2;
      background-color: transparent;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }

    & > p {
      text-transform: uppercase;
      font-weight: 600;

      @media screen and (max-width: 375px) {
        letter-spacing: 0.1rem;
      }
      @media screen and (min-width: 375px) and (max-width: 576px) {
        letter-spacing: 0.11rem;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        letter-spacing: 0.11rem;
      }
      @media screen and (min-width: 769px) {
        letter-spacing: 0.11rem;
      }
    }
  }
`;
