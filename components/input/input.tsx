import React from 'react';
import styles from './input.module.css';

interface Props {
  key?: string | number,
  label?: string | undefined,
  type: string,
  name: string,
  value: string,
  src?: string,
  min?: string,
  max?: string,
  callback: (e:EventTarget) => void,
}

const Input: React.FunctionComponent<Props> = ({ label, type, name, value, src, min, max, callback }) => {
  return (
    <div className={`${styles['input-container']}`}>
      <label htmlFor={type} className={styles['label']}>{label ? label : name}</label>
      {type === "range" ? <span>{min}</span> : null}
      <input type={type} className={`${styles['input']} ${styles[type]}`}
        value={value} name={name} min={min} max={max} src={src} onChange={callback}></input>
      {type === "range" ? <span>{max}</span> : null}
      {type === "range" ? <p><span className={styles['range-slider']}>{`current value: ${value}`}</span></p> : null}
    </div>
  )
}

export default Input;