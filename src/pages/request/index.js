import React from 'react'
import logo from '../../imagens/logo.png'
import './style.css'

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
    </main>
  )
}

export default Request
