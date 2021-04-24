import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './button.module.css';

const Button = ({ onClose, children, text, id, callback }) => {
  return (
    <span onClick={callback}
      className={`${styles[id]} ${styles['button']}`}>
      {text}
    </span>
  )
};

export default Button;