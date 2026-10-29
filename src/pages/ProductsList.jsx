import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductsList() {
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
      <div className="produtos-lista">
        <div className="produtos-lista__header">
          <h1 className="produtos-lista__titulo">Produtos</h1>
          <Link to="/" className="btn btn--voltar">
            ← Voltar ao início
          </Link>
        </div>
        <div className="estado">
          <div className="loader"></div>
          <p className="estado__texto">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  if (erro) {
    return (
      <div className="produtos-lista">
        <div className="produtos-lista__header">
          <h1 className="produtos-lista__titulo">Produtos</h1>
          <Link to="/" className="btn btn--voltar">
            ← Voltar ao início
          </Link>
        </div>
        <div className="estado">
          <p className="estado__texto estado__erro">{erro}</p>
          <button className="btn btn--primary" onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="produtos-lista">
      <div className="produtos-lista__header">
        <h1 className="produtos-lista__titulo">
          Produtos <span>({produtos.length})</span>
        </h1>
        <Link to="/" className="btn btn--voltar">
          ← Voltar ao início
        </Link>
      </div>
      <p className="produtos-lista__subtitulo">
        Explore nosso catálogo completo
      </p>
      <div className="produtos__grid">
        {produtos.map((produto) => (
          <article key={produto.id} className="produto__card">
            <div className="produto__imagem-container">
              <img
                src={produto.image}
                alt={produto.title}
                className="produto__imagem"
              />
              <span className="produto__etiqueta">
                {produto.category}
              </span>
            </div>
            <div className="produto__conteudo">
              <h2 className="produto__titulo">{produto.title}</h2>
              <p className="produto__descricao">
                {produto.description.slice(0, 100)}...
              </p>
              <div className="produto__preco">
                R$ {produto.price.toFixed(2)}
              </div>
              <Link to={`/produtos/${produto.id}`} className="btn btn--outline btn--block">
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
