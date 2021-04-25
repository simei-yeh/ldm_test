import Head from 'next/head'
import Modals from '../components/modal/modals'
import React, { useEffect, useRef, useState } from 'react';

export async function getStaticProps() {
  const inputs = require('../inputList.json')

  return { props: { inputs } }
}


export default function Home({ inputs }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div onClick={() => setShowModal(true)}>Enter a new fund</div>
        <Modals
          onClose={() => setShowModal(false)}
          show={showModal}
          inputs={inputs}
        >
        </Modals>
    </div>
  )
}
