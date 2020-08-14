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

  changeOrderDone = (event) => {
    const requestId = event.target.attributes['data-key'].value

    const { requests } = this.state

    const requestIndex = requests.findIndex((element, index, array) => {
      return element.id === requestId ? true : false
    })

    firebase.firestore().collection('request').doc(requestId).update({
      status: 'FEITO',
      end_date: new Date(),
    })

    requests.splice(requestIndex, 1)
    this.setState({ requests })
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection('request')
      .get()
      .then((docs) => {
        let requests = []

        docs.forEach((doc) => {
          let request = doc.data()
          request.id = doc.id

          request.start_date = request.date
            ? moment(request.date.toDate())
            : moment(request.start_date.toDate())
          request.end_date = request.end_date
            ? moment(request.end_date.toDate())
            : null
          request.diff_date = moment.duration(
            request.end_date
              ? moment(request.end_date.toDate()).diff(
                  request.start_date.toDate(),
                )
              : moment(moment()).diff(request.start_date.toDate()),
          )

          if (request.status !== 'ENTREGUE' && request.status !== 'FEITO') {
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
    // request.status = 'FEITO'
    const className =
      request.status === 'A FAZER'
        ? 'request_card pending'
        : request.status === 'FEITO'
        ? 'request_card done'
        : 'request_card making'

    return (
      <section className={className} key={index}>
        <div className="request_card_P">
          <div className="table">Mesa: {request.table}</div>
          <div className="status"> - Status: {request.status}</div>

          <div className="time">
            Data: {request.start_date.format('DD/MM/YYYY HH:mm:ss')}
          </div>
          <div className="diff_time">
            {' '}
            Tempo na cozinha: {request.diff_date.asMinutes().toFixed(0)} Minutos
          </div>

          <div className="description">
            <ul>{request.products.map(this.renderProduct)}</ul>
          </div>
          <div className="valor">{request.total}</div>
          {request.status === 'A FAZER' && (
            <button
              data-key={request.id}
              className="buttons bg-action-request-menu button-small"
              onClick={this.changeOrderDone}
            >
              Feito
            </button>
          )}
        </div>
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
