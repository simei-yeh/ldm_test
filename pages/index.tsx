import Head from 'next/head'
import Button from '../components/button/button.tsx';
import Modals from '../components/modal/modals.tsx';
import Ads from '../components/ads/ads.tsx';
import React, { useState } from 'react';

export default function Home({}) {
  const [showModal, setShowModal] = useState(false);
  const [submittedValues, setSubmittedValues] = useState([]);

  const isSubmitted = (values) => {
    setSubmittedValues([...submittedValues, values]);
    setShowModal(false);
  };

  return (
    <div>
        <Button callback={() => setShowModal(true)} text="Enter a new fund" show={true} id="entry" />
        <Modals
          onClose={() => setShowModal(false)}
          show={showModal}
          submission={isSubmitted}
        >
        </Modals>
        <Ads createdAds={submittedValues} />
    </div>
  )
}

