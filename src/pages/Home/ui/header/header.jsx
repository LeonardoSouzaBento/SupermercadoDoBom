import styled from "styled-components";

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
`;