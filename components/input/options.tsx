import React from 'react';
import styles from './input.module.css';

interface Props {
  value: string | number,
}

const Options: React.FunctionComponent<Props> = ({ value }) => {
  return (
    <option value={value}>
      {value}
    </option>
  )
}

export default Options;