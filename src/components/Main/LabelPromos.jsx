import styled from "styled-components";

const DivLabelPromosStyled = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  margin-bottom: 28px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  gap: 8px;

`;

const PStyled = styled.p`
  font-weight: ${props => props.id ? '700': '500'};
  font-family: "Quicksand", sans-serif;
  color: ${props => props.id ? 'rgb(69, 69, 69)': 'rgb(82, 82, 82)'};
  text-align: center;

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
      <PStyled id="strong">Mais vendidos por categoria,</PStyled>
      <PStyled>os produtos básicos ficam aqui.</PStyled>
    </DivLabelPromosStyled>
  )
}

export default LabelPromos