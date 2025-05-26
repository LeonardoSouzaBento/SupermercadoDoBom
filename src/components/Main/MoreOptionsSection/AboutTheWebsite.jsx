import { PStyled, H1Styled, PButtonStyled } from "./ComponentsOptionSection"
import styled from "styled-components";

const CodeDisplay = () => {
  const codeContent = `
    routes.jsx
    import { Routes, Route } from "react-router-dom";
    import MainContent from "./components/Main/MainContent"
    import Cart from "./pages/Cart/Cart";
    import SearchAction from "./pages/SearchAction";

    const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<MainContent />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SearchAction" element={<SearchAction />} />
        </Routes>
    );
    };

    export default AppRoutes;
`;

  const escapedCode = codeContent
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return (
      <pre dangerouslySetInnerHTML={{ __html: `<code>${escapedCode}</code>` }}/>
  );
};


function folderOrganization() {
    return(
        <PStyled>
          A pasta Main tem quase toda a home. Tem as pastas AnnouncementSection, CategorySection, ProductSection (que é reaproveitado no carrinho e no retorno da pesquisa), e os arquivos PromoSection.jsx, OptionSection.jsx, WelcomeSection.jsx, HelpSection.jsx e CartContext.jsx. 
          <br/>
          Header... e Footer tem a barra inferior laranja que leva ao carrinho.
          <br/>
          As pastas estão assim:
          <br/>
          <pre>
            src/
                /components: Header, Main, Footer, CartContext.jsx

                /data: all_products.js, promo_products.js, products_by_category.js
            
                /pages: Cart, Home.js, SearchAction.js
                          | 
                          |--ComponentsCart.jsx---Cart.jsx
       
                /hooks: useScrollX
        
                /documents (notas.txt - etc...)
       
            main.jsx (que tem AppRoutes)
            routes.jsx
            index.html
            Outros...
            
            public/
                icons (icones das categorias - logo do supermercado)
                index.html
                ...
                
            outras pastas e arquivos padrão/...
          </pre>
        </PStyled>
    )
}

export default function AboutTheWebsite () {

  return (
    <>
        <H1Styled>Resumo</H1Styled>
        <PStyled>
            Esse projeto iniciou em 08/04/2025. É um site de e-commerce simulado feito em React. Usa Styled Components, useContext e useNavigate levando a Cart e a SearchAction, as duas 'páginas' do site**. <br/>
            O site tem um hook próprio para a rolar horizontalmente as divs da Home em desktops. Em dispositivos mobile a rolagem é nativa por 'overflow-x: scroll'. <br/>
            O BackEnd é inexistente. As imagens vem de links da internet.
            <br/>
            <PButtonStyled>Organização das pastas e do projeto:</PButtonStyled>
            <br/>
            <strong>Notas do autor:</strong><br/>
                O repósitorio gitHub desse projeto é privado (para manter a propriedade pessoal dele).
                <br/>
                Você pode ver o código mais importante abaixo, ele está em 
                <PButtonStyled>cartContext</PButtonStyled> e 
                <PButtonStyled>useScrollX.jsx</PButtonStyled>.
                <br/>
                **Arquivo <PButtonStyled>routes</PButtonStyled>, para confirmar apenas:
        </PStyled>

    </>
  )
}