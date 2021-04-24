import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Select = ({ type, name, id, children }) => {
  return (
    <>
      <label htmlFor={type} className={styles['label']}>{name}</label>
      <select name={name} id={id} required>
        {children}
      </select>
    </>
  )
}

export default Select;