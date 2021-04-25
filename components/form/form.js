import React, { useEffect, useRef, useState } from 'react';
import styles from './form.module.css';

const Form = React.forwardRef(({ children }, ref) => {
  return (
    <form id="form" className={styles['form-content']} ref={ref}>
      {children}
    </form>
  )
})

export default Form;