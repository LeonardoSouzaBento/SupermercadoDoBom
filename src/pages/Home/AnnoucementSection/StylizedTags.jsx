import styled from "styled-components";

export const ContainerStyled = styled.section`
  width: calc(100% - 24px);
  position: relative;
  overflow-x: hidden;
  padding-top: 16px;
  padding-bottom: 40px;
  margin: auto;
  margin-bottom: 40px;
  border-radius: 24px;
  background-image: linear-gradient(
    to bottom,
    var(--purple),
    hsl(210, 33%, 93%)
  );
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media screen and (max-width: 576px) {
    width: calc(100% - 16px);
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
  padding: 12px 24px;
  margin-bottom: 16px;
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
  box-shadow: 0px 4px 10px rgba(41, 46, 117, 0.25);
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
