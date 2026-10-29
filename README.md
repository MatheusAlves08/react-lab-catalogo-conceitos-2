# Catalogo de Produtos - React Lab

Aplicação React desenvolvida para demonstrar os conceitos fundamentais de front-end com React: **State e useState**, **Formulários**, **useEffect**, **Consumo de APIs** e **React Router**.

## Descrição

Catálogo de produtos consumindo a FakeStoreAPI. O usuário pode navegar pela lista de produtos, visualizar detalhes de um item específico e cadastrar novos produtos por meio de um formulário. A navegação entre as páginas é feita com React Router, sem recarregar o navegador.

## Funcionalidades

- **Listagem de produtos**: exibe os produtos consumidos da API em um grid responsivo.
- **Detalhe do produto**: página dedicada com imagem, descrição, categoria e preço do produto selecionado.
- **Cadastro de produto**: formulário controlado para enviar um novo produto para a API.
- **Navegação entre páginas**: roteamento cliente-side com React Router (início, produtos, detalhe e cadastro).
- **Tratamento de estados de carregamento e erro**: mensagens de carregamento e erro durante o consumo da API.

## Conceitos utilizados

| Conceito | Onde é aplicado |
|----------|-----------------|
| **State e useState** | Gerenciamento de estado local (lista de produtos, formulário, carregamento, erro) em `Home`, `ProductDetail` e `AddProduct`. |
| **Formulários** | Formulário controlado de cadastro de produto em `AddProduct.jsx`, com `handleChange` e `handleSubmit`. |
| **useEffect** | Busca de dados da API ao montar o componente e limpeza com `abort controller` pattern (variável `ignorar`) em `Home` e `ProductDetail`. |
| **Consumo de APIs** | Requisições `fetch` para `https://fakestoreapi.com/products` (listagem, detalhe por ID e criação via POST). |
| **React Router** | `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams` e `useNavigate` em `App.jsx`, `Navbar` e nas páginas. |

## Estrutura do projeto

```
src/
  App.jsx              # Roteamento com React Router
  main.jsx             # Ponto de entrada
  index.css            # Estilos globais
  components/
    Navbar.jsx         # Barra de navegação com Link
  pages/
    Home.jsx           # Listagem (useState, useEffect, fetch)
    ProductDetail.jsx  # Detalhe (useParams, useEffect, fetch)
    AddProduct.jsx     # Formulário de cadastro (useState, formulário, POST)
```

## Como executar

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

## Tecnologias

- React 19
- Vite
- React Router DOM 7
- FakeStoreAPI (https://fakestoreapi.com)
