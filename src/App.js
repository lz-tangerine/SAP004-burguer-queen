import React from 'react';
import Background from './components/Background/Background.js';
import './style.css';
// import firebase from './firebase';

const App = () => {
  return (
    <main>
      <Background
        idPrimary="button"
        classNamePrimary="login"
        namePrimary="Login"
        idSecond="button"
        classNameSecond="registro"
        nameSecond="Registro"
      />
      <form>
        <label className="user">Email</label>
        <input
          id="email"
          type="email"
          className="email"
          placeholder="digite seu email"
        />

        <label className="senha">Senha</label>
        <input
          id="password"
          type="password"
          minlength="6"
          className="password"
          placeholder="minimo de 6 digitos"
        />
      </form>
    </main>
  );
};

export default App;
