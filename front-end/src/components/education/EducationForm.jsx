import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import educationService from '../../services/education';
import SelectCountry from '../SelectCountry';

const EducationForm = ({ setEduYears, setCountryEduYears }) => {
  const [countrycode, setCoutrycode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    educationService.getEducationLength(countrycode).then(data => {
      setCountryEduYears(data);
    });
    setEduYears(e.target[1].value);
  };
  const handleChange = e => setCoutrycode(e.value);

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
      <Form style={{ color: '#fefefe' }} onSubmit={handleSubmit}>
        <SelectCountry handleChange={handleChange} />
        <Form.Group controlId="Salaryinput">
          <Form.Label>Your education years</Form.Label>
          <Form.Control type="number" max="100" min="0" />
        </Form.Group>
        <Button style={buttonStyle} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

EducationForm.propTypes = {
  setEduYears: PropTypes.func.isRequired,
  setCountryEduYears: PropTypes.func.isRequired
};

export default EducationForm;
