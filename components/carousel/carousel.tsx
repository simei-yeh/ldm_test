import React, { useEffect, useRef, useState } from 'react';
import Button from '../button/button';
import Form from '../form/form';
import Step from '../step/step';
import Input from '../input/input';
import Options from '../input/options';
import Select from '../input/select';
import Textarea from '../input/textarea';
import styles from './carousel.module.css';

interface Submission {
  "Date": string,
  "Description": string,
  "File Upload": string,
  "Fund Name": string,
  "Management Fees": string,
  "New Investors": string,
  "Yearly Returns": string
}

interface Props {
  submission: (values: Submission) => void,
}

const Carousel: React.FunctionComponent<Props> = ({ submission }) => {
  const [containerRef, formRef] = [useRef(null), useRef(null)];
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    "Fund Name": '', "Date": '', "Description": '', "Management Fees": '',
    "New Investors": '', "Fund Type": {}, "Yearly Returns": '', "File Upload": ''
  });
  const [showForwardButton, setShowForwardButton] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);
  const [submitButton, setShowSubmitButton] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "Fund Type") {
      setValues({ ...values, [name]: value });
    } else {
      if (values[name][value]) {
        delete values[name][value];
      } else {
        values[name][value] = true;
      }
    }
    localStorage.setItem('coolFundInformation', JSON.stringify(values));
  }

  const validateText = (e) => {
    const { value } = e.target;
    var letterNumber = /^[0-9a-zA-Z]+$/;
    if (!value.match(letterNumber)) {
      alert('Please enter only alphanumeric characters in Fund Name');
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const fields = Object.keys(values)
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      if (values[field] === '') {
        alert(`Please enter information for ${field} before continuing`);
        return;
      }
    }
    localStorage.setItem(values["Fund Name"], imageFile);
    localStorage.removeItem('coolFundInformation');
    localStorage.removeItem("coolFundTemp");
    submission(values);
  }

  const encodeImageFileAsURL = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      if (!files[0].name.match(/.(jpg|jpeg|png|gif)$/i)) {
        alert('not an image');
        return;
      }
      var reader = new FileReader();
      reader.onloadend = function () {
        const image = reader.result.toString();
        setImageFile(image);
        try {
          localStorage.setItem("coolFundTemp", image);
        }
        catch (e) {
          console.log("Storage failed: " + e);
        }
      }
      reader.readAsDataURL(files[0]);
    }
  }

  useEffect(() => {
    const previous = JSON.parse(localStorage.getItem('coolFundInformation'));
    if (previous) {
      setValues(previous);
      const oldImage = localStorage.getItem('coolFundTemp');
      setImageFile(oldImage);
    }
  }, []);

  useEffect(() => {
    let lastPage = formRef.current.scrollWidth/containerRef.current.clientWidth - 1;
    if (step === 0) { setShowBackButton(false); }
    else if (step === (lastPage)) {
      setShowForwardButton(false);
      setShowSubmitButton(true);
    }
    else if (!showForwardButton) { setShowForwardButton(true); }
    else if (!showBackButton) { setShowBackButton(true); }
    if (step !== (lastPage)) { setShowSubmitButton(false); }
    formRef.current.style.transform = `translateX(-${step * 100}%)`;
  }, [step])

  return (
    <div className={styles['carousel-container']} ref={containerRef}>
      <div>
        <Button
          show={showForwardButton}
          id="forward"
          text="Continue"
          callback={() => { setStep(step + containerRef.current.clientWidth/containerRef.current.clientWidth) }}
        />
        <Button
          show={showBackButton}
          id="backward"
          text="Go Back"
          callback={() => { setStep(step - containerRef.current.clientWidth/containerRef.current.clientWidth) }}
        />
        <Button type="submit" callback={handleSubmit} text="Submit Information" show={submitButton} id="submit" />
      </div>
      <div id="track" className={styles['carousel-track']} >
        <Form ref={formRef} >
          <Step message="Enter fund name and date" >
            <Input type="text" name="Fund Name" callback={(e) => { validateText(e), handleInputChange(e) }} value={values["Fund Name"]} />
            <Input type="date" name="Date" callback={handleInputChange} value={values["Date"]} />
          </Step>
          <Step message="Enter ad description and management fees" >
            <Textarea callback={handleInputChange} name="Description" value={values["Description"]} />
            <Select type="select" name="Management Fees"
              callback={handleInputChange} selected={values["Management Fees"]} >
              {["", "10%", "15%", "20%"].map((fee, i) => <Options key={i} value={fee} />)}
            </Select>
          </Step>
          <Step message="Choose fund types" >
            <span>{`Open to New Investors?`}</span>
            {['Open', 'Closed'].map((option, i) => <Input type="radio" key={i} value={option}
              name="New Investors" label={option} callback={handleInputChange} />)}
            <span>{`Fund type`}</span>
            {['Hedge Fund', 'Venture Capital', 'Private Equity'].map((option, i) =>
              <Input type="checkbox" key={i} value={option} label={option} name="Fund Type"
                callback={handleInputChange} />)}
          </Step>
          <Step message="Confirm yearly returns and submit">
            <Input type="range" min="0" max="100" name="Yearly Returns" callback={handleInputChange} value={values["Yearly Returns"]} />
            <Input type="file" callback={(e) => {encodeImageFileAsURL(e), handleInputChange(e)}} name="File Upload" />
            <img src={imageFile}></img>
          </Step>
        </Form>
      </div>
    </div>
  )
}

export default Carousel;