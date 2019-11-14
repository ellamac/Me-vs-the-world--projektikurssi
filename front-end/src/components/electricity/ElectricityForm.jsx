import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import SelectCountry from '../SelectCountry';
import electricityService from '../../services/electricity';

const ElectricityForm = ({ setUserElectricity, setElectricityData }) => {
  const [countrycode, setCoutrycode] = useState('');

  // Handles form submit
  const handleSubmit = e => {
    e.preventDefault();
    const parsedInput = Number.parseInt(e.target[1].value, 10);
    setUserElectricity(parsedInput);
    electricityService.getCountrysElectricity(countrycode).then(data => {
      setElectricityData(data);
    });
  };

  // Handles countrycode for select-search
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
      <style>
        {`
      label {
        color: #fefefe;
      }
     `}
      </style>
      <Form onSubmit={handleSubmit}>
        <SelectCountry handleChange={handleChange} />
        <Form.Group controlId='ElectricityInput'>
          <Form.Label>Your electricity consumption in kwh</Form.Label>
          <Form.Control type='number' placeholder='kwh' />
        </Form.Group>
        <Button style={buttonStyle} variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

ElectricityForm.propTypes = {
  setUserElectricity: PropTypes.func.isRequired,
  setElectricityData: PropTypes.func.isRequired
};

export default ElectricityForm;
