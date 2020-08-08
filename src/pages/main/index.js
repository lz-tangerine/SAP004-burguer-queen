import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imagens/logo.png'
import './style.css'

export default class Main extends Component {
  // state = {
  //   products: [],
  // }
  // componentDidMount() {
  //   this.loadProducts()
  // }
  // loadProducts = async () => {
  //   // const response = await api.get('/products')
  //   // this.setState({ products: response.data.docs })
  // }

  render() {
    return (
      <main>
        <div className="logo">
          <img alt="" src={logo}></img>
        </div>
        <p>Bem vindo CK Lover!</p>
        <p>
          Entre com seu email e senha em Login
          <br /> ou <br />
          Registre um novo usuário!
        </p>
        <div>
          <Link className="buttons bg-primary" to="/login">
            Login
          </Link>
          <Link className="buttons bg-primary" to="/register">
            Registre-se
          </Link>
        </div>
        <p className="trouble">
          Problemas com seu login?
          <br />
          Clique aqui!
        </p>
      </main>
    )
  }
}
