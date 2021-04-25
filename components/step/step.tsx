import React, { useEffect, useRef, useState } from 'react';
import styles from './step.module.css';

const Step = ({ children, message }) => {
  return (
    <div className={styles['step-content']}>
      {message}
      <p></p>
      {children}
    </div>
  )
}

export default Step;