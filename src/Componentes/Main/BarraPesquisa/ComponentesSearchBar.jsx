import styled, { css } from "styled-components";


export const ContainerForFormStyled = styled.div`
  width: 100%;
  padding-top: 13px;
  padding-bottom: 14px;
    ${props =>
    props.$copy===false &&
    css`
        position: absolute;
        top: 113px;
        z-index: 2;
    `}
`;

export const FormStyled = styled.form`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: ${props => props.$copy?'792px':'1180px'};
  margin: auto;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.17);
  ${props => props.$copy && 'box-shadow: none;'};
  position: relative;
  ${props =>
    props.$copy &&
    css`
      @media screen and (min-width: 993px) {
        margin: 0px;
        margin-left: 32px;
      }
    `}
`;

export const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  touch-action: auto;
  border-radius: 22px;
  border: 1px solid rgb(172, 172, 172);
  background-color: ${props => props.$copy ? 'rgb(255, 255, 255)' : 'white'};
  text-indent: 20px;
  font-weight: 400;
  font-size: 1em;
  letter-spacing: 0.71px;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  ${props => props.$copy && 'border: 1px solid rgb(184, 184, 184);'}

  &:focus{
    outline: none;
    box-shadow: none;
    background-color: white;
  }
  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.03em;
  }
  @media screen and (min-width: 769px){
    font-size: 1.04em;
  }

`;

export const DivSpanStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  padding-bottom: 2px;
  user-select: none;
  position: absolute;
  bottom: 0px;
  right: 8px;
  cursor: pointer;
`;

export const DivMsgStyled = styled.div`
  background-color: blue;
  height: max-content;
  width: max-content;
  border-radius: 6px;
  padding: 0px 16px;
  position: absolute;
  bottom: -52px;
  left: 0px;
  z-index: 4;

  @media screen and (min-width: 320px) and (max-width:374px){
   max-width: 260px;
   bottom: -72px;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    max-width: 308px;
    bottom: -72px;
  }
`;

export const PointedShapeStyed= styled.div`
  height: 12px;
  width: 12px;
  background-color: blue;
  rotate: 45deg;
  border: 4px;
  position: absolute;
  top: -6px;
  left: 16px;
`;

export const PMsgStyled = styled.p`
  color: white;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  padding: 12px 0px;

  @media screen and (min-width: 320px) and (max-width:374px){
   font-size: 1.055em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
     font-size: 1.07em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
     font-size: 1.11em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px){
     font-size: 1.13em;
  }
  @media screen and (min-width: 993px){
     font-size: 1.15em;
  }
`;

export const CompletionsDivStyled = styled.div`
  width: 90%;
  max-width: 90%;
  height: auto;
  position: absolute;
  top: 68px;
  left: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-flow: row wrap;
  background-color: white;
  border-radius: 8px;
  background-color: transparent;
  z-index: 1;

  @media screen and (min-width: 769px){
    justify-content: flex-start;
  }
  @media screen and (min-width: 1201px){
    left: 7.5%;
  }
`;

export const PStyled = styled.p`
  width: auto;
  padding: 9px 16px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(187, 187, 187);
  border-radius: 20px;
  text-transform: uppercase;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.17);

  @media screen and (min-width: 320px) and (max-width: 375px){
    font-size: 0.86em;
    line-height: 18px;
    letter-spacing: 1.01px;
    padding: 9px 12px;
  }
  @media screen and (min-width: 375px) and (max-width: 576px){
    font-size: 0.89em;
    line-height: 18px;
    letter-spacing: 1.05px;
    padding: 9px 12px;
  }
  @media screen and (min-width: 577px) and (max-width: 768px){
    font-size: 0.9em;
    line-height: 19px;
    letter-spacing: 1.06px;
  }
  @media screen and (min-width: 769px){
    font-size: 0.91em;
    line-height: 20px;
    letter-spacing: 1.06px;
  }
`;