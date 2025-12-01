import { PStyled, H2Styled } from "../StylizedTags";
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
        08/04/2025. <br /> Tem seis páginas: a Página Inicial, a página Minha
        Conta, a página Meus Pedidos, a página do carrinho, a de pesquisa e a
        página Sobre (para recrutadores).
      </LocalPStyled>
      <br />

      <H2Styled style={{ marginBottom: "18px" }}>Tecnologias usadas</H2Styled>
      <LocalPStyled>
        O site usa{" "}
        <strong style={{ fontWeight: 600 }}>Styled Components</strong> para CSS.
        <br />E tambem alguns recursos mais avançados de React:{" "}
        <strong style={{ fontWeight: 600 }}>useContext e useNavigate</strong>.
      </LocalPStyled>
      <br />

      <H2Styled style={{ marginBottom: "18px" }}>Detalhes</H2Styled>
      <LocalPStyled>
        Os produtos do carrinho ficam armazenados no localStorage para o
        componente ProductItem poder atualizar seu estado de quantidade local,
        que se perde entre renderizações. Sempre que esse componente monta, ele
        pesquisa no carrinho pela quantidade do seu produto (guardada no
        localStorage), e assim mantem seu estado local atualizado. Dessa forma,
        seja ele exibido na página inicial, na página de pesquisa, ou em outra
        página, o valor da quantidade daquele produto estará correto, em
        conformidade com a alteração feita pelo usuário.
      </LocalPStyled>
    </>
  );
}

