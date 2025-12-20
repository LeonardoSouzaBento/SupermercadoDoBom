import styled, { css } from "styled-components";

export const ListContainerStyled = styled.div`
  width: auto;
  height: max-content;
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  gap: 1.2rem;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-radius: 0.7rem;
  overflow-x: scroll;
  position: relative;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 385px) {
    gap: 1.1rem;
  }

  ${(props) =>
    props.$variant == "search" &&
    css`
      padding-bottom: 1.2rem;
      @media screen and (min-width: 385px) and (max-width: 414px) {
        justify-content: center;
        gap: 1.2rem;
      }
      @media screen and (min-width: 414px) and (max-width: 577px) {
        width: 41.4rem;
        margin: auto;
      }
      @media screen and (min-width: 577px) and (max-width: 768px) {
        max-width: 90%;
        margin: auto;
      }
      @media screen and (min-width: 768px) {
        justify-content: flex-start;
        padding-left: 2.4rem;
      }
      @media screen and (min-width: 768px) and (max-width: 993px) {
        max-width: 95%;
      }
    `}
  ${(props) =>
    props.$variant === "cart" &&
    css`
      justify-content: flex-start !important;
      padding-top: 0.8rem;
      margin-bottom: 0;
      gap: 0;
      margin: auto;

      @media screen and (max-width: 385px) {
        width: 27.5rem;
      }
      @media screen and (min-width: 385px) and (max-width: 596px) {
        width: 34.6rem;
      }
      @media screen and (min-width: 596px) and (max-width: 768px) {
        width: 51.7rem;
      }
      @media screen and (min-width: 769px) and (max-width: 992px) {
        width: 68.8rem;
      }
      @media screen and (min-width: 993px) {
        padding-left: 2rem;
      }
    `}
`;