import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modals.module.css';

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
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        <div className={styles['modal-body']}>{children}</div>
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