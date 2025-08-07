import { PStyled, H2Styled } from "./ComponentsOptionSection";
import styled from "styled-components";

const LocalPStyled = styled(PStyled)`
  margin-bottom: 8px;
  text-align: left;
  max-width: none;
`;

export default function AboutTheWebsite() {
  return (
    <>
      <H2Styled style={{ marginBottom: "18px" }}>Importante dizer</H2Styled>
      <LocalPStyled>
        Esse projeto{" "}
        <strong style={{ fontWeight: 600 }}>
          não é um trabalho de Inteligencia artificial
        </strong>{" "}
        feito por um gerador de sites como o Lovable nem começou com uma
        interface inicial pronta feita por IA.{" "}
        <strong style={{ fontWeight: 600 }}>
          Os componentes e funções foram feitos um de cada vez
        </strong>
        , usando IA, mas tudo de modo manual. Também não é uma cópia de um
        projeto disponível no GitHub; longe disso, é um projeto original e
        personalizado que usa{" "}
        <a
          href="https://play.google.com/store/apps/details?id=inovatech.mercafacil.app.jb"
          target="_blank"
        >
          este app
        </a>{" "}
        como referencia visual.
      </LocalPStyled>
      <LocalPStyled>
        Quero dizer, com isso, que conheço de verdade os conceitos e as regras
        das tecnologias que utilizei.
      </LocalPStyled>
      <br />
      <H2Styled style={{ marginBottom: "18px" }}>
        Funções importantes para conferir no repósitorio
      </H2Styled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>CartContext.jsx:</strong> tem a
        função principal: anotar no carrinho os produtos que o cliente
        adicionou.
      </LocalPStyled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>UseScrollX.jsx:</strong> é um hook
        personalizado feito para as divs da pagina inicial, ele inpede o abrir
        produto em tela cheia e os eventos nos botões se o container estiver
        sendo rolado lateralmente. Além disso, no caso de mouse, a rolagem é
        feita por ele aplicando scrollLeft dinamicamente.
      </LocalPStyled>
      <br />
      <H2Styled style={{ marginBottom: "18px" }}>Repósitorio</H2Styled>
      <LocalPStyled>
        Link do repositório:{" "}
        <a
          target="_blank"
          href="https://github.com/LeonardoSouzaBento/sup-online-react"
          style={{ textDecoration: "none" }}
        >
          acessar GitHub.{" "}
        </a>{" "}
      </LocalPStyled>
      <br />

      <H2Styled style={{ marginBottom: "18px" }}>Descrição</H2Styled>
      <LocalPStyled>
        Este é um site de e-commerce simulado feito em React que iniciou em
        08/04/2025.
      </LocalPStyled>
      <br />

      <H2Styled style={{ marginBottom: "18px" }}>Tecnologias usadas</H2Styled>
      <LocalPStyled>
        <strong style={{ fontWeight: 600 }}>
          Styled Components, useContext e useNavigate, que
        </strong>{" "}
        leva à página do Carrinho, à página de pesquisa e à página de Mais
        Opções.
      </LocalPStyled>
      <br />

      <H2Styled style={{ marginBottom: "18px" }}>Detalhes</H2Styled>
      <LocalPStyled>
        Os produtos do carrinho ficam armazenados no localStorage. Desse modo,
        para o componente ProductItem atualizar seu estado de quantidade, que é
        local, ele pesquisa no carrinho pela quantidade do produto que está
        nele. Isso é feito na montagem.
      </LocalPStyled>
      {/* <LocalPStyled>
        A quantidade do ProductItem corresponde a quantidade local de
        ProductInFull por meio de um estado global. Ele guarda o id do produto a
        quantidade de ProductInFull. Essa quantidade é repassada para o
        ProductItem com id corresponde, acionado o useEffect.
      </LocalPStyled> */}
      <LocalPStyled>O BackEnd ainda é inexistente.</LocalPStyled>
      <LocalPStyled>As imagens vem de links da internet.</LocalPStyled>
    </>
  );
}
