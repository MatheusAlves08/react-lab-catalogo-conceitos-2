import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="inicio">
      <section className="hero">
        <div className="hero__conteudo">
          <div className="hero__badge">
            Novidades no catálogo
          </div>
          <h1 className="hero__titulo">
            Produtos incríveis para<br />
            você descobrir
          </h1>
          <p className="hero__descricao">
            Explore nosso catálogo completo com os melhores produtos de diversas
            categorias. Encontre qualidade, preço justo e entrega rápida.
          </p>
          <div className="hero__acoes">
            <Link to="/produtos" className="btn btn--primary btn--grande">
              Ver todos os produtos
            </Link>
            <Link to="/cadastro" className="btn btn--outline btn--grande">
              Cadastrar produto
            </Link>
          </div>
        </div>
        <div className="hero__imagem">
          <div className="hero__circulo hero__circulo--1"></div>
          <div className="hero__circulo hero__circulo--2"></div>
          <div className="hero__circulo hero__circulo--3"></div>
        </div>
      </section>

      <section className="destaques">
        <div className="section-header">
          <h2 className="section__titulo">Destaques da semana</h2>
          <p className="section__subtitulo">
            Produtos mais procurados pelos nossos clientes
          </p>
        </div>
        <div className="destaques__grid">
          <article className="destaque__card">
            <div className="destaque__imagem">
              <span className="destaque__icone">📱</span>
            </div>
            <h3 className="destaque__titulo">Eletrônicos</h3>
            <p className="destaque__descricao">
              Smartphones, fones de ouvido e acessórios com tecnologia de ponta.
            </p>
            <Link to="/produtos" className="destaque__link">
              Explorar &rarr;
            </Link>
          </article>
          <article className="destaque__card">
            <div className="destaque__imagem">
              <span className="destaque__icone">👕</span>
            </div>
            <h3 className="destaque__titulo">Moda</h3>
            <p className="destaque__descricao">
              Roupas e acessórios para todos os estilos e ocasiões.
            </p>
            <Link to="/produtos" className="destaque__link">
              Explorar &rarr;
            </Link>
          </article>
          <article className="destaque__card">
            <div class="destaque__imagem">
              <span className="destaque__icone">💎</span>
            </div>
            <h3 className="destaque__titulo">Joias</h3>
            <p className="destaque__descricao">
              Peças únicas e sofisticadas para momentos especiais.
            </p>
            <Link to="/produtos" className="destaque__link">
              Explorar &rarr;
            </Link>
          </article>
        </div>
      </section>

      <section className="sobre">
        <div className="sobre__conteudo">
          <h2 className="sobre__titulo">Por que escolher nossa loja?</h2>
          <div className="sobre__grid">
            <div className="sobre__item">
              <span className="sobre__numero">100%</span>
              <span className="sobre__rotulo">Qualidade garantida</span>
            </div>
            <div className="sobre__item">
              <span className="sobre__numero">24h</span>
              <span className="sobre__rotulo">Entrega expressa</span>
            </div>
            <div className="sobre__item">
              <span className="sobre__numero">7 dias</span>
              <span className="sobre__rotulo">Para trocas</span>
            </div>
            <div className="sobre__item">
              <span className="sobre__numero">100k+</span>
              <span className="sobre__rotulo">Clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
