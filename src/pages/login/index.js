import React, { Component } from 'react'
import './style.css'
// import firebase from './firebase';

export default class Login extends Component {
  render() {
    return (
      <main>
        <form>
          <label className="label-user">Email</label>
          <input
            id="email"
            type="email"
            className="email"
            placeholder="digite seu email"
          />

          <label className="label-senha">Senha</label>
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
    )
  }
}
