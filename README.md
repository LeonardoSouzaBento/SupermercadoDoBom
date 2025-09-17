Acesse o site pelo link: https://supermercadodobom.netlify.app

***Descrição do Projeto***

O "Supermercado do Bom" é uma aplicação de página única (SPA) que simula a experiência de um supermercado online. O objetivo é demonstrar a construção de uma aplicação web moderna com diversas funcionalidades interativas e possibilidade de manipulação de dados em tempo real.


***Tecnologias Utilizadas***
O projeto foi desenvolvido com as seguintes tecnologias:

Frontend: React, para a construção da interface de usuário.

Estilização: Styled Components, para uma estilização modular e com escopo.

APIs e Serviços:

Axios, para requisições HTTP.

Firebase Client SDK, para integração com serviços do Google.

Backend como Serviço (BaaS):

Firebase Firestore, para o banco de dados NoSQL e dados em tempo real.

Firebase Authenticator, para gerenciamento de autenticação de usuários (login com Google, e-mail/senha e anônimo).


***Páginas Principais***
O site contém as seguintes rotas, acessíveis diretamente pelo link https://supermercadodobom.netlify.app[/nome-da-pagina]:

 / - Página Inicial: Exibe as maiores ofertas e os produtos em destaque.

 /fazer-login - Permite o acesso com conta Google, e-mail e senha, ou de forma anônima.

 /buscar-produtos - Oferece uma interface para pesquisa de produtos.

 /meu-carrinho - Exibe a lista de produtos adicionados para a compra atual.

 /minha-conta - Para visualizar e atualizar as informações pessoais e de login.

 /meus-pedidos - Mostra o pedido atual e um histórico de compras anteriores.

 /sobre - Contém informações sobre o site e seu autor.


***Funcionalidades Principais***

Sugestões de Pesquisa: Ao interagir com a barra de busca, o usuário recebe sugestões que agilizam a localização de produtos. Em dispositivos móveis, uma leve rolagem para cima após o clique na barra de pesquisa permite a visualização dessas sugestões, que poderiam ser ocultadas pelo teclado.

Visualização de Produto em Tela Cheia: O clique na imagem de um produto no carrossel de anúncios abre um modal em tela cheia. Isso permite ao usuário ver detalhes do produto com mais zoom, verificar informações adicionais (como o subtotal) e adicionar o item ao carrinho.

Navegação por Categorias e Cards de Produto: A seção de categorias organiza os produtos de forma intuitiva, e cada card de produto inclui botões de ação para facilitar a adição ao carrinho.

Fluxo de Compra Simplificado: Na página do carrinho, o botão "Ver Tudo" revela o botão "Continuar", mostrando o fluxo de compra completo, o que é especialmente útil para novos usuários.

Autenticação Simplificada: A opção de "Login com Google" acelera o processo de registro, preenchendo automaticamente informações como nome, e-mail e foto de perfil.

Preenchimento de Endereço Automático: Na seção "Minha Conta > Editar endereço", os botões "Pegar Minha Localização" e "Digite Seu CEP" minimizam a necessidade de digitação manual do endereço, oferecendo conveniência e precisão.
