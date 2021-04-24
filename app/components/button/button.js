import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './button.module.css';

const Button = ({ show, onClose, children, title, name, id, callback }) => {
  return (
    <span onClick={callback}
      className={`${styles[id]} ${styles['button']}`}>
      {name}
    </span>
  )
};

export default Button;