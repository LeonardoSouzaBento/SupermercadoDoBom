import styled from "styled-components";

export const Div = styled.div`
    width: calc(100% - 20px);
    overflow-x: hidden;
    margin-left: 20px;
    position: relative;

    @media screen and (min-width: 320px) and (max-width: 375px){
      width: calc(100% - 15px);
      margin-left: 15px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      width: calc(100% - 20px);
      margin-left: 20px;
    }
    @media screen and (min-width: 577px) and (max-width: 1200px){
      width: calc(100% - 20px);
      margin-left: 20px;
    }
    @media screen and (min-width: 1201px){
      width: calc(100% - 52px);
      margin: auto;
    }
`;

export const Divf = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${props.$translateValue ?? 0}px)`
  }
  }))`
  will-change: transform;
  overflow-x: ${props => props.$isMobile?'scroll':'visible'};
  width: 100%;
  position: relative;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding: 5px 0 0 0;
  gap: 10px;
  box-sizing: border-box;

  &:active {
    cursor: grabbing; 
  }
  ${props=>props.$isMobile && 'padding-right: 12px'}

  @media screen and (min-width: 320px) and (max-width: 375px){
    gap: 15px;
    padding-bottom: 17px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    padding-bottom: 22px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    padding-bottom: 26px;
  }
  @media screen and (min-width: 768px){
    padding-bottom: 30px;
  }
`;

//span para animação
export const Span = styled.span`
    position: absolute;
    top: 20%;
    right: 20px;
    z-index: 2;
    border-radius: 50%;
    padding: 15px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgb(155, 139, 227);
    font-size: 1.7em;
    border: 2px solid rgb(176, 130, 232);
    color: rgb(57, 12, 119);
    background-color: rgba(209, 196, 241, 0.799);
    rotate: 15deg;
    will-change: transform;
    /*animation: 
        aparecer 500ms linear 0s, 
        rolarDedo 1.1s linear 500ms, 
        desaparecer 500ms linear 1.6s;*/
    display: none;
`;

export const DivCat = styled.div`
    min-width: 101px;
    max-width: 101px;
    height: 110px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex: auto;
    border-radius: 5px;
    padding-top: 7px;

    ${props => props.$selected && 
    `background-color: rgb(255, 255, 255);
     border-radius: 8px;
     border: 1px solid rgb(151, 151, 151);
     box-shadow: 0px 0px 2px rgb(186, 186, 186);}
    `}
`;

export const ImgStyled = styled.img`
  height: 40px;
  width: 40px;
  background-color:rgb(255, 83, 83);
  border-radius: 47%;
  filter: contrast(1.7) saturate(1.8);
  transition: all 0.32s ease;
  padding: 4px;
  /* box-shadow: 0px 0px 2px rgb(91, 91, 91); */

  @media screen and (min-width: 320px) and (max-width: 375px){
    width: 39px;
    height: 39px;
    padding: 3px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    width: 41px;
    height: 41px;
    padding: 3px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    width: 42px;
    height: 42px;
  }
  @media screen and (min-width: 768px){
    width: 43px;
    height: 43px;
  }
`;

export const DivNameSection = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
`;

export const PStyled = styled.p`
  font-family: "Quicksand",Arial,sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 0.92em;
  letter-spacing: 0.5px;
  margin: 0;
`;