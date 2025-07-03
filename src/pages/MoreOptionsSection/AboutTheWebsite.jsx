import { PStyled, H1Styled, H2Styled } from "./ComponentsOptionSection";
import styled from "styled-components";

const LocalPStyled = styled(PStyled)`
  margin-bottom: 4px;
  text-align: left;
  max-width: none;
`;

export default function AboutTheWebsite() {
  return (
    <>
      <H1Styled>Resumo</H1Styled>
      <H2Styled>Funções importantes para conferir no repósitorio</H2Styled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>CartContext.jsx:</strong> anota os
        produtos que o cliente quer obter. Portanto, tem a função principal.
      </LocalPStyled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>UseScrollX.jsx:</strong> um hook
        personalizado que rola as divs da página inicial com mouse aplicando
        scrollLeft dinamicamente.
      </LocalPStyled>
      <br />
      <H2Styled>Repósitorio</H2Styled>
      <LocalPStyled>
        A cópia está aqui:{" "}
        <a
          target="_blank"
          href="https://github.com/LeonardoSouzaBento/supermercado-do-bom"
          style={{ textDecoration: "none" }}
        >
          ver no GitHub.{" "}
        </a>{" "}
        O repósitorio original é privado.{" "}
      </LocalPStyled>
      <br />

      <H2Styled>Descrição</H2Styled>
      <LocalPStyled>
        Este é um site de e-commerce simulado feito em React que iniciou em
        08/04/2025.
      </LocalPStyled>
      <br />

      <H2Styled>Tecnologias usadas</H2Styled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>
          Styled Components, useContext e useNavigate,
        </strong>{" "}
        levando a Cart e a SearchAction, as duas "páginas" do site.
      </LocalPStyled>
      <br />

      <H2Styled>Detalhes</H2Styled>
      <LocalPStyled>
        O BackEnd ainda é inexistente.
      </LocalPStyled>
      <LocalPStyled>
        As imagens vem de links da internet.
      </LocalPStyled>
    </>
  );
}
