import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import UsuarioLogin from "./usuario-login/usuario-login";
import TutorLogin from "./tutor-login/tutor-login";
import Cadastro from "./cadastro/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Tela de login */}
        <Route path="/" element={<Login />} />

        {/* Tela do usuário */}
        <Route
          path="/usuario"
          element={<UsuarioLogin />}
        />

        {/* Tela do tutor */}
        <Route
          path="/tutor"
          element={<TutorLogin />}
        />

        {/* Tela de cadastro */}
        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;