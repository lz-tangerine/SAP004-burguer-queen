import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'
import './style.css'
import firebase from '../../firebase'

import { login } from "../../services/auth";
import { Component } from 'react'


export default class Index extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  submitLogin = (e) => {
    e.preventDefault()
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (result) => {

          const resultToken = await result.user.getIdTokenResult()

          firebase.firestore().collection('users')
            .where('user_uid', '==', result.user.uid).get()
            .then(docs => {
              docs.forEach(doc => {
                const currentUser = doc.data()

                login(resultToken.token, JSON.stringify(currentUser))

                if (currentUser.sector === 'salao') {
                  this.props.history.push("/request");
                } else {
                  this.props.history.push("/kitchen");
                }
              })
            })

        }).catch((error) => {
          this.setState({ error: "E-mail ou senha inválidos!" });
        });
    }
  }

  render() {
    return (
      <main>

        <div className="header">
          <img alt="" src={logo}></img>
        </div>


        <form className="form_login" name="formLogin" onSubmit={this.submitLogin}>
          <div className="div_inp email">
            <label className="label label-email">Email</label>
            <input
              name="email"
              type="email"
              className="email input"
              required="required"
              placeholder="digite seu email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="div_inp password">
            <label className="label label-senha">Senha</label>
            <input
              name="password"
              type="password"
              minLength="6"
              required="required"
              className="password input "
              placeholder="minimo de 6 digitos"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="div_error">
            {this.state.error && <p>{this.state.error}</p>}
          </div>

          <div className="dv_bt">
            <Link className="buttons bg-primary" to="/">
              Voltar
              </Link>
            <button type="submit" className="buttons bg-action">
              Entrar
              </button>
          </div>

        </form>

        <p className="forgot">Esqueceu a senha?</p>

      </main >
    )
  }
}


