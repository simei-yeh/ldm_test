import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Input = ({ label, type, name, value, src, callback, callbackSubmit }) => {
  return (
    <div className={`${styles['input-container']}`}>
      <label htmlFor={type} className={styles['label']}>{label ? label : name}</label>
      <input type={type} className={`${styles['input']} ${styles[type]}`}
        value={value} name={name} src={src} onChange={callback}></input>
    </div>
  )
}

export default Input;