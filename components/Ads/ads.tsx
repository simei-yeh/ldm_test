import React from 'react';
import styles from './ads.module.css';

interface Ad {
  "Date": string,
  "Description": string,
  "File Upload": string,
  "Fund Name": string,
  "Management Fees": string,
  "New Investors": string,
  "Yearly Returns": string
}

interface Props {
  createdAds: Ad[]
}

const Ads: React.FunctionComponent<Props> = ({ createdAds }) => {
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
