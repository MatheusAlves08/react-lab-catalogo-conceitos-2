import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link to="/">Catalogo de Produtos</Link>
      </div>
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Inicio
        </Link>
        <Link to="/produtos" className="navbar__link">
          Produtos
        </Link>
        <Link to="/cadastro" className="navbar__link navbar__link--primary">
          Cadastrar Produto
        </Link>
      </div>
    </nav>
  );
}
