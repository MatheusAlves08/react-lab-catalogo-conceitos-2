import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products";

export default function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    setMensagem(null);

    const produto = {
      title: form.title,
      price: parseFloat(form.price),
      category: form.category,
      description: form.description,
      image: form.image || "https://via.placeholder.com/150",
    };

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar produto");
      }

      const dados = await resposta.json();
      setMensagem(
        `Produto "${dados.title}" cadastrado com sucesso! (ID: ${dados.id})`
      );
      setForm({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
    } catch (e) {
      setMensagem(e.message);
    } finally {
      setEnviando(false);
    }
  }

  function irParaInicio() {
    navigate("/");
  }

  return (
    <div className="cadastro">
      <div className="cadastro__header">
        <h1>Cadastrar Produto</h1>
        <button className="btn btn--outline" onClick={irParaInicio}>
          Voltar ao início
        </button>
      </div>
      <form className="cadastro__form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="title">Título do produto</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            placeholder="Ex: Camiseta estampada"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="price">Preço (R$)</label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={form.price}
            onChange={handleChange}
            placeholder="Ex: 49.90"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoria</label>
          <input
            id="category"
            name="category"
            type="text"
            value={form.category}
            onChange={handleChange}
            placeholder="Ex: roupas"
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Descreva o produto..."
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="image">URL da imagem</label>
          <input
            id="image"
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>
        {mensagem && (
          <div className={`mensagem ${mensagem.includes("sucesso") ? "sucesso" : "erro"}`}>
            {mensagem}
          </div>
        )}
        <button type="submit" className="btn btn--primary btn--block" disabled={enviando}>
          {enviando ? "Cadastrando..." : "Cadastrar Produto"}
        </button>
      </form>
    </div>
  );
}
