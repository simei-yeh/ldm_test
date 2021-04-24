import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './button.module.css';

const Button = ({ show, onClose, children, text, id, callback }) => {
  return (
    <div>
      {
        show
          ? <span onClick={callback}
              className={`${styles[id]} ${styles['button']}`}>
              {text}
            </span >
          : null
      }
    </div>
  )
};

export default Button;