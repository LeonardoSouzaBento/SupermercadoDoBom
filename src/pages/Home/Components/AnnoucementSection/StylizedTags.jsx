import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: calc(100% - 24px);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 32px;
  margin: auto;
  margin-bottom: 24px;
  border-radius: 24px;

  &::before {
    content: "";
    width: 100%;
    height: calc(100% - 56px);
    position: absolute;
    top: 56px;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      var(--purple),
      hsla(219, 27%, 91.5%, 1)
    );
    z-index: 0;
  }

  & #divH1 {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--purple);
    position: relative;
    z-index: 1;
  }
  & h1 {
    text-decoration-color: var(--purple);
    margin-bottom: 0px;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 400;
    text-decoration: underline;
    text-underline-offset: 0.5px;
    text-decoration-color: rgba(255, 255, 255, 0.65);
  }
  @media screen and (max-width: 576px) {
    width: calc(100% - 16px);
  }
  @media screen and (min-width: 1201px) {
    width: max-content;
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  overflow-x: scroll;
  box-sizing: border-box;
  padding: 24px;
  padding-top: 12px;
  margin-bottom: 4px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1201px) {
    ${(props) => props.$odd && "justify-content: center;"}
  }
`;

export const DivFundoImgStyled = styled.div`
  min-width: 220px;
  width: 220px;
  height: 220px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  /* box-shadow: 0px 4px 10px hsla(0, 0%, 0%, 0.28),
    2px 0px 4px hsla(0, 0%, 0%, 0.06), -2px 0px 4px hsla(0, 0%, 0%, 0.06); */
  transition: all 0.2s ease;

  &:hover {
    scale: 1.01;
  }
`;

export const ImgStyled = styled.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  margin: auto;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
`;

export const DivPaginationStyled = styled.div`
  height: max-content;
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const SpanStyled = styled.span.attrs(() => ({
  // nada é passado para o DOM
}))`
  border-radius: 5px;
  background-color: hsla(231, 16%, 61%, 1);

  ${(props) => props.$atual && "background-color: hsla(232, 15%, 42%, 1.00);"}

  @media screen and (max-width: 375px) {
    height: 9.5px;
    width: 9.5px;
  }
  @media screen and (min-width: 375px) {
    height: 10px;
    width: 10px;
  }
`;
