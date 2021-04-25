import React from 'react';
import styles from './ads.module.css';

const Ads = ({ createdAds }) => {
  const keys = createdAds.length >= 1 ? Object.keys(createdAds[0]) : [];
  return (
    <div className={styles["ad-container"]}>
      {createdAds.map((ad, i) =>
        <div key={i} className={styles["ad"]}>
          {keys.map((k, i) => <span className={styles["ad-content"]}>
            {`${k}: `}{ad[k]}</span>)}
        </div>)}
    </div>
    )
};

export default Ads;
