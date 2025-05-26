import styled, {css} from "styled-components";

export const BodyStyled = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background-color: #3C3C3C;
`;

export const WrapperStyled = styled.div`
  width: 80%;
  max-width: 700px;
  padding:30px 28px;
  padding-top: 24px;
  padding-bottom: 36px;
  border-radius: 8px;
  background-color: rgb(237, 237, 237);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.43);
  margin-bottom: 100px;
`;

export const NavOptionsStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 40px;
  gap: 12px;
  margin-bottom: 24px;

  @media screen and (min-width: 320px) and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const DivNameSpanStyled = styled.div`
  height: 40px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  flex: 1 0 auto;
  background-color: ${props => props.$buttonSelected ? 'rgb(255, 255, 255)' : 'rgb(43, 37, 37)'};
  ${props => props.$buttonSelected && ' border: 1px solid rgb(180, 180, 180);'}
  ${props => props.$buttonSelected && 'box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);'}
  gap: 4px;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 430px) {
    width: 100%;
  }
  @media screen and (min-width: 430px) and (max-width: 671px) {
    max-width: 50%;
  }
  @media screen and (min-width: 577px){
    padding-left: 8px;
  }
`;

export const DivNameSpanFalseStyled = styled.div`
  visibility: hidden;
  height: 40px;
  min-width: calc(50% - 14px);

  @media screen and (max-width: 426px) {
    display: none;
  }
`;

export const POptionStyled = styled.p`
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  font-weight: ${props => props.$buttonSelected ? '500' : '400'};
  color: white;
  ${props => props.$buttonSelected && 'color: rgb(0,0,0);'}

  padding-right: 19px;
  cursor: pointer;
  user-select: none;

  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.06em;
  }
  @media screen and (min-width: 993px){
    font-size: 1.065em;
  }
`;

export const DivSpanStyled = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanStyled = styled.span`
  color: white;
  ${props => props.$buttonSelected && 'color: black;'}
  font-size: ${props => props.$buttonSelected ? '1.7em' : '1.5em'};
  font-weight: 300;

  font-variation-settings: 'FILL' 1;
`;

export const DivContentStyled = styled.div`

`;

export const PStyled = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  margin-bottom: 16px;
  ${props => props.$monospace && 'font-family: "Roboto Mono", monospace;'}

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.13em;
    line-height: 1.40em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.13em;
    line-height: 1.40em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.15em;
    line-height: 1.405em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.155em;
    line-height: 1.41em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.158em;
    line-height: 1.415em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.16em;
    line-height: 1.42em;
  }
`;

export const PButtonStyled = styled(PStyled)`
  max-width: 350px;
  padding: 5px 16px;
  background-color: rgb(216, 216, 216);
  border: 1px solid rgb(155, 155, 155);
  ${props => props.$buttonSelected && 'background-color: rgb(26, 26, 26);'}
  ${props => props.$buttonSelected && 'color: white;'}
  margin-bottom: 0px;
  border-radius: 4px;
  letter-spacing: 0.7px;
  user-select: none;
  cursor: pointer;
  flex: auto;
  box-sizing: border-box;

  @media screen and (max-width: 740px) {
    min-width: 100%;
  }
`;

export const H1Styled = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 200;
  margin-bottom: 15px;
  /* color: rgb(79, 79, 79); */
  
  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.9em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 2em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 2.05em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 2.1em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 2.12em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 2.14em;
  }
`;

