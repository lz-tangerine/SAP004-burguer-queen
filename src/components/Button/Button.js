import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <button id="button">
      {props.className}
      {props.name}
      {props.onClick}
    </button>
  )
}

export default Button
