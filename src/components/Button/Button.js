import React from 'react';
import './style.css';

const Button = (props) => (
  <button id="buttons">
    {props.name}
    {props.onClick}
  </button>
);

export default Button;
