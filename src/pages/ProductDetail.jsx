import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function ProductDetail() {
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
      <div className="detalhe">
        <h1>Detalhe do Produto</h1>
        <p className="detalhe__carregando">Carregando produto...</p>
      </div>
    );
  }

  if (erro || !produto) {
    return (
      <div className="detalhe detalhe--erro">
        <h1>Detalhe do Produto</h1>
        <p className="detalhe__erro">{erro || "Produto não encontrado"}</p>
        <button className="btn" onClick={voltar}>
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div className="detalhe">
      <button className="btn btn--outline" onClick={voltar}>
        ← Voltar
      </button>
      <div className="detalhe__conteudo">
        <img src={produto.image} alt={produto.title} className="detalhe__imagem" />
        <div className="detalhe__informacoes">
          <h1 className="detalhe__titulo">{produto.title}</h1>
          <span className="detalhe__categoria">{produto.category}</span>
          <p className="detalhe__descricao">{produto.description}</p>
          <div className="detalhe__preco">R$ {produto.price.toFixed(2)}</div>
          <Link to="/" className="btn btn--block btn--primary mt">
            Voltar ao catalogo
          </Link>
        </div>
      </div>
    </div>
  );
}
