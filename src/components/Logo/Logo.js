import React from 'react';
import logo from './logo.png';
import './style.css';

const Logo = (props) => (
  <img
    src={logo}
    alt={'fundo imagem'}
    className={props.className ? props.className + ' logotipo' : 'logotipo'}
  ></img>
);

export default Logo;
