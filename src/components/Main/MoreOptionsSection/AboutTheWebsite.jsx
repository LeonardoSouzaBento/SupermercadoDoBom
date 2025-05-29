import { PStyled, PButtonStyled,H1Styled } from "./ComponentsOptionSection"
import styled from "styled-components";

const DivGenericStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: max-content;
  align-items: center;
  margin-bottom: 16px;
`;


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

export default function AboutTheWebsite ({selectedButtonCode, setSelectedButtonCode}) {

  return (
    <>
        <H1Styled>Resumo</H1Styled>
        <PStyled>
          <strong>Nota do autor:</strong><br/>
          O repósitorio gitHub é privado.
          <br/>
        </PStyled>

        <PStyled>
          Esse site de e-commerce simulado feito em React iniciou em 08/04/2025. Ele é feito com <strong>Styled Components, useContext e useNavigate</strong> levando a Cart e a SearchAction, as duas "páginas" do site. <br/>
          A rolagem das divs em desktops é feita por um hook próprio que aplica scrollLeft.
        </PStyled>
    
        <DivGenericStyled>
          <PStyled $variant={'site'}>Você pode ver o código mais importante abaixo, ele está em </PStyled>
          <PButtonStyled $variant={'site'}
          $buttonSelected={selectedButtonCode === 0}
          onClick={() => setSelectedButtonCode(0)}>
            CartContext.jsx
          </PButtonStyled>
          <DivGenericStyled>
            <PStyled $variant={'site'}>e em</PStyled>
            <PButtonStyled $variant={'site'}>useScrollX</PButtonStyled>
            <PStyled $variant={'site'}>(importante para desktops).</PStyled>
          </DivGenericStyled>
        </DivGenericStyled>
          <br/>

        <DivGenericStyled>
          <PStyled $variant={'site'}>• Arquivo</PStyled>
          <PButtonStyled $variant={'site'} 
          $buttonSelected={selectedButtonCode === 1}
          onPointerDown={() => setSelectedButtonCode(1)}>
            routes
          </PButtonStyled>
          <PStyled $variant={'site'}> para confirmar apenas:</PStyled>
        </DivGenericStyled>

        <DivGenericStyled>
          <PStyled>•</PStyled>
          <PButtonStyled 
          $variant={'site'}
          $buttonSelected={selectedButtonCode === 2}
          onPointerDown={() => setSelectedButtonCode(2)}>
            Organização das pastas e do projeto:
          </PButtonStyled>
          <br/>
        </DivGenericStyled>

        <PStyled>
        • O BackEnd é inexistente. As imagens vem de links da internet.
        </PStyled>
    </>

  )
}