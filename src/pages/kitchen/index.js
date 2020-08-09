import React, { Component } from 'react'
import logo from '../../imagens/logo.png'
import './style.css'

export default class Index extends Component {
  render() {
    return (
      <main>
        <div className="logo">
          <img src={logo} alt=""></img>
        </div>
        <p>Kitchen</p>
      </main>
    )
  }
}
