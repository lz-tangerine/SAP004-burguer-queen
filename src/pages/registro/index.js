import React from 'react';
import Background from './components/Background/Background.js.js';
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
        <label className="label label-name">Nome</label>
        <input
          id="name"
          type="text"
          className="name"
          placeholder="digite seu nome completo"
        />
        <label className="label label-user">Nome de usuário</label>
        <input
          id="user"
          type="text"
          className="user"
          placeholder="digite um nome de usuário"
        />
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
        <p className="choice">Setor</p>
        <label className="label label-cozinha">Cozinha</label>
        <input
          id="kitchen"
          type="radio"
          className="kitchen"
          name="option"
          value="option1"
        />
        <label className="label label-salao">Salão</label>
        <input
          id="saloon"
          type="radio"
          className="saloon"
          name="option"
          value="option1"
        />
      </form>
    </main>
  );
};

export default Index;
