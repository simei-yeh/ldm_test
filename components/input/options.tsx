import React from 'react';
import styles from './input.module.css';

interface Props {
  key: number,
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