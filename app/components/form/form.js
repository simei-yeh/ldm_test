import React, { useEffect, useRef, useState } from 'react';
import Input from '../input/input';
import styles from './form.module.css';

const Form = ({ formList }) => {
  return (
    <div className={styles['form-container']}>
      {formList.map((form, i) => <Input key={i} inputs={form} />)}
    </div>
  )
}

export default Form;