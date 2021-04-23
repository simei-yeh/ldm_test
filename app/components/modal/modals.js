import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import modalStyles from './modals.module.css';

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
  <>
  </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-container')
    );
  } else {
    return null;
  }
};


export default Modal;