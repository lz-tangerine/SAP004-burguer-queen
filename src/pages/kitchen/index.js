import React, { Component } from 'react'
import logo from '../../imagens/logo.png'
import './style.css'

export default class Index extends Component {
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
        <header className="logo kitchen">
          <img src={logo} alt=""></img>
        
        <h1>PEDIDOS A PREPARAR</h1>
        </header>
        <section className="k">
          <div className="p">Mesa</div>
          <div className="p">Atendente</div>
          <div className="p">Pedido</div>
          <div className="p">Horário do Pedido</div>
        <div className="i">PEDIDOS</div>
          <button className="b">Pedido Pronto</button>
        </section>
      </main>
    )
  }
}