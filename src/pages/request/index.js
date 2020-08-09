import React from 'react'
import logo from '../../imagens/logo.png'
import './style.css'
import FourButton from '../../components/FourButton/FourButton'

const Request = () => {
  return (
    <main>
      <div>
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <nav>
        <button className="nav request"> PEDIDOS </button>
        <button className="nav preparation"> PREPARAÇÃO </button>
      </nav>
      <div>
        <FourButton
          className="breakfast"
          p="Café da manhã"
          classNamePrimary="americanCoffee"
          namePrimary="Café Americano"
          classNameSecond="expressCoffee"
          nameSecond="Café com leite"
          classNameThird="sandwich"
          nameThird="Misto quente"
          classNameFourth="juice"
          nameFourth="Suco de fruta"
        />
      </div>
    </main>
  )
}

export default Request
