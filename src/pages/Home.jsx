import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ignorar = false;

    async function carregarProdutos() {
      try {
        setCarregando(true);
        const resposta = await fetch(API_URL);
        if (!resposta.ok) {
          throw new Error("Erro ao carregar produtos");
        }
        const dados = await resposta.json();
        if (!ignorar) {
          setProdutos(dados);
          setErro(null);
        }
      } catch (e) {
        if (!ignorar) {
          setErro(e.message);
          setProdutos([]);
        }
      } finally {
        if (!ignorar) {
          setCarregando(false);
        }
      }
    }

    carregarProdutos();

    return () => {
      ignorar = true;
    };
  }, []);

  if (carregando) {
    return (
      <div className="home">
        <h1>Catalogo de Produtos</h1>
        <p className="home__carregando">Carregando produtos...</p>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="home home--erro">
        <h1>Catalogo de Produtos</h1>
        <p className="home__erro">{erro}</p>
        <button className="btn" onClick={() => window.location.reload()}>
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="home">
      <h1>Catalogo de Produtos</h1>
      <p className="home__subtitulo">
        {produtos.length} produto(s) encontrado(s)
      </p>
      <div className="produtos__grid">
        {produtos.map((produto) => (
          <article key={produto.id} className="produto__card">
            <img
              src={produto.image}
              alt={produto.title}
              className="produto__imagem"
            />
            <div className="produto__conteudo">
              <h2 className="produto__titulo">{produto.title}</h2>
              <span className="produto__categoria">{produto.category}</span>
              <p className="produto__descricao">
                {produto.description.slice(0, 100)}...
              </p>
              <div className="produto__preco">R$ {produto.price.toFixed(2)}</div>
              <Link to={`/produtos/${produto.id}`} className="btn btn--block">
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
