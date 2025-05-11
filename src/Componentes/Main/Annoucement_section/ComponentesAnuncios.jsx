import styled from "styled-components";

export const Div = styled.div`
  width:100%;
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-bottom: 48px;
  border-radius: 5px;

  //celulares
  @media screen and (min-width: 320px) and (max-width:576px){
    width: 100%;
    padding-bottom: 41px;
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

  }
`;

export const P = styled.p`
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 28px;
    font-size: 1.15em;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 500;
    color:rgb(153, 71, 74);

 //celulares
  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.12em;
    margin-bottom: 29px;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.2em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.24em;
    margin-bottom: 29px;
  }
  //tablets
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.26em;
  }
  //notebooks
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.28em;
    margin-top: 9px;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.3em;
  }
`;

export const Advertisements = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${props.$translateValue ?? 0}px)`
  }
  }))`
  will-change: transform;
  transition: transform 0.4s linear;
  overflow-x: visible;
  height: 174px;
  width: 100%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;

  @media screen and (min-width: 375px) and (max-width: 576px){
    gap: 15px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    gap: 18px;
  }
  @media screen and (min-width: 769px){
    gap: 17px;
  }
`;

export const Fundo = styled.div`
    position: relative;
    height: 170px;
    min-width: 254px;
    border-radius: 7px;
    @media screen and (min-width: 320px) and (max-width: 374px){
      width: 256px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      min-width: 320px;
    }
    @media screen and (min-width: 576px){
      min-width: 320px;
    }
    
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
    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
`;

export const Pagination = styled.div`
      height: max-content;
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
  background-color: rgb(125, 125, 125);
  border-radius: 50%;
  border: 1px solid rgb(136, 136, 136);
  ${props => props.$atual && `
    transform: scale(1.1);
    background-color: rgb(255, 255, 255);
    padding: 1px;
    border: 1px solid grey;
  `}

  @media screen and (min-width: 320px) and (max-width: 374px){
    height: 7px;
    width: 7px;
  }
  @media screen and (min-width: 375px){
    height: 8px;
    width: 8px;
  }
`;
