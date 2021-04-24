import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Textarea = ({ name, callback }) => {
  return (
    <textarea rows="4" onChange={callback} name={name}>
    </textarea>
  )
}

export default Textarea;