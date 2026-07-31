function Cadastro() {
  return (
    <main>
      <h1>Cadastro</h1>

      <p>
        Crie sua conta no ExplicaAí.
      </p>

      <form>
        <div>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
          />
        </div>

        <br />

        <div>
          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        <br />

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <br />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default Cadastro;