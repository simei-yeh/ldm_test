import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Input = ({ inputs }) => {
  return (
    <div className={`${styles['inputs']}`}>
      {`hello world`}
      {`input params ${inputs['id']}`}
      <input type={inputs['type'] === "textarea" ? "text" : inputs['type']}></input>
    </div>
  )
}

export default Input;