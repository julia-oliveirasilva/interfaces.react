import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import UsuarioLogin from "./paginas/usuario.login/usuario-login.jsx";
import TutorLogin from "./paginas/tutor.login/tutor-login.jsx";
import Cadastro from "./paginas/cadastro/cadastro.jsx";

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