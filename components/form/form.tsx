import React from 'react';
import styles from './form.module.css';

interface Props {
  children?: (React.ReactNode & {type: string}) | (React.ReactNode & {type: string})[],
}

const Form = React.forwardRef<HTMLFormElement, Props> (({children}, ref) => {
  return (
    <form id="form" className={styles['form-content']} ref={ref}>
      {children}
    </form>
  )
})

export default Form;