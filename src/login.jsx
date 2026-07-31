import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {

  // Guarda o que foi digitado no e-mail
  const [email, setEmail] = useState("");

  // Guarda o que foi digitado na senha
  const [senha, setSenha] = useState("");

  // Permite mudar de página
  const navigate = useNavigate();

  // Função executada quando clicar em Entrar
  function fazerLogin() {

    // Login do usuário
    if (email === "julia@aluno.com" && senha === "1234") {
      navigate("/usuario");
    }

    // Login do tutor
    else if (email === "julia@tutor.com" && senha === "1234") {
      navigate("/tutor");
    }

    // Dados incorretos
    else {
      alert("E-mail ou senha incorretos!");
    }
  }

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="card">

        <img
          src="/logo.png"
          alt="ExplicaAí"
          className="logo"
        />

        <p className="subtitle">
          Ensine. Aprenda. Conecte-se.
        </p>

        <h3>
          Para continuar faça seu login abaixo
        </h3>

        <div className="campo">
          <label>E-mail / Matrícula</label>

          <input
            type="text"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="campo">
          <label>Senha</label>

          <div className="senha">
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        <a href="/" className="esqueci">
          Esqueceu sua senha?
        </a>

        <button
          className="btnEntrar"
          onClick={fazerLogin}
        >
          Entrar
        </button>

        <div className="ou">Ou</div>

        <button className="btnGoogle">
          <img src="/google.png" alt="Google" />
          Entrar pelo Google
        </button>

        <h2>Não possui um cadastro?</h2>

        <a href="/cadastro" className="cadastro">
          Cadastre-se!
        </a>

      </div>
    </div>
  );
}

export default App;