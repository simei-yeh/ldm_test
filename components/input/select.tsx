import React from 'react';
import styles from './input.module.css';

interface Props {
  type: string,
  name: string,
  id: string,
  children: (React.ReactNode & {type: string})[]
  callback: (e:EventTarget) => void,
}

const Select: React.FunctionComponent<Props> = ({ type, name, id, children, callback, }) => {
  return (
    <>
      <label htmlFor={type} className={styles['label']}>{name}</label>
      <select name={name} id={id} required onChange={callback}>
        {children}
      </select>
    </>
  )
}

export default Select;