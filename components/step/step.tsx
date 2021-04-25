import React from 'react';
import styles from './step.module.css';

interface StepProps {
  children: HTMLElement,
  message: string,
}

const Step: React.FunctionComponent<StepProps> = ({ children, message }) => {
  return (<div className={styles['step-content']}>
      {message}
      <p></p>
      {children}
    </div>
    )
}

export default Step;