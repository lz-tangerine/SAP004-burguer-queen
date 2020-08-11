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

        <div className="header">
          <img alt="" src={logo}></img>
        </div>

        <div className="middle">
          <p className="p">Bem vindo CK Lover!</p>
          <p className="p">
            Entre com seu email e senha em Login
            <br /> ou <br />
            Registre um novo usuário!
          </p>
        </div>

        <div className="buttons_menu">
          <div className="content_menu" >
            <Link className="buttons bg-primary" to="/login">
              Login
            </Link>
            <Link className="buttons bg-primary" to="/register">
              Registre-se
            </Link>
          </div>
        </div>

        <div className="footer">
          <p className="p">
            Problemas com seu login?
            <br />
            Clique aqui!
          </p>
        </div>

      </main>
    )
  }
}
