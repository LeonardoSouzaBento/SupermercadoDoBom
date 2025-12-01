import { useState } from "react";
import styled, { css } from "styled-components";
import { PStyled, H2Styled } from "../StylizedTags";

const ContainerDivPButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  margin-bottom: 32px;

  @media screen and (max-width: 387px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const DivH3Buttons = styled.div`
  min-width: 100%;
  height: 48px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--border);
  border-radius: 4px;

  ${(props) =>
    props.$buttonSelected &&
    css`
      background-color: rgba(244, 244, 244, 1);
      border: 1px solid var(--border);
    `}
  @media screen and (max-width: 430px) {
    padding: 9px 16px;
  }
`;

const H3ButtonStyled = styled.h3`
  width: max-content;
  letter-spacing: 0.7px;
  text-align: left;
  font-weight: 700;
  user-select: none;
  margin-bottom: 0px;
  font-family: var(--h-font);
  color: var(--purple);
  
  
  
  
  
  
`;

const DivReferentMidea = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  position: relative;

  @media screen and (min-width: 577px) {
    width: 380px;
    margin: auto;
  }
`;

const DivImgStyled = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

const ImgStyled = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: cover;
  border-radius: 16px;
  object-position: center;
  position: relative;
  ${(props) =>
    props.$hue &&
    css`
      filter: saturate(1.2) brightness(1.05) contrast(1.05);
    `}
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
      <H2Styled>{greeting}</H2Styled>
      <PStyled $moreWidth={true}>
        Meu nome é{" "}
        <strong style={{ color: "var(--dark-purple)" }}>
          Leonardo Souza Bento.{" "}
        </strong>
        Estou procurando um trabalho como desenvolvedor front-end junior
        (preferencialmente trabalho remoto). Venho de familia pobre e vivo numa
        cidade do interior da Bahia, por isso peço essa oportunidade. O curso de
        Engenharia de Software que faço desde março de 2023 me confere
        conhecimentos basilares e me habilita a vagas de estágio. E esse site,
        mostra meu conhecimento em programação.
      </PStyled>
      <br />
      <H2Styled>Conhecimentos</H2Styled>
      <PStyled>
        React • StyledComponents • HTML • CSS • Javascript
        <br />
      </PStyled>

      <PStyled $mb={true}>
        Typescript • Express • Firebase • Redux • Tailwind <br /> (Estou
        trabalhando no BackEnd do site nesse momento — para esclarecer, o
        projeto é fictício)
      </PStyled>
      <br />
      <H2Styled>Contato</H2Styled>

      <PStyled>
        Celular: 34 98412 5832 <br />
        Cidade: Caém (BA) <br />
        Email: bentosouzaleonardo@gmail.com <br />
      </PStyled>
      <br />
      <H2Styled $cv={true}>Historico proffisional (relacionado)</H2Styled>

      <ContainerDivPButtons>
        {previousWork.map((e, i) => (
          <DivH3Buttons
            key={i}
            onClick={() => {
              setButtonSelected(i);
            }}
            $buttonSelected={buttonSelected == i}
          >
            <H3ButtonStyled>{e}</H3ButtonStyled>
          </DivH3Buttons>
        ))}
      </ContainerDivPButtons>

      <DivReferentMidea>
        {buttonSelected == 0 && (
          <DivImgStyled $painting={true} $src={"sobre_mim/pintando2.gif"}>
            <ImgStyled src="sobre_mim/pintandoParede.png" $hue={true} />
          </DivImgStyled>
        )}

        {buttonSelected == 1 && (
          <DivImgStyled $src={"sobre_mim/pintura1.jpg"}>
            <ImgStyled src="sobre_mim/pintura1.jpg" />
          </DivImgStyled>
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


