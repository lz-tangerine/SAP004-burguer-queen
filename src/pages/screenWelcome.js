import React from 'react';
import Background from './components/Background/Background.js';
import Button from './components/Button/Button.js';
import './style.css';

const screenWelcome = () => {
  return (
    <div>
      <Background />
      <Button name="Login" className="login" />
      <Button name="Registro" className="registro" />
    </div>
  );
};

export default screenWelcome;
