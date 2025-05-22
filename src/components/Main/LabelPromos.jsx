import styled from "styled-components";

const DivLabelPromosStyled = styled.div`
  width: auto;
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 28px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  gap: 8px;
  @media screen and (min-width: 320px) and (max-width:400px){
    border-radius: 0px;
  }
`;

const PMainStyled = styled.p`
  font-weight: 600;
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  color: rgb(185, 17, 17);

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

const PSubStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color:rgb(71, 71, 71);
  width: 100%;
  margin: auto;
  text-align: center;
  padding-bottom: 1px;

  @media screen and (min-width: 320px) and (max-width:374px){
    font-size: 1em;
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
    font-size: 1.28em;
  }

`;

const LabelPromos = () => {
  return (
    <DivLabelPromosStyled>
      <PMainStyled>Promoções | Mais vendidos</PMainStyled>
    </DivLabelPromosStyled>
  )
}

export default LabelPromos