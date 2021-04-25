import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './modals.module.css';
import Carousel from '../carousel/carousel';
import Button from '../button/button';

interface Props {
  show: boolean,
  onClose: () => void,
  submission: (values:any) => void,
}

const Modals: React.FunctionComponent<Props> = ({ show, onClose, submission }) => {
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
            {`Create an ad for an investment fund`}
          </span>
          <Button
            show={true}
            callback={handleCloseClick}
            text="Close"
            id="close"
          />
        </div>
        <div className={styles['modal-body']}>
          <Carousel
            submission={submission}
          />
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