import React, { useState, useEffect } from 'react';
import countrycodeService from '../../services/countrycodes';
import educationService from '../../services/education';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

const EducationForm = ({ setEduYears, setCountryEduYears }) => {
  const [countrycodes, setCoutrycodes] = useState([]);
  const [countrycode, setCoutrycode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    educationService.getEducationLength(countrycode).then(data => {
      setCountryEduYears(data);
    });
  };

  useEffect(() => {
    countrycodeService.getCountrycodes().then(data => {
      setCoutrycodes(data);
    });
  }, []);

  const handleChange = e => setCoutrycode(e.value);
  const handleEduChange = e => setEduYears(e.target.value);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='Countryinput'>
          <Form.Label>Your country</Form.Label>
          <Select onChange={handleChange} options={countrycodes} />
        </Form.Group>
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
