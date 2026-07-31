import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import UsuarioLogin from "./paginas/usuario.login/usuario-login";
import TutorLogin from "./paginas/tutor.login/tutor-login";
import Cadastro from "./paginas/cadastro/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

     
        <Route
          path="/usuario"
          element={<UsuarioLogin />}
        />

       
        <Route
          path="/tutor"
          element={<TutorLogin />}
        />
 
        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;