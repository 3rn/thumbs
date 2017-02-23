import React from 'react';

const Button = ({ click, count, value }) => (
  <div>
    <button onClick={click} value={value}> Thumbs Up </button> <span> { count } </span>
  </div>
);

export default Button;
