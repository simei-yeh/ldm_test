import React from 'react';
import styles from './button.module.css';

interface Props {
  type?: string,
  show: boolean,
  text: string,
  id: string,
  callback: (event: React.MouseEvent) => void,
}

const Button: React.FunctionComponent<Props> = ({ show, text, id, callback }) => {
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