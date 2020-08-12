import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <button id="button" className={props.className}>
      {props.name}
      {props.onClick}
      {props.type}
    </button>
  )
}

export default Button
