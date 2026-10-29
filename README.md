# 🛒 Catálogo de Produtos - React Lab

Aplicação React desenvolvida como trabalho prático da disciplina de Framework Front-End, demonstrando os conceitos fundamentais de desenvolvimento de interfaces modernas com React.

## 🔗 Links

- **Repositório:** https://github.com/MatheusAlves08/react-lab-catalogo-conceitos-2
- **Deploy (Vercel):** https://react-lab-catalogo-conceitos-2.vercel.app/

## 📝 Descrição

Catálogo de produtos completo consumindo a FakeStoreAPI. A aplicação permite navegar por páginas, listar produtos, visualizar detalhes de itens específicos e cadastrar novos produtos por meio de um formulário controlado. Toda a navegação é feita client-side com React Router, sem recarregar o navegador.

## ✨ Funcionalidades

- **Página inicial** com Hero section, destaques de categorias e estatísticas da loja
- **Listagem de produtos** em grid responsivo, consumindo dados da FakeStoreAPI
- **Detalhe do produto** com imagem, categoria, descrição e preço
- **Cadastro de produto** por formulário controlado com envio via POST para a API
- **Navegação entre páginas** com React Router (início, produtos, detalhe e cadastro)
- **Tratamento de estados** de carregamento e erro durante o consumo da API
- **Design responsivo** adaptado para mobile, tablet e desktop

## 🎓 Conceitos Utilizados

| Conceito | Onde é aplicado |
|----------|-----------------|
| **State e useState** | Gerenciamento de estado local (lista de produtos, formulário, carregamento, erro) em `Inicio`, `ProductsList`, `ProductDetailView` e `AddProduct` |
| **Formulários** | Formulário controlado de cadastro de produto em `AddProduct.jsx`, com `handleChange` e `handleSubmit` |
| **useEffect** | Busca de dados da API ao montar o componente e limpeza com pattern de cancelamento em `ProductsList` e `ProductDetailView` |
| **Consumo de APIs** | Requisições `fetch` para `https://fakestoreapi.com/products` (listagem, detalhe por ID e criação via POST) |
| **React Router** | `BrowserRouter`, `Routes`, `Route`, `Link`, `useParams` e `useNavigate` em `App.jsx`, `Navbar` e nas páginas |

## 📁 Estrutura do Projeto

```
src/
  App.jsx              # Roteamento com React Router
  main.jsx             # Ponto de entrada
  index.css            # Estilos globais
  components/
    Navbar.jsx         # Barra de navegação com Link
  pages/
    Inicio.jsx         # Página inicial com hero e destaques
    ProductsList.jsx   # Listagem de produtos (useState, useEffect, fetch)
    ProductDetailView.jsx  # Detalhe do produto (useParams, useEffect, fetch)
    AddProduct.jsx     # Formulário de cadastro (useState, formulário, POST)
```

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/MatheusAlves08/react-lab-catalogo-conceitos-2.git

# Acessar a pasta do projeto
cd react-lab-catalogo-conceitos-2

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

## 🛠️ Tecnologias

- React 19
- Vite
- React Router DOM 7
- FakeStoreAPI (https://fakestoreapi.com)
- CSS3 com variáveis CSS e design responsivo

## 👨‍💻 Autor

Matheus Alves - Estudante de Sistemas de Informação
