import React, { Component } from 'react';
import style from './button.module.css';

const Button = ({ name, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {name}
    </button>
  );
};
export default Button;
