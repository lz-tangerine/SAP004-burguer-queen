import React, { useState, Component } from 'react'
import logo from '../../imagens/logo.png'
import firebase from '../../firebase'
import './style.css'

export default class Request extends Component {
  state = {
    products: {
      breakfast: [],
      lunch: [],
    },
    request: {
      products: [],
    },
    total: 0,
    categorySelected: 'breakfast',
  }

  componentDidMount() {
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

  selectProduct = (event) => {
    let total = this.state.total
    const { request } = this.state
    const product = JSON.parse(event.target.attributes['data-item'].value)

    const productIndex = request.products.findIndex((element, index, array) => {
      return element.name === product.name ? true : false
    })

    if (productIndex >= 0) {
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
      <li
        onClick={this.selectProduct}
        key={index}
        data-item={JSON.stringify(product)}
      >
        {product.name} R$ {product.price.toFixed(2)}
      </li>
    )
  }

  removeProductRequest = (event) => {
    const { request } = this.state
    const product = JSON.parse(event.target.attributes['data-item'].value)

    const productIndex = request.products.findIndex((element, index, array) => {
      return element.name === product.name ? true : false
    })

    if (productIndex >= 0) {
      request.products[productIndex].qtd--
      if (request.products[productIndex].qtd === 0) {
        request.products.splice(productIndex, 1)
      }
    }

    let total = 0
    request.products.forEach((currentValue) => {
      total += currentValue.price * currentValue.qtd
    })

    this.setState({ request, total })
  }

  renderRequest = (product, index) => {
    return (
      <li data-item={JSON.stringify(product)} key={index}>
        {product.qtd} x {product.name} R$ {product.price.toFixed(2)}
        <span
          onClick={this.removeProductRequest}
          data-item={JSON.stringify(product)}
        >
          Remover
        </span>
      </li>
    )
  }

  changeMenuRequest = (event) => {
    this.setState({
      categorySelected: event.target.innerText.toLowerCase(),
    })
  }

  render() {
    return (
      <>
        <div className="menu_request">
          <span onClick={this.changeMenuRequest}>Breakfast</span>{' '}
          <span onClick={this.changeMenuRequest}>Lunch</span>
        </div>

        <ul className="ul_products" key="products">
          {this.state.products[this.state.categorySelected].map(
            this.renderProduct,
          )}
        </ul>

        <ul className="ul_request" key="request">
          {this.state.request.products.map(this.renderRequest)}
        </ul>

        <div className="total">Total: R$ {this.state.total.toFixed(2)}</div>
      </>
    )
  }
}
