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
              login(resultToken.token, docs)
            })

          // firebase.firestore().collection('users')
          //   .where('user_uid', '==', data.user.uid).get()
          //   .then(docs => {
          //     if (docs.size == 0 && data.user.uid) {
          //       const user = {
          //         name: data.user.displayName,
          //         surname: "",
          //         status: "",
          //         date: "",
          //         photo: data.user.photoURL,
          //         user_uid: data.user.uid,
          //       };
          //       firebase.firestore().collection('users').add(user)
          //         .catch((error) => {
          //           reject(error);
          //         }).finally((data) => {
          //           resolve(data);
          //         });
          //     } else {
          //       resolve(docs.size);
          //     }


        }).catch((error) => {
          this.setState({ error: "E-mail e senha inválidos!" });
        });
    }
  }

  render() {
    return (
      <main>

        <div className="logo">
          <img alt="" src={logo}></img>
        </div>
        <form name="formLogin" onSubmit={this.submitLogin}>
          <label className="label label-email">Email</label>
          <input
            name="email"
            type="email"
            className="email"
            required="required"
            placeholder="digite seu email"
            onChange={e => this.setState({ email: e.target.value })}
          />

          <label className="label label-senha">Senha</label>
          <input
            name="password"
            type="password"
            minLength="6"
            required="required"
            className="password"
            placeholder="minimo de 6 digitos"
            onChange={e => this.setState({ password: e.target.value })}
          />


          {this.state.error && <p>{this.state.error}</p>}

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
      </main >
    )
  }
}


