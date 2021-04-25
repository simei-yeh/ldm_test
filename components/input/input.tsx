import React from 'react';
import styles from './input.module.css';

interface Props {
  label: string | undefined,
  type: string,
  name: string,
  value: string,
  src: string | undefined,
  callback: any,
}

const Input: React.FunctionComponent<Props> = ({ label, type, name, value, src, callback}) => {
  return (
    <div className={`${styles['input-container']}`}>
      <label htmlFor={type} className={styles['label']}>{label ? label : name}</label>
      <input type={type} className={`${styles['input']} ${styles[type]}`}
        value={value} name={name} src={src} onChange={callback}></input>
    </div>
    )
}

export default Input;