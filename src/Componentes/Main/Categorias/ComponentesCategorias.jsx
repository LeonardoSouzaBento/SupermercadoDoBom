import styled from "styled-components";

export const Div = styled.div`
    width: calc(100% - 20px);
    overflow-x: hidden;
    margin-left: 20px;
    position: relative;

    @media screen and (min-width: 320px) and (max-width: 375px){
      width: calc(100% - 7px);
      margin-left: 2px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      width: calc(100% - 13px);
      margin-left: 8px;
    }
    @media screen and (min-width: 577px) and (max-width: 1200px){
      width: calc(100% - 20px);
      margin-left: 15px;
    }
    @media screen and (min-width: 1201px){
      width: calc(100% - 42px);
      margin: auto;
    }
`;

export const Divf = styled.div`
    width: 100%;
    position: relative;
    -webkit-user-select: none; /* Para Safari */
    -ms-user-select: none; /* Para IE */
    user-select: none;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    padding: 5px;
    padding-bottom: 20px;
    position: relative;
    gap: 10px;
    box-sizing: border-box;

    Divf:active {
    cursor: grabbing; 
    }

    @media screen and (min-width: 320px) and (max-width: 375px){
     gap: 14px;
    }
    @media screen and (min-width: 375px) and (max-width: 576px){
      
    }
    @media screen and (min-width: 577px) and (max-width: 768px){
     
    }
    @media screen and (min-width: 768px){
     
    }
`;

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
    //esses estilos abaixo
    ${props => props.$selected && 
    `background-color: rgb(255, 255, 255);
    border-radius: 6px;
    border: 1px solid rgb(138, 138, 138);
    box-shadow: 0px 0px 2px rgb(186, 186, 186);}
    `}
`;

export const ImgStyled = styled.img`
  height: 40px;
  width: 40px;
  background-color: #DA1B21;
  border-radius: 50%;
  filter: brightness(0.84) contrast(2) brightness(2) saturate(0.8);
  transition: all 0.32s ease;
  padding: 4px;
  box-shadow: 0px 0px 3px rgb(112, 112, 112);

  @media screen and (min-width: 320px) and (max-width: 375px){
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    width: 41px;
    height: 41px;
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
  font-family: "Poppins",Arial,sans-serif;
  text-align: center;
  font-size: 0.85em;
  letter-spacing: 0.5px;
  margin: 0;
`;