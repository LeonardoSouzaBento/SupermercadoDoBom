import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
  width: calc(100% - 20px);
  position: relative;
  overflow-x: hidden;
  padding-top: 12px;
  padding-bottom: 40px;
  margin: auto;
  border-radius: 4px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 1201px) {
    width: calc(100% - 100px);
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
  padding: 12px 20px;
  padding-bottom: 24px;
  margin-bottom: 12px;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
  /* @media screen and (min-width: 1200px) {
    width: max-content;
  } */
`;

export const DivFundoImgStyled = styled.div`
  min-width: 220px;
  width: 220px;
  height: 220px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
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
  width: 43%;
  max-width: 240px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;

export const SpanStyled = styled.span.attrs(() => ({
  // nada é passado para o DOM
}))`
  border-radius: 5px;
  background-color:rgba(56, 61, 106, 0.42);

  ${(props) => props.$atual && "background-color: rgba(56, 61, 106, 0.84);"}

  @media screen and (max-width: 375px) {
    height: 9.5px;
    width: 9.5px;
  }
  @media screen and (min-width: 375px) {
    height: 10px;
    width: 10px;
  }
`;
