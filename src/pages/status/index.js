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

/**
  requests = [
    {
      id: '',
      request_number: '123445',
      table: '03',
      date: '2020-08-10',
      hour: '13:50',
      itens:  [
        {
          id: '',
          qtd: '2',
          name: 'Hamburguer Duplo',
          value: 15.40
        },
        {
          id: '',
          qtd: '2',
          name: 'Coca cola',
          value: 5.50
        }
      ]
      status: 'preparo'
    }
  ] 


  products = [
    {
      name: 'Café americano',
      category: 'breakfast',
      category_display: 'Café da manhã',
      price: 10.00
    },
    {
      name: 'Café com leite',
      category: 'breakfast',
      category_display: 'Café da manhã',
      price: 5.00
    },
    {
      name: 'Haburguer simples',
      category: 'lunch',
      category_display: 'Almoço',
      price: 16.00
    },
    {
      name: 'Haburguer Duplo',
      category: 'lunch',
      category_display: 'Almoço',
      price: 19.00
    }
  ]


  // ['preparo', 'pronto', 'entregue']
 */
