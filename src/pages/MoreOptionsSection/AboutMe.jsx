import { useState } from "react";
import styled from "styled-components";
import {
  PStyled,
  H1Styled,
  H2Styled,
  PButtonStyled,
} from "./ComponentsOptionSection";

const DivPButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 22px;
  margin-bottom: 22px;

  @media screen and (max-width: 387px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const DivReferentMidea = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 430px) {
    border-radius: 0px;
  }
`;

const DivImgStyled = styled.div`
  width: 100%;
  height: 310px;
  position: relative;
  background-color: #dbfff4;
  border-radius: 6px;
  ${(props) => props.$painting && "max-height: 290px;"};

  @media screen and (max-width: 430px) {
    border-radius: 0px;
  }
`;

const ImgStyled = styled.img`
  display: block;
  width: 100%;
  max-width: 340px;
  height: 100%;
  margin: auto;
  object-fit: cover;
  object-position: center;
  ${(props) => props.$hue && "filter: grayscale(0.2) contrast(1.1);"}

  @media screen and (max-width: 374px) {
    width: 320px;
  }
`;

const previousWork = [
  "Pintor na Prefeitura de Frutal",
  "Pintor de Fachadas Comerciais",
  "Ilustrador Digital Freelancer",
];

const AboutMe = () => {
  const [buttonSelected, setButtonSelected] = useState(0);

  const greetings = ["Olá, bom dia", "Olá, boa tarde!", "Olá, boa noite!"];
  const hour = new Date().getHours();
  let greeting = "";

  if (hour >= 5 && hour < 12) {
    greeting = greetings[0]; // Bom dia
  } else if (hour >= 12 && hour < 18) {
    greeting = greetings[1]; // Boa tarde
  } else {
    greeting = greetings[2]; // Boa noite
  }

  return (
    <>
      <H1Styled>{greeting}</H1Styled>
      <PStyled $moreWidth={true}>
        Meu nome é <strong>Leonardo Souza Bento. </strong>
        Estou cursando Engenharia de Software desde março de 2023. Estou
        procurando um trabalho como desenvolvedor front-end junior (apenas
        trabalho remoto).
      </PStyled>

      <br />
      <H2Styled>Contato</H2Styled>

      <PStyled>
        Celular: 34 98412 5832 <br />
        Cidade: Frutal (MG) <br />
        Email: bentosouzaleonardo@gmail.com <br />
      </PStyled>

      <br />

      <H2Styled>Conhecimentos futuros</H2Styled>
      <PStyled $mb={true}>
        Redux • Tailwind • Typescript • Express • Firebase
        <br />
      </PStyled>

      <H2Styled>Conhecimentos atuais</H2Styled>
      <PStyled>
        React • StyledComponents • HTML • CSS • Javascript
        <br />
      </PStyled>
      <br />
      <H2Styled $cv={true}>Historico proffisional (relacionado)</H2Styled>

      <DivPButtons>
        {previousWork.map((e, i) => (
          <PButtonStyled
            key={i}
            onClick={() => {
              setButtonSelected(i);
            }}
            $buttonSelected={buttonSelected == i}
          >
            {e}
          </PButtonStyled>
        ))}
      </DivPButtons>

      <DivReferentMidea>
        {buttonSelected == 0 && (
          <>
            <DivImgStyled $painting={true} $src={"sobre_mim/pintando2.gif"}>
              <ImgStyled src="sobre_mim/pintando2.gif" $hue={true} />
            </DivImgStyled>

            <DivImgStyled $painting={true} $src={"sobre_mim/pintando1.gif"}>
              <ImgStyled src="sobre_mim/pintando1.gif" $hue={true} />
            </DivImgStyled>
          </>
        )}

        {buttonSelected == 1 && (
          <>
            <DivImgStyled $src={"sobre_mim/pintura1.jpg"}>
              <ImgStyled src="sobre_mim/pintura1.jpg" />
            </DivImgStyled>

            <DivImgStyled $src={"sobre_mim/pintura.jpg"}>
              <ImgStyled src="sobre_mim/pintura.jpg" />
            </DivImgStyled>
          </>
        )}

        {buttonSelected == 2 && (
          <DivImgStyled $src={"sobre_mim/ilustracao_compressed.png"}>
            <ImgStyled src="sobre_mim/ilustracao_compressed.png"></ImgStyled>
          </DivImgStyled>
        )}
      </DivReferentMidea>
    </>
  );
};

export default AboutMe;
