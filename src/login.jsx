import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="card">
        <img src="/logo.jpeg" alt="ExplicaAí" className="logo" />

        <p className="subtitle">
          Ensine. Aprenda. Conecte-se.
        </p>

        <h3>Para continuar faça seu login abaixo</h3>

        <div className="campo">
          <label>E-mail / Matrícula</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
          />
        </div>

        <div className="campo">
          <label>Senha</label>

          <div className="senha">
            <input
              type="password"
              placeholder="Digite sua senha"
            />
          </div>
        </div>

        <a href="/" className="esqueci">
          Esqueceu sua senha?
        </a>

        <button className="btnEntrar">
          Entrar
        </button>

        <div className="ou">Ou</div>

        <button className="btnGoogle">
          <img src="/google.png" alt="Google" />
          Entrar pelo Google
        </button>

        <h2>Não possui um cadastro?</h2>

        <a href="/" className="cadastro">
          Cadastre-se!
        </a>
      </div>
    </div>
  );
}

export default App;