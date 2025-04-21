import styled from "styled-components";

export const Div = styled.div`
  width:calc(100% - 30px);
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-bottom: 44px;
  touch-action: pan-x;
  border-radius: 5px;

  //celulares
  @media screen and (min-width: 320px) and (max-width:576px){
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    width: calc(100% - 15px);
  }
  //tablets
  @media screen and (min-width: 769px) and (max-width:992px){
    width: calc(100% - 20px);
  }
  //notebooks
  @media screen and (min-width: 993px) and (max-width:1200px){
    width: calc(100% - 20px);
    margin-bottom: 70px;
    padding-bottom: 0px;
  }
  @media screen and (min-width: 1201px){
    width: calc(100% - 50px);
    margin-bottom: 70px;
    padding-bottom: 0px;
  }
`;

export const P = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 18px;
    margin-bottom: 22px;
    font-size: 1.15em;
    letter-spacing: 1.75px;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    color: #892c2f;

 //celulares
  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.12em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.2em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.24em;
  }
  //tablets
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.26em;
  }
  //notebooks
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.28em;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.3em;
  }
`;

export const Advertisements= styled.div`
    height: 170px;
    width:100%;
    margin: auto;
    padding-bottom: 30px;
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    touch-action: pan-x;

    @media screen and (min-width: 577px) and (max-width:768px){
    gap: 15px;
    }
    @media screen and (min-width: 769px){
    gap: 17px;
    }
`;

export const Fundo = styled.div`
    position: relative;
    height: 170px;
    min-width: 340px;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    filter: blur(5px) brightness(0.72);
    z-index: 0;
  }
`;

export const Img = styled.img`
    height: 100%;
    display: block;
    object-fit: contain;
    margin: auto;
    position: relative;
    z-index: 1;
`;

export const Pagination = styled.div`
      height: 12px;
      width: 50%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 0px;
`;

export const Span = styled.span.attrs(() => ({
  // nada é passado para o DOM
}))`
  height: 100%;
  width: 12px;
  background-color: rgb(159, 159, 159);
  border-radius: 50%;
  border: 1px solid rgb(136, 136, 136);
  ${props => props.$atual && `
    transform: scale(1.1);
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 2px rgb(164, 164, 164);
    border: 1px solid rgb(173, 173, 173);
  `}
`;
