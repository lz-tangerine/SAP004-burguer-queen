import React from 'react'
import logo from '../../imagens/logo.png'
import './style.css'
import FourButton from '../../components/FourButton/FourButton'
import TwoButton from '../../components/TwoButton/TwoButton'

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
          namePrimary="Café Americano R$ 5,00"
          classNameSecond="milkCoffee"
          nameSecond="Café com leite R$ 7,00"
          classNameThird="sandwich"
          nameThird="Misto quente R$ 10,00"
          classNameFourth="juice"
          nameFourth="Suco de fruta natural R$ 7,00"
        />
        <TwoButton
          className="hamburguer"
          p="Hamburguer"
          classNamePrimary="simpleHamburguer"
          namePrimary="Hamburguer Simples R$ 10,00"
          classNameSecond="doubleHamburguer"
          nameSecond="Hamburguer Duplo R$ 15,00"
        />

        <TwoButton
          className="sideDish"
          p="Acompanhamentos"
          classNamePrimary="fries"
          namePrimary="Batata Frita R$ 5,00"
          classNameSecond="onionRing"
          nameSecond="Anéis de Cebola R$ 5,00"
        />

        <FourButton
          className="drinks"
          p="Bebidas"
          classNamePrimary="water500"
          namePrimary="Água 500ml R$ 5,00"
          classNameSecond="water750"
          nameSecond="Água 750ml R$ 7,00"
          classNameThird="soda500"
          nameThird="Refrigerante 500ml R$ 7,00"
          classNameFourth="soda750"
          nameFourth="Refrigerante 750ml R$ 10,00"
        />
      </div>
    </main>
  )
}

export default Request
