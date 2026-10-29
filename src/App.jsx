import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import ProductsList from "./pages/ProductsList";
import ProductDetailView from "./pages/ProductDetailView";
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <div className="pagina-frame">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/produtos" element={<ProductsList />} />
          <Route path="/produtos/:id" element={<ProductDetailView />} />
          <Route path="/cadastro" element={<AddProduct />} />
        </Routes>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer__texto">
            Catalogo de Produtos &middot; Desenvolvido com React &middot;
            Dados da FakeStoreAPI
          </p>
        </div>
      </footer>
    </BrowserRouter>
  );
}
