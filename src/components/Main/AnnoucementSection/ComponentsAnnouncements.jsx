import styled from "styled-components";

export const Div = styled.div`
  width:100%;
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-top: 12px;
  padding-bottom: 48px;
  border-radius: 5px;
  @media screen and (min-width: 320px) and (max-width:576px){
    width: 100%;
    padding-bottom: 41px;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    width: calc(100% - 15px);
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    width: calc(100% - 20px);
  }
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
  margin-bottom: 28px;
  font-size: 1.15em;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  /* color:rgb(153, 71, 74); */
  color: #6C0A0B;

  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.14em;
    margin-bottom: 29px;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.22em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.26em;
    margin-bottom: 29px;
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.28em;
  }
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.30em;
    margin-top: 9px;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.32em;
  }
`;

//transform: `translateX(${props.$translateValue ?? 0}px)`

export const Advertisements = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${0}px)`
  }
  }))`
  will-change: transform;
  /* overflow-x: visible; */
  overflow-x: scroll;
  scroll-snap-type: x mandatory; //scroll para mobile
  scroll-behavior: smooth;
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
    gap: 20px;
  }
`;

export const Fundo = styled.div`
    position: relative;
    height: 170px;
    min-width: 265px;

    @media screen and (min-width: 320px) and (max-width: 374px){
      min-width: 265px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      min-width: 300px;
    }
    @media screen and (min-width: 576px) and (max-width: 768px){
      min-width: 320px;
    }
    @media screen and (min-width: 769px){
      min-width: 325px;
    }
    /* @media screen and (min-width: 993px){
      min-width: 330px;
    } */
    
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
    border-radius: 8px;
    filter: blur(5px) brightness(0.7);
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
    /* touch-action: none; */
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
