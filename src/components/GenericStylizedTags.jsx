import styled from "styled-components";

export const H1BaseStyled = styled.h1`
  color: white;
  font-weight: 700;
  font-family: var(--h-font);
  text-align: center;
  user-select: none;

  @media screen and (max-width: 375px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.312em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.336em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.361em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.387em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.4em;
  }
`;
