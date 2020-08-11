import React, { useState, Component } from 'react'
import logo from '../../imagens/logo.png'
import firebase from '../../firebase'
import './style.css'

export default class Request extends Component {
  state = {
    products: {
      breakfast: [
        // {
        //   order: 2,
        //   name: 'Café expresso',
        //   price: 5.0,
        // },
        // {
        //   order: 2,
        //   name: 'Café com leite',
        //   price: 6.0,
        // },
        // {
        //   order: 2,
        //   name: 'Misto Quente',
        //   price: 7.0,
        // },
        // {
        //   order: 1,
        //   name: 'Suco Natural',
        //   price: 7.0,
        // },
      ],
      lunch: [
        {
          order: 1,
          name: 'Lanche 1',
          price: 7.0,
        },
        {
          order: 3,
          name: 'Lanche 2',
          price: 9.0,
        },
        {
          order: 2,
          name: 'Lanche 3',
          price: 7.0,
        },
        {
          order: 4,
          name: 'Carne adicional',
          price: 2.0,
        },
      ],
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
      //.where('category', '==', 'breackfast')
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

  renderRequest = (product, index) => {
    return (
      <li
        onClick={this.selectProduct}
        data-item={JSON.stringify(product)}
        key={index}
      >
        {product.qtd} x {product.name} R$ {product.price.toFixed(2)}
      </li>
    )
  }

  render() {
    return (
      <>
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
