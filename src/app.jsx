import { useState } from "react";
import "./App.css";

export default function App() {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <main className="container">
      <div className="overlay"></div>

      <section className="card">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="ExplicaAí"
          className="logo"
        />

        <p className="subtitle">
          Ensine. Aprenda. Conecte-se.
        </p>

        <h1>Faça seu login</h1>

        <p className="descricao">
          Para continuar, preencha seus dados abaixo.
        </p>

        {/* E-mail */}
        <div className="campo">
          <label htmlFor="email">
            E-mail / Matrícula
          </label>

          <input
            id="email"
            type="text"
            placeholder="Digite seu e-mail ou matrícula"
            autoComplete="username"
          />
        </div>

        {/* Senha */}
        <div className="campo">
          <label htmlFor="senha">
            Senha
          </label>

          <div className="senha">
            <input
              id="senha"
              type={mostrarSenha ? "text" : "password"}
              placeholder="Digite sua senha"
              autoComplete="current-password"
            />

            <button
              type="button"
              className="mostrarSenha"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              aria-label={
                mostrarSenha
                  ? "Ocultar senha"
                  : "Mostrar senha"
              }
            >
              {mostrarSenha ? "🐵" : "🙈"}
            </button>
          </div>
        </div>

        <a href="/" className="esqueci">
          Esqueceu sua senha?
        </a>

        {/* Entrar */}
        <button
          type="button"
          className="btnEntrar"
        >
          Entrar
        </button>

        {/* Divisor */}
        <div className="divisor">
          <span></span>
          <p>ou</p>
          <span></span>
        </div>

        {/* Google */}
        <button
          type="button"
          className="btnGoogle"
        >
          <img
            src="/google.png"
            alt=""
          />

          <span>Entrar pelo Google</span>
        </button>

        {/* Cadastro */}
        <div className="cadastroArea">
          <p>Não possui um cadastro?</p>

          <a href="/" className="cadastro">
            Cadastre-se
          </a>
        </div>

      </section>
    </main>
  );
}