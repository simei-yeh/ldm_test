import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Select = ({ type, name, id, children, callback, label }) => {
  return (
    <>
      <label htmlFor={type} className={styles['label']}>{label}</label>
      <select name={name} id={id} required onChange={callback}>
        {children}
      </select>
    </>
  )
}

export default Select;