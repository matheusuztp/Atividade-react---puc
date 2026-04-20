import { useState } from "react";
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  function validarLogin() {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
      return;
    }

    setMensagem("Usuário ou senha incorretos!");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
      />
      <button onClick={validarLogin}>Acessar</button>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
