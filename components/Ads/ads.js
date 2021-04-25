import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './ads.module.css';

const Ads = ({ createdAds }) => {
  return (
    <div className={styles["ad-container"]}>
      {createdAds.map((ad, i) => <div>{ad["Fund Name"]}</div>)}
    </div>
  )
};

export default Ads;