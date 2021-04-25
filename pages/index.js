import Head from 'next/head'
import Button from '../components/button/button'
import Modals from '../components/modal/modals'
import React, { useEffect, useRef, useState } from 'react';

export async function getStaticProps() {
  const inputs = require('../inputList.json')

  return { props: { inputs } }
}


export default function Home({ inputs }) {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState([]);

  const isSubmitted = (values) => {
    event.preventDefault();
    console.log(values)
    setSubmittedValues([...submittedValues, values]);
    setSubmitted(true);
    setShowModal(false);
    console.log(submittedValues, submitted);
  }

  return (
    <div>
        <Button callback={() => setShowModal(true)} text="Enter a new fund" show={true} id="entry" />
        <Modals
          onClose={() => setShowModal(false)}
          show={showModal}
          submission={isSubmitted}
          inputs={inputs}
        >
        </Modals>
    </div>
  )
}
