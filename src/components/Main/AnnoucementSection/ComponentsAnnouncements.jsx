import styled, { css } from "styled-components";

export const ContainerStyled = styled.div`
  width: calc(100% - 20px);
  position: relative;
  overflow-x: hidden;
  padding-top: 12px;
  padding-bottom: 32px;
  margin: auto;
  margin-top: 36px;
  border-radius: 4px;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    margin-top: 12px;
  }
  @media screen and (min-width: 1201px) {
    width: calc(100% - 100px);
  }
`;

export const PStyled = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
  font-size: 1.15em;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  color: #211b37;

  @media screen and (max-width: 374px) {
    font-size: 1.14em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.22em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.26em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.28em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.3em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.32em;
  }
`;

export const DivStyled = styled.div`
  width: 100%;
  margin: auto;
  will-change: transform;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  margin-top: 12px;
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

  @media screen and (min-width: 375px) and (max-width: 576px) {
    gap: 15px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    gap: 18px;
  }
  @media screen and (min-width: 769px) {
    gap: 20px;
  }
`;

export const DivFundoImgStyled = styled.div`
  position: relative;
  height: 170px;
  min-width: 265px;

  @media screen and (max-width: 374px) {
    min-width: 225px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    min-width: 230px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    min-width: 240px;
  }
  @media screen and (min-width: 769px) {
    min-width: 250px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    filter: blur(2.7px) brightness(0.7);
    border-radius: 4px;
    z-index: 0;
  }
`;

export const ImgStyled = styled.img`
  height: 100%;
  width: auto;
  display: block;
  object-fit: contain;
  margin: auto;
  position: relative;
  z-index: 1;
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

  @media screen and (max-width: 374px) {
    height: 9.5px;
    width: 9.5px;
  }
  @media screen and (min-width: 375px) {
    height: 10px;
    width: 10px;
  }
`;
