import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/button.js';
import styles from './carousel.module.css';

const Carousel = ({ children }) => {
  return (
    <div className={styles['carousel-container']}>
      <div>
        <Button
          id="forward"
          name="Continue"
          callback={() => {  }}
        />
        <Button id="backward"
          name="Go Back"
          callback={() => {  }}
        />
      </div>
      <div id="track" className={styles['carousel-track']} >
        {children}
      </div>
    </div>
  )
}

export default Carousel;