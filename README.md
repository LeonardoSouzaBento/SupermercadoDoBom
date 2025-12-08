🔗 **[Acesse a aplicação](https://supermercadodobom.netlify.app)**

# Supermercado do Bom

[![Netlify Status](https://img.shields.io/badge/deploy-netlify-00C7B7?logo=netlify)](https://supermercadodobom.netlify.app)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-BaaS-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-CSS--in--JS-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)

> Uma aplicação de supermercado online moderna e interativa construída com React e Firebase

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Páginas e Rotas](#-páginas-e-rotas)
- [Funcionalidades](#-funcionalidades)
- [Como Executar](#-como-executar)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

O **Supermercado do Bom** é uma aplicação de página única (SPA) que simula a experiência completa de um supermercado online. O projeto demonstra a construção de uma aplicação web moderna com funcionalidades interativas avançadas e manipulação de dados em tempo real.

### Objetivo

Criar uma experiência de compra online intuitiva e eficiente, com recursos como:

- Autenticação de usuários
- Carrinho de compras em tempo real
- Histórico de pedidos
- Busca inteligente de produtos
- Gerenciamento de perfil e endereços

---

## 🛠 Tecnologias

### Frontend

- **React** - Biblioteca para construção da interface de usuário
- **Styled Components** - Estilização modular com CSS-in-JS
- **Axios** - Cliente HTTP para requisições

### Backend (BaaS)

- **Firebase Firestore** - Banco de dados NoSQL em tempo real
- **Firebase Authentication** - Gerenciamento de autenticação
  - Login com Google
  - Login com e-mail/senha
  - Login anônimo

### Deploy

- **Netlify** - Hospedagem e deploy contínuo

---

## 📄 Páginas e Rotas

Todas as rotas são acessíveis através de `https://supermercadodobom.netlify.app/[rota]`

| Rota               | Descrição                                         |
| ------------------ | ------------------------------------------------- |
| `/`                | Página inicial com ofertas e produtos em destaque |
| `/fazer-login`     | Autenticação (Google, e-mail/senha ou anônimo)    |
| `/buscar-produtos` | Interface de pesquisa de produtos                 |
| `/meu-carrinho`    | Lista de produtos adicionados ao carrinho         |
| `/minha-conta`     | Visualização e edição de informações pessoais     |
| `/meus-pedidos`    | Pedido atual e histórico de compras               |
| `/sobre`           | Informações sobre o projeto e autor               |

---

## ✨ Funcionalidades

### 🔍 Sugestões de Pesquisa Inteligente

Ao interagir com a barra de busca, o usuário recebe sugestões em tempo real que agilizam a localização de produtos. Em dispositivos móveis, uma leve rolagem para cima após o clique permite visualizar as sugestões que poderiam ser ocultadas pelo teclado.

### 🖼️ Visualização em Tela Cheia

Clique na imagem de um produto no carrossel para abrir um modal em tela cheia, permitindo:

- Visualização detalhada com zoom
- Informações adicionais (subtotal, descrição)
- Adição direta ao carrinho

### 🗂️ Navegação por Categorias

Organização intuitiva dos produtos por categorias, com cards interativos que facilitam a adição ao carrinho.

### 🛒 Fluxo de Compra Simplificado

Na página do carrinho, o botão "Ver Tudo" revela o fluxo completo de compra, guiando especialmente os novos usuários.

### 🔐 Autenticação Rápida

O "Login com Google" acelera o processo de registro, preenchendo automaticamente:

- Nome completo
- E-mail
- Foto de perfil

### 📍 Preenchimento Automático de Endereço

Na seção "Minha Conta > Editar endereço", recursos que minimizam a digitação manual:

- **Pegar Minha Localização** - Usa geolocalização do navegador
- **Digite Seu CEP** - Busca automática de endereço via CEP

---

## 🚀 Como Executar

```bash
# Clone o repositório
git clone https://github.com/LeonardoSouzaBento/SupermercadoDoBom.git

# Entre no diretório do frontend
cd SupermercadoDoBom/front-end

# Instale as dependências
npm install

# Execute o projeto
npm start
```

A aplicação estará disponível em `http://localhost:3000`

---

## 👤 Autor

**Leonardo Souza Bento**

- GitHub: [@LeonardoSouzaBento](https://github.com/LeonardoSouzaBento)
- LinkedIn: [Leonardo Souza Bento](https://linkedin.com/in/leonardo-souza-bento)

---

## 📝 Licença

Este projeto está sob a licença MIT, veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Desenvolvido por Leonardo Souza Bento
</div>
