import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;

  & > div {
    width: 100%;
    height: 58rem;
    box-sizing: border-box;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    background-color: var(--background);
    border-radius: 1.2rem 1.2rem 0px 0px;
    transform: translateY(${(props) => props.$translate});
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-sm);

    @media screen and (max-width: 577px) {
      padding-bottom: 6.2rem;
    }

    @media screen and (min-width: 578px) {
      display: flex;
      overflow-y: hidden;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
`;
