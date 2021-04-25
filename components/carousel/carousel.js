import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import Form from '../form/form.tsx';
import Step from '../step/step.tsx';
import Input from '../input/input'
import Options from '../input/options'
import Select from '../input/select'
import Textarea from '../input/textarea'
import styles from './carousel.module.css';

const Carousel = ({ inputs }) => {
  const pages = 4;
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({name: '', date: '', description: '', mgmtfees: '', newInvestors: '',
    fundType: '', returns: '', confirmation: ''});
  const [showForwardButton, setShowForwardButton] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);
  const handleInputChange = e => {
    const { name, value } = e.target
    console.log('this is working', name, value)
    setValues({ ...values, [name]: value })
    console.log(values)
  }

  useEffect(() => {
    if (step === 1) setShowBackButton(false);
    else if (step === pages) setShowForwardButton(false);
    else if (!showForwardButton) setShowForwardButton(true);
    else if (!showBackButton) setShowBackButton(true);
  }, [step])

  return (
    <div className={styles['carousel-container']}>
      <div>
        <Button
          show={showForwardButton}
          id="forward"
          text="Continue"
          callback={() => { setStep(step + 1) }}
        />
        <Button
          show={showBackButton}
          id="backward"
          text="Go Back"
          callback={() => { setStep(step - 1) }}
        />
      </div>

      <div id="track" className={styles['carousel-track']} >
        <Form>
          <Step message="Enter fund name and date">
            <Input type="text" label="Fund Name" name="name" callback={handleInputChange} />
            <Input type="date" label="Date" name="date" callback={handleInputChange} />
          </Step>
          <Step message="Enter ad description and management fees">
            <Textarea callback={handleInputChange} name="description" />
            <Select type="select" label="Management Fees" name="mgmtfees"
              callback={handleInputChange}>
              {["", "10%", "15%", "20%"].map((fee, i) => <Options key={i} value={fee} />)}
            </Select>
          </Step>
          <Step message="Choose fund types">
            <span>{`Open to New Investors?`}</span>
            {['Open', 'Closed'].map((option, i) => <Input type="radio" key={i} value={option}
              name="newInvestors" callback={handleInputChange} />)}
            <span>{`Fund type`}</span>
            {['Hedge Fund', 'Venture Capital', 'Private Equity'].map((option, i) =>
              <Input type="checkbox" key={i} value={option} name="fundType"
              callback={handleInputChange} />)}
          </Step>
          <Step message="Confirm yearly returns and submit">
            <Input type="range" min="0%" max="100%" step="5%" label="Yearly Returns"
              name="returns" callback={handleInputChange} />
            <Input type="image" src="/submit.png" />
          </Step>
        </Form>
      </div>
    </div>
  )
}

export default Carousel;