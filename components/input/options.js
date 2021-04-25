import React, { useEffect, useRef, useState } from 'react';
import styles from './input.module.css';

const Options = ({ value }) => {
  return (
    <option value={value}>
      {value}
    </option>
  )
}

export default Options;