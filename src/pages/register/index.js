import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'
import firebase from '../../firebase'
import './style.css'

export default class Register extends Component {
  state = {
    name: '',
    nick_name: '',
    email: '',
    password: '',
    sector: '',
    error: '',
  }

  register = async (e) => {
    e.preventDefault()
    const { email, password, sector } = this.state

    if (!email || !password) {
      this.setState({
        error: 'O email, senha e setor é de preenchimento obrigatório!',
      })
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (data) => {
          const user = {
            email: email,
            sector: sector,
            user_uid: firebase.auth().currentUser.uid,
          }

          await firebase.firestore().collection('users').add(user)

          this.props.history.push('/login')
        })
        .catch((error) => {
          this.setState({ error: 'Usuário já existente!' })
        })
    }
  }

  render() {
    return (
      <main>
        <div className="header">
          <img alt="" src={logo}></img>
        </div>

        <form className="form_register" onSubmit={this.register}>
          <div className="div_inp name">
            <label className="label label-email">Nome</label>
            <input
              id="name"
              type="text"
              className="input name"
              placeholder="digite seu name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="div_inp nick_name">
            <label className="label label-senha">Apelido</label>
            <input
              id="nick_name"
              type="text"
              className="input nick_name"
              placeholder="digite seu Apelido"
              onChange={(e) => this.setState({ nick_name: e.target.value })}
            />
          </div>

          <div className="div_inp email">
            <label className="label label-email">Email</label>
            <input
              id="email"
              type="email"
              className="input email"
              placeholder="digite seu email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="div_inp password">
            <label className="label label-senha">Senha</label>
            <input
              id="password"
              type="password"
              minLength="6"
              className="input password"
              placeholder="minimo de 6 digitos"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="div_inp k_r">
            <p className="choice">Setor</p>
            <label className="label label-cozinha">Cozinha</label>
            <input
              type="radio"
              className=""
              name="sector"
              value="cozinha"
              checked={this.state.sector === 'cozinha'}
              onChange={(e) => this.setState({ sector: e.target.value })}
            />

            <label className="label label-salao">Salão</label>
            <input
              type="radio"
              className="saloon"
              name="sector"
              value="salao"
              checked={this.state.sector === 'salao'}
              onChange={(e) => this.setState({ sector: e.target.value })}
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
              Registrar
            </button>
          </div>
        </form>

        <p className="forgot">Esqueceu a senha?</p>
      </main>
    )
  }
}
