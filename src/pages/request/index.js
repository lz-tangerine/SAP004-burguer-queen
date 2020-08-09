import React from 'react'
import logo from '../../imagens/logo.png'
import './style.css'
import Breakfast from '../../components/Breakfast/Breakfast'

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
        <Breakfast
          className="breakfast"
          p="Café da manhã"
          classNamePrimary="americanCoffee"
          namePrimary="Café Americano"
          classNameSecond="expressCoffee"
          nameSecond="Café com leite"
        />
      </div>
    </main>
  )
}

export default Request
