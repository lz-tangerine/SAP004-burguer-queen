import React from 'react';
import Background from './components/Background/Background.js';
import Logo from './components/Logo/Logo.js';
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
      <div>
        <div>
          <Logo className="medium" />
        </div>
        <section>
          <p className="welcome">Bem vindo CK Lover!</p>
          <p className="login">
            Entre com seu email e senha em Login ou
            <br />
            Registre um novo usuário!
          </p>
        </section>
      </div>
    </main>
  );
};

export default App;
