import React, { /*useState,*/ Component } from 'react'
import logo from '../../imagens/logo.png'
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
        <section
          onClick={this.removeProductRequest}
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

  render() {
    return (
      <main>
        <div className="header">
          <img src={logo} alt="logo" className="logo"></img>
        </div>
        <div className="box2">
          <nav className="nav">
            <button className="button request"> PEDIDOS </button>
            <button className="button preparation"> PREPARAÇÃO </button>
          </nav>
          <div className="menu_request">
            <button onClick={this.changeMenuRequest}>Breakfast</button>
            <button onClick={this.changeMenuRequest}>Lunch</button>
          </div>
          <ul className="ul_products" key="products">
            {this.state.products[this.state.categorySelected].map(
              this.renderProduct,
            )}
          </ul>
          <label className="resumo">Resumo</label>
          <ul className="ul_request" key="request">
            {this.state.request.products.map(this.renderRequest)}
          </ul>
          <div className="total">Total: R$ {this.state.total.toFixed(2)}</div>
          <button className="finish">Finalizar pedido</button>
          <button className="clear">Cancelar pedido</button>
        </div>
      </main>
    )
  }
}

// import React from 'react'
// import logo from '../../imagens/logo.png'
// import './style.css'
// import FourButton from '../../components/FourButton/FourButton'
// import TwoButton from '../../components/TwoButton/TwoButton'

// const Request = () => {
//   return (
// <main>
//   <div>
//     <img src={logo} alt="logo" className="logo"></img>
//   </div>
//   <nav>
//     <button className="nav request"> PEDIDOS </button>
//     <button className="nav preparation"> PREPARAÇÃO </button>
//   </nav>
//       <div>
//         <FourButton
//           className="breakfast"
//           p="Café da manhã"
//           classNamePrimary="americanCoffee"
//           namePrimary="Café Americano R$ 5,00"
//           classNameSecond="milkCoffee"
//           nameSecond="Café com leite R$ 7,00"
//           classNameThird="sandwich"
//           nameThird="Misto quente R$ 10,00"
//           classNameFourth="juice"
//           nameFourth="Suco de fruta natural R$ 7,00"
//         />
//         <TwoButton
//           className="hamburguer"
//           p="Hamburguer"
//           classNamePrimary="simpleHamburguer"
//           namePrimary="Hamburguer Simples R$ 10,00"
//           classNameSecond="doubleHamburguer"
//           nameSecond="Hamburguer Duplo R$ 15,00"
//         />

//         <TwoButton
//           className="sideDish"
//           p="Acompanhamentos"
//           classNamePrimary="fries"
//           namePrimary="Batata Frita R$ 5,00"
//           classNameSecond="onionRing"
//           nameSecond="Anéis de Cebola R$ 5,00"
//         />

//         <FourButton
//           className="drinks"
//           p="Bebidas"
//           classNamePrimary="water500"
//           namePrimary="Água 500ml R$ 5,00"
//           classNameSecond="water750"
//           nameSecond="Água 750ml R$ 7,00"
//           classNameThird="soda500"
//           nameThird="Refrigerante 500ml R$ 7,00"
//           classNameFourth="soda750"
//           nameFourth="Refrigerante 750ml R$ 10,00"
//         />
//       </div>
//     </main>
//   )
// }

// export default Request
