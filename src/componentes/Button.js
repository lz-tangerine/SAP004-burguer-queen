import React from 'react';

const Button = (props) => {
  return (
    <button>
      {props.name}
      {props.onClick}
    </button>
  );
};

export default Button;
