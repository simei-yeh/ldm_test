import Head from 'next/head'
import Modal from '../components/modal/modals.js'
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          Hello from the modal!
        </Modal>
    </div>
  )
}
