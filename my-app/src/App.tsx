import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import TarefaListar from "./components/pages/tarefa/tarefa-listar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/tarefa/listar"}>
                Listar Tarefas{" "}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<TarefaListar />} />
          <Route
            path="/pages/tarefa/listar"
            element={<TarefaListar />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* import React from "react";
import CepConsultar from "./components/pages/cep/cep-consultar";
import ProdutoListar from "./components/pages/produto/produto-listar";
import ProdutoCadastrar from "./components/pages/produto/produto-cadastrar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ProdutoAlterar from "./components/pages/produto/produto-alterar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/pages/produto/listar"}>
                Listar Produtos{" "}
              </Link>
            </li>
            <li>
              <Link to={"/pages/produto/cadastrar"}>
                Cadastrar Produtos{" "}
              </Link>
            </li>
            <li>
              <Link to={"/pages/cep/consultar"}>Consultar CEP </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProdutoListar />} />
          <Route
            path="/pages/produto/listar"
            element={<ProdutoListar />}
          />
          <Route
            path="/pages/produto/cadastrar"
            element={<ProdutoCadastrar />}
          />
          <Route
            path="/pages/cep/consultar"
            element={<CepConsultar />}
          />
          <Route
            path="/pages/produto/alterar/:id"
            element={<ProdutoAlterar />}
          />
        </Routes>
        <footer>
          <p>Desenvolvido por Diogo Steinke Deconto</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/