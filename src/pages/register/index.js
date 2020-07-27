import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import firebase from './firebase';

export default class Register extends Component {
  render() {
    return (
      <main>
        <form>Registro</form>
        <Link className="buttons" to="/">
          Voltar pra Home
        </Link>
        <p className="forgot">Esqueceu a senha?</p>
      </main>
    )
  }
}
