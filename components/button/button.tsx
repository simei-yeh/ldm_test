import React from 'react';
import styles from './button.module.css';

interface Props {
  show: boolean,
  children: (React.ReactNode & {type: string})[],
  text: string,
  id: string,
  callback: any,
}

const Button = ({ show, children, text, id, callback }) => {
  return (
    <div>
      {
        show
          ? <span onClick={callback}
              className={`${styles[id]} ${styles['button']}`}>
              {text}
            </span >
          : null
      }
    </div>
  )
};

export default Button;