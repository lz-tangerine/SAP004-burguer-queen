import React from 'react';
import background from './background.jpg';
import './style.css';

const Background = (props) => (
  <main>
    <img id="background" src={background} alt={'fundo imagem'}></img>
    <div>
      <button
        id={props.idPrimary}
        className={
          props.classNamePrimary
            ? props.classNamePrimary + ' buttons'
            : 'buttons'
        }
      >
        {props.namePrimary}
        {props.onClickPrimary}
      </button>
      <button
        id={props.idSecond}
        className={
          props.classNameSecond ? props.classNameSecond + ' buttons' : 'buttons'
        }
      >
        {props.nameSecond}
        {props.onClickSecond}
      </button>
      <p className="trouble">
        Problemas com seu login?
        <br />
        Clique aqui!
      </p>
    </div>
  </main>
);

export default Background;
