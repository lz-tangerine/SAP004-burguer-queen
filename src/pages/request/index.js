import React from 'react'
import logo from '../../imagens/logo.png'
import './style.css'

const Request = () => {
  return (
    <main>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <nav>
        <button className="requist" src="PEDIDOS"></button>
        <button className="preparation" src="PREPARAÇÃO"></button>
      </nav>
    </main>
  )
}

export default Request
