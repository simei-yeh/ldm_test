import React, { useEffect, useRef, useState } from 'react';
import styles from './form.module.css';

const Form = ({ children }) => {
  return (
    <form id="form" className={styles['form-content']} >
      {children}
    </form>
  )
}

export default Form;