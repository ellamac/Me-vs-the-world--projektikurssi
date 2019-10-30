import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import educationService from '../../services/education';
import SelectCountry from '../SelectCountry';

const EducationForm = ({ setEduYears, setCountryEduYears }) => {
  const [countrycode, setCoutrycode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    educationService.getEducationLength(countrycode).then(data => {
      setCountryEduYears(data);
    });
  };

  const handleChange = e => setCoutrycode(e.value);
  const handleEduChange = e => setEduYears(e.target.value);

  const buttonStyle = {
    display: 'inline-block',
    color: 'white',
    background: 'rgba(255, 255, 255, 0)',
    border: '2px solid #fff',
    fontWeight: 'bold',
    borderRadius: '0px',
    textAlign: 'center',
    outline: 'none',
    textDecoration: 'none',
    margin: '4px'
  };

  return (
    <>
      <style>
        {`
      label {
        color: #fefefe;
      }
     `}
      </style>
      <Form onSubmit={handleSubmit}>
        <SelectCountry handleChange={handleChange} />
        <Form.Group controlId="Salaryinput">
          <Form.Label>Your education years</Form.Label>
          <Form.Control onChange={handleEduChange} type="text" />
        </Form.Group>
        <Button style={buttonStyle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EducationForm;
