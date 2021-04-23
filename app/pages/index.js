import Head from 'next/head'
import Modals from '../components/modal/modals.js'
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <div onClick={() => setShowModal(true)}>Enter a new fund</div>
        <Modals
          onClose={() => setShowModal(false)}
          show={showModal}
        >
        </Modals>
    </div>
  )
}
