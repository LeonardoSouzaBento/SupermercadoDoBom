import { PStyled, H1Styled, H2Styled } from "./ComponentsOptionSection";

export default function AboutTheWebsite() {
  return (
    <>
      <H1Styled>Resumo</H1Styled>

      <H2Styled>Funções importantes para conferir no repósitorio</H2Styled>
      <PStyled>
        <strong>CartContext.jsx:</strong> anota os produtos que o cliente quer
        obter. Portanto, tem a função principal{" "}
      </PStyled>
      <br />
      <PStyled>
        <strong>UseScrollX.jsx:</strong> um hook personalizado que rola as divs
        da página inicial com mouse aplicando scrollLeft dinamicamente.
      </PStyled>
      <br />

      <H2Styled>Repósitorio</H2Styled>
      <PStyled>
        A cópia (porque o original me pertence) está aqui:{" "}
        <a
          target="_blank"
          href="https://github.com/LeonardoSouzaBento/supermercado-do-bom"
          style={{textDecoration:"none"}}
        >
          Ver repósitorio no GitHub.{" "}
        </a>
      </PStyled>
      <br />

      <H2Styled>Descição</H2Styled>
      <PStyled>
        Este é um site de e-commerce simulado feito em React que iniciou em
        08-04-2025.
      </PStyled>
      <br />

      <H2Styled>Tecnologias usadas</H2Styled>
      <PStyled>
        <strong>Styled Components; useContext e useNavigate</strong> levando a
        Cart e a SearchAction, as duas "páginas" do site.
      </PStyled>
      <br />

      <H2Styled>Detalhes</H2Styled>
      <PStyled>
        O BackEnd é inexistente. As imagens vem de links da internet.
      </PStyled>
    </>
  );
}
