import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'
import './style.css'
import firebase from '../../firebase'

const Index = () => {
  const submit = (e) => {
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
      .then(() => {
        alert('logou no firebase...')
        console.log('OK, logou')
      }).catch((error) => {

        alert('Login ou senha invalido...')
        console.log(error)
      });
  }

  return (
    <main>

      <div className="logo">
        <img alt="" src={logo}></img>
      </div>
      <form name="formLogin" onSubmit={submit}>
        <label className="label label-email">Email</label>
        <input
          name="email"
          type="email"
          className="email"
          required="required"
          placeholder="digite seu email"
        />

        <label className="label label-senha">Senha</label>
        <input
          name="password"
          type="password"
          minLength="6"
          required="required"
          className="password"
          placeholder="minimo de 6 digitos"
        />
        <div className="dvBtLogin">
          <Link className="buttons bg-primary" to="/">
            Voltar
          </Link>
          <button type="submit" className="buttons bg-action">
            Entrar
          </button>
        </div>
      </form>
      <p className="forgot">Esqueceu a senha?</p>
    </main>
  )
}

export default Index

