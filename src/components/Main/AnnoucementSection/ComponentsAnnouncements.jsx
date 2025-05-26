import styled, {css} from "styled-components";

export const Div = styled.div`
  width:100%;
  position: relative;
  overflow-x: hidden;
  margin: auto;
  padding-top: 16px;
  padding-bottom: 48px;
  border-radius: 5px;
  @media screen and (min-width: 320px) and (max-width:576px){
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    width: calc(100% - 15px);
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    width: calc(100% - 20px);
  }
  @media screen and (min-width: 993px) and (max-width:1200px){
    width: calc(100% - 20px);
    padding-bottom: 52px;
  }
  @media screen and (min-width: 1201px){
    width: calc(100% - 50px);
    padding-bottom: 52px;
  }
`;

export const P = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 12px;
  font-size: 1.15em;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  color:rgb(182, 10, 13);

  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.14em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.22em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.26em;
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.28em;
  }
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.30em;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.32em;
  }
`;

export const Advertisements = styled.div.attrs(props => ({
  style: {
   transform: props.$isMobile ? 'none' : `translateX(${props.$translateValue ?? 0}px)`
  }
  }))`
  width: 100%;
  margin: auto;
  will-change: transform;
  padding-bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  margin-top: 12px;
  overflow-x: visible;

  ${props => props.$isMobile && css`
    overflow-x: scroll;
    box-sizing: border-box;
    padding: 8px 20px;
    padding-bottom: 24px;
  `}

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  ${props => props.$isMobile && css`
    @media screen and (min-width: 375px) and (max-width: 576px){
      padding-right: 15px;
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
      padding-right: 18px;
    }
    @media screen and (min-width: 769px){
      padding-right: 20px;
    }`
  }
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
    min-width: 225px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    min-width: 250px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px){
    min-width: 280px;
  }
  @media screen and (min-width: 769px){
    min-width: 300px;
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
  border-radius: 4px;
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
  background-color: grey;
  border-radius: 4px;
  border: 1px solid rgb(117, 117, 117);
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
    height: 7.5px;
    width: 7.5px;
  }
`;
