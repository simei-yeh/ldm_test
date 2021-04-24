import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import Form from '../form/form';
import styles from './carousel.module.css';

const Carousel = ({ children, formPages }) => {
  const keys = Object.keys(formPages);

  return (
    <div className={styles['carousel-container']}>
      <div>
        <Button
          id="forward"
          text="Continue"
          callback={() => {  }}
        />
        <Button id="backward"
          text="Go Back"
          callback={() => {  }}
        />
      </div>
      <div id="track" className={styles['carousel-track']} >
        {keys.map((k, i) => <Form key={k} formList={formPages[k]} />)}
      </div>
    </div>
  )
}

export default Carousel;