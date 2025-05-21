import styled from "styled-components";

const DivLabelPromosStyled = styled.div`
  width: auto;
  max-width: 400px;
  margin: auto;
  height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  /* box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.21);
  border: 1px solid rgb(151, 151, 151); */
  
  @media screen and (min-width: 320px) and (max-width:400px){
    border-radius: 0px;
  }
`;

// const DivBackgroundStyled = styled.div`
//   height: 100%;
//   width: auto;
//   flex: auto;
//   /* background: ${props=>props.$position==0 ?'linear-gradient(to left, red, #F0C2C2);':
//   'linear-gradient(to right, red, #F0C2C2);'}; */
// `;

const DivPLabelStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const PLabelStyled = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 500;
  color:rgb(100, 10, 13);
  width: 100%;
  margin: auto;
  text-align: center;
  /* letter-spacing: 0.69px; */
  padding-bottom: 1px;

  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1.18em;
  }
  @media screen and (min-width: 375px) and (max-width:576px){
    font-size: 1.25em;
  }
  @media screen and (min-width: 577px) and (max-width:768px){
    font-size: 1.27em;
  }
  @media screen and (min-width: 769px) and (max-width:992px){
    font-size: 1.31em;
  }
  @media screen and (min-width: 993px) and (max-width:1200px){
    font-size: 1.33em;
  }
  @media screen and (min-width: 1201px){
    font-size: 1.35em;
  }

`;

const LabelPromos = () => {
  return (
    <DivLabelPromosStyled>
        <DivPLabelStyled>
            <PLabelStyled>Promoções  |  Mais vendidos</PLabelStyled>
        </DivPLabelStyled>
    </DivLabelPromosStyled>
  )
}

export default LabelPromos