import { useEffect, useState, useRef } from "react";
import styled from "styled-components"
import { PStyled, H1Styled, PButtonStyled } from "./ComponentsOptionSection"

const H2Styled = styled.h2`
  font-size: 1.1em;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-bottom: 12px;

  @media screen and (min-width: 320px) and (max-width: 374px) {
    font-size: 1.48em;
  }
  @media screen and (min-width: 375px) and (max-width: 576px) {
    font-size: 1.5em;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    font-size: 1.51em;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    font-size: 1.52em;
  }
  @media screen and (min-width: 993px) and (max-width: 1200px) {
    font-size: 1.53em;
  }
  @media screen and (min-width: 1201px) {
    font-size: 1.54em;
  }
`;

const DivPButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 22px;
  margin-bottom: 18px;

  @media screen and (max-width: 387px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const PLineStyled = styled.p`
  margin-bottom: 9px;
  color: rgb(152, 152, 152);
  ${props => props.$final && 'margin-bottom: 12px;'}
  ${props => props.$final && 'color: rgb(117, 117, 117);'}
`;

const DivReferentMidea = styled.div`
  width: 100%;
  height: 315px;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 20px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 630px;
    gap: 15px;
  }
`;

const DivImgStyled = styled.div`
  width: 100%;
  max-width: 340px;
  max-height: 310px;
  ${props => props.$painting && 'max-height: 290px;'};
  overflow: hidden;
  border-radius: 4px;
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.49);
  outline: 1px solid rgb(202, 202, 202);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 882px) {
    height: 310px;
    max-width: 310px;
  }
`;

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  ${props => props.$hue && 'filter: grayscale(0.8) contrast(1.1) opacity(0.96);'}
`;


const previousWork = [
  'Pintor na prefeitura de Frutal',
  'Pintor de fachadas comerciais',
  'Ilustrador digital freelancer'
];



const AboutMe = () => {
  const [buttonSelected, setButtonSelected] = useState(0);
  
  const greetings = ['Olá, bom dia','Olá, boa tarde!','Olá, boa noite!'];
  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = greetings[0]; // Bom dia
  } else if (hour >= 12 && hour < 18) {
    greeting = greetings[1]; // Boa tarde
  } else {
    greeting = greetings[2]; // Boa noite
  }

  return (
    <>
      <H1Styled >{greeting}</H1Styled>
      <PStyled>
        Meu nome é <strong>Leonardo Souza Bento. </strong>
        Estou cursando Engenharia de Software desde março de 2023.
        Estou procurando um estágio como desenvolvedor web junior (apenas estágio remoto).
      </PStyled>
      <PLineStyled>____________________________________</PLineStyled>

      <H2Styled>Contato</H2Styled>

      <PStyled>
        Celular: 34 98412 5832 <br/>
        Cidade: Frutal (MG) <br/>
        Email: bentosouzaleonardo@gmail.com <br/>
      </PStyled>
      <PLineStyled>____________________________________</PLineStyled>
      
      <H2Styled>Conhecimentos futuros</H2Styled>
      <PStyled $monospace={true}>Redux, Tailwind, Typescript, Express, Firebase...<br/></PStyled>

      <H2Styled>Conhecimentos atuais</H2Styled>
      <PStyled $monospace={true}>React, StyledComponents, HTML, CSS, Javascript...<br/></PStyled>
      <PLineStyled $final={true}>_____________________________________</PLineStyled>

      <H2Styled $cv={true}>Historico proffisional (relacionado)</H2Styled>

      <DivPButtons>
        {previousWork.map((e, i)=>(
          <PButtonStyled key={i} onClick={()=>{setButtonSelected(i)}} $buttonSelected={buttonSelected==i}>{e}</PButtonStyled>
        ))}
      </DivPButtons>
        
      <DivReferentMidea>
        
        {buttonSelected==0 && (<>
          <DivImgStyled $painting={true}>
            <ImgStyled src="sobre_mim/pintando1.gif" $hue={true}/>
          </DivImgStyled>

          <DivImgStyled $painting={true}>
            <ImgStyled src="sobre_mim/pintando2.gif" $hue={true}/>
          </DivImgStyled>
        </>)}
        
        {buttonSelected==1 && (<>
          <DivImgStyled>
            <ImgStyled src="sobre_mim/pintura1.jpg"/>
          </DivImgStyled>
          
          <DivImgStyled>
            <ImgStyled src="sobre_mim/pintura.jpg"/>
          </DivImgStyled>
        </>)}
        
        {buttonSelected==2 && (
          <DivImgStyled>
            <ImgStyled src="sobre_mim/ilustracao_compressed.png"></ImgStyled>
          </DivImgStyled>
        )}
      </DivReferentMidea>
    </>
  )
}

export default AboutMe