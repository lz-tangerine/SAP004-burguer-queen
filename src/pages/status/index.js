import React, { Component } from 'react'
import logo from '../../imagens/logo.png'
import './style.css'

export default class Index extends Component {
  render() {
    return (
      <main>
        <div className="header">
          <img src={logo} alt=""></img>
        </div>

        <h1 className="h1">PEDIDOS A PREPARAR</h1>
        <p className="number">Pedido</p>
        <p className="table">Mesa</p>
        <p className="time">Hora</p>
        <p className="descripition">Resumo</p>
        <p className="valor">R$</p>
        <p>Status</p>
        <section className="request_card pending">
          <div className="number">4552</div>
          <div className="table">05</div>
          <div className="time">08:30</div>
          <div className="description">1 hamburger e coca</div>
          <div className="valor">5,00</div>
        </section>

        <section className="request_card making">
          <div className="number">4552</div>
          <div className="table">05</div>
          <div className="time">08:30</div>
          <div className="description">1 hamburger e coca</div>
        </section>
      </main>
    )
  }
}
