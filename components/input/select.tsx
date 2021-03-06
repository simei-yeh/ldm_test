import React from 'react';
import styles from './input.module.css';

interface Props {
  type: string,
  name: string,
  children?: (React.ReactNode & {type: string})[],
  selected: string,
  callback: React.ChangeEventHandler<HTMLSelectElement>,
}

const Select: React.FunctionComponent<Props> = ({ type, name, children, callback, }) => {
  return (
    <>
      <label htmlFor={type} className={styles['label']}>{name}</label>
      <select name={name} required onChange={callback}>
        {children}
      </select>
    </>
  )
}

export default Select;