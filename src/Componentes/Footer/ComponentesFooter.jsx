import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    height: 63px;
    width: 100%;
    position: sticky;
    bottom: 0;
    z-index: 4;
    box-shadow: 0px -2px 5px #00000032;
    padding: 0px 15px;
    box-sizing: border-box;

    @media screen and (min-width: 993px){
     display: none;
    }
`;

export const DivInicioStyled = styled.div`
    display: flex;
    height: 40px;
    min-width: 130px;
    max-width: 330px;
    justify-content: center;
    align-items: center;
    flex: 1 0;
`;
export const MyCartStyled = styled(DivInicioStyled)`

`;

export const DivPStyed = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 3px;
`;

export const PFooterStyled = styled.p`
    font-family: "Fira Sans", serif;
    font-weight: 400;
    width: max-content;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9em;
`;
export const SpanStyled = styled.span`
  font-size: 1.3em;
`;


export const CartDescStyled = styled(DivInicioStyled)`
  background-color: #C54B4B;
  color: white;
  border-radius: 7px;
  justify-content: space-between;
`;
export const PCartStyled = styled.p`
 font-family: "Open Sans", Arial, Helvetica, sans-serif;
 padding-right: 20px;
 padding-bottom: 3px;
`;

export const DivSpanCartStyled = styled.div`
  height: 40px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanCartStyled = styled.span`
   color: rgba(255, 255, 255, 0.71);
   font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
`;