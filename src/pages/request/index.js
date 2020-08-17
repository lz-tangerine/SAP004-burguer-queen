import React, { Component } from 'react'
import firebase from '../../firebase'
import './style.css'

export default class Request extends Component {
  state = {
    products: {
      breakfast: [],
      lunch: [],
      order: [],
    },
    request: {
      table: '',
      products: [],
      status: 'A FAZER', // PREPARANDO, FEITO, ENTREGUE
      date: '',
    },
    total: 0,
    categorySelected: 'breakfast',
    error: '',
  }

  loadProducts = () => {
    firebase
      .firestore()
      .collection('menu')
      .get()
      .then((docs) => {
        const products = {
          breakfast: [],
          lunch: [],
        }

        docs.forEach((doc) => {
          const productFirebase = doc.data()
          if (productFirebase.category === 'breackfast') {
            products.breakfast.push({
              name: productFirebase.name,
              price: parseFloat(productFirebase.price),
            })
          } else {
            products.lunch.push({
              name: productFirebase.name,
              price: parseFloat(productFirebase.price),
            })
          }
        })

        this.setState({ products: products })
      })
  }

  componentDidMount() {
    this.loadProducts()
  }

  selectProduct = (index) => {
    let total = this.state.total
    const { request } = this.state
    const product = this.state.products[this.state.categorySelected][index]

    const productIndex = request.products.findIndex((element) => {
      return element.name === product.name ? true : false
    })

    if (request.products[productIndex]) {
      request.products[productIndex].qtd++
    } else {
      request.products.push({
        name: product.name,
        price: product.price,
        qtd: 1,
      })
    }

    total += product.price

    this.setState({ request, total })
  }

  renderProduct = (product, index) => {
    return (
      <li onClick={() => this.selectProduct(index)}>
        <span>{product.name}</span>
        <span>R$ {product.price.toFixed(2)}</span>
      </li>
    )
  }

  removeProductRequest = (index) => {
    const { request } = this.state

    request.products[index].qtd--
    if (request.products[index].qtd === 0) {
      request.products.splice(index, 1)
    }

    let total = 0
    request.products.forEach((currentValue) => {
      total += currentValue.price * currentValue.qtd
    })

    this.setState({ request, total })
  }

  renderRequest = (product, index) => {
    return (
      <li>
        <span>
          {product.qtd} x {product.name}
        </span>

        <span>R$ {product.price.toFixed(2)}</span>

        <section
          onClick={() => this.removeProductRequest(index)}
          data-item={JSON.stringify(product)}
        >
          Remover
        </section>
      </li>
    )
  }

  changeMenuRequest = (event) => {
    this.setState({
      categorySelected: event.target.innerText.toLowerCase(),
    })
  }

  changeTable = (event) => {
    const { request } = this.state
    request.table = event.target.value
    this.setState({
      request,
    })
  }

  requestFinished = async () => {
    const { request } = this.state
    let error = ''

    if (!request.table) {
      error = 'Informe o numero da mesa'
    } else if (request.products.length === 0) {
      error = 'Selecione um produto para montar o pedido'
    }

    if (error) {
      this.setState({ error })
      return false
    } else {
      this.setState({ error })
    }

    request.start_date = new Date()
    request.end_date = null

    const result = await firebase.firestore().collection('request').add(request)
    if (result.id) {
      this.props.history.push('/status')
    } else {
      this.setState({ error: 'Nao foi possivel registrar o pedido' })
    }
  }

  render() {
    return (
      <main>
        <nav className="nav">
          <button className="buttons bg-action-request-menu button-big">
            PEDIDOS
          </button>
          <button className="buttons bg-action-request-menu button-big">
            PREPARAÇÃO
          </button>
        </nav>

        <div className="menu_request">
          <div className="menu_request_button">
            <button
              className="buttons bg-action-request-menu button-small"
              onClick={this.changeMenuRequest}
            >
              Breakfast
            </button>
            <button
              className="buttons bg-action-request-menu button-small"
              onClick={this.changeMenuRequest}
            >
              Lunch
            </button>
          </div>

          <input
            name="table"
            className="table input input-small"
            placeholder="Digite numero da mesa"
            onChange={this.changeTable}
            value={this.state.request.table}
          />

          <ul className="ul_products" key="products">
            {this.state.products[this.state.categorySelected].map(
              this.renderProduct,
            )}
          </ul>
        </div>

        <div className="resumo">
          <label>Resumo</label>
          <div>Mesa: {this.state.request.table}</div>
          <ul className="ul_request" key="request">
            {this.state.request.products.map(this.renderRequest)}
          </ul>
          <div className="total">Total: R$ {this.state.total.toFixed(2)}</div>

          {this.state.error && <p>{this.state.error}</p>}

          <button
            className="buttons bg-action button-small"
            onClick={this.requestFinished}
          >
            Finalizar
          </button>
          <button className="buttons bg-primary button-small">Cancelar</button>
        </div>
      </main>
    )
  }
}
