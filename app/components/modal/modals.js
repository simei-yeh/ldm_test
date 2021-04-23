import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modals.module.css';
import Carousel from '../carousel/carousel.js';
import Button from '../button/button.js';

const Modals = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const Modal = show ? (
    <div className={styles['modal']}>
      <div className={styles['modal-container']}>
        <div className={styles['modal-header']}>
          <span className={styles['modal-title']}>
            {`Create an ad for an LDM fund`}
          </span>
          <Button className={styles['close-button']} onClick={handleCloseClick}>
            {'Close'}
          </Button>
        </div>
        <div className={styles['modal-body']}>
          <Carousel />
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      Modal,
      document.getElementById('modal-overlay')
    );
  } else {
    return null;
  }
};

export default Modals;