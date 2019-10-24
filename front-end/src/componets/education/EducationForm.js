import React, { useState, useEffect } from 'react';
import countrycodeService from '../../services/countrycodes';
import educationService from '../../services/education';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SelectCountry handleChange={handleChange} />
        <Form.Group controlId='Salaryinput'>
          <Form.Label>Your education years</Form.Label>
          <Form.Control onChange={handleEduChange} type='text' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EducationForm;
