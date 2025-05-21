import styled from "styled-components";

export const DivLabelPromosStyled = styled.div`
  width: 100%;
  max-width: 600px;
  /* margin: auto; */
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  overflow-y: hidden;
  background-color: red;
  /* rotate: -5deg; */
`;

const DivBackgroundStyled = styled.div`
  height: 100%;
  width: auto;
  flex: auto;
  /* background: ${props=>props.$position==0 ?'linear-gradient(to left, red, #F0C2C2);':
  'linear-gradient(to right, red, #F0C2C2);'}; */
`;

export const DivPLabelStyled = styled.div`
  height: 40px;
  width: max-content;
  display: flex;
  align-items: center;
  background-color: red;
`;

export const PLabelStyled = styled.p`
  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
  width: max-content;
  text-align: center;
  margin: auto;
  letter-spacing: 0.71px;

  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.22em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.23em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.25em;
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.27em;
  }
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.29em;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.31em;
  }

`;

const LabelPromos = () => {
  return (
    <DivLabelPromosStyled>
        <DivBackgroundStyled $position={0}/>
        <DivPLabelStyled>
            <PLabelStyled>Produtos em promoção</PLabelStyled>
        </DivPLabelStyled>
        <DivBackgroundStyled $position={1}/>
    </DivLabelPromosStyled>
  )
}

export default LabelPromos