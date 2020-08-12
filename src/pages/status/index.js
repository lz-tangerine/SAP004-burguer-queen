import React, { Component } from 'react'
import logo from '../../imagens/logo.png'
import firebase from '../../firebase'
import moment from 'moment'
import './style.css'

export default class Index extends Component {
  state = {
    requests: [
      // {
      //   table: '',
      //   products: [],
      //   status: 'A FAZER', // PREPARANDO, FEITO, ENTREGUE
      //   date: '',
      // },
    ],
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('request')
      .get()
      .then((docs) => {
        let requests = []

        docs.forEach((doc) => {
          const request = doc.data()
          if (request.status != 'ENTREGUE') {
            requests.push(request)
          }
        })

        this.setState({ requests })
      })
  }

  renderProduct = (product, index) => {
    return (
      <li key={index}>
        {product.qtd} {product.name}
      </li>
    )
  }

  renderRequest = (request, index) => {
    request.status = 'FEITO'
    const className =
      request.status == 'A FAZER'
        ? 'request_card pending'
        : request.status == 'FEITO'
        ? 'request_card done'
        : 'request_card making'

    return (
      <section className={className} key={index}>
        <div className="table">Mesa: {request.table}</div>
        <div className="time">
          Data: {moment(request.date.toDate()).format('DD/MM/YYYY')}
        </div>
        <div className="description">
          <ul>{request.products.map(this.renderProduct)}</ul>
        </div>
        <div className="valor">{request.total}</div>
      </section>
    )
  }

  render() {
    return (
      <main>
        <div className="header">
          <img src={logo} alt=""></img>
        </div>

        <h1 className="h1">PEDIDOS A PREPARAR</h1>

        {this.state.requests.map(this.renderRequest)}

        {/* <section className="request_card making">
          <div className="number">4552</div>
          <div className="table">05</div>
          <div className="time">08:30</div>
          <div className="description">1 hamburger e coca</div>
        </section> */}
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
