import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ignorar = false;

    async function carregarProduto() {
      try {
        setCarregando(true);
        const resposta = await fetch(`${API_URL}/${id}`);
        if (!resposta.ok) {
          throw new Error("Produto não encontrado");
        }
        const dados = await resposta.json();
        if (!ignorar) {
          setProduto(dados);
          setErro(null);
        }
      } catch (e) {
        if (!ignorar) {
          setErro(e.message);
          setProduto(null);
        }
      } finally {
        if (!ignorar) {
          setCarregando(false);
        }
      }
    }

    if (id) {
      carregarProduto();
    }

    return () => {
      ignorar = true;
    };
  }, [id]);

  function voltar() {
    navigate("/");
  }

  if (carregando) {
    return (
      <div className="detalhe-view">
        <div className="detalhe-view__header">
          <button className="btn btn--voltar" onClick={voltar}>
            ← Voltar ao catálogo
          </button>
        </div>
        <div className="detalhe-view__carregando">
          <div className="loader"></div>
          <p>Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (erro || !produto) {
    return (
      <div className="detalhe-view">
        <div className="detalhe-view__header">
          <button className="btn btn--voltar" onClick={voltar}>
            ← Voltar ao catálogo
          </button>
        </div>
        <div className="detalhe-view__vazio">
          <h2>Produto não encontrado</h2>
          <p>{erro || "Não foi possível carregar este produto."}</p>
          <button className="btn btn--primary btn--block" onClick={voltar}>
            Voltar ao catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="detalhe-view">
      <div className="detalhe-view__header">
        <button className="btn btn--voltar" onClick={voltar}>
          ← Voltar ao catálogo
        </button>
      </div>

      <div className="detalhe-view__conteudo">
        <div className="detalhe-view__imagem-wrapper">
          <img
            src={produto.image}
            alt={produto.title}
            className="detalhe-view__imagem"
          />
        </div>

        <div className="detalhe-view__informacoes">
          <span className="detalhe-view__categoria">{produto.category}</span>
          <h1 className="detalhe-view__titulo">{produto.title}</h1>
          <p className="detalhe-view__descricao">{produto.description}</p>
          <div className="detalhe-view__preco">
            R$ {produto.price.toFixed(2)}
          </div>
          <Link to="/" className="btn btn--outline btn--block">
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
