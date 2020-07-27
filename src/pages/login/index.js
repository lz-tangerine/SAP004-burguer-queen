import React from 'react';
import Background from './components/Background/Background.js';
import './style.css';
// import firebase from './firebase';

const Index = () => {
  return (
    <main>
      <Background
        idPrimary="button"
        classNamePrimary="back"
        namePrimary="Voltar"
        idSecond="button"
        classNameSecond="enter"
        nameSecond="Entrar"
      />
      <form>
        <label className="label label-email">Email</label>
        <input
          id="email"
          type="email"
          className="email"
          placeholder="digite seu email"
        />

        <label className="label label-senha">Senha</label>
        <input
          id="password"
          type="password"
          minlength="6"
          className="password"
          placeholder="minimo de 6 digitos"
        />
      </form>
      <p className="forgot">Esqueceu a senha?</p>
    </main>
  );
};

export default Index;
